const a = require('http');

const httpServer = a.createServer(function(req, res) {

     if (req.url === '/C++'){
        res.writeHead(204, {'Content-Type' : 'text/plain'});
        res.end('C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.');
    } else if (req.url === '/Java'){
        res.writeHead(202, {'Content-Type' : 'text/plain'});
        res.end('Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,and specifically designed to have as few implementation dependencies as possible.');
	} else if (req.url === '/Javascript'){
        res.writeHead(206, {'Content-Type' : 'text/plain'});
        res.end('JavaScript is a high-level, dynamic, untyped, and interpreted programming language.It has been standardized in the ECMAScript language specification.');
    } else if (req.url === '/Pascal'){
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Pascal is an imperative and procedural programming language, which Niklaus Wirth designed in 1968–69 and published in 1970, as a small, efficient language intended to encourage good programming practices using structured programming and data structuring.');
    } else if (req.url === '/Python'){
        res.writeHead(205, {'Content-Type' : 'text/plain'});
        res.end('Python is a widely used high-level, general-purpose, interpreted, dynamic programming language.Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.');
	} else if (req.url === '/C'){
        res.writeHead(201, {'Content-Type' : 'text/plain'});
        res.end('C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations.');
	} else if (req.url === '/A++'){
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('A++ stands for abstraction plus reference plus synthesis which is used as a name for the minimalistic programming language that is built on ARS.');
	} else if (req.url === '/Apllescript'){
        res.writeHead(207, {'Content-Type' : 'text/plain'});
        res.end('AppleScript is a scripting language created by Apple Inc. and built into the Classic Mac OS since System 7 and into all versions of macOS.');
    }
	
});
httpServer.listen(3517);


