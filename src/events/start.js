console.log('Starting')

setTimeout(function() {console.log('Loading Files')}, 3000)

setTimeout(function() {console.log('Successfully Loaded All Files')}, 5000)

setTimeout(function() {const startBot = require ('../bot.js');}, 5000);