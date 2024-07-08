import { DatabaseObject } from "@tensingn/firebary";
import { PlayerModel } from "./player.model";

export class MatchupModel extends DatabaseObject {
	week: string;
	season: string;
	matchupID: string;
	starters: Array<PlayerModel>;
	starterIDs: Array<string>;
	players: Array<PlayerModel>;
	playerIDs: Array<string>;
	points: number;
	teamID: string;
	playerPoints: Map<string, number>;
}
