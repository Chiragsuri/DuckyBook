import { useEffect } from "react";

const Loader = (setProgress) => {
  useEffect(() => {
    const updateProgress = () => {
      for (let i = 0; i <= 100; i += 100) {
        setTimeout(() => {
          setProgress(i);
        }, i * 0.1);
      }
    };

    updateProgress();
  }, []);
};

export default Loader;
