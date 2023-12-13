import React from "react";
import "./Widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../data";

export default function Widgetsm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((MembersIndo) => (
          <li key={MembersIndo.id} className="widgetSmListItem">
            <img className="widgetSmImg" src={MembersIndo.img} alt="" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{MembersIndo.userName}</span>
              <span className="widgetSmTitle">{MembersIndo.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
