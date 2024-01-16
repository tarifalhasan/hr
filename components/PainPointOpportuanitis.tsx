import { FC } from "react";

interface PainPointOpportuanitisProps {
  data: string[];
  className?: string;
}

const PainPointOpportuanitis: FC<PainPointOpportuanitisProps> = ({
  data,
  className,
}) => {
  return (
    <ul className={` grow border-[1.8px] border-black  list-disc	 p-5`}>
      {data.map((v) => (
        <li key={v}>
          <p>{v}</p>
        </li>
      ))}
    </ul>
  );
};

export default PainPointOpportuanitis;
