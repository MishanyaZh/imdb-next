import Image from "next/image";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        height={200}
        width={200}
        src="spinner.svg"
        alt="loading..."
        priority={true}
      />
    </div>
  );
};

export default loading;
