import React from "react";
import { Bars } from "react-loader-spinner";
import styles from "./index.module.scss";
function Loader() {
  return (
    <div className={styles.loader}>
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

