// get variables from CSV file
const jsonData = pm.response.json();
var expReason = pm.variables.get("expReason");
var webBrowser = pm.variables.get("webBrowser");
var expResponse = pm.variables.get("expResponse");
var expResponse = JSON.stringify(pm.variables.get("expResponse"));

//  test's name is composed from the CSV data
var testName = "Test response " + expResponse + " and reason " + expReason + " in " + webBrowser;

pm.test(testName, function () {
    pm.expect(jsonData.response).to.eql(expResponse);
    pm.expect(jsonData.reason).to.eql(expReason);
});

pm.test("Response time is less than 800ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});
