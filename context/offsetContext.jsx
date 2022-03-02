import { createContext, useState, useEffect } from "react";

const OffsetContext = createContext();
export default OffsetContext;

export function OffsetWrapper({ children }) {
  const [yoffset, setYoffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setYoffset(window.pageYOffset);
    };
  }, [yoffset]);

  return (
    <OffsetContext.Provider value={{ yoffset: yoffset }}>
      {children}
    </OffsetContext.Provider>
  );
}
