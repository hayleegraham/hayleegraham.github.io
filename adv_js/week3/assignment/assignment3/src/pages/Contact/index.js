import React from "react";
import PageHeader from "../../components/PageHeader";
import styles from './Contact.module.scss'

function Contact() {
  return (
    <div className={styles.contentContainer}>
      <PageHeader title="Contact Page" label="Insert Contact Info Here"/>
    </div>
  );
}
export default Contact;
