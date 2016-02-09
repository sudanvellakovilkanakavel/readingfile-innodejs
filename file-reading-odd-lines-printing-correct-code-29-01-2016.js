var fs = require("fs");
//reading the file
 fs.readFile('input.txt','utf8',function (err,data){
    if (err) {
       return console.error(err);
   }


//spliting the file and storeing in an array
var lines = data.split("\n");
//printing odd numbers
for (i=0;i<=lines.length;)
{
console.log(lines[i]);
i=i+2;
}
});

