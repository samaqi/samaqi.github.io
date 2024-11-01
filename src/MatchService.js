import * as Utils from './utils';

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
        console.log("Call MatchService constructor");
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

    getBotDeckIfNecessary() {
        const bot_id = this.game.player_ids[1]; // bot is always the second player
        // const bot_user = PlayerService.getUser(bot_id);
        // if (!bot_user || !bot_user.isBot()) {
        //     console.log(`User ${bot_id} is not a bot.`);
        //     return [];
        // }
        const card_ids = [
            "Alexander",
            "Iguion",
            "Geezard",
            "Glacial Eye",
            "Blobra",
        ]; // TODO: save this in database
        this.game.updatePlayerDeck(bot_id, card_ids);
        return card_ids;
    }

    updatePlayerDeck(player_id, card_ids) {
        this.game.updatePlayerDeck(player_id, card_ids);
    }

    getPlayerDeck(player_id) {
        const deck = this.game.getPlayerDeck(player_id);
        const frontendCards = Utils.FrontendCard.fromCardHandArray(deck, player_id === 0 ? 'red' : 'blue');
        return frontendCards;
    }

    placeMove(player_id, position, card_index) {
        return this.game.placeMove(player_id, position, card_index);
    }

    getBotDeck() {
        const botDeck = this.game.getBotDeck(); // may need to convert to FrontendCard
        const botDeckFrontendCards = Utils.FrontendCard.fromCardHandArray(botDeck, 'red');
        return botDeckFrontendCards;
    }

    getScores() {
        return this.game.getScores();
    }

    isGameOver() {
        return this.game.isGameOver();
    }
}