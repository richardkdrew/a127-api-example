'use strict';

module.exports = {
    setQuotaKey: setQuotaKey,
    setCacheKey: setCacheKey
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