var should = require('should');
var rip = require('../index');

var str = "i are a string";
var arr = ['i','are','a','set','of', 'strings'];

var join = rip(Array.prototype.join);
var split = rip(String.prototype.split);
var slice = rip(Array.prototype.slice);
var call = rip(Function.prototype.call);
var apply = rip(Function.prototype.apply);

function inherit(child,parent) {
	function f(){}
	f.prototype = parent.prototype;
	child.prototype = new f();
	child.uber = parent;
	child.prototype.constructor = child;
}




describe('rip',function(){
	it('should rip an array method',function(){
		(split(str,'')).should.eql(str.split(''));
	});
	it('should rip a string method',function(){
		(join(arr,'')).should.eql(arr.join(''));
	});
	it('should do inheritance stuff',function(){
		function Parent(args) {
			this.name = 'Parent';
			this.args = args;
		}

		Parent.prototype.instruct = function() {
			return 'Do as you are told.';
		}

		function Child() {
			apply(Parent,this,slice(arguments));
			this.name='Child';
		}

		inherit(Child,Parent);

		Child.prototype.rebel = function() {
			return 'No way!';
		}
		var c = new Child({foo:'bar'});
		c.name.should.exist;
		c.args.should.exist;
		(c.instruct()).should.be.ok;
		(c.rebel()).should.be.ok;
	});
});