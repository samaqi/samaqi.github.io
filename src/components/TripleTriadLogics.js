import { ALL_CARDS, Element } from "./CardLists";

const names = [
    'Geezard', 'Funguar', 'Blood Soul', 'Caterchipillar', 'Trustaevis', 'Anacondaur', 'Tri-Face', 'Fastitocalon', 'Abyss Worm', 'Turtapod', 'Imp', "Blue Dragon", 'Elastoid', 'GIM47M', 'Elnoyle', "X-ATM092", 'Shumi Tribe', 'Krysta', 'Tiamat', 'BGH251F2', 'MiniMog', 'Chicobo', 'Carbuncle', 'Diablos', 'Bahamut', 'Doomtrain', 'Irvine', 'Zell',
    'Bite Bug', 'Red Bat', 'Cockatrice', 'Grat', 'Creeps', 'Grendel', 'Snow Lion', 'Ochu', 'Vysage', 'T-Rexaur', 'Adamantoise', 'Hexadragon', 'Malboro', 'Ruby Dragon', 'Granaldo', 'Gerogero', 'Propagator', 'Jumbo Cactuar', 'Red Giant', 'Catoblepas', 'Quezacotl', 'Shiva', 'Leviathan', 'Odin', 'Eden', 'Ward', 'Rinoa', 'Edea',
    'Blobra', 'Gayla', 'Buel', 'Mesmerize', "Jelleye", "Grand Mantis", 'SAM08G', 'Death Claw', 'Bomb', 'Blitz', 'Iron Giant', 'Behemoth', 'Elvoret', 'Tonberry King', 'Iguion', 'Abadon', 'Tri-Point', 'Gargantua', 'Ultima Weapon', 'Chubby Chocobo', 'Ifrit', 'Siren', 'Pandemona', 'Cerberus', 'Kiros', 'Laguna', 'Seifer', 'Squall',
    'Gesper', 'Fastitocalon-F', 'Glacial Eye', "Belhelmel", 'Forbidden', 'Armadodo', 'Cactuar', 'Tonberry', 'Wendigo', 'Torama', 'Chimera', 'PuPu', 'Biggs / Wedge', 'Fujin / Raijin', 'Trauma', 'Oilboyle', 'Mobile Type 8', 'Sphinxara', 'Angelo', 'Gilgamesh', 'Minotaur', 'Sacred', 'Alexander', 'Phoenix', 'Selphie', 'Quistis', 'hidden_card'
]



const ALL_CARDS_DICT = Object.fromEntries(ALL_CARDS.map(card => [card.name, card]));


function getFrameNumber(name) {
    // return index of the card in the names array
    return names.indexOf(name);
}

function getCardCoordinates(name) {
    // return x, y coordinates for the card in the sprite sheet
    const CARD_WIDTH = 64; // Width of each card in pixels
    const CARD_HEIGHT = 64; // Height of each card in pixels
    const COLUMNS = 28; // Number of columns in the grid
    const order = getFrameNumber(name);
    const row = Math.ceil(order / COLUMNS);
    const column = order - COLUMNS * (row - 1);
    const x = column * CARD_WIDTH;
    const y = (row - 1) * CARD_HEIGHT;
    return { x, y };
}

function getCardNumbers(name) {
    const cardNumbers = ALL_CARDS.reduce((acc, item) => {
        acc[item.name] = item.numbers;
        return acc;
    }, {});


    return cardNumbers[name];
}

// class Card {
//     constructor(name, color) {
//         this.name = name;
//         this.originalColor = color;
//         this.color = color;
//         this.frameNumber = getFrameNumber(name);
//         this.image = null; // This will be set when the card is added to the scene


//         // Set the numbers for this card
//         this.numbers = getCardNumbers(name);
//         this.up = this.numbers[0];
//         this.left = this.numbers[1];
//         this.right = this.numbers[2];
//         this.down = this.numbers[3];
//     }
// }

