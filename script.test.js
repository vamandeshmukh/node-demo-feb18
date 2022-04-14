
describe('testing with jest', () => {

  test('adds 10 + 20 to equal 30', () => {
    expect(10 + 20).toBe(30);
  });

  test('adds 10 + 20 not to equal 40', () => {
    expect(10 + 20).not.toBe(40);
  });

});

