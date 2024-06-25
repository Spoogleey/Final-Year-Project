const input = document.getElementById('input');

// Turn highlighted text bold upon click
document.getElementById('boldButton').addEventListener('click', function() {
    document.execCommand('bold', false, null);
});

// Turn highlighted text italics upon click
document.getElementById('italicsButton').addEventListener('click', function() {
    document.execCommand('italic', false, null);
});

// Underline highlighted text upon button click
document.getElementById('underlineButton').addEventListener('click', function() {
    document.execCommand('underline', false, null);
});

// Change the font of the text based on what is selected from the font dropdown
document.getElementById('font').addEventListener('change', function() {
    var selectedFont = this.value;
    input.style.fontFamily = selectedFont;
});

// Change the aligning of the text
document.getElementById('leftAlignButton').addEventListener('click', function() {
    input.style.textAlign = 'left';
});
document.getElementById('centreAlignButton').addEventListener('click', function() {
    input.style.textAlign = 'center';
});
document.getElementById('rightAlignButton').addEventListener('click', function() {
    input.style.textAlign = 'right';
});
document.getElementById('justifyButton').addEventListener('click', function() {
    input.style.textAlign = 'justify';
});

// Change the line spacing
document.getElementById('spacing').addEventListener('change', function() {
    var selectSpacing = this.value;
    input.style.lineHeight = selectSpacing;
});

// Increase or decrease the font size
const text = document.getElementById('fontSize');
text.addEventListener('change', function() {
    input.style.fontSize = text.value + 'px';
})