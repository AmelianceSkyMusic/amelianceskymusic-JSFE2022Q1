const error = (...msg: unknown[]): void => {
	console.log('ASM | ERROR -->', ...msg);
};

const devs = {
	error
};

export default devs;
