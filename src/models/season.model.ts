import { DatabaseObject } from "@tensingn/firebary";
import { MatchupModel } from "./matchup.model";
import { TeamModel } from "./team.model";

export class SeasonModel extends DatabaseObject {
	matchups: Array<MatchupModel>;
	winnerID: string;
	winner: TeamModel;
	season: string;
}
