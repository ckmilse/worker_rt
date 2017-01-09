
 var modulePath = '../worker_react/testModule.js';
// var modulePath = './testModule.js';
function setIn() {
    setTimeout(function() {
        var ck = require(modulePath + '');

        ck();
        modulePath = '../worker_react/testModule.js' ? './testModule.js':'../worker_react/testModule.js';
        setIn()
    },9000);
}
setIn();
// setTimeout(function() {
//     var ck = require('./testModule.js');
//     ck();
// },1000);
