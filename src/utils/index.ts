export const formatSumm = (sum: any) => {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
