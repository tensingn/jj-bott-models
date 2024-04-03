import { DatabaseObject } from "@tensingn/firebary";
import { NFLTeamNames } from "../names/nfl-team.names";

export class PlayerGameModel extends DatabaseObject {
	points: string;
	depthPosition: string;
	opponent: NFLTeamNames;
}
