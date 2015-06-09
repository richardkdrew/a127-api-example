'use strict';

var mockController = require('../mocks/example_resources');

module.exports = {
    getExampleResources     : getExampleResources,
    getExampleResourceById  : getExampleResourceById
};

function getExampleResources (req, res) {

    // Use the mock controller for fake data until there's a real endpoint available
    var response = mockController.getExampleResources(req, res);

    res.send(response);

    /*
    res.json({
        "paging": {
            "limit": 0,
                "offset": 0,
                "total": 0
        },
        "resources": []
    });*/
}

function getExampleResourceById (req, res) {

    // Use the mock controller for fake data until there's a real endpoint available
    var response = mockController.getExampleResourceById(req, res);

    res.send(response);
}