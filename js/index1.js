document.querySelector('.dropdown-btn').addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
});

const telegramURL = "https://api.telegram.org/bot"
const token_bot = "7981362609:AAEM4uTKLxwxDUjuUdSlB290dt4mcHpU8G8"

document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

const dropdownContent = document.getElementById('dropdownContent');
const dropdownbtn = document.getElementById("dropdownBtn")

dropdownContent.addEventListener('click', function (e) {
    const text = e.target.textContent
    dropdownbtn.textContent = text
});

document.querySelector(".contacts__form-button").addEventListener("click", () => {
    const form = document.querySelector(".contacts__form")
    const fio = form.elements.fio.value
    const tel = form.elements.tel.value
    const serviceForm = form.elements.dropdownBtn.innerHTML
    
    fetch(telegramURL+token_bot+`/sendMessage?chat_id=1389361404&text=К вам на приём записалась ${fio} (${tel}) на услугу ${serviceForm}.`)

})

