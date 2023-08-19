export function ExpensiveComponent() {
  console.log('Rendering...');
  for (let i = 0; i < 1000000000; i++) {}
  return null;
}
