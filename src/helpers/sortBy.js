export const compareAZ = (a, b) => {
  const aa = a.name;
  const bb = b.name;
  if (aa < bb) return -1;
  if (aa > bb) return 1;
  return 0;
};

export const compareZA = (a, b) => {
  const aa = a.name;
  const bb = b.name;
  if (aa > bb) return -1;
  if (aa < bb) return 1;
  return 0;
};
