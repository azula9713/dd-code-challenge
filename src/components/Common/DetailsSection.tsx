import { FC } from "react";

interface Props {
  title: string;
  value: string;
}

const DetailsSection: FC<Props> = ({ title, value }) => {
  return (
    <div className="w-full grid grid-cols-3 mb-2">
      <label className="font-bold col-span-1">{title}:</label>
      <p className="ml-4 col-span-2">{value || "-"}</p>
    </div>
  );
};

export default DetailsSection;
