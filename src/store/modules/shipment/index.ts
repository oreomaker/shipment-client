import { defineStore } from 'pinia';
import { ShipOrderState } from './types';

const useShipmentStore = defineStore('shipment', {
  state: (): ShipOrderState => ({
    sender: {
      name: '',
      address: '',
      phone: '',
    },
    receiver: {
      name: '',
      address: '',
      phone: '',
    },
    cargo: {
      name: '',
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
    },
  }),
  getters: {
    shipOrder(state: ShipOrderState): ShipOrderState {
      return { ...state };
    },
  },
  actions: {
    setShipOrder(partial: Partial<ShipOrderState>) {
      this.$patch(partial);
    },
  },
});

export default useShipmentStore;
