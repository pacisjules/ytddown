import React from 'react'
import styles from "@/styles/mystyle/App.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

function Menus() {
  const router = useRouter();
  return (
    <div className={styles.Menus}>
      <div className={styles.logo}><h1>DownIn</h1></div>
      <div className={styles.list}>
        <ul>
          <li>
            <Link href={"/"} className={router.pathname === '/' ? styles.active : styles.nonActive}>
              Home
            </Link>
          </li>

          <li>
            <Link href={"About"} className={router.pathname === '/About' ? styles.active : styles.nonActive}>
              Social
            </Link>
          </li>

          <li>
            <Link href={"About"} className={router.pathname === '/About' ? styles.active : styles.nonActive}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/Help"} className={router.pathname === '/Help' ? styles.active : styles.nonActive}>
              Help
            </Link>
          </li>
          <li>
            <Link href={"/Contactus"} className={router.pathname === '/Contactus' ? styles.active : styles.nonActive}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menus