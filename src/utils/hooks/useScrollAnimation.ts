import { useSpring } from '@react-spring/web';

export const useScrollAnimation = (delay = 0) => {
  return useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay,
    config: { tension: 280, friction: 20 }
  });
};