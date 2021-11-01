test("using number type set numberOne to 1 ", () => {
  var numberOne;
  expect(numberOne).toBe(1);
});

test("using addition set results to the JavaScript equitant of 6+4=10 ", () => {
  var results;
  expect(results).toBe(10);
});

test("using subtraction set results to the JavaScript equitant of 15-5=10 ", () => {
  var results;
  expect(results).toBe(10);
});

test("using division set results to the JavaScript equitant of 20/2=10 ", () => {
  var results;
  expect(results).toBe(10);
});

test("using multiplication set results to the JavaScript equitant of 2*5=10 ", () => {
  var results;
  expect(results).toBe(10);
});

test("using multiplication set results to the JavaScript equitant of 2*5=10 ", () => {
  var results;
  expect(results).toBe(10);
});

test("make results true with the JavaScript equitant of 1 is less than 5 ", () => {
  // var results = 1<5;
  var results;
  expect(results).toBeTruthy();
});

test("make results true with the JavaScript equitant of 1 is greater than 5 ", () => {
  var results;
  expect(results).toBeTruthy();
});

test("make results true with the JavaScript equitant of 1 equal to 1 ", () => {
  // var results = 1===1;
  var results;
  expect(results).toBeTruthy();
});

test("fix the test to make it true", () => {
  var results = 1 === "1";
  expect(results).toBeTruthy();
});
