export interface IItem {
  name: {
    common: string;
  };
  population: number;
  area: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  borders: string[];
  cioc: string;
  cca3: string;
}

export interface IOption {
  label: string;
  value: string;
}
