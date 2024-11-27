import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

interface StatusProps {
  packet: any;
  setCurrent: (current: number) => void;
  onClose: () => void; // Add the onClose prop to close the modal
}

const Status: React.FC<StatusProps> = ({ packet, onClose }) => {
  return (
    <Result
      status="success"
      title={<span className="font-bold">Payment Success</span>}
      subTitle={
        <span className="text-gray-800">
          Your payment for{" "}
          <span className="text-headingColor font-bold">{packet?.name}</span>{" "}
          event is successfully done
        </span>
      }
      extra={[
        <div className="flex flex-wrap gap-4 mt-8 justify-center" key="extra-buttons">
          <Link to="/">
            <button
              type="button"
              className="min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
            >
              Go Home
            </button>
          </Link>
          <button
            type="button"
            onClick={onClose} // Close the modal when this button is clicked
            className="min-w-[150px] px-6 py-3.5 text-sm bg-headingColor text-white rounded-md hover:bg-[#ff8906]"
          >
            Check Out More Events
          </button>
        </div>,
      ]}
    />
  );
};

export default Status;
