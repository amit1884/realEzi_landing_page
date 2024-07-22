document.addEventListener('DOMContentLoaded', (event) => {
    const showModalButton = document.getElementById('showModalButton');
    const showModalButton2=document.getElementById('showModalButton2')
    const modal = document.getElementById('myModal');
    // const closeModal = document.getElementsByClassName('close')[0];

    showModalButton.addEventListener('click', () => {
        modal.classList.remove('hide');
    });
    showModalButton2.addEventListener('click', () => {
        modal.classList.remove('hide');
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hide');
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.classList.add('hide');
        }
    });
});
