const names = [
    'Geezard', 'Funguar', 'Blood Soul', 'Caterchipillar', 'Trustaevis', 'Anacondaur', 'Tri-Face', 'Fastitocalon', 'Abyss Worm', 'Turtapod', 'Imp', "Blue Dragon", 'Elastoid', 'GIM47M', 'Elnoyle', "X-ATM092", 'Shumi Tribe', 'Krysta', 'Tiamat', 'BGH251F2', 'MiniMog', 'Chicobo', 'Carbuncle', 'Diablos', 'Bahamut', 'Doomtrain', 'Irvine', 'Zell',
    'Bite Bug', 'Red Bat', 'Cockatrice', 'Grat', 'Creeps', 'Grendel', 'Snow Lion', 'Ochu', 'Vysage', 'T-Rexaur', 'Adamantoise', 'Hexadragon', 'Malboro', 'Ruby Dragon', 'Granaldo', 'Gerogero', 'Propagator', 'Jumbo Cactuar', 'Red Giant', 'Catoblepas', 'Quezacotl', 'Shiva', 'Leviathan', 'Odin', 'Eden', 'Ward', 'Rinoa', 'Edea',
    'Blobra', 'Gayla', 'Buel', 'Mesmerize', "Jelleye", "Grand Mantis", 'SAM08G', 'Death Claw', 'Bomb', 'Blitz', 'Iron Giant', 'Behemoth', 'Elvoret', 'Tonberry King', 'Iguion', 'Abadon', 'Tri-Point', 'Gargantua', 'Ultima Weapon', 'Chubby Chocobo', 'Ifrit', 'Siren', 'Pandemona', 'Cerberus', 'Kiros', 'Laguna', 'Seifer', 'Squall',
    'Gesper', 'Fastitocalon-F', 'Glacial Eye', "Belhelmel", 'Forbidden', 'Armadodo', 'Cactuar', 'Tonberry', 'Wendigo', 'Torama', 'Chimera', 'PuPu', 'Biggs / Wedge', 'Fujin / Raijin', 'Trauma', 'Oilboyle', 'Mobile Type 8', 'Sphinxara', 'Angelo', 'Gilgamesh', 'Minotaur', 'Sacred', 'Alexander', 'Phoenix', 'Selphie', 'Quistis', 'hidden_card'
]
export const Element = Object.freeze({
    FIRE: "FIRE",
    ICE: "ICE",
    THUNDER: "THUNDER",
    EARTH: "EARTH",
    POISON: "POISON",
    WATER: "WATER",
    WIND: "WIND",
    HOLY: "HOLY",
    NONE: "none"
});

