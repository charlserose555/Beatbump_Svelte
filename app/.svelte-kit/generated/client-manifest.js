export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')];

export const server_loads = [0];

export const dictionary = {
	"/": [2],
	"/artist/[slug]": [~3],
	"/artist/[slug]/releases": [4],
	"/explore": [5],
	"/explore/[slug]": [6],
	"/home": [~7],
	"/library": [8],
	"/library/playlists": [9],
	"/library/playlists/[slug]": [10],
	"/library/songs": [11],
	"/listen": [~12],
	"/playlist/[slug]": [13],
	"/release": [14],
	"/search/[slug]": [15],
	"/session": [16],
	"/settings": [17],
	"/test": [18],
	"/trending": [19],
	"/trending/new/[slug]": [20]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};