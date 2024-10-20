import { Button, Card, Carousel, Col, Collapse, List, Row, Space } from "antd";
import React, { useState } from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import {
  CalendarOutlined,
  DollarOutlined,
  EyeOutlined,
  HeatMapOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { events, presenters, programs } from "../../assets/lib/data";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
export const Heading = ({ tagline, subHeading, src }: any) => {
  return (
    <>
      <img
        className="w-[100%] h-[100vh] object-cover"
        src={src}
        alt="Comox Valley Programs"
      ></img>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex top-[30%] left-[15%]  flex-col">
        <span className="text-headingColor font-bold font-arizonia text-[3rem] ">
          {tagline}
        </span>
        <span className=" text-white md:text-[2rem] font-bold text-[20px]">
          {subHeading}
        </span>
      </div>
    </>
  );
};

function Home() {
  interface Presenter {
    img: string; // URL or path to the presenter's image
    name: string; // Name of the presenter
    about: string; // Description or biography of the presenter
  }

  const [showProfile, setShowProfile] = React.useState<boolean>(false);
  const [currUser, setCurrUser] = useState<Presenter>();
  const hideProfile = () => {
    setShowProfile(false);
  };

  return (
    <>
      <Carousel effect="fade" arrows infinite={true} autoplay>
        <div className="relative">
          <Heading
            tagline={" Comox Valley Conferences 2024"}
            subHeading={"Highlight the year of the event and its significance."}
            src={img1}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={"Innovative Workshops & Seminars"}
            subHeading={"Emphasize learning opportunities at the conferences."}
            src={img2}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={"Join Our Keynote Sessions"}
            subHeading={"Highlight important talks or keynote speeches."}
            src={img3}
          />
        </div>
        <div className="relative">
          <Heading
            tagline={" Opportunities for Professional Growth"}
            subHeading={
              "Encourage participants to focus on self-improvement and career development."
            }
            src={img4}
          />
        </div>
      </Carousel>

      {
        // region Conference
      }
      <section
        className="w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0"
        style={{
          backgroundImage: `url(${require("../../assets/img/bgrd.jpg")})`,
        }}
      >
        <Row className="flex flex-col justify-center items-center">
          <span className="text-headingColor font-bold font-arizonia text-[5rem] ">
            Conferences
          </span>
          <h3 className="text-xl text-gray-700 mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
            dignissimos.
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
              <div className="project-wrap mb-8">
                <a
                  href="#"
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
                    {/* <li className="text-[13px] text-gray-700 flex items-center">
                      <PhoneOutlined /> &nbsp; Contact : {item.contact}
                    </li> */}
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
                    <Button className="bg-secondary text-white ">
                      View Event
                    </Button>
                    <Button className="bg-headingColor text-white">
                      Register
                    </Button>
                  </div>
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
      </section>
      {/* Presentors section */}
      {
        // #region Presenters
      }
      <section
        className="w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0"
        style={{
          backgroundImage: `url(${require("../../assets/img/bgrd.jpg")})`,
        }}
      >
        <Row className="flex flex-col justify-center items-center">
          <span className="text-headingColor font-bold font-arizonia text-[5rem] ">
            Presenters
          </span>
          <h3 className="text-xl text-gray-700 mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
            dignissimos.
          </h3>
        </Row>
        <Row gutter={[18, 18]}>
          {presenters.map((item, idx) => (
            <Col
              key={idx}
              xs={{ flex: "100%" }}
              sm={{ flex: "50%" }}
              md={{ flex: "40%" }}
              lg={{ flex: "30%" }}
            >
              <Card
                className="shadow-spread"
                hoverable
                onClick={() => {
                  setCurrUser(item);
                  setShowProfile(true);
                }}
                style={{ width: 240 }}
                cover={
                  <img alt="example" src={item.img} className="h-[350px]" />
                }
              >
                <Meta
                  title={<span className="text-headingColor">{item.name}</span>}
                  description={
                    <span className="line-clamp-5">{item.about}</span>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="flex justify-center items-center mt-5">
          <Link to="/presenters">
            <Button className="bg-headingColor text-white onhover" size="large">
              View All Presenters
            </Button>
          </Link>
        </div>
      </section>

      {
        // #endregion Presenters
      }

      {/* Program section */}
      <section className="w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0">
        <Row className="flex flex-col justify-center items-center">
          <span className="text-headingColor font-bold font-arizonia text-[5rem] ">
            Programs
          </span>
          <h3 className="text-xl text-gray-700 mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
            dignissimos.
          </h3>
        </Row>

        {programs.slice(0, 3).map((item, idx) => (
          <Row className="mb-5">
            <Col key={idx}>
              <Collapse
                collapsible="header"
                className="w-[60vw]"
                items={[
                  {
                    key: "1",
                    label: <p className="font-bold">Programs on {item.date}</p>,
                    extra: (
                      <p className="float-right font-bold text-headingColor">
                        {item.location}
                      </p>
                    ),
                    children: (
                      <List
                        itemLayout="vertical"
                        dataSource={item.items} // Maps through the item.items array
                        renderItem={(program: any) => (
                          <List.Item
                            key={program.title}
                            extra={
                              <>
                                <img
                                  width={272}
                                  className="h-[250px] object-cover rounded-lg"
                                  alt="logo"
                                  src={`../img/p${
                                    Math.floor(Math.random() * 3) + 1
                                  }.jpg`}
                                />
                                <p className="float-right">{program.speaker}</p>
                              </>
                            }
                          >
                            <List.Item.Meta
                              title={program.title}
                              description={program.description}
                            />
                            <p>Speaker - {program.speaker || "NA"}</p>{" "}
                            <p>Timing - {program.time || "NA"}</p>{" "}
                            <p>Cost - {program.cost || "NA"}</p>{" "}
                            <p>Notes - {program.notes || "NA"}</p>{" "}
                            {/* Add more details if needed */}
                          </List.Item>
                        )}
                      />
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        ))}

        <div className="flex justify-center items-center mt-5">
          <Button className="bg-headingColor text-white onhover" size="large">
            View All Programs
          </Button>
        </div>
      </section>
      {
        //   #region Profile
      }
      <section className="showProfile">
        {
          <Profile
            open={showProfile}
            hideProfile={hideProfile}
            data={currUser}
          />
        }
      </section>
    </>
  );
}

export default Home;
