/**
 * Created by fabio on 08/11/14.
 */
function uploadData(filename) {

    var form = document.getElementById('myform');
    if (!form.checkValidity()) {
        //              alert("Form Not Valid. Please check before submitting!")
        return;
    }
    var fd = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", uploadProgress, false);
    xhr.addEventListener("load", uploadComplete, false);
    xhr.addEventListener("error", uploadFailed, false);
    xhr.addEventListener("abort", uploadCanceled, false);
    // to be changeed to POST when server is ready
    xhr.open("GET", filename);
    xhr.send(fd);

}

function uploadProgress(evt) {



}

function uploadComplete(evt) {

    /* This event is raised when the server send back a response */
//      localStorage.clear();
//        alert(evt.target.responseText);

}

function uploadFailed(evt) {

    alert("There was an error attempting to upload the file.");

}

function uploadCanceled(evt) {

    alert("The upload has been canceled by the user or the browser dropped the connection.");

}


