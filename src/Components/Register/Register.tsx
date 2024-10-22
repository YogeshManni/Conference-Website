import {
  CalendarOutlined,
  DollarOutlined,
  FormOutlined,
  HeatMapOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Result, Row, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { events } from "../../assets/lib/data";
import { Link, useLocation } from "react-router-dom";

function Register() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current - 1);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const [activeIndex, setActiveIndex] = useState(0); // Initial highlight is on index 2
  const [packet, setPacket] = useState<any>();
  // Function to handle click and set the active div
  const handleDivClick = (idx: number) => {
    setActiveIndex(idx);
  };

  const location = useLocation();

  useEffect(() => {
    const idx = location.pathname.split("/")[2];

    setActiveIndex(Number(idx));
  }, []);
  const RegisterComp = () => {
    return (
      <section
        className="w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0"
        style={{
          backgroundImage: `url(${require("../../assets/img/bgrd.jpg")})`,
        }}
      >
        <Row className="flex flex-col justify-center items-center"></Row>
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
                    ? "transform scale-110 bg-headingColor shadow-spread pb-2     border-2 border-headingColor shadow-xl" // Enlarged and bordered when active
                    : "border border-gray-300 shadow-md" // Normal state
                }`}
                onClick={() => {
                  // On click, set this div as active
                  handleDivClick(idx);

                  // set order data for payment component
                  const packet = {
                    price: item.price,
                    name: `${item.name} - Day ${idx + 1}`,
                  };
                  setPacket(packet);
                }}
              >
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
                  <p className="text-headingColor flex items-center text-[13px] mt-5">
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
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* <div className="flex justify-center items-center">
      <Button className="bg-headingColor text-white onhover" size="large">
        View All Events
      </Button>
    </div> */}

        <div
          style={{ marginTop: 24 }}
          className=" flex flex-wrap justify-center gap-4"
        >
          {current < steps.length - 1 && (
            <button
              type="button"
              className="h-[50px] min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
              onClick={() => {
                const packet = {
                  price: events.reduce(
                    (acc, item) => acc + (item?.price ?? 0),
                    0
                  ),
                  name: events
                    .map((item, idx) => `${item.name} - Day ${idx + 1}`)
                    .join("\n"),
                };
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
              onClick={() => {
                next();
              }}
            >
              Proceed To Payment
            </button>
          )}
        </div>
      </section>
    );
  };

  const Payment = () => {
    return (
      <div className=" bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 max-lg:order-1">
            <form className="mt-16 max-w-lg">
              <h2 className="text-2xl font-bold">Payment method</h2>

              <div className="grid gap-4 sm:grid-cols-2 mt-8">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    checked
                    name="paymethod"
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                    name="paymethod"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                    />
                  </label>
                </div>
              </div>

              <div className="grid gap-4 mt-8">
                <input
                  required
                  type="text"
                  placeholder="Cardholder's Name"
                  className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                />

                <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 ml-3"
                    viewBox="0 0 291.764 291.764"
                  >
                    <path
                      fill="#2394bc"
                      d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                      data-original="#2394bc"
                    />
                    <path
                      fill="#efc75e"
                      d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                      data-original="#efc75e"
                    />
                  </svg>
                  <input
                    required
                    type="number"
                    placeholder="Card Number"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <input
                    required
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                  />
                  <input
                    required
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                  />
                </div>

                <div className="flex items-center">
                  {/*<input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                   <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label> */}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={prev}
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
                >
                  Back
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-headingColor text-white rounded-md hover:bg-[#111]"
                >
                  Pay ${packet?.price}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-100 p-6 rounded-md">
            <div className="flex justify-center items-center">
              <span className="text-4xl font-extrabold text-headingColor">
                ${packet?.price}
              </span>
            </div>
            <ul className="text-gray-800 mt-8 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm pb-5">
                <span className="mx-auto">Event Name</span>
                <span className="mx-auto font-bold whitespace-pre-line">{`${packet?.name}`}</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Event price{" "}
                <span className="ml-auto font-bold">{`${packet?.price}.00`}</span>
              </li>

              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto font-bold">
                  {`${((packet?.price ?? 0) * 10) / 100}.00`}
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                Total{" "}
                <span className="ml-auto">{`${
                  (packet?.price ?? 0) + ((packet?.price ?? 0) * 10) / 100
                }.00`}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const Status = () => {
    return (
      <Result
        status="success"
        title={<span className="font-bold">Payment Success</span>}
        subTitle={
          <span className="text-gray-800">
            `Your payment for{" "}
            <span className="text-headingColor font-bold">{packet?.name}</span>{" "}
            event is successfully done`
          </span>
        }
        extra={[
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link to="/">
              <button
                type="button"
                className="min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
              >
                Go Home
              </button>
            </Link>
            <button
              onClick={() => setCurrent(0)}
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-headingColor text-white rounded-md hover:bg-[#111]"
            >
              Show Events
            </button>
          </div>,
        ]}
      />
    );
  };
  const steps = [
    {
      title: "Register",
      content: <RegisterComp />,
      icon: <FormOutlined />,
    },
    {
      title: "Payment",
      content: <Payment />,
      icon: <DollarOutlined />,
    },
    {
      title: "Status",
      content: <Status />,
      icon: <DollarOutlined />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  return (
    <div className="flex  justify-center ">
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
