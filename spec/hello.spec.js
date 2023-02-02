const hello = require('../hello');

describe('sayHello', () => {
	it('says hello', () => {
			let result = hello.sayHello("William");
			expect(result).toBe("hello william!");
	});
});
