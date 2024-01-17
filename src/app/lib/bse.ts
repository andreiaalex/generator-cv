const rte = (str: string): string => {
  while (str[str.length - 1] === "=") {
    str = str.slice(0, -1);
  }
  return str;
};

const sl = (str: string, firstIdx: number, lastIdx: number): string => {
  let arr = str.split("");
  let aux = arr[firstIdx];
  arr[firstIdx] = arr[lastIdx];
  arr[lastIdx] = aux;
  return arr.join("");
};

export const gec = (obj: Record<string, any>): string => {
  const body = JSON.stringify(obj);
  const encodedAndUnpaddedString = rte(btoa(body));
  return sl(encodedAndUnpaddedString, 1, encodedAndUnpaddedString.length - 2).split("").reduce((acc, char) => char + acc, "");
};
