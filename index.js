
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

firebase.initializeApp(firebaseConfig);

var basic = $('#item').croppie({
    viewport: {
        width: 200,
        height: 150
    },
});

basic.croppie('bind', {
    url: './image/img.jpg',
});
let resultDiv = document.getElementById("result");

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            basic.croppie('bind', {
                url: e.target.result,
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function toDisplayResult() {
    basic.croppie('result', 'canvas').then(function (resultC) {
        resultDiv.innerHTML = '<a id="save" href="' + resultC + '" download="resultC">' +
            '<img src="' + resultC + '" />' +
            '<br><button>Download</button>' +
            '</a>'
    });
    btnUload.style.display = "inline"
}

function toUploadResult() {
    basic.croppie('result', 'blob').then(function (result) {
        var ref = firebase.storage().ref('img/' + Date.now());
        var task = ref.put(result);
        var uploader = document.getElementById('uploaderProgress');
        task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        }, function error(err) {
            console.log(err);
        }, function complete() {
            uploader.style.background = 'blue'
            task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                // var linkToDownload = document.getElementById("linkToUp")
                let li = '<li><a href="" id="linkToUpload">link</a></li>'
                $("#ulLink").append(li);
                $("linkToUp").href = downloadURL
            });
        });
    });
}

$("#btnUpload").on('click', toUploadResult)