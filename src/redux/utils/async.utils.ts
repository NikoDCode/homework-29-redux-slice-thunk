export const asyncDelay = (value: number): Promise<{ value: number }> => {
  return new Promise<{ value: number }>((resolve) => {
    setTimeout(() => resolve({ value }), 1000)
  })
}
