import { DatabaseObject } from "@tensingn/firebary";
import { NFLTeamNames } from "../names/nfl-team.names";
import { PlayerStatsModel } from "./player-stats.model";
import { StatsRankingModel } from "./stats-ranking.model";

export class PlayerGameModel extends DatabaseObject {
	playerID: string;
	gameID: string;
	points: string;
	projectedPoints: string;
	team: NFLTeamNames;
	opponent: NFLTeamNames;
	stats: PlayerStatsModel;
	statRankings: StatsRankingModel;
	week: string;
	season: string;
	isHome: boolean;
}
