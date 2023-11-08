export const getVoucherColors = (point: number) => {
  if (point > 4500) {
    return '#4caf50';
  } else if (point > 4000) {
    return '#03a9f4';
  } else if (point > 3500) {
    return '#ff9800';
  } else if (point > 2500) {
    return '#ef5350';
  } else if (point > 1500) {
    return '#ba68c8';
  } else if (point > 500) {
    return '#42a5f5';
  } else {
    return '#0c0c0c';
  }
};
