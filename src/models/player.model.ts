import { DatabaseObject } from "@tensingn/firebary";
import { PlayerGameModel } from "./player-game.model";
import { PositionNames } from "../names/position.names";
import { NFLTeamNames } from "../names/nfl-team.names";
import { PlayerStatusNames } from "..";
import { SeasonStatsModel } from "./season-stats.model";

export class PlayerModel extends DatabaseObject {
	tankID: string;
	firstName: string;
	lastName: string;
	fullName: string;
	team: NFLTeamNames | "NotSet";
	positions: Array<PositionNames | "NotSet">;
	depthPosition: number;
	status: PlayerStatusNames | "NotSet";
	games: Array<PlayerGameModel>;
	seasonStats: SeasonStatsModel;
}
