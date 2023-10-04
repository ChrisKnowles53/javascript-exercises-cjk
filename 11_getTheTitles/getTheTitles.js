const books = [
  {
    title: "JSFundamentals",
    author: "Odin",
  },
  {
    title: "REACT",
    author: "Drama Queen",
  },
];

const getTheTitles = function (array) {
  return array.map((books) => books.title);
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
