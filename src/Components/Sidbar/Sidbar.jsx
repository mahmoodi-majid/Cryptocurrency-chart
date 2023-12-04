import React from "react";
import "./Sidbar.css";
import LinStyleIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Link } from "react-router-dom";

export default function Sidbar() {
  return (
    <div className="sidbar">
      <div className="sidbarWrapper">
        <div className="sidbarMenu">
          <h3 className="sidbarTitele">Dashborad</h3>
          <ul className="sidbarList">
            <Link to="/" className="link">
              <li className="sidbarListItem">
                <LinStyleIcon className="sidbarIcon" active />
                Home
              </li>
            </Link>
            <li className="sidbarListItem">
              <TimelineIcon className="sidbarIcon" />
              Analytics
            </li>
            <li className="sidbarListItem">
              <TrendingUpIcon className="sidbarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitele">Quick Menu</h3>
          <ul className="sidbarList">
            <Link to="/users" className="link">
              <li className="sidbarListItem">
                <PermIdentityIcon className="sidbarIcon" active />
                User
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidbarListItem">
                <StorefrontIcon className="sidbarIcon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidbarListItem">
                <AttachMoneyIcon className="sidbarIcon" />
                Products
              </li>
            </Link>
            <li className="sidbarListItem">
              <BarChartIcon className="sidbarIcon" />
              Transaction
            </li>
            <li className="sidbarListItem">
              <MailOutlineIcon className="sidbarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitele">Notification</h3>
          <ul className="sidbarList">
            <li className="sidbarListItem">
              <MailOutlineOutlinedIcon className="sidbarIcon" active />
              Mail
            </li>

            <li className="sidbarListItem">
              <DynamicFeedIcon className="sidbarIcon" />
              Feedback
            </li>
            <li className="sidbarListItem">
              <MessageOutlinedIcon className="sidbarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidbarMenu">
          <h3 className="sidbarTitele">Staff</h3>
          <ul className="sidbarList">
            <li className="sidbarListItem">
              <ManageAccountsOutlinedIcon className="sidbarIcon" active />
              Manage
            </li>

            <li className="sidbarListItem">
              <TimelineIcon className="sidbarIcon" />
              Analytics
            </li>
            <li className="sidbarListItem">
              <ReportGmailerrorredOutlinedIcon className="sidbarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
