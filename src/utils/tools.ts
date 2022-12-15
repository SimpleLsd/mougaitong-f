export const numtoNO3 = (num: number | null): string => {
  if (num) {
    const str = num + "";
    const pad = "000";
    const ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
  } else {
    return "";
  }
};
