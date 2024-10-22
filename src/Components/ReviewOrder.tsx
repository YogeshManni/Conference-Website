import React, { useState } from "react";
import Payment from "./Register/Payment";

interface ReviewOrderProps {
  titles: string[]; // Array of selected event titles
  prices: string[]; // Corresponding prices for the selected events
  totalCost: number; // Total cost of all selected events
  onClose: () => void; // Function to close the modal
}

const ReviewOrder: React.FC<ReviewOrderProps> = ({
  titles,
  prices,
  totalCost,
  onClose,
}) => {
  const [isPaying, setIsPaying] = useState(false);

  // Packet data now includes the event name and price (totalCost)
  const packet = {
    name: titles.join(", "),
    price: totalCost, // Pass the total cost as price
  };

  const handleNext = () => {
    // Handle the next step after payment
    console.log("Proceed to the next step");
  };

  const handlePrev = () => {
    // Handle the previous step before payment
    setIsPaying(false);
  };

  const handlePay = () => {
    setIsPaying(true); // Switch to payment screen and hide the order review
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[95%] lg:max-w-[800px] xl:max-w-[1000px] max-h-[90vh] overflow-y-auto">
        {isPaying ? (
          // Render Payment component inside the modal when "Pay Now" is clicked
          <Payment packet={packet} prev={handlePrev} next={handleNext} />
        ) : (
          // Show the order review until the "Pay Now" button is clicked
          <>
            <h2 className="text-xl font-bold mb-4 text-center">
              Review Your Order
            </h2>

            {/* Event List with Titles and Prices */}
            <div className="mb-6">
              {titles.map((title, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-3"
                >
                  <span className="text-lg">{title}</span>
                  <span className="text-lg">{prices[index]}</span>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">
                  ${totalCost.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Pay and Close Buttons */}
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handlePay}
                className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewOrder;
