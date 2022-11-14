document.getElementById("btn").addEventListener("click", showtitle);

function showtitle() {
    let title = document.getElementById("title");

    chrome.tabs.query({ active: true }, function (tab) {

        let tabtitle = tab[0].title;
        title.innerHTML = tabtitle;

    });

}
