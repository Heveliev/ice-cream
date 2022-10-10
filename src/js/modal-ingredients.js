(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-ingredients-green]"),
      closeModalBtn: document.querySelector("[data-modal-close-ingredients-green]"),
      modal: document.querySelector("[data-modal-ingredients-green]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-ingredients-yellow]"),
      closeModalBtn: document.querySelector("[data-modal-close-ingredients-yellow]"),
      modal: document.querySelector("[data-modal-ingredients-yellow]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-ingredients-brown]"),
      closeModalBtn: document.querySelector("[data-modal-close-ingredients-brown]"),
      modal: document.querySelector("[data-modal-ingredients-brown]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  