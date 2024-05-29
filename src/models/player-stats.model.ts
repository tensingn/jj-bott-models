export class PlayerStatsModel {
	Rushing?: {
		rushYds: string;
		carries: string;
		rushTD: string;
		rushAvg: string;
		longRush: string;
	};
	Passing?: {
		passAttempts: string;
		passTD: string;
		passYds: string;
		int: string;
		passCompletions: string;
		qbr: string;
		rtg: string;
		sacked: string;
	};
	Receiving?: {
		receptions: string;
		recTD: string;
		targets: string;
		recYds: string;
		longRec: string;
		recAvg: string;
	};
	Kicking?: {
		fgAttempts: string;
		fgMade: string;
		xpMade: string;
		xpAttempts: string;
		fgLong: string;
		kickingPts: string;
		fgPct: string;
	};
	Defense?: {
		fumbles: string;
		fumblesLost: string;
		defensiveInterceptions: string;
		fumblesRecovered: string;
	};
}
