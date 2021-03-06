import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.scss";
const menus = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Sản Phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ Kiện",
    path: "/accessoris",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];
const Header = () => {
  
  const { pathname } = useLocation();
  const activeMenu = menus.findIndex(e => e.path ===  pathname);


  const headerRef = useRef(null);


  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add("shrink")
      }else {
        headerRef.current.classList.remove("shrink")
      }
      
    }
    window.addEventListener("scroll", shrinkHeader)
    return () => {
      window.removeEventListener("scroll",shrinkHeader)
    }
  },[])

  const menuLeft = useRef(null)

  const menuToggle = () => {
    menuLeft.current.classList.toggle('active')
  }
  


  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={()=>menuToggle()}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left"  ref={menuLeft}>
            <div className="header__menu__left__close" onClick={()=>menuToggle()}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {menus.map((item, index) => (
              <div 
                key={index} 
                className={`header__menu__item header__menu__left__item ${index === activeMenu ? 'active' : ''}`}
                onClick={()=>menuToggle()}
              >
                <Link className='header__menu__item__link' to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link className='header__menu__item__link' to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
