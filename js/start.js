const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

function begin(){
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 200);
  }, 200);
}
