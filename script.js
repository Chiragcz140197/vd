function respond(answer) {
  if (answer === "yes") {
    document.querySelector(".front").style.display = "none";
    document.querySelector(".back").style.display = "flex";
    
    // Trigger confetti effect
    document.getElementById("confetti").innerHTML = "<p style='color: gold; font-size: 24px;'>💖 💖 💖</p>";
    setTimeout(function () {
      document.getElementById("confetti").innerHTML = "<p style='color: green;'>💘💘💘</p>";
    }, 1000);
  }
}
