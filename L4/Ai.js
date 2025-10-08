function getSortedPostsByTitleLength(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    });
}

pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.eql(200);
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Response has required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('array').that.is.not.empty;
    
    responseData.forEach(function(item) {
        pm.expect(item).to.have.all.keys('userId', 'id', 'title', 'body');
    });
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Title is a non-empty string", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('array').that.is.not.empty;
    responseData.forEach(function(item) {
        pm.expect(item.title).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Title should not be empty");
    });
});


pm.test("Response is an array with at least one element", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('array').that.is.not.empty;
});