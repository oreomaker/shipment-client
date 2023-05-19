export interface ContactState {
  name: string;
  address: string;
  phone: string;
}

export interface CargoState {
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface ShipOrderState {
  sender: ContactState;
  receiver: ContactState;
  cargo: CargoState;
}
