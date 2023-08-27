export {};

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (library: any) => {
  library.forEach((book: any) => {
    if (book.isRead) {
      console.log(`Already read '${book.author}' by ${book.title}.`);
    } else {
      console.log(`You still need to read '${book.title}' by ${book.author}.`)
    }
  })
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
