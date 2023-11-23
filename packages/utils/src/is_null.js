export function isNull(input) {
  if (input === null) {
    return true;
  }

  if (input === undefined) {
    return true;
  }

  return false;
}
