export const runDelayedAnimation = (height, delay) => {
  const defaultDelay = 0;
  const shouldAddDelay = window.innerHeight > height;
  return shouldAddDelay ? `${delay}s` : `${defaultDelay}s`;
}