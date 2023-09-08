import Image from "next/image";
import styles from "./styles.module.css";

function CardHorizontal() {
  return (
    <div className={`${styles.card}`}>
      <div className="">
        <Image src="/assets/event-carnival.svg" width={80} height={80} alt="" />
      </div>
      <div className="">
        <div>Brooks Davis Live</div>
        <div>
          <span></span>
          <span>Sat, 15 Sept, 2023</span>
        </div>
        <div>
          <span></span>
          <span>6:25pm-10.00pm</span>
        </div>
        <div>Price: $98</div>
      </div>
      <div className="">:</div>
    </div>
  )
}

export default CardHorizontal;