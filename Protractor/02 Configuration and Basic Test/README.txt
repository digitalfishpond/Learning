Protractor calls conf.js which describes which resources to use 
while running the tests, and in turn, conf.js invokes the *_spec.js 
file/files which specify what the tests are.

Useful commands: 

--> run the test on a particular url:
browser.get('http://www.mywebsite.com');

--> on the page, find elements with ng-model: 'yourName', and send it the keystrokes: J-u-l-i-e
element(by.model('yourName')).sendKeys('Julie');

--> set var greeting to the now current value of elements with ng-bind="yourName"
var greeting = element(by.binding('yourName'));

--> test if the value of the var greeting is as expected:
expect(greeting.getText()).toEqual('Hello Julie!');

--> chain on further test with the 'then' keyword: 
[...].doSomething().then(function(text){ doSomethingElse();})