'use strict';

module.exports = {
    quotaHelper: quotaHelper
};

function quotaHelper(req) {
    /*
    console.log(req);


    var key = req.swagger.params.name.value;
    console.log('Quota Key: ' + key);
    return key;
     */
    var response = {
        "developerMessage": "This is the developer message for 'Exceeding your quota'",
        "userMessage": "This is the end user message for 'Exceeding your quota'",
        "errorCode": 403
    };

    return response;
}