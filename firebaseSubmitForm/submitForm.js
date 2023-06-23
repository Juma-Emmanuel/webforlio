// submitForm.js

const admin = require("firebase-admin");
const functions = require("firebase-functions");

// Initialize Firebase admin SDK using service account credentials
admin.initializeApp({
    credential: admin.credential.cert("E:\myprograms\firebaseproject/serviceAccountKey.json"), // Update with the path to your service account JSON file
    databaseURL: "https://data-project-c80e6-default-rtdb.asia-southeast1.firebasedatabase.app", // Update with your Firebase project's database URL
});

exports.submitForm = functions.https.onRequest(async (req, res) => {
    try {
        const formData = req.body;

        // Save the form data to the Firebase Realtime Database
        await admin.database().ref("submissions").push(formData);

        res.status(200).send("Form submitted successfully!");
    } catch (error) {
        console.error("Error:", error);

        res.status(500).send("An error occurred while submitting the form.");
    }
});