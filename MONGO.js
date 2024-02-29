// Connect to MongoDB server
mongo

// Switch to or create the 'contact' database
use contact
// Create a collection called 'contactlist' and insert documents
db.contactlist.insertMany([
{
    "Last name": "Ben",
    "First name": "Moris",
    "Email": "ben@gmail.com",
    "age": 26
},
{
    "Last name": "Kefi",
    "First name": "Seif",
    "Email": "kefi@gmail.com",
    "age": 15
},
{
    "Last name": "Emilie",
    "First name": "brouge",
    "Email": "emilie.b@gmail.com",
    "age": 40
},
{
    "Last name": "Alex",
    "First name": "brown",
    "age": 4
},
{
    "Last name": "Denzel",
    "First name": "Washington",
    "age": 3
}
])
