const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".modal-trigger").forEach(card=>{
  card.onclick = ()=>{
    modal.classList.add("active");
    modalText.innerText = card.dataset.title + " estará disponível em breve.";
  }
});

if(closeBtn){
  closeBtn.onclick = ()=> modal.classList.remove("active");
}