const ALL_CARDS = [
    {
        "id": 0,
        "name": "Blank",
        "numbers": ["A", "A", "A", "A"],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 1,
        "name": "Geezard",
        "numbers": [1, 5, 4, 1],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 2,
        "name": "Funguar",
        "numbers": [5, 3, 1, 1],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 3,
        "name": "Bite Bug",
        "numbers": [1, 5, 3, 3],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 4,
        "name": "Red Bat",
        "numbers": [6, 2, 1, 1],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 5,
        "name": "Blobra",
        "numbers": [2, 5, 3, 1],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 6,
        "name": "Gayla",
        "numbers": [2, 4, 1, 4],
        "element": Element.THUNDER,
        "level": 1,
    },
    {
        "id": 7,
        "name": "Gesper",
        "numbers": [1, 1, 5, 4],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 8,
        "name": "Fastitocalon-F",
        "numbers": [3, 1, 5, 2],
        "element": Element.EARTH,
        "level": 1,
    },
    {
        "id": 9,
        "name": "Blood Soul",
        "numbers": [2, 1, 1, 6],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 10,
        "name": "Caterchipillar",
        "numbers": [4, 3, 2, 4],
        "element": Element.NONE,
        "level": 1,
    },
    {
        "id": 11,
        "name": "Cockatrice",
        "numbers": [2, 6, 1, 2],
        "element": Element.THUNDER,
        "level": 1,
    },
    {
        "id": 12,
        "name": "Grat",
        "numbers": [7, 1, 1, 3],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 13,
        "name": "Buel",
        "numbers": [6, 3, 2, 2],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 14,
        "name": "Mesmerize",
        "numbers": [5, 4, 3, 3],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 15,
        "name": "Glacial Eye",
        "numbers": [6, 3, 1, 4],
        "element": Element.ICE,
        "level": 2,
    },
    {
        "id": 16,
        "name": "Belhelmel",
        "numbers": [3, 3, 4, 5],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 17,
        "name": "Thrustaevis",
        "numbers": [5, 5, 3, 2],
        "element": Element.WIND,
        "level": 2,
    },
    {
        "id": 18,
        "name": "Anacondaur",
        "numbers": [5, 5, 1, 3],
        "element": Element.POISON,
        "level": 2,
    },
    {
        "id": 19,
        "name": "Creeps",
        "numbers": [5, 2, 2, 5],
        "element": Element.THUNDER,
        "level": 2,
    },
    {
        "id": 20,
        "name": "Grendel",
        "numbers": [4, 2, 4, 5],
        "element": Element.THUNDER,
        "level": 2,
    },
    {
        "id": 21,
        "name": "Jelleye",
        "numbers": [3, 7, 2, 1],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 22,
        "name": "Grand Mantis",
        "numbers": [5, 3, 2, 5],
        "element": Element.NONE,
        "level": 2,
    },
    {
        "id": 23,
        "name": "Forbidden",
        "numbers": [6, 2, 6, 3],
        "element": Element.NONE,
        "level": 3,
    },
    {
        "id": 24,
        "name": "Armadodo",
        "numbers": [6, 6, 3, 1],
        "element": Element.EARTH,
        "level": 3,
    },
    {
        "id": 25,
        "name": "Tri-Face",
        "numbers": [3, 5, 5, 5],
        "element": Element.POISON,
        "level": 3,
    },
    {
        "id": 26,
        "name": "Fastitocalon",
        "numbers": [7, 3, 5, 1],
        "element": Element.EARTH,
        "level": 3,
    },
    {
        "id": 27,
        "name": "Snow Lion",
        "numbers": [7, 3, 1, 5],
        "element": Element.ICE,
        "level": 3,
    },
    {
        "id": 28,
        "name": "Ochu",
        "numbers": [5, 3, 6, 3],
        "element": Element.NONE,
        "level": 3,
    },
    {
        "id": 29,
        "name": "SAM08G",
        "numbers": [5, 4, 6, 2],
        "element": Element.FIRE,
        "level": 3,
    },
    {
        "id": 30,
        "name": "Death Claw",
        "numbers": [4, 2, 4, 7],
        "element": Element.FIRE,
        "level": 3,
    },
    {
        "id": 31,
        "name": "Cactuar",
        "numbers": [6, 3, 2, 6],
        "element": Element.NONE,
        "level": 3,
    },
    {
        "id": 32,
        "name": "Tonberry",
        "numbers": [3, 4, 6, 4],
        "element": Element.NONE,
        "level": 3,
    },
    {
        "id": 33,
        "name": "Abyss Worm",
        "numbers": [7, 5, 2, 3],
        "element": Element.EARTH,
        "level": 3,
    },
    {
        "id": 34,
        "name": "Turtapod",
        "numbers": [2, 7, 3, 6],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 35,
        "name": "Vysage",
        "numbers": [6, 5, 5, 4],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 36,
        "name": "T-Rexaur",
        "numbers": [4, 7, 6, 2],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 37,
        "name": "Bomb",
        "numbers": [2, 3, 7, 6],
        "element": Element.FIRE,
        "level": 4,
    },
    {
        "id": 38,
        "name": "Blitz",
        "numbers": [1, 7, 6, 4],
        "element": Element.THUNDER,
        "level": 4,
    },
    {
        "id": 39,
        "name": "Wendigo",
        "numbers": [7, 6, 3, 1],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 40,
        "name": "Torama",
        "numbers": [7, 4, 4, 4],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 41,
        "name": "Imp",
        "numbers": [3, 6, 7, 3],
        "element": Element.NONE,
        "level": 4,
    },
    {
        "id": 42,
        "name": "Blue Dragon",
        "numbers": [6, 3, 2, 7],
        "element": Element.POISON,
        "level": 4,
    },
    {
        "id": 43,
        "name": "Adamantoise",
        "numbers": [4, 6, 5, 5],
        "element": Element.EARTH,
        "level": 4,
    },
    {
        "id": 44,
        "name": "Hexadragon",
        "numbers": [7, 3, 5, 4],
        "element": Element.FIRE,
        "level": 4,
    },
    {
        "id": 45,
        "name": "Iron Giant",
        "numbers": [6, 5, 5, 6],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 46,
        "name": "Behemoth",
        "numbers": [3, 7, 6, 5],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 47,
        "name": "Chimera",
        "numbers": [7, 3, 6, 5],
        "element": Element.WATER,
        "level": 5,
    },
    {
        "id": 48,
        "name": "PuPu",
        "numbers": [3, 1, "A", 2],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 49,
        "name": "Elastoid",
        "numbers": [6, 7, 2, 6],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 50,
        "name": "GIM47N",
        "numbers": [5, 4, 5, 7],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 51,
        "name": "Malboro",
        "numbers": [7, 2, 7, 4],
        "element": Element.POISON,
        "level": 5,
    },
    {
        "id": 52,
        "name": "Ruby Dragon",
        "numbers": [7, 4, 2, 7],
        "element": Element.FIRE,
        "level": 5,
    },
    {
        "id": 53,
        "name": "Elnoyle",
        "numbers": [5, 6, 3, 7],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 54,
        "name": "Tonberry King",
        "numbers": [4, 4, 6, 7],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 55,
        "name": "Wedge, Biggs",
        "numbers": [6, 7, 6, 2],
        "element": Element.NONE,
        "level": 5,
    },
    {
        "id": 56,
        "name": "Fujin Raijin",
        "numbers": [2, 4, 8, 8],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 57,
        "name": "Elvoret",
        "numbers": [7, 4, 8, 3],
        "element": Element.WIND,
        "level": 6,
    },
    {
        "id": 58,
        "name": "X-ATM092",
        "numbers": [4, 3, 8, 7],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 59,
        "name": "Granaldo",
        "numbers": [7, 5, 2, 8],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 60,
        "name": "Gerogero",
        "numbers": [1, 3, 8, 8],
        "element": Element.POISON,
        "level": 6,
    },
    {
        "id": 61,
        "name": "Iguion",
        "numbers": [8, 2, 2, 8],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 62,
        "name": "Abadon",
        "numbers": [6, 5, 8, 4],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 63,
        "name": "Trauma",
        "numbers": [4, 6, 8, 5],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 64,
        "name": "Oilboyle",
        "numbers": [1, 8, 8, 4],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 65,
        "name": "Shumi",
        "numbers": [6, 4, 5, 8],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 66,
        "name": "Krysta",
        "numbers": [7, 1, 5, 8],
        "element": Element.NONE,
        "level": 6,
    },
    {
        "id": 67,
        "name": "Propagator",
        "numbers": [8, 8, 4, 4],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 68,
        "name": "Jumbo Cactuar",
        "numbers": [8, 4, 8, 4],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 69,
        "name": "Tri-Point",
        "numbers": [8, 8, 5, 2],
        "element": Element.THUNDER,
        "level": 7,
    },
    {
        "id": 70,
        "name": "Gargantua",
        "numbers": [5, 8, 6, 6],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 71,
        "name": "Mobile Type 8",
        "numbers": [8, 3, 6, 7],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 72,
        "name": "Sphinxara",
        "numbers": [8, 8, 3, 5],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 73,
        "name": "Tiamat",
        "numbers": [8, 4, 8, 5],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 74,
        "name": "BGH251F2",
        "numbers": [5, 5, 7, 8],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 75,
        "name": "Red Giant",
        "numbers": [6, 7, 8, 4],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 76,
        "name": "Catoblepas",
        "numbers": [1, 7, 8, 7],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 77,
        "name": "Ultima Weapon",
        "numbers": [7, 8, 7, 2],
        "element": Element.NONE,
        "level": 7,
    },
    {
        "id": 78,
        "name": "Chubby Chocobo",
        "numbers": [4, 9, 4, 8],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 79,
        "name": "Angelo",
        "numbers": [9, 3, 6, 7],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 80,
        "name": "Gilgamesh",
        "numbers": [3, 6, 7, 9],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 81,
        "name": "MiniMog",
        "numbers": [9, 2, 3, 9],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 82,
        "name": "Chicobo",
        "numbers": [9, 4, 4, 8],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 83,
        "name": "Quezacotl",
        "numbers": [2, 4, 9, 9],
        "element": Element.THUNDER,
        "level": 8,
    },
    {
        "id": 84,
        "name": "Shiva",
        "numbers": [6, 9, 7, 4],
        "element": Element.ICE,
        "level": 8,
    },
    {
        "id": 85,
        "name": "Ifrit",
        "numbers": [9, 8, 6, 2],
        "element": Element.FIRE,
        "level": 8,
    },
    {
        "id": 86,
        "name": "Siren",
        "numbers": [8, 2, 9, 6],
        "element": Element.NONE,
        "level": 8,
    },
    {
        "id": 87,
        "name": "Sacred",
        "numbers": [5, 9, 1, 9],
        "element": Element.EARTH,
        "level": 8,
    },
    {
        "id": 88,
        "name": "Minotaur",
        "numbers": [9, 9, 5, 2],
        "element": Element.EARTH,
        "level": 8,
    },
    {
        "id": 89,
        "name": "Carbuncle",
        "numbers": [8, 4, 4, "A"],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 90,
        "name": "Diablos",
        "numbers": [5, 3, "A", 8],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 91,
        "name": "Leviathan",
        "numbers": [7, 7, "A", 1],
        "element": Element.WATER,
        "level": 9,
    },
    {
        "id": 92,
        "name": "Odin",
        "numbers": [8, 5, "A", 3],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 93,
        "name": "Pandemona",
        "numbers": ["A", 7, 1, 7],
        "element": Element.WIND,
        "level": 9,
    },
    {
        "id": 94,
        "name": "Cerberus",
        "numbers": [7, "A", 4, 6],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 95,
        "name": "Alexander",
        "numbers": [9, 2, "A", 4],
        "element": Element.HOLY,
        "level": 9,
    },
    {
        "id": 96,
        "name": "Phoenix",
        "numbers": [7, "A", 2, 7],
        "element": Element.FIRE,
        "level": 9,
    },
    {
        "id": 97,
        "name": "Bahamut",
        "numbers": ["A", 6, 8, 2],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 98,
        "name": "Doomtrain",
        "numbers": [3, "A", 1, "A"],
        "element": Element.POISON,
        "level": 9,
    },
    {
        "id": 99,
        "name": "Eden",
        "numbers": [4, "A", 4, 9],
        "element": Element.NONE,
        "level": 9,
    },
    {
        "id": 100,
        "name": "Ward",
        "numbers": ["A", 8, 7, 2],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 101,
        "name": "Kiros",
        "numbers": [6, "A", 7, 6],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 102,
        "name": "Laguna",
        "numbers": [5, 9, "A", 3],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 103,
        "name": "Selphie",
        "numbers": ["A", 4, 8, 6],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 104,
        "name": "Quistis",
        "numbers": [9, 2, 6, "A"],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 105,
        "name": "Irvine",
        "numbers": [2, "A", 6, 9],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 106,
        "name": "Zell",
        "numbers": [8, 6, 5, "A"],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 107,
        "name": "Rinoa",
        "numbers": [4, "A", "A", 2],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 108,
        "name": "Edea",
        "numbers": ["A", 3, "A", 3],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 109,
        "name": "Seifer",
        "numbers": [6, 4, 9, "A"],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 110,
        "name": "Squall",
        "numbers": ["A", 9, 4, 6],
        "element": Element.NONE,
        "level": "A",
    },
    {
        "id": 110,
        "name": "hidden_card",
        "numbers": ["A", "A", "A", "A"],
        "element": Element.NONE,
        "level": "A",
    },
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

export function getRandomDeck(color) {
    // return 5 names from the names array
    let deck = [];
    let name;
    for (let i = 0; i < 5; i++) {
        name = names[Math.floor(Math.random() * (names.length - 1))]; // exclude hidden_card
        deck.push(new FrontendCard(name, color, i));
    }
    return deck;
}

function getCardNumbers(name) {
    // Define the numbers for each card
    const cardNumbers = {
        "hidden_card": ["A", "A", "A", "A"],
        "Cockatrice": [2, 6, 1, 2],
        "Caterchipillar": [4, 3, 2, 4],
        "Blood Soul": [2, 1, 1, 6],
        "Fastitocalon-F": [3, 1, 5, 2],
        "Gesper": [1, 1, 5, 4],
        "Gayla": [2, 4, 1, 4],
        "Blobra": [2, 5, 3, 1],
        "Red Bat": [6, 2, 1, 1],
        "Bite Bug": [1, 5, 3, 3],
        "Funguar": [5, 3, 1, 1],
        "Geezard": [1, 5, 4, 1],
        "Grand Mantis": [5, 3, 2, 5],
        "Jelleye": [3, 7, 2, 1],
        "Grendel": [4, 2, 4, 5],
        "Creeps": [5, 2, 2, 5],
        "Anacondaur": [5, 5, 1, 3],
        "Trustaevis": [5, 5, 3, 2],
        "Belhelmel": [3, 3, 4, 5],
        "Glacial Eye": [6, 3, 1, 4],
        "Mesmerize": [5, 4, 3, 3],
        "Buel": [6, 3, 2, 2],
        "Grat": [7, 1, 1, 3],
        "Abyss Worm": [7, 5, 2, 3],
        "Tonberry": [3, 4, 6, 4],
        "Cactuar": [6, 3, 2, 6],
        "Death Claw": [4, 2, 4, 7],
        "SAM08G": [5, 4, 6, 2],
        "Ochu": [5, 3, 6, 3],
        "Snow Lion": [7, 3, 1, 5],
        "Fastitocalon": [7, 3, 5, 1],
        "Tri-Face": [3, 5, 5, 5],
        "Armadodo": [6, 6, 3, 1],
        "Forbidden": [6, 2, 6, 3],
        "Hexadragon": [7, 3, 5, 4],
        "Adamantoise": [4, 6, 5, 5],
        "Blue Dragon": [6, 3, 2, 7],
        "Imp": [3, 6, 7, 3],
        "Torama": [7, 4, 4, 4],
        "Wendigo": [7, 6, 3, 1],
        "Blitz": [1, 7, 6, 4],
        "Bomb": [2, 3, 7, 6],
        "T-Rexaur": [4, 7, 6, 2],
        "Vysage": [6, 5, 5, 4],
        "Turtapod": [2, 7, 3, 6],
        "Biggs / Wedge": [6, 7, 6, 2],
        "Tonberry King": [4, 4, 6, 7],
        "Elnoyle": [5, 6, 3, 7],
        "Ruby Dragon": [7, 4, 2, 7],
        "Malboro": [7, 2, 7, 4],
        "GIM47M": [5, 4, 5, 7],
        "Elastoid": [6, 7, 2, 6],
        "PuPu": [3, 1, "A", 2],
        "Chimera": [7, 3, 6, 5],
        "Behemoth": [3, 7, 6, 5],
        "Iron Giant": [6, 5, 5, 6],
        "Krysta": [7, 1, 5, 8],
        "Shumi Tribe": [6, 4, 5, 8],
        "Oilboyle": [1, 8, 8, 4],
        "Trauma": [4, 6, 8, 5],
        "Abadon": [6, 5, 8, 4],
        "Iguion": [8, 2, 2, 8],
        "Gerogero": [1, 3, 8, 8],
        "Granaldo": [7, 5, 2, 8],
        "X-ATM092": [4, 3, 8, 7],
        "Elvoret": [7, 4, 8, 3],
        "Fujin / Raijin": [2, 4, 8, 8],
        "Ultima Weapon": [7, 8, 7, 2],
        "Catoblepas": [1, 7, 8, 7],
        "Red Giant": [6, 7, 8, 4],
        "BGH251F2": [5, 5, 7, 8],
        "Tiamat": [8, 4, 8, 5],
        "Sphinxara": [8, 8, 3, 5],
        "Mobile Type 8": [8, 3, 6, 7],
        "Gargantua": [5, 8, 6, 6],
        "Tri-Point": [8, 8, 5, 2],
        "Jumbo Cactuar": [8, 4, 8, 4],
        "Propagator": [8, 8, 4, 4],
        "Minotaur": [9, 9, 5, 2],
        "Sacred": [5, 9, 1, 9],
        "Siren": [8, 2, 9, 6],
        "Ifrit": [9, 8, 6, 2],
        "Shiva": [6, 9, 7, 4],
        "Quezacotl": [2, 4, 9, 9],
        "Chicobo": [9, 4, 4, 8],
        "MiniMog": [9, 2, 3, 9],
        "Gilgamesh": [3, 6, 7, 9],
        "Angelo": [9, 3, 6, 7],
        "Chubby Chocobo": [4, 9, 4, 8],
        "Eden": [4, "A", 4, 9],
        "Doomtrain": [3, "A", 1, "A"],
        "Bahamut": ["A", 6, 8, 2],
        "Phoenix": [7, "A", 2, 7],
        "Alexander": [9, 2, "A", 4],
        "Cerberus": [7, "A", 4, 6],
        "Pandemona": ["A", 7, 1, 7],
        "Odin": [8, 5, "A", 3],
        "Leviathan": [7, 7, "A", 1],
        "Diablos": [5, 3, "A", 8],
        "Carbuncle": [8, 4, 4, "A"],
        "Squall": ["A", 9, 4, 6],
        "Seifer": [6, 4, 9, "A"],
        "Edea": ["A", 3, "A", 3],
        "Rinoa": [4, "A", "A", 2],
        "Zell": [8, 6, 5, "A"],
        "Irvine": [2, "A", 6, 9],
        "Quistis": [9, 2, 6, "A"],
        "Selphie": ["A", 4, 8, 6],
        "Laguna": [5, 9, "A", 3],
        "Kiros": [6, "A", 7, 6],
        "Ward": ["A", 8, 7, 2],
    };

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
    constructor(name, color, index, row = 0, col = 0) {
        this.name = name;
        this.originalColor = color;
        this.color = color;
        this.index = index;
        this.row = row;
        this.col = col;
        this.frameNumber = getFrameNumber(name);
        this.image = null; // This will be set when the card is added to the scene


        // Set the numbers for this card
        this.numbers = getCardNumbers(name);
        this.up = this.numbers[0];
        this.left = this.numbers[1];
        this.right = this.numbers[2];
        this.down = this.numbers[3];

        // new React properties
        this.id = Math.random();
        this.src = '/img/all_cards.png';
        this.alt = name
        this.played = false
        this.placed = false
        const { x, y } = getCardCoordinates(name);
        this.x = x;  // change these based on getFrameNumber
        this.y = y;
        this.width = 64;
        this.height = 64;

    }
    toString() {
        return `FrontendCard(name: ${this.name}, color: ${this.color})`;
    }

    static fromCardHandArray(cardHandArray, color) {
        return cardHandArray.map(cardHand => new FrontendCard(cardHand.cardId, color, cardHand.index));
    }
}

export class Card {
    constructor(position) {
        this.position = position;
        this.id = "Blank";
        this.original_color = "";
        this.color = "";
        this.active = false; // if card can flip other cards
        this.element = Element.NONE;
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

    assignCard(card_id, color) {
        this.id = card_id;
        this.original_color = color;
        this.color = color;
        this.element = ALL_CARDS_DICT[card_id].element;
        this.numbers = [...ALL_CARDS_DICT[card_id].numbers];
        this.original_numbers = [...ALL_CARDS_DICT[card_id].numbers];
    }

    isBlank() {
        return this.id === "" || this.id === "Blank";
    }

    toString() {
        return `${this.id} (${this.color}) (${this.position})`;
    }

    update(id, original_color, color) {
        this.id = id;
        this.original_color = original_color;
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
    constructor(flipper, targets, rule) {
        this.flipper = flipper;
        this.targets = targets;
        this.rule = rule;
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
        this.ruleName = name;
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
        // console.log("... Basic checking if " + flipper.id + " can flip " + opponentCard.id);
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
                flipSequences.push(new FlipSequence(flipper, [burger], this.name));
            }
        }
        flipper.doneFlipping();
        // console.log("...flip sequences: ", flipSequences);
        return [flipSequences, []];
    }
}

export class ComboRule extends BasicRule {
    static priority = 2;
    static ruleName = "Combo";
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
    static ruleName = "Same";
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
                flipSequences.push(new FlipSequence(flipper, flippedCards, this.constructor.name));

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
                wallCard.assignCard("Blank", "");
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
    static ruleName = "Plus";
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
                flipSequences.push(new FlipSequence(flipper, flippedCards, this.constructor.name));

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

const Color = Object.freeze({
    RED: "red",
    BLUE: "blue"
});

const Direction = Object.freeze({
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
        this.deck = deck || Array.from({ length: 5 }, (_, i) => new CardHand({ cardId: "Blank", color: this.color, index: i, played: false }));
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

export class TripleTriadBoard {
    constructor(rules, player_ids) {
        this.board = Array.from({ length: 3 }, (_, r) =>
            Array.from({ length: 3 }, (_, c) => new Card(new Position(r, c)))
        );
        this.scores = { [Color.BLUE]: 5, [Color.RED]: 5 };
        this.rules = rules;
        this.plus_rule = null;
        this.same_rule = null;

        for (const rule of this.rules) {
            if (rule instanceof PlusRule) {
                this.plus_rule = rule;
            } else if (rule instanceof SameRule) {
                this.same_rule = rule;
            }
        }
        this.player_ids = player_ids;
        // this.blue_player = new Player({ id: this.player_ids[0], color: Color.BLUE });
        // this.red_player = new Player({ id: this.player_ids[1], color: Color.RED });
        this.blue_player = new Player({ id: this.player_ids[1], color: Color.BLUE });
        this.red_player = new Player({ id: this.player_ids[0], color: Color.RED });
    }

    getBotDeck() {
        return this.red_player.deck;
    }

    getPlayerDeck(player_id) {
        return this._get_player_from_id(player_id).deck;
    }

    _get_player_from_id(player_id) {
        if (player_id === this.blue_player.id) {
            return this.blue_player;
        } else if (player_id === this.red_player.id) {
            return this.red_player;
        }
        throw new Error(`Player with id ${player_id} not found in the game's players: ${this.player_ids}`);
    }

    updatePlayerDeck(player_id, deck) {
        const player = this._get_player_from_id(player_id);
        player.deck = deck.map((cardId, i) => new CardHand({ cardId: cardId, color: player.color, index: i, played: false }));
    }

    _has_plus_rule() {
        return this.plus_rule !== null;
    }

    _has_same_rule() {
        return this.same_rule !== null;
    }

    apply_elemental_rule_if_applicable(card) {
        for (const rule of this.rules) {
            if (rule instanceof ElementalRule) {
                rule.apply(card);
            }
        }
    }

    _no_high_priority_rules() {
        return this.rules.every(rule => rule.priority < 2);
    }

    get_card(row, col) {
        return this.board[row][col];
    }

    _get_card_from_position(position) {
        return this.board[position.row][position.col];
    }

    display_card(card) {
        const color_code = this.COLOR_TO_COLOR_CODE[card.color];
        return `${' '.repeat(8)}\n${color_code}${card.id.slice(0, 7).padStart(8)}${this.RESET_CODE}\n${' '.repeat(8)}\n${card.up_original.toString().padStart(8)}\n${card.left_original.toString().padEnd(3)}${card.right_original.toString().padStart(5)}\n${card.down_original.toString().padStart(8)}\n${' '.repeat(8)}`;
    }

    display() {
        // this.RESET_CODE = "\033[0m";
        this.RESET_CODE = "\x1b[0m";
        const rows = this.board.map(row => {
            const card_rows = row.map(card => this.display_card(card).split("\n"));
            const card_rows_transposed = card_rows[0].map((_, i) => card_rows.map(row => row[i]));
            return card_rows_transposed.map(card_row => card_row.join(" | "));
        });
        rows.forEach(row => {
            row.forEach(line => console.log(line));
            console.log();
        });
    }

    getScores() {
        return this.scores;
    }

    isGameOver() {
        return this.board.every(row => row.every(cell => cell.id !== "Blank"));
    }

    get_winner_id() {
        if (this.isGameOver()) {
            const winner = Object.keys(this.scores).reduce((a, b) => this.scores[a] > this.scores[b] ? a : b);
            if (this.scores[winner] === 5) {
                return "";
            }
            return winner;
        }
        return "";
    }

    _update_scores() {
        const occupied_cards = { [Color.BLUE]: 0, [Color.RED]: 0 };
        this.board.forEach(row => {
            row.forEach(card => {
                if (!card.isBlank()) {
                    occupied_cards[card.color] += 1;
                }
            });
        });
        const remaining_cards = 10 - Object.values(occupied_cards).reduce((a, b) => a + b, 0);
        const first_player_remaining_cards = Math.floor(remaining_cards / 2);

        const first_player = this._get_player_from_id(this.player_ids[0]);
        this.scores[first_player.color] = first_player_remaining_cards + occupied_cards[first_player.color];
        const the_other_color = first_player.color === Color.BLUE ? Color.RED : Color.BLUE;
        this.scores[the_other_color] = 10 - this.scores[first_player.color];
    }

    _is_valid_move(player, position, card_index) {
        console.log("..._is_valid_move", card_index);
        console.log("..._is_valid_move", player, position, this.board);
        return this.board[position.row][position.col].id === "Blank" && player.hasCard(card_index);
    }

    placeMove(player_id, position, card_index) {
        const player = this._get_player_from_id(player_id);
        if (this._is_valid_move(player, position, card_index)) {
            const card_from_deck = player.getCard(card_index);
            player.playCard(card_index);

            this.board[position.row][position.col].assignCard(card_from_deck.cardId, player.color);

            // assignCard(card_id, color) {
            //     this.id = card_id;
            //     this.original_color = color;
            //     this.color = color;
            //     this.element = ALL_CARDS_DICT[card_id].element;
            //     this.numbers = [...ALL_CARDS_DICT[card_id].numbers];
            //     this.original_numbers = [...ALL_CARDS_DICT[card_id].numbers];
            // }
            this.board[position.row][position.col].id = card_from_deck.cardId;
            this.board[position.row][position.col].original_color = player.color;
            this.board[position.row][position.col].color = player.color;
            this.board[position.row][position.col].element = ALL_CARDS_DICT[card_from_deck.cardId].element;
            this.board[position.row][position.col].numbers = ALL_CARDS_DICT[card_from_deck.cardId].numbers;
            this.board[position.row][position.col].original_numbers = ALL_CARDS_DICT[card_from_deck.cardId].numbers;


            const card = this.board[position.row][position.col];

            this.apply_elemental_rule_if_applicable(card);
            const flip_sequences = this.flip_cards(card);
            this._update_scores();
            return flip_sequences;
        } else {
            throw new Error("Invalid move: player=", player, position, card_index);
        }
    }

    flip_cards(flipper) {
        const neighbor_cards = this._get_neighbor_cards(flipper);
        if (this._no_high_priority_rules()) {
            return new BasicRule().flip(flipper, neighbor_cards);
        }

        let flip_sequences = [];
        let activated_combo_cards = [];
        if (this._has_plus_rule()) {
            [flip_sequences, activated_combo_cards] = this.plus_rule.flip(flipper, neighbor_cards);
            if (activated_combo_cards.length === 0 && this._has_same_rule()) {
                [flip_sequences, activated_combo_cards] = this.same_rule.flip(flipper, neighbor_cards);
            }
        } else if (this._has_same_rule()) {
            [flip_sequences, activated_combo_cards] = this.same_rule.flip(flipper, neighbor_cards);
        }

        if (activated_combo_cards.length === 0) {
            return new BasicRule().flip(flipper, neighbor_cards)[0];
        }

        while (activated_combo_cards.length > 0) {
            const cur_flipper = activated_combo_cards.pop();
            const neighbor_cards = this._get_neighbor_cards(cur_flipper);
            const [cur_flip_sequences, new_activated_combo_cards] = new ComboRule().flip(cur_flipper, neighbor_cards);
            flip_sequences = flip_sequences.concat(cur_flip_sequences);
            activated_combo_cards = activated_combo_cards.concat(new_activated_combo_cards);
        }
        return flip_sequences;
    }

    _get_neighbor_positions(card) {
        const neighbor_positions = [];
        for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const row = card.position.row + dr;
            const col = card.position.col + dc;
            if (0 <= row && row < 3 && 0 <= col && col < 3 && this._get_card_from_position(new Position(row, col)).id !== "Blank") {
                neighbor_positions.push(new Position(row, col));
            }
        }
        return neighbor_positions;
    }

    _get_neighbor_cards(card) {
        return this._get_neighbor_positions(card).map(np => this._get_card_from_position(np));
    }
}