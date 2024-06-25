const textInput = document.getElementById('input');

// Undo and redo the last action
document.getElementById('undoButton').addEventListener('click', function() {
    document.execCommand('undo', false, null);
});
document.getElementById('redoButton').addEventListener('click', function() {
    document.execCommand('redo', false, null);
});

// Copy, paste and cut
document.getElementById('copyButton').addEventListener('click', function() {
    document.execCommand('copy', false, null);
});
document.getElementById('cutButton').addEventListener('click', function() {
    document.execCommand('cut', false, null);
});
document.getElementById('pasteButton').addEventListener('click', function() {
    document.execCommand('paste', false, null);
});

// Insert a new page
var pageNumber = 1;
document.getElementById('insertPageButton').addEventListener('click', function() {
    const newPage = document.createElement('div');
    newPage.setAttribute('id', 'input');
    newPage.setAttribute('contenteditable', 'true');
    newPage.setAttribute('class', 'page');
    newPage.classList.add('mb-5', 'page' +pageNumber++);

    const currentPage = document.getElementById('pageHolder');

    currentPage.insertAdjacentElement('beforeend', newPage);
});