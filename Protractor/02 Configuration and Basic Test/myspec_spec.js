// The "describe" block is used to describe the tests that go inside it. It's just a container.

describe('angularjs homepage', function() {
	// each "it" block contains a specific test
	it('should greet the named user', function() {
		browser.get('http://www.angularjs.org');
		
		element(by.model('yourName')).sendKeys('Julie');

		var greeting = element(by.binding('yourName'));

		expect(greeting.getText()).toEqual('Hello Julie!');
	});
	
	// a describe block can contain another describe block for increased granularity
	describe('todo list', function() {
		var todoList;

		beforeEach(function() {
			browser.get('http://www.angularjs.org');

			todoList = element.all(by.repeater('todo in todoList.todos'));
		});

		it('should list todos', function() {
			expect(todoList.count()).toEqual(2);
			expect(todoList.get(1).getText()).toEqual('build an angular app');
		});

		it('should add a todo', function() {
			var addTodo = element(by.model('todoList.todoText'));
			var addButton = element(by.css('[value="add"]'));

			addTodo.sendKeys('write a protractor test');
			addButton.click();

			expect(todoList.count()).toEqual(3);
			expect(todoList.get(2).getText()).toEqual('write a protractor test');
		});
	});
});
