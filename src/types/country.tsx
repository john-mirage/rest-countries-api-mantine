interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface Flag {
    png: string;
    svg: string;
}

interface BorderCountry {
    name: string;
    alpha3Code: string;
}

export interface HomeCountry {
    name: string;
    population: number;
    region: string;
    capital: string;
    flags: Flag;
    alpha3Code: string;
}

export interface Country {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: Currency[];
    languages: Language[];
    borders: BorderCountry[];
    flag: string;
}