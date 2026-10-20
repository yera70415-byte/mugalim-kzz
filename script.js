function sendReview() {

    let student = document.getElementById("student").value;
    let teacher = document.getElementById("teacher").value;
    let rating = document.getElementById("rating").value;
    let review = document.getElementById("review").value;

    if (student === "" || teacher === "" || review === "") {
        alert("Барлық жолды толтырыңыз!");
        return;
    }

    let message =
        "📝 Жаңа пікір\n\n" +
        "Оқушы: " + student + "\n" +
        "Мұғалім: " + teacher + "\n" +
        "Баға: " + rating + "/5\n" +
        "Пікір: " + review;

    let token = "8915255117:AAFR_tCdvOF6hIxlHHms2EqCwBGWHObJLr4";
    let chatId = "6755985407";

    let form = document.createElement("form");

    form.method = "GET";
    form.action = "https://api.telegram.org/bot" + token + "/sendMessage";
    form.target = "telegramFrame";

    let chatInput = document.createElement("input");
    chatInput.name = "chat_id";
    chatInput.value = chatId;

    let textInput = document.createElement("input");
    textInput.name = "text";
    textInput.value = message;

    form.appendChild(chatInput);
    form.appendChild(textInput);

    document.body.appendChild(form);
    form.submit();

    form.remove();

    alert("Пікір жіберілді! ✅");
}