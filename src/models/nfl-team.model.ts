import { NFLTeamNames } from "../names/nfl-team.names";

export class NFLTeamModel {
	teamID: string;
	teamName: NFLTeamNames;
	gameIDs: Array<string>;
}
