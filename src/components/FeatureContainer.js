// FeatureContainer
import React from "react";
import FeatureCard from "./FeatureCard";
import {
  FaMoneyCheckAlt,
  FaChartBar,
  FaClock,
  FaDownload,
  FaTrophy,
} from "react-icons/fa";

function FeatureContainer() {
  return (
    <div className="container my-5 p-10">
      <h2 className="text-center mb-4 ">Key Features</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaMoneyCheckAlt />}
            title="Expense Tracking"
            description="Effortlessly add, delete, and update your expenses in one place."
          />
        </div>
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaChartBar />}
            title="Financial Insights"
            description="Gain valuable insights into your spending patterns with detailed charts."
          />
        </div>
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaClock />}
            title="Time-Saving"
            description="Save time and efficiently manage your financial transactions."
          />
        </div>
      </div>

      <h2 className="text-center mb-4 ">Premium Membership Benefits</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaDownload />}
            title="Download Expenses"
            description="Premium members can download their expense data for offline access."
          />
        </div>
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaTrophy />}
            title="Leaderboard Access"
            description="Compete with others and track your financial achievements on the leaderboard."
          />
        </div>
        <div className="col-md-4 mb-4">
          <FeatureCard
            icon={<FaMoneyCheckAlt />}
            title="Exclusive Features"
            description="Unlock additional features and tools with our premium membership."
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureContainer;
