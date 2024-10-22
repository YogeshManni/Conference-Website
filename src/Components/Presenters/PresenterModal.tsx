import React from "react";

interface PresenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  presenter: {
    name: string;
    img?: string;
    day: string;
    type: string;
    bio: string;
    awards?: string[];
  } | null;
}

const PresenterModal: React.FC<PresenterModalProps> = ({ isOpen, onClose, presenter }) => {
  if (!isOpen || !presenter) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto p-6"
           style={{ maxHeight: '75%', overflowY: 'auto' }}>
        <button
          onClick={onClose}
          className="text-red-500 font-bold text-lg float-right"
        >
          &times;
        </button>
        {presenter.img && (
          <img
            src={presenter.img}
            alt={presenter.name}
            className="w-1/3 h-1/3 object-cover rounded-lg mb-4"
          />
        )}
        <h2 className="text-xl font-semibold mb-2">{presenter.name}</h2>
        <p className="text-gray-600">
          <strong>Day:</strong> {presenter.day}
        </p>
        <p className="text-gray-600">
          <strong>Type:</strong> {presenter.type}
        </p>

            {/* Awards Section */}
        {presenter.awards && presenter.awards.length > 0 && (
          <div className="mt-4">
            <p className="text-gray-600 font-semibold"><strong>Awards:</strong></p>
            <ul className="list-disc list-inside text-gray-600">
              {presenter.awards.map((award, index) => (
                <li key={index}>{award}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <p className="text-gray-600">
            {presenter.bio.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>


        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresenterModal;
