export const vertexShader = `
  varying vec3 vPosition;
  uniform sampler2D uTexture;
  uniform float uTime;

  void main() {
    vec2 uv = position.xy;
    vec4 birdData = texture2D(uTexture, uv);

    vec3 position = birdData.xyz;
    vec3 velocity = birdData.xyz * uTime;

    position += velocity * 0.1; // Adjust for movement speed

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vPosition = position;
  }
`;

export const fragmentShader = `
  varying vec3 vPosition;

  void main() {
    gl_FragColor = vec4(vPosition, 1.0);
  }
`;
