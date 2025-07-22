function checkAnswer() {
  const answer = document.getElementById('answer').value.toLowerCase().trim();
  const hint = document.getElementById('hint');
  if (answer.includes("aku") || answer.includes("sayang") || answer.includes("selin")) {
    document.getElementById('startContainer').classList.add('hidden');
    document.getElementById('surpriseContainer').classList.remove('hidden');
    document.body.className = 'bg2';
     animateFoto();
    launchConfetti();
  } else {
    hint.innerText = "Hmm... bukan itu! jawab jujur yaa manis:*";
  }
}

function showGift() {
  document.getElementById('surpriseContainer').classList.add('hidden');
  document.getElementById('giftContainer').classList.remove('hidden');
  document.body.className = 'bg3';
   animateFoto();
}

function animateFoto() {
  const foto = document.querySelector('.foto-cinta');
  if (foto) {
    foto.classList.remove("animate"); // reset animasi jika sudah ada
    void foto.offsetWidth; // trigger reflow
    foto.classList.add("animate");
  }
}


function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
  }
}
