// FigmaToReact.tsx
import Image from "next/image";
import React from "react";

interface StepBoxProps {
  header: string;
  body: string;
  imgSrc: string;
  smallBox1: string;
  smallBox2: string;
}

const StepBox: React.FC<StepBoxProps> = ({
  header,
  body,
  imgSrc,
  smallBox1,
  smallBox2,
}) => {
  return (
    <div className=" grow">
      <div className="box">
        <div className={`box-header ${header}`}>
          <h1>{header}</h1>
        </div>
        <div className="box-body">
          <p>{body}</p>
          <div className="small-box ms-auto">
            <p>{smallBox1}</p>
          </div>
          <div className="img-holder">
            <Image width={100} height={100} src={imgSrc} alt="" />
          </div>
          <div className="small-box">
            <p>{smallBox2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepBox;
