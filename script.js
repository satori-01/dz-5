const numbers = [3, 4, 5, 44, 55, 23, 34, 12, 26, 67, 77, 75, 98, 67];

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(oddNumbers);


function filterBooks(books) {
    const booksWithU = [];
    const otherBooks = [];
  
    for (const book of books) {
      const lowercaseTitle = book.toLowerCase();
  
      if (lowercaseTitle.includes('у')) {
        booksWithU.push(book);
      } else {
        otherBooks.push(book);
      }
    }
  
    console.log('Книги с буквой "у":', booksWithU);
    console.log('Остальные книги:', otherBooks);
  }
    const bookList = [
    'Мастер и Маргарита',
    'Гарри Поттер',
    'Улисс',
    '1984',
    'Анна Каренина',
    'Моби Дик',
    'Убик',
    'Туманность Андромеды',
    'Колыбель для кошки',
  ];
  
  filterBooks(bookList);
  



