document.getElementById("btn").addEventListener("click", showtitle);

function showtitle() {
    let title = document.getElementById("title");

    chrome.tabs.query({ active: true}, function (tab) {
        tab.forEach(element => {
            let tabtitle = element.title;
            title.innerHTML = tabtitle;
        });
    });

}
