export const cleanProductName = (name) => name.replace(/[�|\s\s+]/g, ' ').replace(/([0-9]+)$/g, '⌀$1');
