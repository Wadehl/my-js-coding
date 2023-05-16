const myModule = (function() {
    let privateVar = "private Variable";

    function printPrivate() {
        console.log(privateVar);
    }

    return {
        printPublic: function() {
            printPrivate();
        },
        publicVar: 'public Var'
    }
})();

myModule.printPublic();
console.log(myModule.privateVar, myModule.publicVar);