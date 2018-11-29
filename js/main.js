let tableData = document.querySelectorAll("div");

$(document).ready(function(){

  let move = 1;
  let play = true;

  $("#board div").click(function() {
    if ($(this).text()=="" && play) {
      if ((move%2)==1) { $(this).append("❌").css({"color": "transparent", "text-shadow": "0 0 0 black"});}
      else { $(this).append("⭕").css({"color": "transparent", "text-shadow": "0 0 0 red"}); }
      move++;
      if (checkForWinner()!=-1 && checkForWinner()!="") {
        if (checkForWinner()=="❌") { alert("Player 1 wins!"); }
        else { alert("Player 2 wins!"); }
        play = false;
      }
    }
  });

  function checkForWinner() {
    let space1 = $(".one").text();
    let space2 = $(".two").text();
    let space3 = $(".three").text();
    let space4 = $(".four").text();
    let space5 = $(".five").text();
    let space6 = $(".six").text();
    let space7 = $(".seven").text();
    let space8 = $(".eight").text();
    let space9 = $(".nine").text();
    // check rows
    if      ((space1==space2) && (space2==space3)) { return space3; }
    else if ((space4==space5) && (space5==space6)) { return space6; }
    else if ((space7==space8) && (space8==space9)) { return space9; }
    // check columns
    else if ((space1==space4) && (space4==space7)) { return space7; }
    else if ((space2==space5) && (space5==space8)) { return space8; }
    else if ((space3==space6) && (space6==space9)) { return space9; }
    // check diagonals
    else if ((space1==space5) && (space5==space9)) { return space9; }
    else if ((space3==space5) && (space5==space7)) { return space7; }
    // no winner
    return -1;
  }

  $("#reset").click(function() {
      for(let i = 0; i < tableData.length; i++) {
        tableData[i].innerHTML = "";
      }
      play = true;
    });
});
