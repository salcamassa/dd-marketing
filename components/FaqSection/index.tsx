import Link from "next/link";
import ToggleSection from "../ToggleSection";
import styles from "./Faq.module.scss";
const faqData = [
  {
    title: "What is a 'debt duction'?",
    content: [
      "Debtduction is a revolutionary new platform that helps users reduce debt through various reward methods."
    ],
  },
  {
    title: "How much does it cost to use?",
    content: [
      "Debtduction is a revolutionary new platform that helps users reduce debt through various reward methods."
    ],
  },
  {
    title: "Who is behind this project, and why?",
    content: [
      "Debtduction is a revolutionary new platform that helps users reduce debt through various reward methods."
    ],
  },
];

const FaqSection = () => {
  return (
    <>
      <div className={` container py-5`}>
        <div className={styles.sectionContainer}>
          <div className={`border-bottom text-center p-3`}>
            <div className={styles.infoText}>
              Don’t see your question listed? <br />
              Reach out to us: <a className="link-primary">support@debduciton.com</a>
            </div>
          </div>
          {faqData.map((data, index) => (
            <ToggleSection
              key={index}
              title={data.title}
              content={data.content}
              showSubtitle={index === 2}
            />
          ))}
        </div>

      </div>
    </>
  );
}
export default FaqSection;