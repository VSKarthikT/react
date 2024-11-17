import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  // Check if the user is online
  const [useOnlinestatus, setuseOnlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setuseOnlinestatus(false);
    });
    window.addEventListener("online", () => {
      setuseOnlinestatus(true);
    });
  }, []);
  return useOnlinestatus;
};

export default useOnlinestatus;
