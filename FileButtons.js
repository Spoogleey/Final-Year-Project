const inputtingText = document.getElementById('input');

// Open new document
document.getElementById('newButton').addEventListener('click', function() {
    window.open('file:///C:/Users/green/OneDrive%20-%20Northumbria%20University%20-%20Production%20Azure%20AD/Documents/23-24/Final%20Year%20Project/Evidence%20Folder/Implementation%20(Code)/HomePage.html');
});

// Save text input as a .txt file
document.getElementById('saveButton').addEventListener('click', function() {
    var textToSave = inputtingText.innerHTML;
    var textFile = new Blob([ textToSave ], { type: 'text/plain' });
    var fileName = 'file.txt';

    var download = document.createElement('a');
    download.download = fileName;
    download.innerHTML = "Download File";

    if(window.webkitURL != null) {
        download.href = window.webkitURL.createObjectURL(textFile);
    } else {
        download.href = window.URL.createObjectURL(textFile);
        download.onclick = destroyClickedElement;
        download.style.display = 'none';
        document.body.appendChild(download);
    }

    download.click();
});

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

// Load already saved text