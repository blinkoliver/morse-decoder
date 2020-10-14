const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  " ": " ",
};

let decode = (expr) => {
  let ten = /10/gi;
  let eleven = /11/gi;
  let space = /\*{10}/gi;
  let codeWordArr = [];
  for (let i = 0; i < expr.length - 1; i += 10) {
    codeWordArr.push(
      expr
        .slice(i, i + 10)
        .replace(/00/g, "")
        .replace(eleven, "-")
        .replace(ten, ".")
        .replace(space, " ")
    );
  }
  let encode = codeWordArr.map((element) => {
    return MORSE_TABLE[element];
  });
  return encode.join("");
};

module.exports = {
  decode,
};
