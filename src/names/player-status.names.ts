export const PlayerStatusNamesArray = [
	"Active",
	"Inactive",
	"InjuredReserve",
	"PhysicallyUnableToPerform",
	"NonFootballInjury",
] as const;
export type PlayerStatusNames = (typeof PlayerStatusNamesArray)[number];
