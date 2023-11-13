const apiKey = "oG8rYAvGPvgbq5ZKxj4vSMK2s5QMeL51lhar9h856f7m2GIjHAja0pgj"

let container = document.querySelector('.row')

let btn = document.querySelector('button')

let input = document.querySelector('input')

btn.onclick = function () {
    container.innerHTML = ""

    const url = `https://api.pexels.com/v1/search?query=${input.value}&per_page=15&page1`

    fetch(url, {
        headers: {
            Authorization: apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            data.photos.forEach(photo => {
                let image =
                    `
            <div class="col-md-4">
                <div class="thumbnail">
                    <a href="${photo.url}" target="_blank">
                      <img src="${photo.src.landscape}" style="width:100%" alt="${photo.alt}">
                      <div class="caption">
                      <p>${photo.photographer}</p>
                      </div>
                    </a>
                </div>
            </div>
            `
                container.innerHTML += image
            })
        })
}