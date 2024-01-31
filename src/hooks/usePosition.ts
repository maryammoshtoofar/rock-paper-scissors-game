import { useEffect, useState } from "react";

const usePosition = (order: 1 | 2 | 3 | 4 | 5) => {
  const [position, setPosition] = useState("");
  useEffect(() => {
    switch (order) {
      case 1:
        setPosition("-translate-y-1/4");
        break;
      case 2:
        setPosition("translate-x-full translate-y-1/2");
        break;
      case 3:
        setPosition(
          "translate-y-44 max-[308px]:translate-y-36  sm:translate-y-56 translate-x-3/4 "
        );
        break;
      case 4:
        setPosition(
          "translate-y-44 max-[308px]:translate-y-36 sm:translate-y-56 -translate-x-3/4"
        );
        break;
      case 5:
        setPosition("-translate-x-full translate-y-1/2");
        break;
    }
  }, [order]);
  return position;
};

export default usePosition;
