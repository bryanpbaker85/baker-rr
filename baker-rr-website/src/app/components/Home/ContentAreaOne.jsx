import React from "react";
import styles from "./_ContentAreaOne.module.scss";

const HomeContentAreaOne = ({ photo, title, subtitle, text }) => {
  return (
    <section className={styles.contentAreaOne}>
      <div className="left">
        <img src={photo} alt="" />
      </div>
      <div className="right">
        <h2>{title}</h2>
        <h4 className="subhead">{subtitle}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default HomeContentAreaOne;
