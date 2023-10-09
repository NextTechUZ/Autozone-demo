import React from "react";
import { Bars } from "react-loader-spinner";
import style from "./index.module.scss";
function Loader() {
  return (
    <div className={style.loader}>
      <Bars
        height="150"
        width="150"
        color="#A60E0D"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
