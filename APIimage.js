// Code to take user input, and generate an image from ChatGPT API
document.getElementById("submitImage").addEventListener("click", function() {
    const userInputImage = document.getElementById("userInputImage").value;
    const displayResultImage = document.getElementById("displayResultImage");

    if (userInputImage.trim() === "") {
        alert("Please enter a prompt before submitting.");
        return;
    }

    displayResultImage.innerHTML = '<div>Connecting to ChatGPT API, please wait...</div>';

    fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer (ChatGPT API Key)"
        },
        body: JSON.stringify({
            model: "dall-e-3",
            prompt: userInputImage,
            n: 1,
            size: "1024x1024"
        })
    })
    .then(response => response.json())
    .then(completion => { displayResultImage.innerHTML = `<img src="${completion.data[0].url}" class="img-fluid">` })
});
