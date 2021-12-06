import AOS from "aos";
import { useEffect } from "react";

const AosAnimation = ({
  children,
  animation,
  duration,
  offset,
  easing,
  delay,
  once,
  mirror,
}) => {
  useEffect(() => {
    AOS.init({
      duration: duration || 1000,
      easing: easing || "ease",
      delay: delay || 0,
      offset: offset || 0,
      mirror: mirror || false,
      once: once || false,
    });
  }, []);

  return <div data-aos={animation}>{children}</div>;
};

export default AosAnimation;
