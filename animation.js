const submitBtn = document.getElementById("submitButton");
const inputText = document.getElementById("nameInput");
const animateText = document.getElementById("animatedText");

submitBtn.addEventListener("click", function() {
    let input = inputText.value;
    animateText.innerHTML = "";  // Clear previous text
    for (let i = 0; i < input.length; i++) {
        let span = document.createElement('span');
        span.textContent = input[i];
        animateText.appendChild(span);
    }
});
