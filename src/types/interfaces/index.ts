export interface Ticket {
  id: number | null;
  departure: string;
  destination: string;
  date: string;
  deperatureTime: string;
  arrivalTime: string;
  price: number;
  carrier: string
}