export class FrontendCard {
    // constructor(name, color, index, row = 0, col = 0, played = false, placed = false) {
    constructor(data) {
        this.playerId = data.playerId;
        this.name = data.name;
        this.originalColor = data.color;
        this.color = data.color;
        this.index = data.index;
        this.row = data.row || 0;
        this.col = data.col || 0;
        // this.element = ALL_CARDS_DICT[data.name].element;
        this.element = data.element;
        this.positionElement = data.positionElement || Element.NONE;
        this.frameNumber = getFrameNumber(data.name);
        this.image = null; // This will be set when the card is added to the scene


        // Set the numbers for this card
        this.numbers = getCardNumbers(data.name);
        this.up = this.numbers[0];
        this.left = this.numbers[1];
        this.right = this.numbers[2];
        this.down = this.numbers[3];

        // new React properties
        this.id = Math.random();
        this.src = '/img/all_cards.png';
        this.alt = data.name;
        this.isSelected = false;
        this.played = data.played || false;
        this.placed = data.placed || false;
        const { x, y } = getCardCoordinates(data.name);
        this.x = x;  // change these based on getFrameNumber
        this.y = y;
        this.width = 64;
        this.height = 64;

    }
    toString() {
        return `FrontendCard(name: ${this.name}, color: ${this.color})`;
    }

    static fromCardHandArray(cardHandArray, color) {
        return cardHandArray.map(cardHand => new FrontendCard(
            { playerId: cardHand.playerId, name: cardHand.cardId, color: color, index: cardHand.index, row: 0, col: 0, played: cardHand.played, placed: false, element: cardHand.element }
        ));
    }

    static fromBoard(board) {
        return board.flat().map((card, index) => {
            const rowIndex = Math.floor(index / board[0].length);
            const colIndex = index % board[0].length;
            return new FrontendCard({
                playerId: null, name: card.id, color: card.color, index: 0, row: rowIndex, col: colIndex,
                played: card.played, placed: !card.ishidden_card(),
                element: card.element, positionElement: card.positionElement
            });
        });
    }
}

export class Card {
    constructor(position) {
        this.position = position;
        this.id = "hidden_card";
        this.originalColor = "";
        this.color = "";
        this.active = false; // if card can flip other cards
        this.element = Element.NONE;
        this.positionElement = Element.NONE;
        this.numbers = [];
        this.original_numbers = [];
    }

    updateNumbers(delta) {
        this.numbers = this.numbers.map(n => {
            let effective = n !== "A" ? n : 10;
            let updated = effective + delta;
            return updated >= 10 ? "A" : updated;
        });
    }

    assignCard(cardId, color) {
        this.id = cardId;
        this.originalColor = color;
        this.color = color;
        this.element = ALL_CARDS_DICT[cardId].element;
        this.numbers = [...ALL_CARDS_DICT[cardId].numbers];
        this.original_numbers = [...ALL_CARDS_DICT[cardId].numbers];
    }

    ishidden_card() {
        return this.id === "" || this.id === "hidden_card";
    }

    toString() {
        return `${this.id} (${this.color}) (${this.position})`;
    }

    update(id, originalColor, color) {
        this.id = id;
        this.originalColor = originalColor;
        this.color = color;
    }

    flipColor() {
        this.color = this.color === Color.RED ? Color.BLUE : Color.RED;
    }

    flip() {
        this.flipColor();
        this.active = true;
    }

    doneFlipping() {
        this.active = false;
    }

    _toNumber(value) {
        return value === "A" ? 10 : value;
    }

    sameSide(other) {
        return this.color === other.color;
    }

    isNeighbor(otherCard) {
        return (
            Math.abs(this.position.row - otherCard.position.row) +
            Math.abs(this.position.col - otherCard.position.col) === 1
        );
    }

    getDirection(otherCard) {
        const direction = [
            otherCard.position.row - this.position.row,
            otherCard.position.col - this.position.col
        ];
        if (direction[0] === 0 && direction[1] === 1) return Direction.RIGHT;
        if (direction[0] === 1 && direction[1] === 0) return Direction.DOWN;
        if (direction[0] === 0 && direction[1] === -1) return Direction.LEFT;
        if (direction[0] === -1 && direction[1] === 0) return Direction.UP;
        throw new Error(`Invalid direction ${direction}`);
    }

