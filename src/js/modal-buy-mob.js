(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-mob-buy-n]"),
      closeModalBtn: document.querySelector("[data-modal-close-mob-buy-n]"),
      modal: document.querySelector("[data-modal-mob-buy-n]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();