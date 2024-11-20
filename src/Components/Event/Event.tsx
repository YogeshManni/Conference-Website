import React from "react";
import { eventData, Event as EventType } from "../../data/eventData";
import useEventCart, { parseCost } from "../../hooks/useEventCart";
import ReviewOrder from "../ReviewOrder";

const Event: React.FC = () => {
  const {
    selectedEvents,
    totalCost,
    toggleEventSelection,
    isEventSelected,
    selectedEventTitles,
    selectedEventPrices,
    isModalOpen,
    handlePay,
    closeModal,
  } = useEventCart();

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 py-4">
        <h1 className="text-white text-center text-3xl font-bold">Events</h1>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {eventData.map((event: EventType, index: number) => {
          const { isFree, prices } = parseCost(event.cost);

          return (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-lg shadow-lg h-full flex flex-col"
            >
              {/* Event Image */}
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}

              <div className="p-4 flex-grow">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600">
                  <strong>Date & Time:</strong> {event.dateTime}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
                {event.presenter && (
                  <p className="text-gray-600">
                    <strong>Presenter:</strong> {event.presenter}
                  </p>
                )}
                {event.editor && (
                  <p className="text-gray-600">
                    <strong>Editor:</strong> {event.editor}
                  </p>
                )}
                <p className="text-gray-600">
                  <strong>Cost:</strong> {event.cost}
                </p>
                {event.submissionDeadline && (
                  <p className="text-gray-600">
                    <strong>Submission Deadline:</strong>{" "}
                    {event.submissionDeadline}
                  </p>
                )}

                {/* Buttons based on cost */}
                <div className="mt-4">
                  {isFree ? (
                    <button
                      onClick={() => toggleEventSelection(event)}
                      className={`Btn px-4 py-2 mb-2 rounded-lg text-white ${
                        isEventSelected(event) ? "bg-red-500" : "bg-green-500"
                      }`}
                    >
                      {isEventSelected(event)
                        ? "Deselect"
                        : "Add to cart: Free"}
                    </button>
                  ) : (
                    prices.map((price: string, priceIndex: number) => (
                      <button
                        key={priceIndex}
                        onClick={() => toggleEventSelection(event, priceIndex)}
                        className={`Btn px-4 py-2 mr-2 mb-2 rounded-lg text-white ${
                          isEventSelected(event, priceIndex)
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      >
                        {isEventSelected(event, priceIndex)
                          ? "Deselect"
                          : `Add to cart: ${price}`}
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Expandable Description */}
              <div className="border-t">
                <details className="p-4">
                  <summary className="cursor-pointer text-blue-500 font-medium">
                    Details
                  </summary>
                  <p className="text-gray-600 mt-2">
                    {event.description.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </details>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Total Cost with Review Button */}
      <div
        className="fixed bottom-4 right-4 bg-[#f15d30] text-white px-4 py-2 rounded-lg shadow-lg flex flex-col items-start space-y-1 cursor-pointer hover:bg-[#e14a26] transition-colors duration-200"
        onClick={handlePay}
      >
        <h2 className="text-xl font-semibold">Pay: ${totalCost.toFixed(2)}</h2>
        <p className="text-sm font-medium">Review Details</p>
      </div>

      {/* Review Order Modal */}
      {isModalOpen && (
        <ReviewOrder
          titles={selectedEventTitles}
          prices={selectedEventPrices}
          totalCost={totalCost}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Event;
