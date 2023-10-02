import React from "react";
import SidebarList from "./SidebarList";
import SidebarListData from "../utils/SidebarListData";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.sideBar.isOpen);

  return (
    isOpen && (
      <div className="w-60 border border-black h-[650px] pt-3">
        {SidebarListData.map((data, index) => (
          <SidebarList key={index} {...data} />
        ))}
      </div>
    )
  );
};

export default Sidebar;
