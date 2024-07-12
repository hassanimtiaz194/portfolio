"use client";
import Link from "next/link";
import classes from "../../../styles/styles.module.css";
import { IoIosMail } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";

const NavigationHeader = () => {
  return (
    <header className={classes.mainNavContainer}>
      <div className={classes.logoContainer}>
        <div className={classes.logoSymbol}>{`< >`}</div>
        <div>|</div>
        <div>HASSAN IMTIAZ</div>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.contactContainer}>
        <div className={classes.contactIcons}>
          <a href="mailto:hassan.imtiaz194@gmail.com" target="_blank">
            <IoIosMail color="#fff" size={25}/>
          </a>
        </div>
        <div className={classes.contactIcons}>
          <a
            href="https://github.com/your-username/your-repository"
            target="_blank"
          >
            <VscGithub color="#fff" size={25}/>
          </a>
        </div>
      </div>
    </header>
  );
};
export default NavigationHeader;
