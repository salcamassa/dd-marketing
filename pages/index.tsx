import type { NextPage } from "next";
import Head from "next/head";
import FaqSection from "../components/FaqSection";
import FeatureSquares from "../components/FeatureSquares";
import HeroSection from "../components/HeroSection";
import RewardsFeatures from "../components/RewardsFeatures";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PayoffChart from "../components/PayoffChart";


const Home: NextPage = () => {


  return (
    <div>
      <Head>
        <title>Debtduction</title>
        <meta
          name="description"
          content="DebtDuction"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dd-gradient-bg">
        <Navbar />
        <HeroSection />
      </div>
      <FeatureSquares />
      <div className="dd-gradient-bg" id="features">
        <RewardsFeatures />
      </div>
      <div className="dd-gradient-bg2">
        <PayoffChart />
      </div>
      <div className="dd-gradient-bg">
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
