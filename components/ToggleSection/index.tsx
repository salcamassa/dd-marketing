import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./toggle-section.module.scss";

const ToggleSection = ({
  title,
  content,
  showSubtitle,
}: {
  title: string;
  content: string[];
  showSubtitle?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-bottom p-2 py-3">
      <div
        className={`d-flex justify-content-between ${styles.titleSection}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.angleIcon}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      <div
        className={`${styles.contentContainer} ${isOpen ? "" : styles.hidden}`}
      >
        {showSubtitle ? (
          ''
        ) : (
          <ul>
            {content.map((c) => (
              <li>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToggleSection;