    sameEdge(otherCard) {
        if (!this.isNeighbor(otherCard)) {
            // console.warn(`sameEdge: ${this} and ${otherCard} are not neighbors`);
            return false;
        }

        const direction = this.getDirection(otherCard);
        // console.log("... ", direction);

        if (direction === Direction.RIGHT) {
            return this.rightOriginalNumber === otherCard.leftOriginalNumber;
        } else if (direction === Direction.DOWN) {
            return this.downOriginalNumber === otherCard.upOriginalNumber;
        } else if (direction === Direction.LEFT) {
            return this.leftOriginalNumber === otherCard.rightOriginalNumber;
        } else if (direction === Direction.UP) {
            return this.upOriginalNumber === otherCard.downOriginalNumber;
        } else {
            throw new Error(`Invalid direction ${direction}`);
        }
    }

    sumEdge(otherCard) {
        if (!this.isNeighbor(otherCard)) {
            // console.warn(`sumEdge: ${this} and ${otherCard} are not neighbors`);
            return 0;
        }

        const direction = this.getDirection(otherCard);
        if (direction === Direction.RIGHT) {
            return this.rightOriginalNumber + otherCard.leftOriginalNumber;
        } else if (direction === Direction.DOWN) {
            return this.downOriginalNumber + otherCard.upOriginalNumber;
        } else if (direction === Direction.LEFT) {
            return this.leftOriginalNumber + otherCard.rightOriginalNumber;
        } else if (direction === Direction.UP) {
            return this.upOriginalNumber + otherCard.downOriginalNumber;
        } else {
            throw new Error(`Invalid direction ${direction}`);
        }
    }

    get up() {
        return this.numbers[0] || 0;
    }

    get right() {
        return this.numbers[2] || 0;
    }

    get down() {
        return this.numbers[3] || 0;
    }

    get left() {
        return this.numbers[1] || 0;
    }

    get upNumber() {
        return this._toNumber(this.numbers[0]);
    }

    get rightNumber() {
        return this._toNumber(this.numbers[2]);
    }

    get downNumber() {
        return this._toNumber(this.numbers[3]);
    }

    get leftNumber() {
        return this._toNumber(this.numbers[1]);
    }

    get upOriginalNumber() {
        return this._toNumber(this.original_numbers[0]);
    }

    get rightOriginalNumber() {
        return this._toNumber(this.original_numbers[2]);
    }

    get downOriginalNumber() {
        return this._toNumber(this.original_numbers[3]);
    }

    get leftOriginalNumber() {
        return this._toNumber(this.original_numbers[1]);
    }

    get upOriginal() {
        return this.original_numbers[0] || 0;
    }

    get rightOriginal() {
        return this.original_numbers[2] || 0;
    }

    get downOriginal() {
        return this.original_numbers[3] || 0;
    }

    get leftOriginal() {
        return this.original_numbers[1] || 0;
    }
}

export class FlipSequence {
    constructor(data) {
        this.flipper = data.flipper;
        this.targets = data.targets;
        this.rule = data.rule;
    }

    getFlipDirection(target) {
        const flipper = this.flipper;
        const direction = [
            target.position.row - flipper.position.row,
            target.position.col - flipper.position.col
        ];
        if (direction[0] === 0 && direction[1] === 1) return Direction.RIGHT;
        if (direction[0] === 1 && direction[1] === 0) return Direction.DOWN;
        if (direction[0] === 0 && direction[1] === -1) return Direction.LEFT;
        if (direction[0] === -1 && direction[1] === 0) return Direction.UP;
    }

    toString() {
        return `${this.flipper} ${this.rule} flipped ${this.targets}`;
    }
}

class Rule {
    constructor(priority, name, checkCombo) {
        if (new.target === Rule) {
            throw new TypeError("Cannot construct Rule instances directly");
        }
        this.priority = priority;
        this.name = name;
        this.checkCombo = checkCombo;
    }

