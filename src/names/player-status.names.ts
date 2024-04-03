const playerStatusNames = [
	"Active",
	"Inactive",
	"InjuredReserve",
	"PhysicallyUnableToPerform",
	"NonFootballInjury",
] as const;
export type PlayerStatusNames = (typeof playerStatusNames)[number];
