import React, { useEffect } from "react";

const CompoA = () => {
  const changeLog = (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", changeLog);
    return () => {
      window.removeEventListener("mousemove", changeLog);
    };
  }, []);

  return <div>CompoA</div>;
};

export default CompoA;