    flip(flipper, burgers) {
        throw new Error("Method 'flip()' must be implemented.");
    }

    canFlipSingle(flipper, opponentCard) {
        throw new Error("Method 'canFlipSingle()' must be implemented.");
    }

    canFlipPair(flipper, twoCards) {
        throw new Error("Method 'canFlipPair()' must be implemented.");
    }

    getPairs(burgers) {
        // return all possible pairs of burgers, order doesn't matter
        const pairs = [];
        for (let i = 0; i < burgers.length; i++) {
            for (let j = i + 1; j < burgers.length; j++) {
                pairs.push([burgers[i], burgers[j]]);
            }
        }
        return pairs;
    }
}

export class BasicRule extends Rule {
    constructor() {
        super(1, "Basic", false);
    }

    canFlipSingle(flipper, opponentCard) {
        if (flipper.sameSide(opponentCard)) {
            return false;
        }
        if (!flipper.isNeighbor(opponentCard)) {
            // console.warn(`WARNING: ${flipper} and ${opponentCard} are not neighbors`);
            return false;
        }
        const direction = [
            opponentCard.position.row - flipper.position.row,
            opponentCard.position.col - flipper.position.col
        ];
        if (direction[0] === 0 && direction[1] === 1) {  // opponent is on the right
            // console.log("...opponent is on the right");
            return flipper.rightNumber > opponentCard.leftNumber;
        } else if (direction[0] === 1 && direction[1] === 0) {  // opponent is below
            // console.log("...opponent is below");
            return flipper.downNumber > opponentCard.upNumber;
        } else if (direction[0] === 0 && direction[1] === -1) {  // opponent is on the left
            // console.log("...opponent is on the left");
            return flipper.leftNumber > opponentCard.rightNumber;
        } else if (direction[0] === -1 && direction[1] === 0) {  // opponent is above
            // console.log("...opponent is above");
            return flipper.upNumber > opponentCard.downNumber;
        } else {
            throw new Error(`Invalid direction ${direction}`);
        }
    }

    canFlipPair(flipper, twoCards) {
        return false;
    }

    flip(flipper, burgers) {
        // console.log("BasicRule flip...");
        const flipSequences = [];
        for (const burger of burgers) {
            if (this.canFlipSingle(flipper, burger)) {
                burger.flip();
                flipSequences.push(new FlipSequence({ flipper: flipper, targets: [burger], rule: this.name }));
            }
        }
        flipper.doneFlipping();
        // console.log("...flip sequences: ", flipSequences);
        return [flipSequences, []];
    }
}

export class ComboRule extends BasicRule {
    static priority = 2;
    static name = "Combo";
    static checkCombo = true;

    canFlipSingle(flipper, opponentCard) {
        return super.canFlipSingle(flipper, opponentCard);
    }

    flip(flipper, burgers) {
        // console.log("ComboRule flip...");
        const [flipSequences, _] = super.flip(flipper, burgers);
        const activatedCards = [];
        for (const flipSequence of flipSequences) {
            activatedCards.push(...flipSequence.targets);
        }
        return [flipSequences, activatedCards];
    }
}

export class SameRule extends Rule {
    static priority = 4;
    static name = "Same";
    static checkCombo = true;
    wall = false;

    constructor(wall) {
        super();
        this.wall = wall;
    }

    canFlipSingle(flipper, opponentCard) {
        return false;
    }

    canFlipPair(flipper, twoCards) {
        // console.log("... SameRule checking if " + flipper.id + " can flip " + twoCards[0].id + " and " + twoCards[1].id);
        return flipper.sameEdge(twoCards[0]) && flipper.sameEdge(twoCards[1]);
    }

