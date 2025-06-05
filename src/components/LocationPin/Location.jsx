import { FaLocationPin } from "react-icons/fa6";
import styles from "./location.module.css";
const Location = ({ id }) => {
  return (
    <div className={styles.locationPin}>
      <FaLocationPin color="#C64DFF" size={25} />
      <small className={styles.text}>{id}</small>
    </div>
  );
};

export default Location;
