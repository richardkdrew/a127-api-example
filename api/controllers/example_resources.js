'use strict';

module.exports = {
    getExampleResources     : getExampleResources,
    getExampleResourceById  : getExampleResourceById
};

var fakeTotal = 150;

function getExampleResources (req, res) {

    // Fake paging
    var offset = req.swagger.params.offset.value || 0;
    var limit = req.swagger.params.limit.value || 10;

    // Fake error responses
    if(limit > fakeTotal) res.send(500, { error: "Invalid limit supplied" });
    if(offset > fakeTotal) res.send(500, { error: "Invalid offset supplied" });

    // Fake response
    var response = getFakeResponse(limit, offset, fakeTotal);

    res.json(response);
}

function getExampleResourceById (req, res) {

    // Get the Id
    var id = req.swagger.params.id.value || 0;

    // Make sure the ID is valid
    //if(id.match(/^\d+$/)) res.send(500, { error: "Invalid Example Resource ID supplied" });

    // Fake error responses
    if(id > fakeTotal) res.send(404, { error: "Example Resource not found" });

    // Fake example resource/response
    var response = getFakeExampleResource(id, "An Example Resource of some kind!");

    res.json(response);
}

function getFakeResponse(limit, offset, total) {

    var response = {};
    response.paging = getFakePaging(limit, offset, total);
    response.resources = getFakeExampleResources(limit, offset);

    return response;
}

function getFakePaging(limit, offset, total) {

    var paging = {};
    paging.limit = limit;
    paging.offset = offset;
    paging.total = total;

    return paging;
}

function getFakeExampleResource(id, title) {

    var exampleResource = {};
    exampleResource.id = id;
    exampleResource.title = title;

    return exampleResource;
}

function getFakeExampleResources(limit, offset) {
    var exampleResources = [];

    for (var i = 0; i < limit; i++) {
        // Take the offset into consideration and add 1 (don't want fake id starting at 0!)
        var id = i + offset + 1;
        exampleResources[i] = getFakeExampleResource(id, "Example Resource "  + id);
    }

    return exampleResources;
}