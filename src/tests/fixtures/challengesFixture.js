import { v4 as uuidv4 } from "uuid"
import moment from "moment"

export default [
  {
    id: "1",
    owner: "John Doe",
    reader: "Steve Jang",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Hobbit",
    bookThumbnail:
      "http://books.google.com/books/content?id=H8ON-dTgQQYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 500,
    startDate: moment(1583326800000),
    endDate: moment(1588338000000)
  },
  {
    id: "2",
    owner: "Steve Jang",
    reader: "Jane Wilder",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "Kama Pootra",
    bookThumbnail:
      "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 300,
    startDate: moment(1580562000000),
    endDate: moment(1585746000000)
  },
  {
    id: "3",
    owner: "Carol Johnson",
    reader: "Mike Butt",
    status: "running",
    bookID: uuidv4(),
    bookTitle: "The Hobbit, Or, There and Back Again",
    bookThumbnail:
      "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    amount: 1500,
    startDate: moment(1583067600000),
    endDate: moment(1586955600000)
  }
]

export const newChallengeData = {
  id: "4",
  owner: "someName",
  reader: "someName",
  status: "running",
  bookID: uuidv4(),
  bookTitle: "someTitle",
  bookThumbnail: "someURL",
  amount: 200,
  startDate: moment(0),
  endDate: moment(30)
}
