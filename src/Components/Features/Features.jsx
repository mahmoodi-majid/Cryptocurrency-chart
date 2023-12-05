import React from "react";
import "./Features.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function Features() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitel">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2345</span>
          <span className="featureRate">
            -11.3
            <ArrowDownwardOutlinedIcon className="featureIcon negative " />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitel">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">$236</span>
          <span className="featureRate">
            -11.3
            <ArrowDownwardOutlinedIcon className="featureIcon negative " />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitel">Cost</span>
        <div className="featureContainer">
          <span className="featureMoney">$785</span>
          <span className="featureRate">
            15.3 <ArrowUpwardOutlinedIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
}
