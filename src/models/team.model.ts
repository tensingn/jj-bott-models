import { DatabaseObject } from "@tensingn/firebary";
import { PlayerModel } from "./player.model.js";

export class TeamModel extends DatabaseObject {
	createdDate: Date;
	username: string;
	displayName: string;
	wins: number;
	losses: number;
	pointsFor: number;
	pointsAgainst: number;
	players: Array<PlayerModel>;
	starters: Array<PlayerModel>;
	rosterId: number;
}