    _flipGivenPairs(flipper, pairs) {
        // console.log("SameRule flip...");
        const flipSequences = [];
        const activatedCardPositions = new Set();
        const activatedCards = [];
        for (const pair of pairs) {
            if (this.canFlipPair(flipper, pair)) {
                const flippedCards = [];
                for (const card of pair) {
                    if (!flipper.sameSide(card)) {
                        card.flip();
                        flippedCards.push(card);
                    }
                }
                flipSequences.push(new FlipSequence({ flipper: flipper, targets: flippedCards, rule: this.constructor.name }));

                for (const card of flippedCards) {
                    if (!activatedCardPositions.has(card.position)) {
                        activatedCardPositions.add(card.position);
                        activatedCards.push(card);
                    }
                }
                if (!activatedCardPositions.has(flipper.position)) {
                    activatedCardPositions.add(flipper.position);
                    activatedCards.push(flipper);
                }
            }
        }
        // console.log("...SameRule flip sequences: ", flipSequences);
        return [flipSequences, activatedCards];
    }

    _getWallCards(card) {
        const wallCards = [];
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (const [dr, dc] of directions) {
            const row = card.position.row + dr;
            const col = card.position.col + dc;
            if (!(0 <= row && row < 3 && 0 <= col && col < 3)) {
                const wallCard = new Card(new Position(row, col));
                wallCard.assignCard("hidden_card", "");
                wallCards.push(wallCard);
            }
        }
        return wallCards;
    }

    _getWallPairs(flipper, burgers) {
        const wallCards = this._getWallCards(flipper);
        const pairs = this.getPairs(burgers);
        for (const wallCard of wallCards) {
            for (const burger of burgers) {
                pairs.push([wallCard, burger]);
            }
        }
        return pairs;
    }

    flip(flipper, burgers) {
        let pairs = [];
        if (this.wall) {
            pairs = this._getWallPairs(flipper, burgers);
        } else {
            pairs = this.getPairs(burgers);
        }
        return this._flipGivenPairs(flipper, pairs);
    }
}

export class PlusRule extends Rule {
    static priority = 3;
    static name = "Plus";
    static checkCombo = true;

    canFlipSingle(flipper, opponentCard) {
        return false;
    }

    canFlipPair(flipper, twoCards) {
        // console.log("... PlusRule checking if " + flipper.id + " can flip " + twoCards[0].id + " and " + twoCards[1].id);
        return flipper.sumEdge(twoCards[0]) === flipper.sumEdge(twoCards[1]);
    }

    flip(flipper, burgers) {
        // console.log("PlusRule flip...");
        const flipSequences = [];
        const activatedCardPositions = new Set();
        const activatedCards = [];
        for (const pair of this.getPairs(burgers)) {
            if (this.canFlipPair(flipper, pair)) {
                const flippedCards = [];
                for (const card of pair) {
                    if (!flipper.sameSide(card)) {
                        card.flip();
                        flippedCards.push(card);
                    }
                }
                flipSequences.push(new FlipSequence({ flipper: flipper, targets: flippedCards, rule: this.constructor.name }));

                // update activated cards list
                for (const card of flippedCards) {
                    if (!activatedCardPositions.has(card.position)) {
                        activatedCardPositions.add(card.position);
                        activatedCards.push(card);
                    }
                }
                if (!activatedCardPositions.has(flipper.position)) {
                    activatedCardPositions.add(flipper.position);
                    activatedCards.push(flipper);
                }
            }
        }
        // console.log("...SameRule flip sequences: ", flipSequences);
        return [flipSequences, activatedCards];
    }
}

export class Position {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    hashCode() {
        return `${this.row},${this.col}`;
    }

    equals(other) {
        if (other instanceof Position) {
            return this.row === other.row && this.col === other.col;
        }
        return false;
    }

    fromSpotToPosition(spot) {
        return new Position(Math.floor(spot / 3), spot % 3);
    }
}



export class ElementPosition {
    constructor({ element, position }) {
        this.element = element;
        this.position = position;
    }
}

export class ElementalRule extends Rule {
    static priority = 0;

    constructor(elementPositions) {
        super();
        this.elementPositions = elementPositions;
    }

    apply(card) {
        for (const elementPosition of this.elementPositions) {
            if (card.position.equals(elementPosition.position)) {
                card.updateNumbers(
                    card.element === elementPosition.element ? 1 : -1
                );
                break;
            }
        }
    }

