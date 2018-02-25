(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.vexDialogPromise = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
var plugin = function plugin (vex) {
	if (!vex.hasOwnProperty('dialog')) {
		throw new Error('vex-dialog-promise requires vex-dialog to be registered first.')
	}

   Object.keys(vex.dialog).forEach(function (key) {
    if (['prompt', 'confirm', 'alert'].includes(key)) {
        var origFn = vex.dialog[key].bind(vex.dialog)
        vex.dialog[key] = function (options) {
            return new Promise(function (resolve, reject) {
                origFn(Object.assign({}, options, {
                    callback: function (val) {
                        val !== false ? resolve(val) : reject(val)
                    }
                }))
            })
        }
    }

    return {
    	name: 'dialogPromise'
    }
})
}
module.exports = plugin
},{}]},{},[1])(1)
});