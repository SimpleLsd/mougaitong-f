export const numtoNO3 = (num: number | null): string => {
  if (num === 0) {
    return "000";
  }
  if (num) {
    const str = num + "";
    const pad = "000";
    const ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
  } else {
    return "";
  }
};

export const test_collection_cover =
  "https://image.gcores.com/d8c1f38b-6591-4963-a4d0-0f8c621754af.jpg?x-oss-process=image/resize,limit_1,m_lfit,w_2000,h_2000/quality,q_90/format,webp";

// 2022-10-26T09:45:55.258Z
interface Idate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minite: number;
  second: number;
}
export const utctoDateTime = (utc: string | null): Idate => {
  const result = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minite: 0,
    second: 0,
  };
  if (utc) {
    result.year = parseInt(utc.substring(0, 4));
    result.month = parseInt(utc.substring(5, 7));
    result.day = parseInt(utc.substring(8, 10));
    result.hour = parseInt(utc.substring(11, 13));
    result.minite = parseInt(utc.substring(14, 16));
    result.second = parseInt(utc.substring(17, 19));
  }
  return result;
};

export const dateMD = (utc: string | null): string => {
  const date = utctoDateTime(utc);
  return `${date.month}月${date.day}日`;
};

// how to define a empty object or array in typescript with given type
