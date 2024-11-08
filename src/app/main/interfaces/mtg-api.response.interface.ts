export interface CardInterface {
    name: string,
    manaCost: "{2}{U}{U}",
    cmc: number,
    colors: ColorCard[],
    colorIdentity: ColorCard[],
    rarity: RarityCard,
    text: string,
    imageUrl: string,
    id: string
}

export interface MtgResponse {
    cards: Card[];
}

export interface Card {
    name:           string;
    manaCost?:      string;
    cmc:            number;
    type:           string;
    rarity:         RarityCard;
    set:            string;
    setName:        string;
    text:           string;
    artist:         string;
    number:         string;
    power?:         string;
    toughness?:     string;
    layout?:        string;
    multiverseid?:  string;
    imageUrl?:      string;
    variations?:    string[];
    rulings?:       string;
    foreignNames?:  ForeignName[];
    printings:      string[];
    originalText?:  string;
    originalType?:  string;
    legalities?:    string;
    id:             string;
    colorIdentity?: ColorCard[];
    flavor?:        string;
    colors?:        ColorCard[];
    watermark?:     string;
}

export enum ColorCard {
    B = "B",
    G = "G",
    R = "R",
    W = "W",
    U = "U"
}

export interface ForeignName {
    name:         string;
    text:         string;
    type:         string;
    flavor:       null | string;
    imageUrl:     string;
    language:     string;
    identifiers:  Identifiers;
    multiverseid: number;
    faceName?:    string;
}

export interface Identifiers {
    scryfallId:   string;
    multiverseId: number;
}


export enum RarityCard {
    Common = "Common",
    Mythic = "Mythic",
    Rare = "Rare",
    Uncommon = "Uncommon",
}

