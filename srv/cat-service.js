const cds = require('@sap/cds');

module.exports = cds.service.impl(function(req) {
	this.on('addRandomBook', _addBook);
})


async function _addBook (req) {
    
    const tx = cds.transaction(req)
    //Build procedure call string
    var vProcedure = 'call NEWRECORD(RESULT => ?)'
    //var vStart = 'call scan(SCANKEY => \''
    //var vProcedure = vStart.concat(req.data.simKey,'\', SCANTYPE => \'',req.data.scanType, '\', RESULT => ?)')
    //Execute procedure call in HANA
    return tx.run (vProcedure)			// TODO: No response recceived in http body
    
}
