import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import ddiPhone from "../../public/dd-iphone.png";
import { FaMoneyBillTransfer, FaMoneyBillTrendUp } from "react-icons/fa6";


const RewardsFeatures = () => {
  return (
    <> <div className={` container py-5`}>
      <div className={` row align-items-center justify-items-center gx-5`}>
        <div className={` col-md-6 text-end `}>
          <h1 className="py-3 me-5">Show your debt <br /> who's boss</h1>
        </div>
        <div className="col-md-6 text-left">
          <div className="fs-5 color-gray-3">
            Our platform will help reduce debt faster with 3 different reward methods. Interact with each section to learn more.
          </div>
        </div>
      </div>
      <div className={` row align-items-center mt-5 gx-5`}>

        <div className="col-md-6 text-center">
          <div style={{ transform: "rotate(-15deg)" }}>
            <Image src={ddiPhone} alt="ddIphone" height={663} />
          </div>
        </div>

        <div className="col-md-6 px-0 text-left">
          <div className="border border-info p-5">
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}><RiDashboard2Line /></div>
              <div className="fs-2 fw-bold ms-3">Debt Dashboard</div>
            </div>
            <div className="fs-5 color-gray-3">
              Our platform will help reduce debt faster with 3 different reward methods. Interact with each section to learn more.
            </div>
          </div>
          <div className="border border-info p-5">
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}><FaMoneyBillTransfer />
              </div>
              <div className="fs-2 fw-bold ms-3">Cash Back</div>
            </div>
          </div>
          <div className="border border-info p-5">
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}><FaMoneyBillTrendUp /></div>
              <div className="fs-2 fw-bold ms-3">Round-Up Rewards</div>
            </div>
          </div>
          <div className="border border-info p-5">
            <div className="d-flex align-items-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}><FaAward />
              </div>
              <div className="fs-2 fw-bold ms-3">Partner Rewards</div>
            </div>
          </div>
        </div>
      </div>
      <div className={` row text-center gx-5 mt-5`}>
        <div className={` col-12  `}>
          <button className="btn btn-secondary">Start Earning Rewards</button>
        </div>
      </div>
    </div>
    </>
  );
}
export default RewardsFeatures;