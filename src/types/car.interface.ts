export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  color?: string;
}

export interface CarDetails {
  isOpen: boolean;
  closeModal: () => void;
  car: Car;
}

export interface CarCard {
  car: Car
}