document.addEventListener("DOMContentLoaded", (event) => {
  const showModalButton = document.getElementById("showModalButton");
  const showModalButton2 = document.getElementById("showModalButton2");
  const modal = document.getElementById("myModal");
  // const closeModal = document.getElementsByClassName('close')[0];

  showModalButton.addEventListener("click", () => {
    modal.classList.remove("hide");
  });
  showModalButton2.addEventListener("click", () => {
    modal.classList.remove("hide");
  });

  modal.addEventListener("click", () => {
    modal.classList.add("hide");
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.add("hide");
    }
  });

  //  Tab Functionality
  const tab1 = document.getElementById("tab1");
  const tab2 = document.getElementById("tab2");
  const tabContent1 = document.getElementById("tab-content-1");
  const tabContent2 = document.getElementById("tab-content-2");
  tab1.addEventListener("click", () => {
    tab1.classList.add("active-tab");
    tab2.classList.remove("active-tab");
    tabContent1.classList.add("show");
    tabContent1.classList.remove("hide");
    tabContent2.classList.add("hide");
    tabContent2.classList.remove("show");
  });

  tab2.addEventListener("click", () => {
    tab2.classList.add("active-tab");
    tab1.classList.remove("active-tab");
    tabContent2.classList.add("show");
    tabContent2.classList.remove("hide");
    tabContent1.classList.add("hide");
    tabContent1.classList.remove("show");
  });
});
