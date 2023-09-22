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

export const stampStatic = "http://43.142.29.240/statics/mougaitong-stamps/";

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

export const reAsteriskByRE = (str: string) => {
  // const firstStyle = str.indexOf("***") === 0 ? true : false;
  const arr3asterisk = str.split("***");
  interface ISpan {
    type: string;
    content: string;
  }
  const arrObj3asterisk: Array<ISpan> = [];
  if (str.indexOf("***") === -1) {
    arrObj3asterisk.push({
      type: "normal",
      content: arr3asterisk[0],
    });
  } else {
    for (const index in arr3asterisk) {
      const textStyle = parseInt(index) % 2 === 0 ? "normal" : "bolditalic";
      arrObj3asterisk.push({
        type: textStyle,
        content: arr3asterisk[index],
      });
    }
  }
  const arrObj2asterisk: Array<ISpan> = [];
  for (const iterator of arrObj3asterisk) {
    if (iterator.type === "bolditalic") {
      arrObj2asterisk.push(iterator);
    } else if (iterator.content.indexOf("**") === -1) {
      arrObj2asterisk.push(iterator);
    } else {
      const arr2asterisk = iterator.content.split("**");
      for (const index in arr2asterisk) {
        const textStyle = parseInt(index) % 2 === 0 ? "normal" : "bold";
        arrObj2asterisk.push({
          type: textStyle,
          content: arr2asterisk[index],
        });
      }
    }
  }
  const arrObj1asterisk: Array<ISpan> = [];
  for (const iterator of arrObj2asterisk) {
    if (iterator.type === "bolditalic" || iterator.type === "bold") {
      arrObj1asterisk.push(iterator);
    } else if (iterator.content.indexOf("*") === -1) {
      arrObj1asterisk.push(iterator);
    } else {
      const arr1asterisk = iterator.content.split("*");
      for (const index in arr1asterisk) {
        const textStyle = parseInt(index) % 2 === 0 ? "normal" : "italic";
        arrObj1asterisk.push({
          type: textStyle,
          content: arr1asterisk[index],
        });
      }
    }
  }
  const final: Array<ISpan> = [];
  for (const iterator of arrObj1asterisk) {
    if (iterator.content != "") {
      final.push(iterator);
    }
  }
  return final;
};

export const generateRandomString = (length: number): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};
// how to define a empty object or array in typescript with given type
