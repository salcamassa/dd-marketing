import Image from "next/image";
import ddiPhone from "../../public/dd-iphone.png";


const HeroSection = () => {
  return (
    <>
      <div className={` container mt-5`}>
        <div className={` row align-items-center`}>

          <div className={` col-md-6 `}>
            <h1 className="py-3" style={{ maxWidth: "500px" }}>Shave down student debt with every purchase</h1>
            <div className="pb-5 fs-5 color-gray-3">
              Experience the freedom of effortless debt reduction. Round-up, Cash Back and Partner Rewards will eliminate debt like never before.
            </div>
            <div>
              <button className="btn btn-outline-light">Learn More</button>
              <button className="btn btn-success mx-3">Start Saving</button>
            </div>

          </div>
          <div className="col-md-6 px-0 text-center" style={{ height: "537px" }}>
            <div>
              <Image src={ddiPhone} alt="ddIphone" height={663} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeroSection;