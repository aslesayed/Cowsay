const cowsay = require('cowsay');
const information = require('./information');

const message = `Hello! I'm ${information.name} from ${information.campus}!`;

console.log(cowsay.say({
    text: message,
}));


