import React from "react";

import { Link } from "react-router-dom";

import Grid from "../grid/Grid";

import logo from "../../assets/images/logo.png";

import './footer.scss'

const aboutLink = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },

  {
    display: "Liên Hệ ",
    path: "/about",
  },

  {
    display: "Tuyển Dụng",
    path: "/about",
  },

  {
    display: "Tin Tức",
    path: "/about",
  },

  {
    display: "Hệ Thống Cửa Hàng",
    path: "/about",
  },
];

const CustomerLink = [
  {
    display: "Chính Sách Đổi Trả ",
    path: "/about",
  },
  {
    display: "Chính Sách Bảo Hành",
    path: "/about",
  },
  {
    display: "Chính Sách Hoàn Tiền",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng Đài Hỗ Trợ</div>
            <div className="footer__content">
              <p>
                Liên Hệ Đặt Hàng <strong>0865992248</strong>
              </p>
              <p>
                Thắc Mắc Đơn Hàng <strong>0865992248</strong>
              </p>
              <p>
                Góp Ý, Khiếu Nại <strong>0865992248</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về Cửa Hàng</div>
            <div className="footer__content">
              {aboutLink.map((item, index) => (
                <p className="link" key={index}>
                  <Link  to={item.path}></Link>
                  {item.display}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__title">Chăm Sóc Khách Hàng</div>
            <div className="footer__content">
              {CustomerLink.map((item, index) => (
                <p className="link"  key={index}>
                  <Link to={item.path}></Link>
                  {item.display}
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p className="footer__about__logo" >
              <Link to="/">
                <img className="footer__logo" src={logo} alt="" />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui mới mỗi ngày cho hàng triệu
              người tiêu dùng Việt.
            </p>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
