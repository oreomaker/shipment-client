import axios from 'axios';

export interface CityData {
  id: number;
  city: string;
}

export interface CargoData {
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  outBranch: number;
}

export interface CargoInfo {
  id: number;
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  inTime: string;
  outTime: string;
  status: number;
  outBranch: CityData;
}

export interface OutStorageData {
  id: number;
  branch: CityData;
  earliestTime: string;
  cargoList: CargoInfo[];
  is_delete: boolean;
  is_available: boolean;
}

export interface StorageData {
  shelf: string;
  floor: number;
  number: number;
  cargo: CargoData;
  status: number;
}

export function inStorage(data: CargoData) {
  return axios.post('/api/warehouse/cargo', data);
}

export function outStorage(id: number) {
  return axios.delete(`/api/warehouse/${id}`);
}

export function getCargo() {
  return axios.get('/api/warehouse/outList');
}

export function getStorage() {
  return axios.get('/api/warehouse/storage');
}

export function getCity() {
  return axios.get('/api/branch/');
}
