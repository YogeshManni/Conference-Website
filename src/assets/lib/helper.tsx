import { events } from "./data";

interface paymentData {
  price: number;
  name: string;
}
// function to get data packet for payment comp.
export const getPacket = (
  item: paymentData | null = null,
  index: number | null = null
) => {
  let packet;
  if (item) {
    packet = {
      price: item.price,
      name: `${item.name} - Day ${(index ?? 0) + 1}`,
    };
  } else {
    packet = {
      price: events.reduce((acc, item) => acc + (item?.price ?? 0), 0),
      name: events
        .map((item, idx) => `${item.name} - Day ${idx + 1}`)
        .join("\n"),
    };
  }

  return packet;
};
