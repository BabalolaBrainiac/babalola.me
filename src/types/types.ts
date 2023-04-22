export type User = {
	id: string;
	name: string;
	email: string;
	projects: Project[];
	musings: any;
};

export type Project = {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	gitRepo: string;
	url: string;
	published: boolean;
	creators: User[];
	projectId: string;
};

export type Musings = {
	id: string;
	userId: string;
	title: string;
	content: string;
	published: Boolean;
	categories: string[];
	createdAt: Date;
	updatedAt: Date;
	user: User;
};
