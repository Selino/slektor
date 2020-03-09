// https://www.googleapis.com/books/v1/volumes?q=road+less+traveled&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4

export const simulatedSearchData = {
  items: [
    {
      id: "LHTexEiizN4C",
      volumeInfo: {
        title: "The Shit Book",
        authors: ["Thomas N. Bainter"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LHTexEiizN4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "p6Jdgx-lWZ8C",
      volumeInfo: {
        title: "What's Your Poo Telling You?",
        authors: ["Josh Richman", "Anish Sheth"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=p6Jdgx-lWZ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "I8YWAQAAMAAJ",
      volumeInfo: {
        title: "It Hurts when I Poop!",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=I8YWAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }
      }
    },
    {
      id: "KnLpwAEACAAJ",
      volumeInfo: {
        title: "Where's the Poop?",
        authors: ["Julie Markes"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KnLpwAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
        }
      }
    },
    {
      id: "x1RxVwq45cEC",
      volumeInfo: {
        title: "Kama Pootra",
        authors: ["Daniel Cole Young"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=x1RxVwq45cEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    }
  ]
}

const getSampleData = {
  filters: {
    sortChallengesBy: "date-expiring",
    startDate: 1581022995,
    endDate: 1583787795
  },
  challenges: [
    {
      id: "1",
      owner: "John Doe",
      reader: "Steve Jang",
      status: "running",
      bookID: "xIItr7-StUEC",
      bookTitle: "The Hobbit",
      bookThumbnail:
        "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 500,
      createDate: 1583456461,
      expirationDate: 1583524442
    },
    {
      id: "2",
      owner: "Steve Jang",
      reader: "Jane Wilder",
      status: "running",
      bookID: "H8ON-dTgQQYC",
      bookTitle: "Kama Pootra ",
      bookThumbnail:
        "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 300,
      createDate: 1583456461,
      expirationDate: 1583524442
    },
    {
      id: "3",
      owner: "Carol Johnson",
      reader: "Mie Butt",
      status: "running",
      bookID: "H8ON-dTgQQYC",
      bookTitle: "The Hobbit, Or, There and Back Again ",
      bookThumbnail:
        "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 1500,
      createDate: 1583456461,
      expirationDate: 1583524442
    }
  ],
  items: [
    {
      id: "pD6arNyKyi8C",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "hFfhrCWiLSMC",
      volumeInfo: {
        title: "The Hobbit, Or, There and Back Again",
        authors: ["John Ronald Reuel Tolkien"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "H8ON-dTgQQYC",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["Jude Fisher"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "KY0BDObXftUC",
      volumeInfo: {
        title: "Exploring J.R.R. Tolkien's The Hobbit",
        authors: ["Corey Olsen"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KY0BDObXftUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "N_0VhzQKIIAC",
      volumeInfo: {
        title: "Finding God in the Hobbit",
        authors: ["Jim Ware"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=N_0VhzQKIIAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    }
  ]
}

export default getSampleData
