import { EmilyProps } from "@/types";

const Emily = ({ data }: { data: EmilyProps }) => {
  return (
    <div className="right-side">
      <h2>{data.name}</h2>
      <p className="para">
        <span>{data.role},</span> {data.age}, {data.location}, {data.education},{" "}
        {data.experience}, {data.focus}
      </p>
    </div>
  );
};

export default Emily;
