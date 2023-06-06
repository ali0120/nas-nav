import closeIcon from "../../../../images/bottomNav/close.svg";
import logo from "../../../../images/upperNav/logo.svg";
import Accordion from "./Accordion";
import "./sidebar.css";
const Sidebar = ({ closeSidebar, showSidebarStatus }) => {
  return (
    <>
      <div
        className={`overlay ${showSidebarStatus ? "visible" : "invisible"}    `}
        onClick={closeSidebar}
      ></div>
      <aside
        className={`sidebar  ${showSidebarStatus ? "visible" : "invisible"}  `}
      >
        <div className="container">
          <div className="sidebar_top">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <button className="close" onClick={closeSidebar}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className="sidebar_bottom">
            <div>
              <Accordion closeSidebar={closeSidebar} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
