function add() {
	return 1;
}

async function blat() {
	console.log(3);
	console.log(await add());
	console.log(4);
}

blat();

console.log('good');
