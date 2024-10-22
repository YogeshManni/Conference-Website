import { useState } from "react";
import { Event as EventType } from "../data/eventData";

const parseCost = (cost: string) => {
    if (cost.toLowerCase() === "free") return 0;
  
    // Extract the first price from the string, if multiple prices exist
    const match = cost.match(/\$([\d,.]+)/);
    if (match) {
      return parseFloat(match[1].replace(/,/g, ''));
    }
    
    return 0;
  };
  

const useEventCart = () => {
  const [selectedEvents, setSelectedEvents] = useState<EventType[]>([]);

  // Calculate total cost
  const totalCost = selectedEvents.reduce((acc, event) => acc + parseCost(event.cost), 0);

  // Handle select/deselect event
  const toggleEventSelection = (event: EventType) => {
    let updatedSelectedEvents;
    if (selectedEvents.includes(event)) {
      updatedSelectedEvents = selectedEvents.filter((e) => e !== event); // Deselect the event
    } else {
      updatedSelectedEvents = [...selectedEvents, event]; // Select the event
    }

    setSelectedEvents(updatedSelectedEvents);

    // Log the cost of each selected event after updating the state
    updatedSelectedEvents.forEach((selectedEvent) => {
      console.log(`Selected Event: ${selectedEvent.title}, Price: ${parseCost(selectedEvent.cost)}`);
    });
  };

  return {
    selectedEvents,
    totalCost,
    toggleEventSelection,
  };
};

export default useEventCart;
