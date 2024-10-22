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

  // Function to toggle event selection, now with priceIndex handling
  const toggleEventSelection = (event: EventType, priceIndex: number | null = null) => {
    setSelectedEvents((prevSelectedEvents) => {
      const isAlreadySelected = prevSelectedEvents.some(
        (selectedEvent) =>
          selectedEvent.event === event && selectedEvent.priceIndex === priceIndex
      );

      if (isAlreadySelected) {
        return prevSelectedEvents.filter(
          (selectedEvent) =>
            !(selectedEvent.event === event && selectedEvent.priceIndex === priceIndex)
        );
      } else {
        return [...prevSelectedEvents, { event, priceIndex }];
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

  return {
    selectedEvents,
    totalCost,
    toggleEventSelection,
    isEventSelected,
  };
};

export default useEventCart;
