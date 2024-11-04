export interface DefinitionResponse {
    license:    License;
    meanings:   Meaning[];
    phonetic:   string;
    phonetics:  Phonetic[];
    sourceUrls: string[];
    word:       string;
}

export interface License {
    name: string;
    url:  string;
}

export interface Meaning {
    antonyms:     string[];
    definitions:  DefinitionElement[];
    partOfSpeech: string;
    synonyms:     string[];
}

export interface DefinitionElement {
    antonyms:   any[];
    definition: string;
    example?:   string;
    synonyms:   any[];
}

export interface Phonetic {
    audio:     string;
    license:   License;
    sourceUrl: string;
    text:      string;
}