    canFlipPair(flipper, twoCards) {
        return false;
    }

    canFlipSingle(flipper, opponentCard) {
        return false;
    }

    flip(flipper, burgers) {
        return [[], []];
    }
}

export const PlayerTurn = {
    LEFT: "left",
    RIGHT: "right"
};

export const Color = Object.freeze({
    RED: "red",
    BLUE: "blue"
});

export const Direction = Object.freeze({
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
});

export class CardHand {
    // constructor(cardId, color, index, played = false) {
    constructor(data) {
        this.cardId = data.cardId;
        this.color = data.color;
        this.index = data.index;
        this.played = data.played;
        this.playerId = data.playerId;
        this.element = ALL_CARDS_DICT[data.cardId].element;
        console.log("CardHand ALL_CARDS_DICT[data.cardId]: ", ALL_CARDS_DICT[data.cardId]);
    }

    hashCode() {
        return `${this.cardId},${this.color},${this.index},${this.played}`;
    }

    equals(other) {
        if (other instanceof CardHand) {
            return (
                this.cardId === other.cardId &&
                this.color === other.color &&
                this.index === other.index &&
                this.played === other.played
            );
        }
        return false;
    }
}

export class Player {
    constructor({ id, color, deck = null }) {
        this.id = id;
        this.color = color;
        this.deck = deck || Array.from({ length: 5 }, (_, i) => new CardHand({ cardId: "hidden_card", color: this.color, index: i, played: false, playerId: this.id }));
    }

    getDeckCards() {
        return this.deck.map(cardHand => cardHand.cardId);
    }

    getCard(index) {
        return this.deck[index];
    }

    playCard(index) {
        this.deck[index].played = true;
    }

    hasCard(index) {
        return !this.deck[index].played;
    }

    hashCode() {
        return `${this.id},${this.color},${this.deck.map(card => card.hashCode()).join(',')}`;
    }

    equals(other) {
        if (other instanceof Player) {
            return (
                this.id === other.id &&
                this.color === other.color &&
                this.deck.length === other.deck.length &&
                this.deck.every((card, index) => card.equals(other.deck[index]))
            );
        }
        return false;
    }
}

export class BoardState {
    constructor(playerIds = [], redDeck = [], blueDeck = [], moves = [], rules = []) {
        this.redDeck = redDeck; // Array of 5 strings representing 5 cards
        this.blueDeck = blueDeck; // Array of 5 strings representing 5 cards
        this.moves = moves; // Array of moves
        this.playerIds = playerIds;  // Array of 2
        this.rules = rules;
    }
}

export class Move {
    constructor(data) {
        this.playerId = data.playerId;
        this.row = data.row;
        this.col = data.col;
        this.cardIndex = data.cardIndex;
    }
}


export class TripleTriadBoard {
    constructor(playerIds, playerFirstTurnId = null, rules = null) {
        this.board = Array.from({ length: 3 }, (_, r) =>
            Array.from({ length: 3 }, (_, c) => new Card(new Position(r, c)))
        );
        this.scores = { [Color.BLUE]: 5, [Color.RED]: 5 };
        this.playerIds = playerIds;
        this.bluePlayer = new Player({ id: this.playerIds[1], color: Color.BLUE });
        this.redPlayer = new Player({ id: this.playerIds[0], color: Color.RED });
        this.moves = [];
        if (playerFirstTurnId !== null) {
            this.updatePlayerFirstTurn(playerFirstTurnId);
        }
        this.updateRules(rules);
    }

    copy() {
        const gameCopy = new TripleTriadBoard(this.playerIds, this.playerFirstTurnId, this.rules);
        const boardState = this.getBoardState();
        gameCopy.updateBoardState(boardState);
        return gameCopy;
    }

