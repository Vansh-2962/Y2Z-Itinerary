import { Menu } from "lucide-react";
import Card from "../Card/Card";
import styles from "./itenerary.module.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const Itenerary = ({ mockData }) => {
  return (
    <div>
      {/* Logo and Heading*/}
      <div className={styles.logoContainer}>
        <h3 className={styles.logo}>Y2Z TRAVEL</h3>
        <Menu className={styles.hamMenu} />
      </div>
      <div className={styles.heading}>
        <h4>Itinerary</h4>
        <h6>Day</h6>
      </div>

      <SortableContext items={mockData} strategy={verticalListSortingStrategy}>
        {mockData.map((data) => (
          <Card data={data} key={data?.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Itenerary;
