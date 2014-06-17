
# rip

  Force native functions to bind to your contexts and still behave.

## Installation

  Install with [component(1)](http://component.io):

    $ component install matchdav/rip

## API

# require

component

```

component install matchdav/rip

var rip = require('rip');

```

npm

```

npm install ripmethod

var rip = require('ripmethod');

```

# usage

```javascript

var splice = rip(Array.prototype.splice),
    slice = rip(Array.prototype.slice);

splice([1,2,3],1);
slice(arguments);

```

# tests

```
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

```


## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
