import { DatabaseObject } from "@tensingn/firebary";
import { NFLTeamNames } from "../names/nfl-team.names";

export class NFLGameModel extends DatabaseObject {
	awayTeamName: NFLTeamNames;
	homeTeamName: NFLTeamNames;
	week: string;
	season: string;
}
