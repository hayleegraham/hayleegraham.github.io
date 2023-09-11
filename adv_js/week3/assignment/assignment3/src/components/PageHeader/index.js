import React from 'react'
import styles from './PageHeader.module.scss'

function PageHeader({title, label}) {
  return (
    <div className={styles.contentContainer}>
      <h1>{title}</h1>
      <p>{label}</p>
    </div>
  )
}
export default PageHeader