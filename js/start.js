const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function calcResult() {
  var pointArray = [{
      name: 'mouse',
      value: 0,
      key: 0
    },
    {
      name: 'cow',
      value: 0,
      key: 1
    },
    {
      name: 'tiger',
      value: 0,
      key: 2
    },
    {
      name: 'rabbit',
      value: 0,
      key: 3
    },
    {
      name: 'dragon',
      value: 0,
      key: 4
    },
    {
      name: 'snake',
      value: 0,
      key: 5
    },
    {
      name: 'horse',
      value: 0,
      key: 6
    },
    {
      name: 'sheep',
      value: 0,
      key: 7
    },
    {
      name: 'monkey',
      value: 0,
      key: 8
    },
    {
      name: 'chick',
      value: 0,
      key: 9
    },
    {
      name: 'dog',
      value: 0,
      key: 10
    },
    {
      name: 'pig',
      value: 0,
      key: 11
    }
  ];

  for (let i = 0; i < endPoint; i++) {
    var target = qnaList[i].a[select[i]]
    for (let j = 0; j < target.type.length; j++) {
      for (let k = 0; k < pointArray.length; k++) {
        if (target.type[j] === pointArray[k].name) {
          pointArray[k].value++;
        }
      }
    }
  }

  var resultArray = pointArray.sort(function(a, b) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  });

  let resultWord = resultArray[0].key;
  console.log(resultArray);
  return resultWord;
}

function goResult() {
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
  calcResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".aBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("fadeIn");
  answer.innerHTML = answerText;
  a.appendChild(answer);
  answer.addEventListener("click", function() {
    var children = document.querySelectorAll(".answerList");
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.animation = "fadeOut 0.5s";
    }
    setTimeout(() => {
      select[qIdx] = idx;
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = "none";
      }
      goNext(++qIdx);
    }, 200);
  }, false);
}

function goNext(qIdx) {
  console.log(qIdx);
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx) + "%";
}

function begin() {
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
