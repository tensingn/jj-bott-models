import { RosterSettingsSleeperModel } from "./roster-settings.sleeper.model";

export class RosterSleeperModel {
	starters: Array<string>;
	settings: RosterSettingsSleeperModel;
	roster_id: number;
	players: Array<string>;
	owner_id: string;
}
