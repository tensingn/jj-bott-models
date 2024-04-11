import { DatabaseObject } from "@tensingn/firebary";
import { NFLTeamNames } from "../names/nfl-team.names";

export class NFLTeamModel extends DatabaseObject {
	teamName: NFLTeamNames;
	gameIDs: Array<string>;
}
