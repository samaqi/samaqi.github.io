import * as TripleTriadLogics from './TripleTriadLogics';

export class MatchInfo {
    constructor(match_id, creator_id, invited_id, created_at, active, players) {
        this.match_id = match_id;
        this.creator_id = creator_id;
        this.invited_id = invited_id;
        this.created_at = created_at;
        this.active = active;
        this.players = players;
    }
}

export class MatchService {
    constructor(game) {
        this.game = game;
    }
    // static get(match_id) {
    //     return Match.query.get(match_id);
    // }

    // static getMatchInfo(match_id) {
    //     const match = Match.query.get(match_id);
    //     const players = [];
    //     players.push(PlayerService.getPlayerInfo(match.creator_id));
    //     if (match.invited_id) {
    //         players.push(PlayerService.getPlayerInfo(match.invited_id));
    //     }

    //     return new MatchInfo(
    //         match.id,
    //         match.creator_id,
    //         match.invited_id,
    //         match.created_at,
    //         match.active,
    //         players
    //     );
    // }

    updateBoardState(boardState) {
        this.game.updateBoardState(boardState);
    }

    getCurrentTurn() {
        const color = this.game.getCurrentTurnColor();
        return color === TripleTriadLogics.Color.RED ? TripleTriadLogics.PlayerTurn.LEFT : TripleTriadLogics.PlayerTurn.RIGHT;
    }

    getPlacedCards() {
        const board = this.game.getBoard();
        return TripleTriadLogics.FrontendCard.fromBoard(board);
    }

    getAvailablePositions() {
        const availableSpots = this.game.getAvailablePositions();
        return availableSpots;
    }
    getAvailableCardsOnDeck(playerId) {
        const availableCards = this.game.getAvailableCardsOnDeck(playerId);
        return availableCards;
    }

    getBotDeckIfNecessary() {
        const bot_id = this.game.playerIds[1]; // bot is always the second player
        // const bot_user = PlayerService.getUser(bot_id);
        // if (!bot_user || !bot_user.isBot()) {
        //     console.log(`User ${bot_id} is not a bot.`);
        //     return [];
        // }
        const cardIds = [
            "Alexander",
            "Iguion",
            "Geezard",
            "Glacial Eye",
            "Blobra",
        ]; // TODO: save this in database
        this.game.updatePlayerDeck(bot_id, cardIds);
        return cardIds;
    }

    updatePlayerDeck(playerId, cardIds) {
        this.game.updatePlayerDeck(playerId, cardIds);
    }

    getPlayerDeck(playerId) {
        const deck = this.game.getPlayerDeck(playerId);
        const frontendCards = TripleTriadLogics.FrontendCard.fromCardHandArray(deck, deck[0].color);
        return frontendCards;
    }

    placeMove(playerId, position, cardIndex) {
        return this.game.placeMove(playerId, position, cardIndex);
    }

    getBotDeck() {
        const botDeck = this.game.getBotDeck(); // may need to convert to FrontendCard
        const botDeckFrontendCards = TripleTriadLogics.FrontendCard.fromCardHandArray(botDeck, 'red');
        return botDeckFrontendCards;
    }

    getScores() {
        return this.game.getScores();
    }

    isGameOver() {
        return this.game.isGameOver();
    }
    isRuleChosen(rule) {
        return this.game.isRuleChosen(rule);
    }
    calculateMoveScore(playerId, row, col, cardIndex) {
        // deep copy the game
        const gameCopy = this.game.copy();
        gameCopy.placeMove(playerId, { row, col }, cardIndex);
        return gameCopy.getScoreByPlayerId(playerId);
    }
}