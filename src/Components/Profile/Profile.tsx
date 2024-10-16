import { Drawer } from "antd";
import React, { useState } from "react";

function Profile({ open, hideProfile, data }: any) {
  return (
    data && (
      <>
        <Drawer
          width={640}
          title="About Presenter"
          open={open}
          onClose={hideProfile}
        >
          <img
            src={data.img}
            alt=""
            className="w-[300px] h-[300px] object-cover my-0 mx-auto shadow-spread"
          />
          <section className="info mt-5 p-5">
            <h1 className="text-headingColor font-bold font-arizonia text-[40px]">
              {data.name}
            </h1>

            <p className="text-gray-500">{data.about}</p>
          </section>
        </Drawer>
      </>
    )
  );
}

export default Profile;
