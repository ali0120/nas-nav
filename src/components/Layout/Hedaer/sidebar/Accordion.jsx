import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../BottomNav/MyLinks";
import "./sidebar.css";

const Accordion = ({ closeSidebar }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [index, setIndex] = useState(0);
  const [categories] = useState(navLinks);

  const showInfoHandler = (idx) => {
    if (idx === index) {
      setShowInfo(!showInfo);
    } else {
      setShowInfo(true);
      setIndex(idx);
    }
  };

  return (
    <section className="accordion">
      {categories.map(({ name, sublinks }, idx) => {
        return (
          <div key={idx} className="accordion_inner">
            <header className="accordion_heading">
              <h3 className={`${showInfo && idx === index ? "bg-red" : "bg-green"}`}>
                <Link to={"/"} onClick={closeSidebar}>
                  {name}
                </Link>
              </h3>
              <button className="accordion_btn" onClick={() => showInfoHandler(idx)}>
                {showInfo && idx === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.375"
                    height="6.221"
                    viewBox="0 0 9.375 6.221"
                  >
                    <path
                      d="M4830.072,8647.787a.484.484,0,0,0,.677-.076l3.829-4.786,3.829,4.786a.484.484,0,0,0,.678.076.483.483,0,0,0,.075-.678l-4.206-5.257a.48.48,0,0,0-.752,0l-4.206,5.257a.483.483,0,0,0,.076.678Z"
                      transform="translate(-4829.891 -8641.671)"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.375"
                    height="6.221"
                    viewBox="0 0 9.375 6.221"
                  >
                    <path
                      d="M4839.084,7436.421a.482.482,0,0,0-.677.075l-3.829,4.787-3.829-4.787a.485.485,0,0,0-.323-.178.482.482,0,0,0-.43.78l4.206,5.257a.481.481,0,0,0,.752,0l4.206-5.257a.485.485,0,0,0,.1-.3A.479.479,0,0,0,4839.084,7436.421Z"
                      transform="translate(-4829.891 -7436.315)"
                    ></path>
                  </svg>
                )}
              </button>
            </header>
            {showInfo && idx === index && (
              <ul className="accordion_inner">
                {sublinks.map(({ Head }, index) => {
                  return (
                    <li key={index}>
                      <Link to={'/'} onClick={closeSidebar}>
                        {Head.name}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Accordion;
