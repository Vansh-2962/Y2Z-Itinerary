import {
  EllipsisVertical,
  Menu,
  Paperclip,
  Pencil,
  Plus,
  Star,
  Trash2,
} from "lucide-react";
import styles from "./card.module.css";
import locationIcon from "../../../public/location.png";
import msWordIcon from "../../../public/microsoft-word.png";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Location from "../LocationPin/Location";

const Card = ({ data }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: data?.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={styles.container}
    >
      <section className={styles.cardContainer}>
        {/* Menu */}
        <span className={styles.menu}>
          <Menu size={15} />
        </span>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Image */}
          <div className={styles.imageWrapper}>
            <img
              src={data.img}
              alt={data.title}
              height={"112px"}
              width={"112px"}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.locationPin}>
              <Location id={data.id} />
            </div>
          </div>

          {/* Content */}
          <div className={styles.textContent}>
            {/* Title and Icons */}
            <div className={styles.titleAndIcons}>
              <h6 className={styles.title}>{data.title}</h6>
              <div className={styles.icons}>
                <img src={locationIcon} alt="location" width={"13.5px"} />
                <Paperclip size={"13.5px"} className={styles.paperClipIcon} />
                <Trash2
                  size={"13.5px"}
                  color="#EA0606"
                  className={styles.trashIcon}
                />
                <EllipsisVertical
                  size={"13.5px"}
                  className={styles.ellipsisVeticalIcon}
                />
              </div>
            </div>

            {/* Ratings */}
            <div className={styles.ratingsContainer}>
              <small>{data.rating}</small>
              <Star size={"12.71px"} color="#ffcb45" fill="#ffcb45" />
              <small>({data.views})</small>
            </div>

            {/* Description */}
            <div className={styles.descContainer}>
              <small>{data.description}</small>
              <div>
                <Pencil size={"13px"} />
              </div>
              <div className={styles.locationPin}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile view of the description */}
      {
        <div className={styles.utilities}>
          <div
            className={`${styles.descContainer}  ${styles.mobileViewDescContainer}`}
          >
            <small>{data.description.slice(0, 60)}...</small>
            <div>
              <Pencil size={"13px"} />
            </div>
          </div>
        </div>
      }

      {data.id === 2 && (
        <div className={styles.utilities}>
          <div className={styles.docContainer}>
            <img src={msWordIcon} alt="ms-word" width={"18.5px"} />
            <small>Credt...</small>
            <EllipsisVertical size={13.5} />
          </div>
          <div className={`${styles.docContainer} ${styles.container2}`}>
            <Plus size={13.5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
