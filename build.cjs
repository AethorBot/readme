const { readFileSync, writeFileSync, readdirSync } = require('fs');

let data = readFileSync('./build/index.html');
readdirSync('./build/_app/assets');
writeFileSync(
	'./build/index.html',
	`<style>${readFileSync(
		`./build/_app/assets/${readdirSync('./build/_app/assets')[0]}`
	).toString()}</style>${data.toString()}`
);
