import React from "react";
import "./ViewCard.scss";
import { CgScreen } from "react-icons/cg";
import {
  AlignLeftOutlined,
  BarsOutlined,
  ClockCircleOutlined,
  MenuOutlined,
  SaveOutlined,
  ShareAltOutlined,
  TagsOutlined,
  UserOutlined,
} from "@ant-design/icons";
const ViewCard = ({ cardTitle, columnTitle, setIsViewCard }) => {
  const handleClose = () => {
    setIsViewCard(false);
    console.log("close card");
  };

  return (
    <div className="card-info-container">
      <div className="card-info-content">
        <div className="close-card-info" onClick={handleClose}>
          &times;
        </div>
        <div className="card-info-edit">
          <label>
            <CgScreen className="card-icon-title" />
            {cardTitle}
          </label>
          <p>
            in Column <u onClick={handleClose}>{columnTitle}</u>
          </p>

          <label>
            <MenuOutlined className="card-icon-menu" />
            Description
          </label>
          <textarea placeholder="Add detail description..." />

          <label>
            <AlignLeftOutlined className="card-icon-action" />
            Actions
          </label>
          <div className="user-comment">
            <div className="user-avt"></div>
            <input type="text" placeholder="Enter comment..." />
          </div>
        </div>
        <div className="card-info-nav">
          <label>Add to card</label>
          <button className="card-info-nav-btn">
            <UserOutlined className="card-icon-user" />
            Members
          </button>
          <button className="card-info-nav-btn">
            <TagsOutlined className="card-icon-tag" />
            Label
          </button>
          <button className="card-info-nav-btn">
            <BarsOutlined className="card-icon-tasks" />
            Tasks
          </button>
          <button className="card-info-nav-btn">
            <ClockCircleOutlined className="card-icon-date" />
            Date
          </button>

          <label>Operation</label>
          <button className="card-info-nav-btn">
            <SaveOutlined className="card-icon-save" />
            Save
          </button>
          <button className="card-info-nav-btn">
            <ShareAltOutlined className="card-icon-share" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
