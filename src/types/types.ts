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

export type Post = {
	id?: string;
	title: string;
	content: string;
	published?: Boolean;
	categories: string[];
	creators: string[];
	createdAt?: Date;
	updatedAt?: Date;
};

interface Creator {
	name: string,
	email: string,
	github: string,
}