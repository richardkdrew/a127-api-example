'use strict';

module.exports = {
    setQuotaKey         :   setQuotaKey,
    setCacheKey         :   setCacheKey,
    setSpikeArrestKey   :   setSpikeArrestKey
};

function setQuotaKey(req) {
    var key = req.swagger.params.apiKey.value;
    console.log('Quota Key: ' + key);
    return key;
}

function setCacheKey(req) {
    var key = req.swagger.params.apiKey.value;
    console.log('Cache Key: ' + key);
    return key;
}

function setSpikeArrestKey(req) {
    var key = req.connection.remoteAddress;
    console.log('Spike Arrest Key: ' + key);
    return key;
}