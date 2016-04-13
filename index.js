var fs = require('fs');
var program = require('commander');

program
  .version('0.1.0')
  .option('-f1, --file1 <n>', 'Source')
  .option('-f2, --file2 <n>', 'Outdated file')
  .parse(process.argv);

if(!program.file1 && !program.file2){
    console.log('Specify parameters');
    return;
}

var nb = fs.readFileSync(program.file1, {encoding: 'utf-8'});
var en = fs.readFileSync(program.file2, {encoding: 'utf-8'});

var nbTest = JSON.parse(nb);
var enTest = JSON.parse(en);

var keys = Object.keys(enTest);

for(var i=0; i < keys.length; i++){
    if(!nbTest[keys[i]]){
        console.log(keys[i]);
    }
}
