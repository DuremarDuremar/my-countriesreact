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

export interface IName {
  name: {
    common: string;
    nativeName: {
      [propName: string]: {
        common: string;
      };
    };
  };
  population: number;
  area: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: {
    [propName: string]: {
      name: string;
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    [propName: string]: string;
  };
  tld?: {
    [propName: number]: string;
  };
  borders?: string[];
}
