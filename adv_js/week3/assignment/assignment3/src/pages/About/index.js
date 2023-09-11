import React from 'react'
import styles from './About.module.scss'
import PageHeader from '../../components/PageHeader'

function About() {
  return (
    <div className={styles.contentContainer}>
      <PageHeader title="About Page" label="Insert About Info Here"/>
    </div>
  )
}
export default About