module.exports = {
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	testEnvironment: 'node',
	maxWorkers: 1,
	roots: [
		'<rootDir>/tests'
	]
};
