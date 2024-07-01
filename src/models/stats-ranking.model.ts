export class StatsRankingModel {
	Rushing?: {
		rushYds: number;
		carries: number;
		rushTD: number;
	};
	Passing?: {
		passAttempts: number;
		passYds: number;
		passTD: number;
		int: number;
	};
	Receiving?: {
		receptions: number;
		recTD: number;
		targets: number;
		recYds: number;
	};
	Kicking?: {
		fgMade: number;
		xpMade: number;
	};
	Defense?: {
		takeaways: number;
		ydsAllowed: number;
		ptsAllowed: number;
		passYdsAllowed: number;
		passTDsAllowed: number;
		rushYdsAllowed: number;
		rushTDsAllowed: number;
		fgAllowed: number;
		xpAllowed: number;
	};
}
