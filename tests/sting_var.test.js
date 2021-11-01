test("using string type set numberOne to 1 ", () => {
  var numberOne;
  expect(numberOne).toBe("1");
});

test("using string concatenation set results to 'hello fall' ", () => {
  var greeting = "hello";
  var season = "fall";
  var results;
  expect(results).toBe("hello fall");
});

test("using string interpolation set results to 'hello fall' ", () => {
  var greeting = "hello";
  var season = "fall";
  var results;
  expect(results).toBe("hello fall");
});

test("using string concatenation set results to 'hello spring' ", () => {
  var greeting = "hello";
  var season = "spring";
  var results;
  expect(results).toBe("hello spring");
});

test("using string interpolation set results to 'hello spring' ", () => {
  var greeting = "hello";
  var season = "spring";
  var results;
  expect(results).toBe("hello spring");
});
