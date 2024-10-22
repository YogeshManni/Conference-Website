import React from "react";
import { eventData, Event as EventType } from "../../data/eventData";

const Event: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 py-4">
        <h1 className="text-white text-center text-3xl font-bold">Events</h1>
      </header>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {eventData.map((event: EventType, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg h-full flex flex-col"
          >
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
                  <strong>Submission Deadline:</strong> {event.submissionDeadline}
                </p>
              )}
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
        ))}
      </div>
    </div>
  );
};

export default Event;
