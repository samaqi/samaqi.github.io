import { ALL_CARDS } from "./CardLists";

const DEFAULT_QUANTITY = 10;
const DEFAULT_DECK_SIZE = 5;
const EASY_THRESHOLD = 25;
const MED_THRESHOLD = 35;
const HARD_THRESHOLD = 50;

export const RandomStrategy = {
    DEFAULT: "Default",
    NO_A_LEVEL: "No A Level",
    EASY_LEVEL: "Easy Level",
    MEDIUM_LEVEL: "Low Level",
    HARD_LEVEL: "Hard Level",
}

export function getRandomDeck(strategy) {
    switch (strategy) {
        case RandomStrategy.DEFAULT:
            return getRandomDeckDefault();
        case RandomStrategy.NO_A_LEVEL:
            return getRandomDeckNoALevel();
        case RandomStrategy.EASY_LEVEL:
            return getRandomDeckEasyLevel();
        case RandomStrategy.MEDIUM_LEVEL:
            return getRandomDeckMediumLevel();
        case RandomStrategy.HARD_LEVEL:
            return getRandomDeckHardLevel();
        default:
            return getRandomDeckDefault();
    }
}

function getRandomDeckDefault() {    
    const availableCards = ALL_CARDS.filter(card => card.name !== "hidden_card")
                                    .map(card => ({
                                        name: card.name,
                                        level: card.level === "A" ? 10 : card.level,
                                        quantity: card.level === "A" ? 1 : DEFAULT_QUANTITY
                                    })); 

    const max_threshold = DEFAULT_DECK_SIZE * 10;

    return buildRandomDeck(availableCards, 0, max_threshold);
}

function getRandomDeckNoALevel() {
    const availableCards = ALL_CARDS.filter(card => card.level !== "A" && card.name !== "hidden_card")
                                    .map(card => ({
                                        name: card.name,
                                        level: card.level === "A" ? 10 : card.level,
                                        quantity: card.level === "A" ? 1 : DEFAULT_QUANTITY
                                    })); 

    const max_threshold = DEFAULT_DECK_SIZE * 9;
    
    return buildRandomDeck(availableCards, 0, max_threshold);
}

function getRandomDeckEasyLevel() {
    const availableCards = ALL_CARDS.map(card => ({
        name: card.name,
        level: card.level === "A" ? 10 : card.level,
        quantity: card.level === "A" ? 1 : DEFAULT_QUANTITY
    })); 
    return buildRandomDeck(availableCards, 0, EASY_THRESHOLD);
}

function getRandomDeckMediumLevel() {
    const availableCards = ALL_CARDS.map(card => ({
        name: card.name,
        level: card.level === "A" ? 10 : card.level,
        quantity: card.level === "A" ? 1 : DEFAULT_QUANTITY
    })); 

    return buildRandomDeck(availableCards, EASY_THRESHOLD, MED_THRESHOLD);
}

function getRandomDeckHardLevel() {
    const availableCards = ALL_CARDS.map(card => ({
        name: card.name,
        level: card.level === "A" ? 10 : card.level,
        quantity: card.level === "A" ? 1 : DEFAULT_QUANTITY
    })); 

    return buildRandomDeck(availableCards, MED_THRESHOLD, HARD_THRESHOLD);
}

function buildRandomDeck(availableCards, minThreshold, maxThreshold) {
    let totalCards = ALL_CARDS.map(card => card.level === "A" ? 1 : DEFAULT_QUANTITY)
                                .reduce((partialSum, a) => partialSum + a, 0);
    let deck = [];
    
    function checkValidDeck() {
        let sumLevel = 0;
        for (const card_id of deck) {
            sumLevel += availableCards[card_id].level;
        }
        return sumLevel > minThreshold && sumLevel <= maxThreshold;
    }

    // Weighted Random Algorithm
    function getRandomCardId() {
        for (let i = 0; i < DEFAULT_DECK_SIZE; i++) {
            let random = Math.floor(Math.random() * totalCards);
            for (let card_id = 0; card_id < availableCards.length; card_id++) {
                let card = availableCards[card_id];
                random -= card.quantity;
                if (random <= 0) {
                    card.quantity--;
                    totalCards --;
                    return card_id;
                }
            }
        }
    
        return null;
    }

    function discardDeck() {
        for (const card_id of deck) {
            availableCards[card_id].quantity++;
        }
        totalCards += deck.length;
    }   

    function buildDeck() {
        for (let i = 0; i < DEFAULT_DECK_SIZE; i++) {
            let card_id = getRandomCardId();
            deck.push(card_id);
        }
    }

    while (!checkValidDeck()) {
        if (deck.length > 0) {
            discardDeck();
            deck = [];
        }
        buildDeck();
    }

    console.log(deck.map(card_id => availableCards[card_id].name));
    return deck.map(card_id => availableCards[card_id].name);  
}