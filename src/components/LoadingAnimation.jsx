import React from "react";
import Image from "next/image";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center fixed top-0 left-0 bg-black z-50 w-full h-full">
      <Image
        className="animate-pulse"
        src="/logo.svg"
        width={150}
        height={150}
        alt="Loading logo"
      ></Image>
    </div>
  );
};

export default LoadingAnimation;
