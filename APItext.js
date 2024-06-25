// Code to take user input, and produce a text response from ChatGPT API
document.getElementById("submitText").addEventListener("click", function() {
    const userInputText = document.getElementById("userInputText").value;
    const displayResultText = document.getElementById("displayResultText");

    if (userInputText.trim() === "") {
        alert("Please enter a prompt before submitting.");
        return;
    }

    displayResultText.innerHTML = '<div>Connecting to ChatGPT API, please wait...</div>';

    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer (ChatGPT API Key)"
        },
        body: JSON.stringify({
            messages: [{ role: "user", content: userInputText }],
            model: "gpt-4"
        })
    })
    .then(response => response.json())
    .then(completion => { displayResultText.innerHTML = `<div>${completion.choices[0].message.content}</div>`; })
});