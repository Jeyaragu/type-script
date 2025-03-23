class User {
  name: string;
  lastName?: string;
  email: string;
  constructor(name: string, email: string, lastName?: string) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
  }
}
// extents - key words used to extent over the parent class
// User is parent class Admin is a child class of Users
// optional parameter can only be added after the mandatory parameters
class Admin extends User {
  isAdmin: boolean = true;
  constructor(
    name: string,
    email: string,
    isAdmin: boolean,
    lastName?: string
  ) {
    super(name, email, lastName);
    this.isAdmin = isAdmin;
  }
}

// const user1 = new User("John", "john@email.com");
// const adminUser = new Admin("Mark", "mark@email.com", false);
class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly ISBN: string;
  constructor(
    title: string,
    author: string,
    ISBN: string,
    yearPublished?: number
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    if (yearPublished) {
      this.yearPublished = yearPublished;
    }
  }
}

const book = new Book(
  "The Merchent of venice",
  "William Shakespeare",
  "Certified",
  1605
);
/* 
* To test the readonly property from the class
* book.author = "Author";
* book.ISBN = 'Test'
*/
function logBookDetails(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`ISBN: ${book.ISBN}`);
  if (book.yearPublished) {
    console.log(`Year Published: ${book.yearPublished}`);
  }
  return book;
}

// logBookDetails(book);
class EBook extends Book {
  fileSize: number;
  format: string;
  constructor(
    title: string,
    author: string,
    ISBN: string,
    fileSize: number,
    format: string,
    yearPublished?: number
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}

const newEbook = new EBook(
  "The Merchent of venice",
  "William Shakespeare",
  "Certified",
  5,
  "pdf",
  1605
);
// logBookDetails(newEbook)
