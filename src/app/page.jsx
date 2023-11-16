import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from "../components/button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality.
          Webring together the team from the globl tech industy.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="" className={styles.img}/>
    </div>
  )
}
