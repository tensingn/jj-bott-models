import { DatabaseObject } from "@tensingn/firebary";
import { NFLTeamNames } from "../names/nfl-team.names";
import { PlayerStatsModel } from "./player-stats.model";

export class PlayerGameModel extends DatabaseObject {
	points: string;
	depthPosition: string;
	opponent: NFLTeamNames;
	stats: PlayerStatsModel;
}
