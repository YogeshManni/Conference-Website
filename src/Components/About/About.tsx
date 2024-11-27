import {
  HeatMapOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, notification, Form, Input, Row } from "antd";
import Search from "antd/es/input/Search";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { openNotificationWithIcon } from "../../assets/lib/notification";
import { Email } from "@mui/icons-material";
import { addToGoogleSheet } from "../Sheet";

function About() {
  const [api, contextHolder] = notification.useNotification();
  const [subEmail, setSubEmail] = React.useState<string>("");

  const onFinish = async (values: any) => {
    openNotificationWithIcon(
      api,
      "success",
      "Message Sent",
      "You Message has been recieved by CVWS, someone will contact you shortly !!"
    );

    console.log("Received values of form: ", values);
  };

  const onSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openNotificationWithIcon(
      api,
      "success",
      "Subscribed successfully",
      "You have been successfully subscribed to our newsletter !"
    );

    setSubEmail("");
  };

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        {
          //#region about
        }
        <div className="flex flex-col lg:flex-row ">
          {/* Content Column */}
          <div className="lg:w-1/2 md:w-full sm:w-full mb-10 lg:mb-0">
            <div className="relative p-8 " data-aos="fade-up">
              <div className="mb-10">
                <span className="block text-headingColor font-arizonia text-[50px] font-bold mb-2">
                  About CVRS
                </span>
                <h2 className="text-4xl text-gray-900 font-semibold mb-4">
                  We are Creative Tech Enthusiast working since 2015
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-6 mb-5">
                The Comox Valley Writers Society (CVWS) normally meets every
                month from September to June to educate its members on the
                subject of writing and support them in their endeavours with the
                written word from concept through to completion. However, due to
                the COVID-19 pandemic and the restrictions imposed by the
                Provincial Health Ministry, our monthly meetings are now being
                held via Zoom until such time as we are allowed to meet
                in-person once again.
              </p>
              <p className="text-gray-600 text-base leading-6 mb-5">
                The CVWS is a proud member of the Comox Valley Community Arts
                Council. The CVWS also supports the Writer/Artist-in-residence
                program of the McLoughlin Gardens Society with a CVWS member
                representative on their Board. The CVWS annually sponsors events
                and projects to promote writers and their contribution to the
                culture of the Comox Valley:
              </p>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="custom-button inline-block px-6 py-3 bg-headingColor text-white font-semibold rounded  transition duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div
            className="lg:w-1/2 md:w-full sm:w-full relative"
            data-aos="fade-left"
          >
            <div className="relative p-8">
              <img
                src="https://images.unsplash.com/photo-1468487422149-5edc5034604f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="dsfs"
                className="rounded-xl shadow-lg w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-[5rem]"></div>

        {
          //#region history
        }
        <div
          className="flex flex-col lg:flex-row bg-secondary"
          data-aos="fade-right"
        >
          {/* Image Column */}
          <div className="lg:w-1/2 md:w-full sm:w-full relative">
            <div className="relative p-8">
              <img
                src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="dsfs"
                className="rounded-xl shadow-lg w-full h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div
            className="lg:w-1/2 md:w-full sm:w-full mb-10 lg:mb-0"
            data-aos="fade-up"
          >
            <div className="relative p-8">
              <div className="mb-10">
                <span className="block font-arizonia text-[50px] font-bold text-headingColor  mb-2">
                  Our History
                </span>
                <h2 className="text-4xl text-gray-900 font-semibold mb-4">
                  CVRS shares a great history beacuse of our folks
                </h2>
              </div>
              <p className="text-white text-base leading-6 mb-5 ">
                The Comox Valley Writers Club (CVWC) began in 1964. It was
                closely aligned with the Comox Valley Arts Council (CVAC) which
                began in 1965. Doris Tonkin, the CVWC Chairperson was also on
                the Board of CVAC. In the early years, membership in the group
                was just 12 to 15 people, and they wrote largely for newspapers
                and magazines. The Comox District Free Press and Islander
                Magazine printed many of their stories of local history and
                events.
              </p>
              <p className="text-white text-base leading-6 mb-5">
                The group flourished in the 1980s. In 1985 they registered as a
                non-profit society – the Comox Valley Writers Group (CVWG). This
                decade featured annual National Book Week Festival events which
                brought community attention to writers and books across the
                country. Many well-known authors came to the valley to give
                readings, visit schools and participate in community events. In
                1989 CVWG celebrated 25 years with the publication of Clam
                Diggers, an anthology of local writing.
              </p>
            </div>
          </div>
        </div>

        {
          // region Newsletter
        }

        <Row
          className="py-[100px] flex justify-center items-center flex-col"
          data-aos="fade-up"
        >
          {contextHolder}
          <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 py-16 font-[sans-serif]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 p-4">
              <div className="w-full text-center lg:text-left">
                <h2 className="font-bold text-[50px] font-arizonia mb-6">
                  Stay Updated
                </h2>
                <p className="text-lg text-gray-600">
                  Subscribe to our newsletter for the latest updates, tips, and
                  exclusive offers.
                </p>
              </div>

              <div className="w-full max-lg:max-w-lg">
                <form className="flex items-center" onSubmit={onSubscribe}>
                  <input
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full lg:w-[300px] text-gray-800 bg-white py-3.5 px-4 text-base border border-[#ddd] border-r-0 rounded-l-lg outline-none focus:border-blue-600"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-headingColor  text-white text-base font-semibold tracking-wide py-3.5 px-6 border border-blue-600 rounded-r-lg outline-none"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Row>

        {
          // region Contact
        }
        <Row className="w-full flex items-center justify-center ">
          <Col
            className="w-full xl:w-1/2 relative h-[600px] shadow-spread p-[30px]"
            data-aos="fade-right"
          >
            {/* Image as background */}
            <img
              src="./img/img3.jpg"
              className="absolute inset-0 w-full h-full object-cover z-0"
              alt="Background Image"
            />

            {/* Overlay info content */}
            <div className="info relative z-10 bg-white bg-opacity-90 p-6 space-y-6 rounded-lg">
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full">
                    <HeatMapOutlined />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">
                      Location:
                    </h4>
                    <p>Courtenay, British Columbia, Canada</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full">
                    <MailOutlined />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">
                      Email:
                    </h4>
                    <p>cvrs@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full">
                    <PhoneOutlined />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-headingColor">
                      Zip Code:
                    </h4>
                    <p>V9N 6Z8</p>
                  </div>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44431.04424332334!2d-125.0171795501496!3d49.68204393476929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488138e761e4361%3A0x50135152a7b12b0!2sCourtenay%2C%20BC!5e0!3m2!1sen!2sca!4v1672063027098!5m2!1sen!2sca"
                className="border-0 w-full h-72"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

          <Col
            id="contact"
            className="mt-10 xl:mt-0 w-full h-[600px]  xl:w-1/2 flex items-center justify-center flex-col shadow-spread"
            data-aos="fade-left"
          >
            <span className="font-bold font-arizonia text-headingColor text-[50px] mt-10 lg:mt-0">
              {" "}
              Contact Us
            </span>
            <Form
              name="Contact"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className="w-full max-w-md"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={100}
                  className="h-[100px]"
                  placeholder="Type in  your message..."
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className=" bg-secondary"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default About;
