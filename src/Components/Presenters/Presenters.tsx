import { Button, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { presenters } from "../../assets/lib/data";
import Profile from "../Profile/Profile";
import { Interface } from "readline";

function Presenters() {
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
      {
        // #region hero
      }
      <section className="hero">
        <img
          src="./img/presenter.jpg"
          className="h-[100vh] w-[100%] object-cover"
        ></img>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex top-[30%] left-[25%]  flex-col">
          <span className="text-headingColor font-bold font-arizonia text-[3rem] ">
            Meet Our Esteemed Presenters
          </span>
          <span className=" text-white md:text-[2rem] font-bold text-[20px]">
            Experts, Innovators, and Thought Leaders Sharing Their Knowledge and
            Passion
          </span>
        </div>
      </section>

      {
        // #endregion hero
      }

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

export default Presenters;
