import { useState, useEffect } from "react";

const useOnlinestatus = () => {
  const [onlinestatus, setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setstatus(true);
    });
    window.addEventListener("offline", () => {
      setstatus(false);
    });
  }, []);

  return onlinestatus;
};
export default useOnlinestatus;
