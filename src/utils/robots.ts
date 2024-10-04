export function pageIndex(value = true) {
  if (process.env.robotIndex === 'false' || !value) {
    return {
      index: false,
      follow: false,
    };
  }

  return {};
}
