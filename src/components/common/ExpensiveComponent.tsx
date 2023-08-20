export function ExpensiveComponent() {
  console.log('Rendering...');
  for (let i = 0; i < 1_000_000_00; i++) {}
  return null;
}
