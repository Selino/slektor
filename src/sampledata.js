import moment from "moment"

// Google Books API
// https://www.googleapis.com/books/v1/volumes?q=road+less+traveled&key={REACT_APP_GOOGLE_BOOKS_API_KEY}

export const simulatedSearchData = () => ({
  items: [
    {
      id: "LHTexEiizN4C",
      volumeInfo: {
        title: "The Shit Book",
        authors: ["Thomas N. Bainter"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LHTexEiizN4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
      },
    },
    {
      id: "p6Jdgx-lWZ8C",
      volumeInfo: {
        title: "What's Your Poo Telling You?",
        authors: ["Josh Richman", "Anish Sheth"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=p6Jdgx-lWZ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
      },
    },
    {
      id: "I8YWAQAAMAAJ",
      volumeInfo: {
        title: "It Hurts when I Poop!",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=I8YWAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        },
      },
    },
  ],
})

export const getSampleData = () => ({
  filters: {
    sortBy: "date",
    startDate: null,
    endDate: null,
    text: "",
  },
  challenges: [
    {
      id: "1",
      owner: "John Doe",
      status: "running",
      bookID: "xIItr7-StUEC",
      bookTitle: "Catch-22",
      bookThumbnail:
        "http://books.google.com/books/content?id=Xfze51E7TEoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 500,
      startDate: moment(1583326800000),
      endDate: moment(1588338000000),
    },
    {
      id: "2",
      owner: "Steve Jang",
      status: "running",
      bookID: "KY0BDObXftUC",
      bookTitle: "Exploring J.R.R. Tolkien's The Hobbit",
      bookThumbnail:
        "http://books.google.com/books/content?id=KY0BDObXftUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 300,
      startDate: moment(1580562000000),
      endDate: moment(1585746000000),
    },
    {
      id: "3",
      owner: "Carol Johnson",
      status: "running",
      bookID: "H8ON-dTgQQYC",
      bookTitle: "The Hobbit, Or, There and Back Again",
      bookThumbnail:
        "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      amount: 1500,
      startDate: moment(1583067600000),
      endDate: moment(1586955600000),
    },

    {
      id: "4",
      owner: "Carol Johnson",
      status: "running",
      bookID: "H8ON-ffdf",
      bookTitle: "It Hurts when I Poop!",
      bookThumbnail:
        "http://books.google.com/books/content?id=I8YWAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      amount: 200,
      startDate: moment(1585067603000),
      endDate: moment(1588955603000),
    },
  ],
  items: [
    {
      id: "pD6arNyKyi8C",
      volumeInfo: {
        title: "Pirates",
        authors: ["John Reeve Carpenter"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=eH7nwjpzHrEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "Looks at the history of pirates, discussing life aboard ship, battle tactics, weapons, and flags as well as such well-known pirates as Sir Francis Drake, Henry Morgan, and William Kidd.",
      },
    },
    {
      id: "hFfhrCWiLSMC",
      volumeInfo: {
        title:
          "Last Week Tonight with John Oliver Presents a Day in the Life of Marlon Bundo",
        authors: ["Marlon Bundo"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=mvlRDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "100% of Last Week Tonight's proceeds will be donated to The Trevor Project and AIDS United. HBO's Emmy-winning Last Week Tonight with John Oliver presents a children's picture book about a Very Special boy bunny who falls in love with another boy bunny. Meet Marlon Bundo, a lonely bunny who lives with his Grampa, Mike Pence - the Vice President of the United States. But on this Very Special Day, Marlon's life is about to change forever... With its message of tolerance and advocacy, this charming children's book explores issues of same sex marriage and democracy. Sweet, funny, and beautifully illustrated, this book is dedicated to every bunny who has ever felt different.",
      },
    },
    {
      id: "H8ON-dTgQQYC",
      volumeInfo: {
        title: "Everything You Need to Ace Math in One Big Fat Notebook",
        authors: ["Workman Publishing"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=csVKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "It’s the revolutionary math study guide just for middle school students from the brains behind Brain Quest. Everything You Need to Ace Math . . . covers everything to get a student over any math hump: fractions, decimals, and how to multiply and divide them; ratios, proportions, and percentages; geometry; statistics and probability; expressions and equations; and the coordinate plane and functions. The BIG FAT NOTEBOOK™ series is built on a simple and irresistible conceit—borrowing the notes from the smartest kid in class. There are five books in all, and each is the only book you need for each main subject taught in middle school: Math, Science, American History, English Language Arts, and World History. Inside the reader will find every subject’s key concepts, easily digested and summarized: Critical ideas highlighted in neon colors. Definitions explained. Doodles that illuminate tricky concepts in marker. Mnemonics for memorable shortcuts. And quizzes to recap it all. The BIG FAT NOTEBOOKS meet Common Core State Standards, Next Generation Science Standards, and state history standards, and are vetted by National and State Teacher of the Year Award–winning teachers. They make learning fun and are the perfect next step for every kid who grew up on Brain Quest.",
      },
    },
  ],
})
