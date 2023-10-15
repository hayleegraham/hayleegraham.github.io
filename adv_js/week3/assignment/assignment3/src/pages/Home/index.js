import React from 'react'
import styles from './Home.module.scss'
import PageHeader from '../../components/PageHeader'

function Home() {
  return (
    <div className={styles.contentContainer}>
      <PageHeader title="Home Page" label="Insert Home Page Here"/>
    </div>
  )
}
export default Home