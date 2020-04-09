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
      bookTitle: "The Hobbit",
      bookThumbnail:
        "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
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
  ],
  items: [
    {
      id: "pD6arNyKyi8C",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet porttitor ornare. Nam maximus id dolor vel rhoncus. In non fermentum nunc. Vestibulum gravida justo sollicitudin tellus suscipit convallis. Vestibulum faucibus consectetur erat, ut bibendum nisl commodo eu. Proin cursus diam ante, nec viverra neque hendrerit in. Aliquam erat volutpat. Integer et eros varius, mollis dolor tempor, tincidunt dolor. Donec porta lacinia sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ultrices pretium justo, vel auctor nunc viverra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus tellus sed ultricies sodales. Quisque nec placerat tortor. Sed libero ante, dictum a libero sed, semper efficitur tellus. Ut vel consequat libero. Nam ut accumsan arcu. Nam eu mauris sit amet libero auctor accumsan dapibus quis arcu. Nulla sit amet libero placerat, tempor dolor in, auctor urna. Duis lobortis sit amet augue nec ultrices. Vivamus in lectus facilisis, pharetra enim eget, suscipit nisl. Aliquam erat volutpat.",
      },
    },
    {
      id: "hFfhrCWiLSMC",
      volumeInfo: {
        title: "The Hobbit, Or, There and Back Again",
        authors: ["John Ronald Reuel Tolkien"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "Fusce nisl nunc, blandit sit amet purus nec, cursus facilisis nibh. Maecenas nisi odio, porttitor nec vestibulum eget, aliquam id nisi. Sed euismod porttitor consectetur. Duis cursus orci massa, non cursus sem imperdiet eget. Aliquam tortor mauris, sagittis ac urna vitae, pellentesque luctus ligula. Donec sed bibendum ligula. Nullam at luctus erat. Nulla facilisi. Aliquam sodales diam tellus, vitae aliquet dui fermentum id. Donec non elementum felis. Vestibulum pharetra porta libero sed pretium.",
      },
    },
    {
      id: "H8ON-dTgQQYC",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["Jude Fisher"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
      },
    },
    {
      id: "KY0BDObXftUC",
      volumeInfo: {
        title: "Exploring J.R.R. Tolkien's The Hobbit",
        authors: ["Corey Olsen"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KY0BDObXftUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
        description:
          "Ut dictum ut justo vitae laoreet. Pellentesque libero tortor, volutpat sit amet dapibus at, congue eu turpis. Nam sollicitudin purus quis vulputate laoreet. Suspendisse ornare eros mi, eget faucibus libero consectetur sed. Suspendisse non vehicula urna. Morbi vitae tortor posuere lorem aliquam scelerisque ac quis arcu. Fusce sit amet dolor quis mi ultrices facilisis nec id orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tempor posuere lacus in dapibus.",
      },
    },
    {
      id: "N_0VhzQKIIAC",
      volumeInfo: {
        title: "Finding God in the Hobbit",
        authors: ["Jim Ware"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=N_0VhzQKIIAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        },
      },
    },
  ],
})
