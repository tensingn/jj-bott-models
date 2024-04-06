export const PositionNamesArray = [
	"QB",
	"RB",
	"FB",
	"WR",
	"TE",
	"K",
	"DEF",
] as const;
export type PositionNames = (typeof PositionNamesArray)[number];
