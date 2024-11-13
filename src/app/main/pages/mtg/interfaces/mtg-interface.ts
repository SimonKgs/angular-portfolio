import { ColorCard, RarityCard } from "../../../interfaces/mtg-api.response.interface";

export interface CardInterface {
    name: string,
    manaCost: string,
    cmc: number,
    types: string[];
    supertypes: string[];
    type: string;
    colors: ColorCard[],
    colorIdentity: ColorCard[],
    rarity: RarityCard,
    text: string,
    imageUrl: string,
    id: string
}

export interface DeckInterface {
    id: string;
    name: string;
    cards: CardInterface[];
    identity: ColorCard[]
    commander: CardInterface;
}