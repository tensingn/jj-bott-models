const positionNames = ["QB", "RB", "FB", "WR", "TE", "K", "DEF"] as const;
export type PositionNames = (typeof positionNames)[number];
