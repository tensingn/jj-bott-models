import { DatabaseObject } from "@tensingn/firebary";

export class NFLGameModel extends DatabaseObject {
	teamIDHome: string;
	teamIDAway: string;
	week: string;
	season: string;
}
