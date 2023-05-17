// #1
db.people.find();

// #2
db.people.find().count();

// #3
db.people.find({ state: "Arizona" });

// #4
db.people.find({ $and: [{ state: "Arizona" }, { gender: "Male" }] });

// #5
db.people.find({ $or: [{ state: "Arizona" }, { state: "New Mexico" }] });

// #6
db.people.find({ age: { $lt: 40 } });

// #7
db.people.find({
  $and: [
    { gender: "Female" },
    { state: "Florida" },
    { age: { $gte: 40 } },
    { age: { $lte: 45 } },
  ],
});

// #8
db.people.find({ first_name: { $regex: /^H/ } });
// or
db.people.find({ first_name: { $gte: "H", $lt: "I" } });

// #9
db.people.find({ state: "Michigan" }).sort({ first_name: 1 });

// #10
db.people.find({ $or: [{ state: "Virginia" }, { first_name: "Virginia" }] });

// #11
db.people.find(
  { age: { $lt: 30 } },
  {
    _id: false,
    email: false,
    gender: false,
    age: false,
    state: false,
    children: false,
  }
);

// #12
db.people.find({ state: "Montana" }, { age: false });

// #13
db.people.find(
  { email: { $regex: ".edu$" } },
  {
    _id: false,
    first_name: false,
    last_name: false,
    gender: false,
    age: false,
    state: false,
    children: false,
  }
);

// #14
db.people.find({ "children.age": { $lt: 4 } }).count();
// or 
db.people.find({children: {$elemMatch: {age: {$lt: 4}}}})

// #15
db.people.find({ children: { $size: 0 } });
// or
db.people.find({children: []})

// #16
db.people.find({
  $expr: {
    $gte: [{ $size: "$children" }, 1],
  },
});
// or
db.people.find({ children: { $gte: {$size: 1} } })
//or
db.people.find({ children: { $ne: [] } })