import { useEffect, useState } from "react";

const usePosition = (order: 1 | 2 | 3 | 4 | 5) => {
  const [position, setPosition] = useState("");
  useEffect(() => {
    switch (order) {
      case 1:
        setPosition("-top-8");
        break;
      case 2:
        setPosition("right-2 top-12 sm:-right-4 sm:top-16");
        break;
      case 3:
        setPosition("-bottom-8 right-10 sm:-bottom-4 sm:right-0");
        break;
      case 4:
        setPosition("-bottom-8 left-10 sm:-bottom-4 sm:left-0");
        break;
      case 5:
        setPosition("left-2 top-12 sm:-left-4 sm:top-16");
        break;
    }
  }, [order]);
  return position;
};

export default usePosition;
