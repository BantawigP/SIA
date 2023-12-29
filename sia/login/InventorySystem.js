const add01 = document.getElementById('add01');
const modal_container1 = document.getElementById('modal_container1');
const close01 = document.getElementById('close01');

add01.addEventListener('click', () => {
    modal_container1.classList.add('show');
})

close01.addEventListener('click', () => {
    modal_container1.classList.remove('show');
})