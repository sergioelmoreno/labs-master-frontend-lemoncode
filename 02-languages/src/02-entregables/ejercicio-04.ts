console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (books: Book[], text: string): boolean => books.some((book: Book) => book.title.includes(text) && book.isRead);

console.log("isBookRead Devastación: ", isBookRead(books, "Devastación")); // true
console.log("isBookRead Canción de hielo y fuego: ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("isBookRead Los Pilares de la Tierra", isBookRead(books, "Los Pilares de la Tierra")); // false