import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// --- SHADERS MEJORADOS CON INTERACCIÓN LOCAL ---
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Esto asegura que el plano cubra siempre toda la pantalla
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uIntensity;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  varying vec2 vUv;

  // Función de ruido simple para texturas orgánicas
  float random (in vec2 _st) {
    return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  // Ruido "Value Noise" para suavidad
  float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 p = vUv * 2.0 - 1.0; // Coordenadas -1 a 1
    
    // --- LÓGICA DE INTERACCIÓN ---
    // Calculamos la distancia del pixel actual al mouse
    float mouseDist = distance(vUv, uMouse);
    
    // Creamos un radio de influencia (el líquido reacciona cerca del mouse)
    float interaction = 1.0 - smoothstep(0.0, 0.35, mouseDist);
    
    // La distorsión es más fuerte donde está el mouse
    vec2 distortion = vec2(
      sin(p.y * 4.0 + uTime) * 0.1,
      cos(p.x * 4.0 + uTime) * 0.1
    );
    
    // Sumamos la interacción del mouse a la distorsión base
    distortion += (p - uMouse * 2.0 + 1.0) * interaction * 0.5;

    // --- ALGORITMO LÍQUIDO (Domain Warping) ---
    float t = uTime * 0.2;
    vec2 q = vec2(0.0);
    q.x = noise(p + 0.0 + t);
    q.y = noise(p + 1.0 + t);

    vec2 r = vec2(0.0);
    r.x = noise(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime + distortion.x);
    r.y = noise(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime + distortion.y);

    float f = noise(p + r);

    // --- MEZCLA DE COLORES ---
    // Usamos el valor de ruido 'f' para mezclar los 3 colores
    vec3 col = mix(uColor1, uColor2, clamp(f*f*4.0, 0.0, 1.0));
    col = mix(col, uColor3, clamp(length(q), 0.0, 1.0));
    
    // Un toque extra de brillo donde está el mouse
    col += vec3(0.1) * interaction;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const FluidPlane = ({ colors }) => {
  const mesh = useRef();
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) }, // Centro por defecto
      uColor1: { value: new THREE.Color(colors[0]) },
      uColor2: { value: new THREE.Color(colors[1]) },
      uColor3: { value: new THREE.Color(colors[2]) },
    }),
    [colors]
  );

  useFrame((state) => {
    if (mesh.current) {
      // 1. Tiempo fluido
      mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // 2. Mouse suave (Lerp)
      // Convertimos el puntero de (-1 a 1) a (0 a 1) para el shader
      const targetX = state.pointer.x * 0.5 + 0.5;
      const targetY = state.pointer.y * 0.5 + 0.5;
      
      const currentMouse = mesh.current.material.uniforms.uMouse.value;
      
      // Interpolación para que el movimiento no sea brusco (efecto gelatina)
      currentMouse.x += (targetX - currentMouse.x) * 0.08;
      currentMouse.y += (targetY - currentMouse.y) * 0.08;
    }
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default function LiquidEther({ colors = ['#0047FF', '#009afa', '#020024'] }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        dpr={[1, 2]} // Calidad nítida
        gl={{ alpha: false, antialias: false, powerPreference: "high-performance" }}
      >
        <FluidPlane colors={colors} />
      </Canvas>
    </div>
  );
}