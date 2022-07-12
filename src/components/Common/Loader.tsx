import { FC } from "react";
import { Circles } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader: FC = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] flex items-center justify-center">
      <Circles height="100" width="100" color="#900000" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
