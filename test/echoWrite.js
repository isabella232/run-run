var minimist = require('minimist');

var fs = require('fs');

var parsedArgs = minimist(process.argv.slice(2));
var file = parsedArgs._[ 0 ];
var contents = parsedArgs._[ 1 ];

fs.writeFileSync(file, contents, 'utf8');