var should = require('should');
var rip = require('../index');

var str = "i are a string";
var arr = ['i','are','a','set','of', 'strings'];

var join = rip(Array.prototype.join);
var split = rip(String.prototype.split);

describe('rip',function(){
	it('should rip an array method',function(){
		(split(str,'')).should.eql(str.split(''));
	});
	it('should rip a string method',function(){
		(join(arr,'')).should.eql(arr.join(''));
	});

});