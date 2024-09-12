import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./PlusBtn.module.scss";

const cx = classNames.bind(styles);

export default function PlusBtn() {
  return (
    <button className={cx("container")}>
      <Image src={"/img/icon/plus.png"} alt="PLUS" width={24} height={24} />
    </button>
  );
}
