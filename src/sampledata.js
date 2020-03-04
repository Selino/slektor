// https://www.googleapis.com/books/v1/volumes?q=road+less+traveled&key=AIzaSyANiQq7pX6TFzAv9wuBa6XlzFsaMuNloc4

import { v1 as uuidv1, v4 as uuidv4 } from "uuid"

const getSampleData = {
  filters: {
    text: "Lorem",
    sortBy: ""
  },
  challenges: [
    {
      id: "I8YWAQAAMAAJ-87USJF",
      owner: "U1",
      reader: "U2",
      status: "running",
      bookID: "xIItr7-StUEC",
      amount: 300,
      createDate: "2020-02-18T19:01:55.687+00:00",
      expirationDate: "2020-03-03T00:21:48+0000"
    }
  ],
  items: [
    {
      id: "LHTexEiizN4C",
      volumeInfo: {
        title: "The Shit Book",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LHTexEiizN4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
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
      id: "p6Jdgx-lWZ8C",
      volumeInfo: {
        title: "What's Your Poo Telling You?",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=p6Jdgx-lWZ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "x1RxVwq45cEC",
      volumeInfo: {
        title: "Kama Pootra",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=x1RxVwq45cEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "xIItr7-StUEC",
      volumeInfo: {
        title: "Eat, Sleep, Poop",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=xIItr7-StUEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
        }
      }
    }
  ]
}

export default getSampleData
