const address = {
	street: 99,
	city: 'Thika',
	zipcode: 1000
};

let showAddress = (address) => {
	for (let key in address)
		console.log(`${key}: ${address[key]}`);
}

showAddress(address);

