import React from "react";
import styles from "./SlideItem.module.css";

export interface SlideItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const SlideItem: React.FC<SlideItemProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.slideItem}>
      <div
        className={styles.imageBox}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
