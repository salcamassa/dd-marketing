import { AiFillBank } from "react-icons/ai";
import { FaFunnelDollar } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import styles from "./featureSquares.module.scss";


const FeatureSquares = () => {
  return (
    <>
      <div className="container-fluid dd-bg-gray-0 py-5">
        <div className="container text-center py-5">
          <h1 className={styles.sectionHeader}>Your Expedited Payment Plan</h1>
          <div className="row py-5">
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon}`}>
                <AiFillBank />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Link Your Accounts</div>
                <p>
                  After signing up, register all of your student loans, credit and debit cards. You may register any number of loans tied to your name. <br /> <br />
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon}`}>
                <GiWallet />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Make Purchases</div>
                <p>
                  Use your linked cards to make purchases online or in-person to start earning rewards right away. Eligible partner programs will also count towards your balance.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.cardIcon} ${styles.icon}`}>
                <FaFunnelDollar />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>Reduce Debt</div>
                <p>
                  Once you’ve accumulated enough cash back in your rewards account, a payment to your primary loan (a ‘Debtduction’) will automatically be sent to the provider on your behalf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeatureSquares;