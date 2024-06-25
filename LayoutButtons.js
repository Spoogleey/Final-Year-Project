const textArea = document.getElementById('input');

// Change the indentation of the text
const indent = document.getElementById('leftIndent');
indent.addEventListener('change', function() {
    textArea.style.textIndent = indent.value + 'cm';
});

// Change the margin of the page
const margins = document.getElementById('margin');
margins.addEventListener('change', function() {
    textArea.style.paddingLeft = margins.value + 'cm';
    textArea.style.paddingRight = margins.value + 'cm';
});