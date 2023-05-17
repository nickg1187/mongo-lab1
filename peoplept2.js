// 1
db.people.insertOne({
  first_name: "Sergei",
  last_name: "Bobrovsky",
  email: "topcopbob@yahoo.com",
  gender: "Male",
  age: 33,
  state: "Florida",
  children: [],
});

// 2
db.people.insertOne({
  first_name: "Brent",
  last_name: "Burns",
  email: "bearded.monster@gmail.com",
  gender: "Male",
  age: 36,
  state: "North Carolina",
  children: [
    { name: "Kyle", age: 10 },
    { name: "Layla", age: 9 },
  ],
});

// 3
db.people.updateOne({ name: "Clarence" }, { $set: { state: "South Dakota" } });

// 4
db.people.find({ $and: [{ first_name: "Rebecca" }, { last_name: "Hayes" }] });
db.people.updateOne(
  { _id: ObjectId("6463a7a8b2c2abccde079594") },
  { $unset: { email: 1 } }
);

// 5
db.people.updateMany({ state: "Missouri" }, { $inc: { age: 1 } });

// 6
db.people.find({ $and: [{ first_name: "Jerry" }, { last_name: "Baker" }] });
db.people.replaceOne(
  { _id: ObjectId("6463a7a8b2c2abccde0795e2") },
  {
    first_name: "Jerry",
    last_name: "Baker-Mendez",
    email: "jerry@classic.ly",
    gender: "Male",
    age: 28,
    state: "Vermont",
    children: [
      { name: "Alan", age: 18 },
      { name: "Jenny", age: 3 },
    ],
  }
);

// 7
db.people.find({ $and: [{ first_name: "Wanda" }, { last_name: "Bowman" }] });
db.people.deleteOne({ _id: ObjectId("6463a7a8b2c2abccde0795ba") });

// 8
db.people.deleteMany({ email: null });

// 9
db.submissions.insertMany([
  { title: "The River Bend", upvotes: 10, downvotes: 2, artist: "Anna Howard" },
  { title: "Nine Lives", upvotes: 7, downvotes: 0, artist: "Scott Henderson" },
  { title: "Star Bright", upvotes: 19, downvotes: 3, artist: "Andrea Burke" },
  {
    title: "Why Like This?",
    upvotes: 1,
    downvotes: 5,
    artist: "Steven Marshall",
  },
  { title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: "Gerald Bailey" },
]);

// 10
db.submissions.updateOne({ title: "The River Bend" }, { $inc: { upvotes: 2 } });

// 11
db.submissions.updateMany(
  { upvotes: { $gte: 10 } },
  { $set: { Round2: true } }
);
