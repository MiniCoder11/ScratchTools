// ==UserScript==
// @name         ScratchTools
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Enhances the vanilla Scratch experience with new features!
// @author       MiniCoder11
// @match        https://scratch.mit.edu/projects/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Thanks to Scratch user, Boomer001 for finding and providing documentation for Scratch-VM.
    //Credit to Scratch user, _nix for documenting the below method to mount the Scratch-VM.

    document.head.appendChild(document.createElement("script")).innerHTML = `
const findVM = () => new Promise(resolve => {
    const oldBind = Function.prototype.bind;
    Function.prototype.bind = function(...args) {
        if (args[0] && args[0].hasOwnProperty('editingTarget') && args[0].hasOwnProperty('runtime')) {
            Function.prototype.bind = oldBind;
            resolve(args[0]);
        }
        return oldBind.apply(this, args);
    };
});
findVM().then(vm => {
    virtualMachine = vm;
    console.log("ScratchTools: VM mounted successfully")

    function setVar(sprite, name, value) {
        virtualMachine.setVariableValue(virtualMachine.runtime.getSpriteTargetByName(sprite).id,virtualMachine.runtime.getSpriteTargetByName(sprite).lookupVariableByNameAndType(name).id,value);
    }

    virtualMachine.setCompatibilityMode(false);

//Mobile check (Thanks to Santhosh on stack overflow: https://stackoverflow.com/a/29509267)

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        setVar("ScratchTools", "OnMobile", 1)
    } else {
        setVar("ScratchTools", "OnMobile", 0)
    }

});
`;

})();