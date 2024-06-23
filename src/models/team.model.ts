import { DatabaseObject } from "@tensingn/firebary";
import { PlayerModel } from "./player.model.js";

export class TeamModel extends DatabaseObject {
	createdDate: Date;
	username: string;
	teamName: string;
	wins: number;
	losses: number;
	pointsFor: number;
	pointsAgainst: number;
	players: Array<PlayerModel>;
	playerIDs: Array<string>;
	starters: Array<PlayerModel>;
	starterIDs: Array<string>;
	rosterID: number;
	userID: string;
	seasonID: string;
}
