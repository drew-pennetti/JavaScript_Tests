test("fix the the test to make it truthy", () => {
  const topLevelScope = "global scope";

  if (true) {
    const results = true;
  }

  expect(results).toBeTruthy();
});

test("fix the the test to make it truthy", () => {
  const results = false;
  expect(results).toBeTruthy();
});

test("fix the the test to make it truthy", () => {
  var results = false;
  if (false) {
    results = true;
  }
  expect(results).toBeTruthy();
});
