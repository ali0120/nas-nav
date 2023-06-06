import React, { useState } from "react";
import { navLinks } from "./MyLinks";
import { Link } from "react-router-dom";

import Spinner from "../../../spinner/Spinner";
import "./BottomNav.css";

const BottomNav = () => {
  const [isLoading, setIsLoading] = useState(false);
  const mouseEnter = (e) => {
    // simulate as a pending request for data
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };
  const mouseLeave = (e) => {
    setIsLoading(true);
  };

  return (
    <>
      {
        <nav className="nav_bottom">
          <div className="container">
            <ul className="nav_inner">
              {navLinks?.map(({ name, sublinks }, index) => {
                return (
                  <li
                    key={index}
                    className="nav_category-item"
                    onMouseLeave={mouseLeave}
                    onMouseEnter={mouseEnter}
                  >
                    <Link to="/" className="nav_category-link">
                      {name}
                    </Link>
                    <div className="single_category-content">
                      <div className="container">
                        <div
                          className="single_category-inner"
                          style={{ display: "flex" }}
                        >
                          <div className="not_brands-container">
                            {sublinks.map(
                              ({ sublink, Head: { name, link } }, index) => {
                                return (
                                  <div key={index}>
                                    {name !== "Top Brands" && (
                                      <div className="single_category-inner-content">
                                        <h6 className="sublink_heading">
                                          <Link to={link}>{name}</Link>
                                        </h6>
                                        <ul>
                                          {sublink?.map(
                                            ({ name, link }, index) => {
                                              return (
                                                <li
                                                  className="sublink_item"
                                                  key={index}
                                                >
                                                  <Link
                                                    to={link}
                                                    className="sublink_link"
                                                  >
                                                    {name}
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                );
                              }
                            )}
                          </div>
                          <div className="brands_container">
                            {sublinks.map(
                              ({ sublink, Head: { name, link } }, index) => (
                                <div key={index}>
                                  {name === "Top Brands" && (
                                    <div className="single_category-inner-content">
                                      <h6 className="sublink_heading">
                                        <Link to={link}>{name}</Link>
                                      </h6>
                                      <ul className={`brands-container`}>
                                        {isLoading ? (
                                          <div
                                            style={{ padding: "0 0 0 30px" }}
                                          >
                                            <Spinner />
                                          </div>
                                        ) : (
                                          sublink?.map(
                                            ({ brandImgSrc }, index) => {
                                              return (
                                                <li
                                                  className="sublink_item"
                                                  key={index}
                                                >
                                                  {brandImgSrc?.length > 0 && (
                                                    <Link to={link}>
                                                      <img
                                                        src={brandImgSrc}
                                                        alt="brand"
                                                      />
                                                    </Link>
                                                  )}
                                                </li>
                                              );
                                            }
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      }
    </>
  );
};

export default BottomNav;
