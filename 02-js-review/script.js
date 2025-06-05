const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: false,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }



  //Destructuring


/*
onst book = getBook(3);

// const title = book.title
// const author = book.author
book

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = getBook(4)
// console.log(title, author);


// const primaryGenres = genres[0]
// const secondaryGenres = genres[1]

// REST/SPREAD OPERATER 

// const [primaryGenres, secondaryGenres] = genres; //takes the first and second element of the array and assign them to these two variables...
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres)



const newGernes = ["epic fantasy", ...genres]
console.log(newGernes)


//overright existing porperty 

const updateBook = {...book,  moviePublicationDate: "2025-06-04", pages: 0};
updateBook

console.log(true && 'Some string')
console.log(false  && 'Some string')
console.log(hasMovieAdaptation && 'This book has a moive')

// flasy: 0, '', null, undefined

console.log('jonas' && 'Some string');
console.log('' && 'Some string');


console.log(true || 'Some string');
console.log(false || 'Some string');


console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'NOT Translated'



// const count = book.reviews.librarything.reviewsCount || 'no data'
// const count = book.reviews.librarything.reviewsCount ?? 'no data'
// count

//OPTIONAL CHANING ..


console.log(getTotalReviewCount(book));



function getTotalReviewCount(book){
  const goodread = book.reviews?.goodreads.reviewsCount
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0

  return goodread + librarything

}

// FUCTIONAL ARRAY METHOD 
// map

const books = getBooks()

const x = [1, 2, 3, 4, 5].map((el)=> el ** 2)
console.log(x);

books
const titles = books.map(book=> book.title)
titles

const essentialData = books.map(book => (
  {
    title: book.title.toUpperCase(),
    author: book.author,
    reviewsCount : getTotalReviewCount(book)
  }
))
essentialData


// FILTER METHOD 

const longBooks  =books.filter(book =>  book.pages > 800 ).filter(book => book.hasMovieAdaptation)
longBooks

const adventureBooks = books.filter(book => book.genres.includes('adventure')).map(book => book.title)
// adventureBooks

// REDUCD METHOD  

const pagesAllBooks = books.reduce((acc, book)=> acc + book.pages, 0)  
// pagesAllBooks

const arr = [3, 7, 1, 8, 4]
// const sorted = arr.sort((a,b)=> a - b) //unlike map , filter and reduce it is not functional method it change original array .. 
const sorted = arr.slice().sort((a,b)=> a -b)
sorted 
arr 

const sortedByPages = books.slice().sort((a,b) => b.pages - a.pages ) 
// sortedByPages

// 1) Add book object to array 
const newBook = {
  id: 6,
  title: 'Harry Portter and the Chamber of Secrets',
  author: 'J. K. Rowling',
};

const booksAfterAdd = [...books, newBook]
booksAfterAdd

// 2) Delete a book object from array 
const bookAfterDelete = books.filter(book => book.id !==2 )
// bookAfterDelete

// 3) update a book object in the array 
const bookAfterUpdate = books.map((book) => book.id ===1 ? {...book, pages: 0, bookBurned : true} : book)
bookAfterUpdate
*/
// promises  
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((res) => res.json())
//   .then(data => console.log(data))


// async/await 

async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await  res.json()
  console.log(data)
  
  return data
}

const todos = getTodos();
console.log(todos)

console.log('jonas');

