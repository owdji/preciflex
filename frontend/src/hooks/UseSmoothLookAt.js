import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const useSmoothLookAt = (modelRef, look) => {
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame(({ pointer, viewport }) => {
    if (!look) return;
    const x = (pointer.x * viewport.width) / 2.5;
    const y = (pointer.y * viewport.height) / 2.5;

    // Update smoothed target position gradually
    targetX.current += (x - targetX.current * 5) * 0.01;
    targetY.current += (y - targetY.current * 5) * 0.01;

    // Update lookAt based on smoothed target position
    if (modelRef.current) {
      modelRef.current.lookAt(targetX.current, targetY.current, 1);
    }


  });
};

export default useSmoothLookAt;
