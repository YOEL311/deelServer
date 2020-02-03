var firebaseConfig = {
  apiKey: "AIzaSyAdRZQRUKFTbqfSTaVZRB9cJY7DPp9p_24",
  authDomain: "deels-266720.firebaseapp.com",
  databaseURL: "https://deels-266720.firebaseio.com",
  projectId: "deels-266720",
  storageBucket: "deels-266720.appspot.com",
  messagingSenderId: "927481565824",
  appId: "1:927481565824:web:8373fb4a66a90251db4c65",
  measurementId: "G-J6HRJZHL9L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log("index js");

var storage = firebase.storage();
console.log("index js 2");

var storageRef = storage.ref();
console.log("index js 3");

var imagesRef = storageRef.child('images');
var ref = storageRef.child('images');
console.log("index js 4");

var file = './image/result.png'
// fileNEw = new File(file);
//
// var message = 'This is my message.';
// ref.putString(message).then(function (snapshot) {
//   console.log('Uploaded a raw string!');
// });
//
// function getFileName(fileInput) {
//   file = fileInput.files[0];
//   fileName = file.name;
//   storageRef = firebase.storage().ref(storageFolder + fileName);
//   uploadTask = storageRef.put(file);
// };
//
// getFileName(fileNEw)

var externalImageUrl = 'https://i1.wp.com/www.simplifiedcoding.net/wp-content/uploads/2016/09/belal-khan-2.jpg?zoom=1.25&ssl=1';

// ref.child('whatever').set(externalImageUrl);
