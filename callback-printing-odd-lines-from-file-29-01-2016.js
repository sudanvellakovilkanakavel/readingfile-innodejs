var fs = require("fs");

fs.readFile('input.txt','utf8',function (err, data) {
    if (err) 
    	{
    		return console.error(err);

    	}
    
    var lines = data.split("\n");
//printing odd numbers
for (i=0;i<=lines.length;)
{
console.log(lines[i]);
i=i+2;
}
});

console.log("Program Ended");