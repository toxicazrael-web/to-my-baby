const message = `Hi love, I know we spend a lot of time together but I still hope that you wouldn't leave again like you did before. I often think about it.. it hurts really losing someone I loved and it was my greatest fear and always has been. I don't want to lose you again and I wish that in every lifetime we would have to this and to the next we would be the one sticking together not just a lover but a friend, a partner, and a husband and a wife. I know na things are difficult between us right now but I hope you know na I love you. I'm always waiting for you, ALWAYS. Ever since from the start.
You are always going to be my sweetest baby.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
