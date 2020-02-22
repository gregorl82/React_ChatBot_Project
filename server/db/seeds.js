use project_database;
db.dropDatabase();

db.contacts.insertMany([
  {
    name: "Gregor Lennie",
    phoneNumber: "0734212341",
    address: "14 Brown Street, London, E20 2FN",
    email: "gregorlennie@yeeha.com",
    relationship: "son",
    nickname: "Greg"
  },
  {
    name: "Quentin Crida",
    phoneNumber: "0562442349",
    address: "132 Green Drive, Edinburgh, W2 9NA",
    email: "qentscrida@hotmail.com",
    relationship: "nephew",
    nickname: "Q"
  },
  {
    name: "Andrew Binnie",
    phoneNumber: "0836112091",
    address: "4A Black Crescent, Newcastle, NC2 6WP",
    email: "bina@yhoo.co.uk",
    relationship: "nephew",
    nickname: "Andy"
  }
]);
