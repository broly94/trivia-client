export interface IUserLogin {
	id: number;
	name: string;
	points: number;
	position: number;
}

export interface UserState {
	id: number;
	name: string;
	email: string;
	points: number;
	token: string;
}

export interface UserAuth {
	email: string;
	password: string;
}

export const UserEmptyState: UserState = {
	id: 0,
	name: '',
	email: '',
	points: 0,
	token: '',
};
