import { Button, Col, Collapse, List, Row } from "antd";
import React from "react";
import { programs } from "../../assets/lib/data";
import { Link } from "react-router-dom";

function Programs() {
  return (
    <section className="flex flex-col justify- items-center w-full py-20 md:py-10 bg-cover bg-center pl-[50px] md:pl-[100px] pr-20 md:pr-0">
      <Row className="flex flex-col justify-center items-center">
        <span className="text-headingColor font-bold font-arizonia text-[5rem] ">
          Programs
        </span>
        <h3 className="text-xl text-gray-700 mt-4 mb-8">
          Featured Events and Workshops at the Writing Conference
        </h3>
      </Row>

      {programs.slice(0, 3).map((item, idx) => (
        <Row className="mb-10" data-aos="fade-left">
          <Col key={idx}>
            <Collapse
              collapsible="header"
              className="w-[60vw] bg-white shadow-lg rounded-xl"
              items={[
                {
                  key: "1",
                  label: (
                    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 rounded-t-xl">
                      <p className="text-lg font-semibold text-gray-800">
                        Programs on {item.date}
                      </p>
                      <p className="text-headingColor text-gray-600 font-medium">
                        {item.location}
                      </p>
                    </div>
                  ),
                  children: (
                    <List
                      itemLayout="vertical"
                      dataSource={item.items}
                      renderItem={(program: any) => (
                        <List.Item
                          key={program.title}
                          className="p-6 border-b last:border-none"
                          extra={
                            <div className="ml-6 flex flex-col items-center">
                              <img
                                width={200}
                                className="h-[180px] object-cover rounded-lg shadow-md"
                                alt="logo"
                                src={program.img}
                              />
                              <p className="mt-2 py-1 px-3 bg-indigo-500 text-white rounded-full font-semibold">
                                {program.name || "NA"}
                              </p>
                            </div>
                          }
                        >
                          <List.Item.Meta
                            title={
                              <p className="text-xl font-semibold text-gray-800">
                                {program.title}
                              </p>
                            }
                            description={
                              <p className="text-gray-600">
                                {program.description}
                              </p>
                            }
                          />
                          <div className="mt-4 space-y-2 text-sm text-gray-700">
                            <p>
                              <span className="font-bold">Speaker:</span>{" "}
                              {program.name || "NA"}
                            </p>
                            <p>
                              <span className="font-bold">Timing:</span>{" "}
                              {program.time || "NA"}
                            </p>
                            <p>
                              <span className="font-bold">Cost:</span>{" "}
                              {program.cost || "NA"}
                            </p>
                            {program.notes && (
                              <p>
                                <span className="font-bold">Notes:</span>{" "}
                                {program.notes || "NA"}
                              </p>
                            )}
                          </div>
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
        <Link to="/event">
          <Button className="bg-headingColor text-white onhover" size="large">
            View All Programs
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Programs;
