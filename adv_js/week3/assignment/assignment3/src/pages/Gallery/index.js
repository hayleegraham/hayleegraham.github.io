import React from "react";
import styles from './Gallery.module.scss'
import PageHeader from "../../components/PageHeader";

function Gallery() {
  return (
    <div className={styles.contentContainer}>
      <PageHeader title="Gallery Page" label="Insert Gallery Here"/>
    </div>
  );
}
export default Gallery;
