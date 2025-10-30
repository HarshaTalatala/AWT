// ========================================
// MongoDB CRUD Operations Reference
// ========================================

// CREATE - Inserting a document into a collection
db.student.insert({
  regNo: "3014",
  name: "Test Student",
  course: {
    courseName: "MCA",
    duration: "3 Years"
  },
  address: {
    city: "Bangalore",
    state: "KA",
    country: "India"
  }
});

// READ - Querying documents from a collection
// Find all documents
db.student.find();

// Find specific document by field value
db.collection_name.find({ "fieldname": "value" });
db.students.find({ "regNo": "3014" });

// UPDATE - Updating a document in a collection
db.student.update(
  { "regNo": "3014" },
  {
    $set: {
      "name": "Viraj"
    }
  }
);

// DELETE - Removing documents from the collection
db.collection_name.remove({ "fieldname": "value" });
db.collection_name.remove({ "regno": "3014" });