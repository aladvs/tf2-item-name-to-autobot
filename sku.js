
const { parseString } = require('tf2-item-format/static') // -> from 'tf2-item-format'
const spawn = require('child_process').spawn;
const readline = require('node:readline');
const { toSKU } = require('tf2-item-format');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let name = ""
function question() {
    rl.question(`item name: `, new_name => {
        name = new_name
        const attributes = parseString(toTitleCase(name), true, true); // To get defindexes and enums
        const sku = toSKU(attributes);
      
        console.log(attributes)
        console.log(sku)
        url = 'https://autobot.tf/items/' + sku
        if (!url.includes('undefined')) {
          require('child_process').exec(`start ${url}`);
        }
        question()
        //open("autobot.tf/items/" + sku)
      });
}
question()

function toTitleCase(str) {
  return str.split(/\s+/).map(part => 
      part.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      ).join('-')
  ).join(' ');
}
//function toTitleCase( str ) 
//{
 //  return str.split(/\s+/).map( s => s.charAt( 0 ).toUpperCase() + s.substring(1).toLowerCase() ).join( " " );
//}
