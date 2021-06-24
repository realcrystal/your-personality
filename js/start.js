const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.5s";
    result.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 200);
  }, 200);
}

function addAnswer(answerText, qIdx){
  var a = document.querySelector(".aBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");
  answer.innerHTML = answerText;
  a.appendChild(answer);
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll(".answerList");
    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      for(let i = 0; i < children.length; i++){
        children[i].style.display = "none";
      }
      goNext(++qIdx);
    }, 200);
  }, false);
}

function goNext(qIdx){
  console.log(qIdx);
  if(qIdx === endPoint){
    goResult();
    return;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100/endPoint) * (qIdx) + "%";
}

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
  let qIdx = 0;
  goNext(qIdx);
}
