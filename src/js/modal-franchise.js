(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-fran]"),
      closeModalBtn: document.querySelector("[data-modal-close-fran]"),
      modal: document.querySelector("[data-modal-fran]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();