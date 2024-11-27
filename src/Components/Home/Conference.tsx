import { Button, Col, Row } from "antd";
import React from "react";
import { events } from "../../assets/lib/data";
import {
  CalendarOutlined,
  DollarOutlined,
  HeatMapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Conference: React.FC = () => {
  return (
    <section
      id="day-pass"
      className="w-full py-20 md:py-15 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0"
      style={{
        backgroundImage: `url(${require("../../assets/img/bgrd.jpg")})`,
      }}
    >
      <Row className="flex flex-col justify-center items-center">
        <span className="text-headingColor font-bold font-arizonia text-5xl ">
          Day Pass
        </span>
        <h3 className="text-xl text-gray-700 mt-4 mb-8">
          Don’t Miss Out: Register for the Writing Conference!
        </h3>
      </Row>
      <Row gutter={[18, 18]}>
        {events.map((item, idx) => (
          <Col
            key={idx}
            xs={{ flex: "100%" }}
            sm={{ flex: "50%" }}
            md={{ flex: "40%" }}
            lg={{ flex: "30%" }}
          >
            <div className="project-wrap mb-8" data-aos="fade-left">
              <a
                className="block h-72 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <span className="absolute top-[-8px] left-[20px] inline-block bg-headingColor text-white px-2 py-2 text-[16px] font-[500] transition-all ease-in-out duration-300">
                  {item.registrations} Registrations
                </span>
              </a>
              <div className="text mx-auto w-[90%] relative mt-[-40px] bg-white shadow-spread p-4">
                <span className="block text-[12px] text-headingColor font-[700] uppercase mb-2">
                  {item.speaker}
                </span>
                <h3 className="text-[24px] font-[500] mb-0">
                  <a href="#" className="text-black hover:text-headingColor">
                    {item.name} -{" "}
                    <span className="text-headingColor"> Day {idx + 1}</span>
                  </a>
                </h3>
                <p className="text-headingColor  flex items-center text-[13px] mt-5">
                  <HeatMapOutlined />
                  &nbsp; Location : {item.location}
                </p>
                <p className="text-gray-600 text-[13px] mt-3">
                  {item.description}
                </p>
                <ul className="mt-4">
                  <li className="text-[13px] text-gray-700 flex items-start">
                    <span className="flex-shrink-0 whitespace-nowrap">
                      <UserOutlined /> <b>Co-hosts :</b>
                    </span>
                    <span className="ml-2">{item.hosts}</span>
                  </li>

                  <li className="text-[13px] text-gray-700 flex items-start">
                    <span className="flex-shrink-0 whitespace-nowrap">
                      <CalendarOutlined /> <b>Date :</b>
                    </span>
                    <span className="ml-2">{item.date}</span>
                  </li>

                  <li className="text-[13px] text-gray-700 flex items-start">
                    <span className="flex-shrink-0 whitespace-nowrap">
                      <DollarOutlined /> <b>Price :</b>
                    </span>
                    <span className="ml-2">${item.price}</span>
                  </li>
                </ul>

                <div className="flex justify-around mt-5">
                  <Link to={`/register/${idx}`}>
                    <a className="custom-button">
                      Register
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};
export default Conference;
