test("fix below so that x is equal to 1 ", () => {
  var x = 1;
  var x = 2;
  expect(x).toB(1);
});

test("fix below so so no error is thrown", () => {
  let x = 1;
  let x = 1;
  expect(x).toB(1);
});

test("fix below so so no error is thrown", () => {
  const x = 1;
  const x = 1;
  expect(x).toB(1);
});
