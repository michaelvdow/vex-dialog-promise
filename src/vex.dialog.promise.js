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