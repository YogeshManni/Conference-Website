//FooterComponent.tsx

import React from "react";
import { Layout, Row, Col } from "antd";
import {
  CaretRightOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <Footer
      className={`${
        !collapsed ? "ml-[200px]" : "ml-[0px]"
      } pt-[100px] w-full bg-cover bg-center py-20 pr-20`}
      style={{
        backgroundImage: `url(${require("../assets/img/bgrd.jpg")})`,
      }}
    >
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia">
            About us
          </h2>
          <p className="text-gray-500 text-[20px]">
            The Comox Valley Writers Society (CVWS) normally meets every month
            from September to June to educate its members on the subject of
            writing and support them in their endeavours with the written word
            from concept through to completion.
          </p>
        </Col>
        <Col span={8}>
          <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia">
            Links
          </h2>
          <ul className="text-[20px] text-gray-500 cursor-pointer leading-[2]">
            <li>
              <CaretRightOutlined /> Presenters
            </li>
            <li>
              <CaretRightOutlined /> About
            </li>
            <li>
              <CaretRightOutlined /> Programs
            </li>
          </ul>
        </Col>
        <Col span={8}>
          <h2 className="text-headingColor text-[40px] font-bold mb-7 font-arizonia">
            Connect with us
          </h2>
          <ul className="text-[20px] text-gray-500 cursor-pointer leading-[2]">
            <li>
              <FacebookOutlined /> Facebook
            </li>
            <li>
              <InstagramOutlined /> Instagram
            </li>
            <li>
              <TwitterOutlined /> Twitter
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