    updateRules(rules) {
        if (this.rules !== undefined) {
            return;  // rules have already been set
        }
        this.plusRule = null;
        this.sameRule = null;
        if (rules === null) {
            this.rules = [new BasicRule()];
        } else {
            this.rules = rules;
            for (const rule of this.rules) {
                if (rule instanceof PlusRule) {
                    this.plusRule = rule;
                } else if (rule instanceof SameRule) {
                    this.sameRule = rule;
                } else if (rule instanceof ElementalRule) {
                    // update this.board with the element positions
                    for (const elementPosition of rule.elementPositions) {
                        this.board[elementPosition.position.row][elementPosition.position.col].positionElement = elementPosition.element;
                    }
                }
            }
        }
    }

    updatePlayerFirstTurn(playerFirstTurnId) {
        this.playerFirstTurnId = playerFirstTurnId;
        this.playerSecondTurnId = this.playerIds[0] === playerFirstTurnId ? this.playerIds[1] : this.playerIds[0];
    }

    updateBoardState(boardState) {
        // updatePlayerDeck for each player in boardState
        this.updatePlayerDeck(this.playerIds[0], boardState.redDeck);
        this.updatePlayerDeck(this.playerIds[1], boardState.blueDeck);
        if (boardState.moves.length > 0) {
            this.updatePlayerFirstTurn(boardState.moves[0].playerId);
        }
        this.updateRules(boardState.rules);
        // call placeMove for each move in boardState.moves
        for (const move of boardState.moves) {
            this.placeMove(move.playerId, new Position(move.row, move.col), move.cardIndex);
        }
    }

    getBoardState() {
        return new BoardState(this.playerIds, this.redPlayer.getDeckCards(), this.bluePlayer.getDeckCards(), this.moves, this.rules);
    }

    getBoard() {
        return this.board;
    }

    getMoves() {
        return this.moves;
    }

    getCurrentTurnPlayerId() {
        return this.moves.length % 2 === 0 ? this.playerFirstTurnId : this.playerSecondTurnId;
    }

    getCurrentTurnColor() {
        const currentPlayer = this.getCurrentTurnPlayerId();
        return this.getPlayerFromId(currentPlayer).color;
    }

