describe('Operations with numbers', () => {
  const a = 2
  const b = 3

  test('add', () => {
    expect(a + b).toEqual(5)
  })

  test('substract', () => {
    expect(a - b).toEqual(-1)
  })

  test('multiply', () => {
    expect(a * b).toEqual(6)
  })

  test('division', () => {
    expect(b / a).toEqual(1.5)
  })
})
