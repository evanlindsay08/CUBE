export const forceReflow = (element: HTMLElement) => {
  // Using getComputedStyle is a safer way to force a reflow
  window.getComputedStyle(element).getPropertyValue('opacity');
}; 