    getAvailablePositions() {
        const availablePositions = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                // console.log("... availablePositions", this.board[row][col]);
                if (this.board[row][col].ishidden_card()) {
                    availablePositions.push(new Position(row, col));
                }
            }
        }
        return availablePositions;
    }


    isRuleChosen(ruleName) {
        return this.rules.some(r => r.ruleName === ruleName);
    }

    getBotDeck() {
        return this.redPlayer.deck;
    }

    getPlayerDeck(playerId) {
        return this.getPlayerFromId(playerId).deck;
    }

    getPlayerFromId(playerId) {
        if (playerId === this.bluePlayer.id) {
            return this.bluePlayer;
        } else if (playerId === this.redPlayer.id) {
            return this.redPlayer;
        }
        throw new Error(`Player with id ${playerId} not found in the game's players: ${this.playerIds}`);
    }

    updatePlayerDeck(playerId, deck) {
        const player = this.getPlayerFromId(playerId);
        player.deck = deck.map((cardId, i) => new CardHand({ cardId: cardId, color: player.color, index: i, played: false, playerId: playerId }));
        console.log("... updated player deck", player.deck);
    }

    hasPlusRule() {
        return this.plusRule !== null;
    }

    hasSameRule() {
        return this.sameRule !== null;
    }

    applyElementalRuleIfApplicable(card) {
        for (const rule of this.rules) {
            if (rule instanceof ElementalRule) {
                rule.apply(card);
            }
        }
    }

    noHighPriorityRules() {
        return this.rules.every(rule => rule.priority < 2);
    }

    getCard(row, col) {
        return this.board[row][col];
    }

    getCardFromPosition(position) {
        return this.board[position.row][position.col];
    }

    getAvailableCardsOnDeck(playerId) {
        return this.getPlayerFromId(playerId).deck.filter(card => !card.played);
    }

    getScores() {
        return this.scores;
    }

    getScoreByPlayerId(playerId) {
        return this.scores[this.getPlayerFromId(playerId).color];
    }

    isGameOver() {
        return this.board.every(row => row.every(cell => cell.id !== "hidden_card"));
    }

    getWinnerId() {
        if (this.isGameOver()) {
            const winner = Object.keys(this.scores).reduce((a, b) => this.scores[a] > this.scores[b] ? a : b);
            if (this.scores[winner] === 5) {
                return "";
            }
            return winner;
        }
        return "";
    }

    updateScores() {
        const occupiedCards = { [Color.BLUE]: 0, [Color.RED]: 0 };
        this.board.forEach(row => {
            row.forEach(card => {
                if (!card.ishidden_card()) {
                    occupiedCards[card.color] += 1;
                }
            });
        });
        const remainingCards = 10 - Object.values(occupiedCards).reduce((a, b) => a + b, 0);
        const firstPlayerRemainingCards = Math.floor(remainingCards / 2);

        const firstPlayer = this.getPlayerFromId(this.playerIds[0]);  // this assumes red player is always the first player
        this.scores[firstPlayer.color] = firstPlayerRemainingCards + occupiedCards[firstPlayer.color];
        const theOtherColor = firstPlayer.color === Color.BLUE ? Color.RED : Color.BLUE;
        this.scores[theOtherColor] = 10 - this.scores[firstPlayer.color];
    }

    isValidMove(player, position, cardIndex) {
        return this.board[position.row][position.col].id === "hidden_card" && player.hasCard(cardIndex);
    }

    addMove(playerId, row, col, cardIndex) {
        this.moves.push(new Move({ playerId: playerId, row: row, col: col, cardIndex: cardIndex }));
    }

    placeMove(playerId, position, cardIndex) {
        const player = this.getPlayerFromId(playerId);
        if (this.isValidMove(player, position, cardIndex)) {
            const cardFromDeck = player.getCard(cardIndex);
            player.playCard(cardIndex);

            this.board[position.row][position.col].assignCard(cardFromDeck.cardId, player.color);
            const card = this.board[position.row][position.col];

            this.applyElementalRuleIfApplicable(card);
            console.log("... placeMove card", card);

            const flipSequences = this.flipCards(card);
            this.updateScores();
            this.addMove(playerId, position.row, position.col, cardIndex);
            return flipSequences;
        } else {
            throw new Error("Invalid move: player=", player, position, cardIndex);
        }
    }

    flipCards(flipper) {
        const neighborCards = this.getNeighborCards(flipper);
        if (this.noHighPriorityRules()) {
            return new BasicRule().flip(flipper, neighborCards);
        }

        let flipSequences = [];
        let activatedComboCards = [];
        if (this.hasPlusRule()) {
            [flipSequences, activatedComboCards] = this.plusRule.flip(flipper, neighborCards);
            if (activatedComboCards.length === 0 && this.hasSameRule()) {
                [flipSequences, activatedComboCards] = this.sameRule.flip(flipper, neighborCards);
            }
        } else if (this.hasSameRule()) {
            [flipSequences, activatedComboCards] = this.sameRule.flip(flipper, neighborCards);
        }

        if (activatedComboCards.length === 0) {
            return new BasicRule().flip(flipper, neighborCards)[0];
        }

        while (activatedComboCards.length > 0) {
            const curFlipper = activatedComboCards.pop();
            const neighborCards = this.getNeighborCards(curFlipper);
            const [curFlipSequences, new_activatedComboCards] = new ComboRule().flip(curFlipper, neighborCards);
            flipSequences = flipSequences.concat(curFlipSequences);
            activatedComboCards = activatedComboCards.concat(new_activatedComboCards);
        }
        return flipSequences;
    }

    getNeighborPositions(card) {
        const neighborPositions = [];
        for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const row = card.position.row + dr;
            const col = card.position.col + dc;
            if (0 <= row && row < 3 && 0 <= col && col < 3 && this.getCardFromPosition(new Position(row, col)).id !== "hidden_card") {
                neighborPositions.push(new Position(row, col));
            }
        }
        return neighborPositions;
    }

    getNeighborCards(card) {
        return this.getNeighborPositions(card).map(np => this.getCardFromPosition(np));
    }
}