function dateTominutes(string: any) {
  if (!string) return 0;
  const hasModifier = string.startsWith('-');
  const [day, hours, minutes] = string.match(/\d+/g);
  const result = day * 24 * 60 + hours * 60 + minutes;
  if (hasModifier) {
    return -result;
  }
  return result;
}

export default dateTominutes;
