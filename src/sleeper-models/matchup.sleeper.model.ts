export class MatchupSleeperModel {
	starters: Array<string>;
	players: Array<string>;
	roster_id: number;
	matchup_id: number;
	points: string;
	players_points: Map<string, number>;
}
