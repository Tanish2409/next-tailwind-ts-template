module.exports = {
	// this will check Typescript files
	'**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

	// This will lint and format TypeScript and //JavaScript files
	'**/*.(ts|tsx|js|jsx)': (filenames) => [
		`yarn eslint --resolve-plugins-relative-to ${filenames.join(' ')}`,
		`yarn prettier --write ${filenames.join(' ')}`,
	],

	// This will format CSS, Markdown & JSON files
	'**/*.(css|scss|md|json)': (filenames) => [
		`yarn prettier --write ${filenames.join(' ')}`,
	],
};
