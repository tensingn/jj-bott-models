import { NFLTeamNames } from "../names/nfl-team.names";
import { PlayerStatusNames } from "../names/player-status.names";
import { PositionNames } from "../names/position.names";

export class PlayerSleeperModel {
	player_id: string;
	status: PlayerStatusNames;
	fantasy_positions: Array<PositionNames>;
	last_name: string;
	first_name: string;
	full_name: string;
	team: NFLTeamNames;
	espn_id: string;
}
