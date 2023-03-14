import React from 'react'
import styles from "@/styles/mystyle/App.module.css";
import Bottomfooter from '@/app/components/Bottomfooter';

function About() {
  return (
    <div className={styles.mainContent}>
      
      <div className={styles.container}>
        About
        <Bottomfooter/>
      </div>
    </div>
  )
}

export default About