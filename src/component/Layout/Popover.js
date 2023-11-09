import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
export default function Popover1() {
  const navigate = useNavigate();

  const handleLogout = () => {localStorage.removeItem("admin");
    localStorage.removeItem("users");
    navigate("/");
  };
  const content = (
    <div>
      <p style={{ cursor: "pointer" }} onClick={handleLogout}>
        Logout
      </p>
    </div>
  );

  return (
    <Popover content={content}>
      <RxAvatar
        style={{
          fontSize: "40px",
          float: "right",
          margin: "10px 30px 10px 10px",
        }}
      />
    </Popover>
  );
}
