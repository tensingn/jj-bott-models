import { PositionNames } from "../names/position.names";

export class PlayerSleeperModel {
	player_id: string;
	status: string;
	fantasy_positions: Array<PositionNames>;
	last_name: string;
	first_name: string;
	full_name: string;
	team: string;
	espn_id: string;
}
