function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal() {
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function createStudent() {
    let nameInput = document.querySelector("input[name='ad']");
    let surnameInput = document.querySelector("input[name='soyad']");
    let text = {
        name: nameInput.value,
        surname: surnameInput.value,
    }
    
    let arr = []
    arr.push(text)
    
    for (let i = 0; i < arr.length; i++) {
        const tbody = document.querySelector("tbody");
        console.log(arr[i].name);
        tbody.innerHTML += `<tr><td>1</td><td>${arr[i].name}</td><td>${arr[i].surname}</td><td><p class="m-0" ind="" >x</p></td></tr>`;
        nameInput.value = "";
        surnameInput.value = "";
        closeModal();
        console.log(arr);
    }
}