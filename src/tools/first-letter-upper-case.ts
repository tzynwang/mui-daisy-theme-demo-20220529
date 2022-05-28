function firstLetterUpperCase(raw: string): string {
  if (!raw.length) return raw;
  if (raw.length === 1) return raw.toUpperCase();
  return `${raw[0].toUpperCase()}${raw.slice(1)}`;
}

export default firstLetterUpperCase;
