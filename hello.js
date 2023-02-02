function sayHello(name) {
	return saySomethingLowerCase(`Hello ${name}!`);
}

function sayingGoodbye(name) {
	return saySomethingLowerCase(`Goodbye ${name}!`);
}

function saySomethingLowerCase(str) {
	return str.toLowerCase();;
}

module.exports = {
	sayHello,
	sayingGoodbye,
}
