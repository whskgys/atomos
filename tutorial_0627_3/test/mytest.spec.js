function sum(x,y) {
    return x+y;
}
function multiplication(x,y) {
    return x*y;
}
test("sum() should success : 1 * 2 => 3", () => {
    expect(sum(1,2)).toBe(3);
    
});

test("sum() should success : 10 + 10 => 20", () => {
    expect(sum(10, 10)).toBe(20);
  });

  test("sum() should success : 100 + 1000 => 1100", () => {
    expect(sum(100, 1000)).toBe(1100);
  });

  test("multiplication() should success : 2 * 4 => 8", () => {
    expect(multiplication(2,4)).toBe(8);
  });