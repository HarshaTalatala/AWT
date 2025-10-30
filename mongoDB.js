// ========================================
// MongoDB CRUD Operations Reference
// ========================================

// CREATE - Inserting a document into a collection
db.student.insert({
    name : "Harsha",
    roll : "12l4",
    email: "harsha@gmail.com",
    branch: "IT",
    complaintType: "Network Issue",
    description: "Unable to connect to the internet",
});

// READ - Querying documents from a collection
// Find all documents
db.student.find();

// Find specific document by field value
db.collection_name.find({ "fieldname": "value" });
db.students.find({ "roll": "12l4" });

// UPDATE - Updating a document in a collection
db.student.update(
    { "roll": "12l4" },
    {
        $set: {
            "name": "Viraj"
        }
    }
);

// DELETE - Removing documents from the collection
db.collection_name.remove({ "fieldname": "value" });
db.collection_name.remove({ "roll": "12l4" });