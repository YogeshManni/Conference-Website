import React from "react";
import { Button } from "antd";
import { addToGoogleSheet } from "../Sheet";

interface PaymentProps {
  packet: {
    name: string; // Name of the event(s)
    price: number; // Event price (total cost)
  };
  prev: () => void; // Function to go back to the previous step
  next: () => void; // Function to proceed to the next step
}

const Payment: React.FC<PaymentProps> = ({ packet, prev, next }) => {
  const { price } = packet;

  const [name, setName] = React.useState("");
  const [cardNum, setCardNum] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expDate, SetExpDate] = React.useState("");
  // Calculate tax (assuming a 10% tax rate)
  const tax = (price * 10) / 100;
  const total = price + tax;

  const validateForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (name.trim() === "" ||
        cardNum.trim() === "" ||
        cvv.trim() === "" ||
        expDate.trim() === "") &&
      total > 0
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      const data: any = {
        Username: name,
        EventName: packet.name,
        Price: total,
        Date: new Date().toLocaleString(),
      };

      await addToGoogleSheet(data);
      next();
    }
  };

  return (
    <div className="bg-white p-4 lg:max-w-7xl max-w-xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 max-lg:order-1">
          <form className="mt-16 max-w-lg" onSubmit={validateForm}>
            <h2 className="text-2xl font-bold">
              {" "}
              {total > 0 ? "Payment method" : "Enter your name"}
            </h2>

            {total > 0 && (
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
            )}
            <div className="grid gap-4 mt-8">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder={total > 0 ? "Cardholder's Name" : "Name"}
                className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
              />

              {total > 0 && (
                <>
                  <div className="flex bg-white border-b-2 focus-within:border-gray-800 overflow-hidden">
                    <input
                      value={cardNum}
                      onChange={(e) => setCardNum(e.target.value)}
                      required
                      type="number"
                      placeholder="Card Number"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <input
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      type="number"
                      placeholder="EXP."
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                    />
                    <input
                      value={expDate}
                      onChange={(e) => SetExpDate(e.target.value)}
                      required
                      type="number"
                      placeholder="CVV"
                      className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b-2 focus:border-gray-800 outline-none"
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-full sm:w-auto min-w-[150px] px-6 py-3.5 text-sm bg-secondary text-white rounded-md hover:bg-[#111]"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[150px] px-6 py-3.5 text-sm bg-headingColor text-white rounded-md hover:bg-[#ff8906]"
                >
                  {total > 0 ? `Pay ${total.toFixed(2)}` : "Register"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Payment Summary Section */}
        <div className="bg-gray-100 p-6 rounded-md">
          <div className="flex justify-center items-center">
            <span className="text-4xl font-extrabold text-headingColor">
              ${total.toFixed(2)}
            </span>
          </div>
          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm pb-5">
              <span className="mx-auto">
                <strong>Events</strong>
              </span>
              <span className="mx-auto whitespace-pre-line">{`${packet?.name}`}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Event price{" "}
              <span className="ml-auto font-bold">${price.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
              Total <span className="ml-auto">${total.toFixed(2)}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
