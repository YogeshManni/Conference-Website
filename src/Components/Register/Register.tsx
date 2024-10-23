import React, { useEffect, useState } from "react";
import { Button, Col, Row, Steps } from "antd";
import { events } from "../../assets/lib/data";
import { Link, useLocation } from "react-router-dom";
import Payment from "./Payment";
import Status from "./Status";
import {
  UserOutlined,
  FormOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { getPacket } from "../../assets/lib/helper";

function Register() {
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [packet, setPacket] = useState<any>();
  const location = useLocation();

  const prev = () => setCurrent(current - 1);
  const next = () => setCurrent(current + 1);

  const handleDivClick = (idx: number) => setActiveIndex(idx);

  useEffect(() => {
    const idx = location.pathname.split("/")[2];
    setActiveIndex(Number(idx));

    // set payment data by default, so if user click proceed without clicking it doesn't give error
    setPacket(
      getPacket(
        { name: events[Number(idx)].name, price: events[Number(idx)].price },
        Number(idx)
      )
    );
  }, [location.pathname]);

  const RegisterComp = () => {
    return (
      <section
        className="w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0"
        style={{
          backgroundImage: `url(${require("../../assets/img/bgrd.jpg")})`,
        }}
      >
        <Row gutter={[18, 18]}>
          {events.map((item, idx) => (
            <Col
              key={idx}
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "30%" }}
            >
              <div
                className={`project-wrap mb-8 transition-all duration-300 ${
                  activeIndex === idx
                    ? "transform scale-110 bg-headingColor shadow-spread pb-2 border-2 border-headingColor shadow-xl"
                    : "border border-gray-300 shadow-md"
                }`}
                onClick={() => {
                  handleDivClick(idx);
                  const packet = getPacket(item, idx);
                  setPacket(packet);
                }}
              >
                <a
                  className="block h-72 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.img})` }}
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
                  <p className="text-headingColor flex items-center text-[13px] mt-5">
                    <UserOutlined />
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
                        <FormOutlined /> <b>Date :</b>
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
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div
          style={{ marginTop: 24 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {current < steps.length - 1 && (
            <button
              type="button"
              className="h-[50px] min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
              onClick={() => {
                const packet = getPacket();
                setPacket(packet);
                next();
              }}
            >
              Register all
            </button>
          )}
          {current < steps.length - 1 && (
            <button
              className="h-[50px] min-w-[150px] px-6 py-3.5 text-sm bg-headingColor text-white rounded-md hover:bg-[#111]"
              onClick={next}
            >
              Proceed To Payment
            </button>
          )}
        </div>
      </section>
    );
  };

  const steps = [
    { title: "Register", content: <RegisterComp />, icon: <FormOutlined /> },
    {
      title: "Payment",
      content: <Payment packet={packet} prev={prev} next={next} />,
      icon: <DollarOutlined />,
    },
    {
      title: "Status",
      content: (
        <Status
          packet={packet}
          setCurrent={setCurrent}
          onClose={() => setCurrent(0)}
        />
      ),
      icon: <CheckCircleOutlined />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  return (
    <div className="flex justify-center ">
      <div className="p-[20px] mt-5">
        <Steps
          current={current}
          items={items}
          className="w-[50vw] mx-auto md:px-[10rem] mb-5"
        />
        <div>{steps[current].content}</div>
      </div>
    </div>
  );
}

export default Register;
