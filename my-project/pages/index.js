import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../tools/navbar";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen overflow-x-hidden bg-slate-50">
        <Navbar />
        <footer className={styles.footer}>
          <a
            href="https://github.com/santiellis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Santiago Ellis
            <span className={styles.logo}></span>
          </a>
        </footer>
      </div>
    </>
  );
}