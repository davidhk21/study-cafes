import { v4 as uuidv4 } from 'uuid';

export const cafes = {
  "new-york": [
    {
      id: uuidv4(),
      name: "Stumptown Coffee Roasters",
      description: "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.",
      photos: ['stumptown-coffee-roasters-header', 'ace-lobby-hotel-vertical', 'ace-lobby-hotel'],
      url: "https://g.co/kgs/qdfFVGy",
      address: "18 W 29th St, New York, NY 10001",
      ratings: {
        taste: 75,
        seatAvailability: 75,
        quietness: 50,
      },
      amenities: {
        outlets: true,
        food: true,
      }
    }
  ]
}