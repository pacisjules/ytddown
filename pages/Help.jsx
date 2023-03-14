import React from 'react'
import styles from "@/styles/mystyle/App.module.css";
import Bottomfooter from '@/app/components/Bottomfooter';
function Help() {
  return (
    <div className={styles.mainContent}>
      
      <div className={styles.container}>
        Help
        <Bottomfooter/>
      </div>
    </div>
  )
}

export default Help