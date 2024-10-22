import { useState, useMemo } from "react";
import { Event as EventType } from "../data/eventData";

// Helper function to parse the cost of an event
export const parseCost = (cost: string) => {
  if (cost.toLowerCase() === "free") {
    return { isFree: true, prices: [] };
  }

  // Extract multiple prices, if available
  const priceMatches = cost.match(/\$\d+\.\d{2}/g);
  return { isFree: false, prices: priceMatches || [] };
};

// Create the useEventCart hook
const useEventCart = () => {
  const [selectedEvents, setSelectedEvents] = useState<
    { event: EventType; priceIndex: number | null }[]
  >([]);
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to toggle event selection, now with priceIndex handling
  const toggleEventSelection = (event: EventType, priceIndex: number | null = null) => {
    setSelectedEvents((prevSelectedEvents) => {
      const isAlreadySelected = prevSelectedEvents.some(
        (selectedEvent) =>
          selectedEvent.event === event && selectedEvent.priceIndex === priceIndex
      );

      if (isAlreadySelected) {
        // Deselect event if it is already selected
        return prevSelectedEvents.filter(
          (selectedEvent) =>
            !(selectedEvent.event === event && selectedEvent.priceIndex === priceIndex)
        );
      } else {
        // Deselect any other price for this event before selecting a new one
        return [
          ...prevSelectedEvents.filter(
            (selectedEvent) => selectedEvent.event !== event
          ),
          { event, priceIndex }
        ];
      }
    });
  };

  // Calculate total cost based on selected events
  const totalCost = useMemo(() => {
    return selectedEvents.reduce((total, selectedEvent) => {
      const { event, priceIndex } = selectedEvent;
      if (event.cost.toLowerCase() === "free") return total;

      const prices = event.cost.match(/\$\d+\.\d{2}/g);
      if (prices && priceIndex !== null && prices[priceIndex]) {
        return total + parseFloat(prices[priceIndex].replace("$", ""));
      }
      return total;
    }, 0);
  }, [selectedEvents]);

  // Function to check if a specific event and price is selected
  const isEventSelected = (event: EventType, priceIndex: number | null = null) => {
    return selectedEvents.some(
      (selectedEvent) =>
        selectedEvent.event === event && selectedEvent.priceIndex === priceIndex
    );
  };

  // Create an array of titles of selected events
  const selectedEventTitles = selectedEvents.map(({ event }) => event.title);

  // Create an array of prices of selected events (show "Free" for free events)
  const selectedEventPrices = selectedEvents.map(({ event, priceIndex }) => {
    const { isFree, prices } = parseCost(event.cost);
    return isFree ? "Free" : prices[priceIndex ?? 0]; // Set "Free" if the event is free
  });

  // Function to handle Pay button click
  const handlePay = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    selectedEvents,
    totalCost,
    toggleEventSelection,
    isEventSelected,
    selectedEventTitles,
    selectedEventPrices,
    isModalOpen,
    handlePay,
    closeModal
  };
};

export default useEventCart;
