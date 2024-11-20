import React, { useState } from "react";
import { presentersData } from "../../data/presentersData";
import PresenterModal from "./PresenterModal";

const Presenters: React.FC = () => {
  const [selectedPresenter, setSelectedPresenter] = useState<
    null | (typeof presentersData)[0]
  >(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (presenter: (typeof presentersData)[0]) => {
    setSelectedPresenter(presenter);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPresenter(null);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 py-4">
        <h1 className="text-white text-center text-3xl font-bold">
          Presenters
        </h1>
      </header>

      {/* Presenters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 lg:gap-6 lg:p-6">
        {presentersData.map((presenter, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="bg-white rounded-lg shadow-lg h-full flex flex-col"
          >
            {/* Presenter Image */}
            {presenter.img && (
              <img
                src={presenter.img}
                alt={presenter.name}
                className="rounded-t-lg h-[300px]  object-cover"
              />
            )}

            <div className="p-4 flex-grow">
              <h2 className="text-xl font-semibold mb-2">{presenter.name}</h2>

              <p className="text-gray-600">
                <strong>Day:</strong> {presenter.day}
              </p>

              <p className="text-gray-600">
                <strong>Type:</strong> {presenter.type}
              </p>
            </div>

            {/* Show More button to open the modal */}
            <div className="border-t p-4">
              <button
                onClick={() => openModal(presenter)}
                className="text-blue-500 font-medium cursor-pointer"
              >
                Show More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Presenter Modal */}
      <PresenterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        presenter={selectedPresenter}
      />
    </div>
  );
};

export default Presenters;
