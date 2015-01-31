var fs     = require('fs'),
    yaml   = require('./');

var str = String(fs.readFileSync('test1.yml'));
var parsed = yaml.safeLoad(str);

console.log(JSON.stringify(parsed, null, 2));

var x = parsed.val.node.val.attrs;
console.log(str.substring(x.start, x.end));
