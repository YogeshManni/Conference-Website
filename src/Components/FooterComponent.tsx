import React from "react";
import { Layout, Row, Col } from "antd";
import {
  CaretRightOutlined,
  ContactsOutlined,
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Footer
      className={` ${
        !collapsed ? "ml-[200px]" : "ml-[0px]"
      } py-20 bg-cover bg-center bottom-0`}
      style={{
        backgroundImage: `url(${require("../assets/img/bgrd.jpg")})`,
      }}
    >
      <Row
        gutter={[32, 32]}
        justify="space-around" // This will help in spacing columns in desktop
        align="middle" // Align items in the middle for better spacing
      >
        <Col xs={24} sm={12} md={8} className="flex flex-col justify-start">
          <h2 className="text-headingColor text-[24px] font-bold font-arizonia">
            About us
          </h2>
          <p className="text-gray-500 text-[18px]">
            The Comox Valley Writers Society (CVWS) normally meets every month
            from September to June to educate its members on the subject of
            writing and support them in their endeavours with the written word
            from concept through to completion.
          </p>
        </Col>
        <Col xs={24} sm={12} md={8} className="flex flex-col justify-start">
          <h2 className="text-headingColor text-[24px] font-bold font-arizonia">
            Get in touch
          </h2>
          <ul className="text-[18px] text-gray-500 cursor-pointer leading-[2]">
            <li>
              <a
                href="https://www.facebook.com/ComoxValleyWritersSociety/"
                target="_blank"
              >
                <FacebookOutlined /> Facebook
              </a>
            </li>

            <li>
              <a href="https://cvwriterssociety.ca/" target="_blank">
                <GlobalOutlined /> CVWS Website
              </a>
            </li>
            <li>
              <a href="/about#contact">
                <ContactsOutlined /> Contact
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
