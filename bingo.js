let r1 = [0, 0, 0, 0];
let r2 = [0, 0, 0, 0];
let r3 = [0, 0, 0, 0];
let r4 = [0, 0, 0, 0];

var first = 1;
var second = 2;
var current = first;
var finished = false;

function flip(obj) {
  if (!finished) {
    let valid = true;
    let tmp = obj.id.split(",");
    let row = Number(tmp[0]);
    let column = Number(tmp[1] - 1);

    switch (row) {
      case 1:
        if (r1[column] != 0) {
          valid = false;
        } else {
          r1[column] = current;
        }
        break;
      case 2:
        if (r2[column] != 0) {
          valid = false;
        } else {
          r2[column] = current;
        }
        break;
      case 3:
        if (r3[column] != 0) {
          valid = false;
        } else {
          r3[column] = current;
        }
        break;
      case 4:
        if (r4[column] != 0) {
          valid = false;
        } else {
          r4[column] = current;
        }
        break;
    }

    if (valid) {
      obj.style.transform = "scaleY(-1)";
      if (current == first) {
        current=second;
        obj.style.background = "tomato";
        document.getElementById("turn").innerHTML = "Player 2 Turn";
        document.getElementById("turn").style.color = "teal";
       setTimeout(() => {
           bolt();
        }, 500);
      } else {
        obj.style.background = "teal";
        document.getElementById("turn").innerHTML = "Player 1 Turn";
        document.getElementById("turn").style.color = "tomato";
        current = first;
      }
      checkwin();
      if(finished==false){
      draw();
      }
    }
  }
}

function checkwin() {
  if (vertical(first) == true || horizontal(first)==true || diagonal(first)==true) {
    document.getElementById("winner").innerHTML = "Player 1 Win!";
    finished = true;
  } else if (vertical(second) == true || horizontal(second)==true ||diagonal(second)==true ) {
    document.getElementById("winner").innerHTML = "Player 2 Win!";
    finished = true;
  }
  
}

function vertical(player) {
  for (let index = 0; index < 4; index++) {
    if (
      r1[index] == player &&
      r2[index] == player &&
      r3[index] == player &&
      r4[index] == player
    ) {
      return true;
    }
  }
  return false;
}

function horizontal(player) {
  if (
    (r1[0] == player &&
      r1[1] == player &&
      r1[2] == player &&
      r1[3] == player) ||
    (r2[0] == player &&
      r2[1] == player &&
      r2[2] == player &&
      r2[3] == player) ||
    (r3[0] == player &&
      r3[1] == player &&
      r3[2] == player &&
      r3[3] == player) ||
    (r4[0] == player && r4[1] == player && r4[2] == player && r4[3] == player)
  ) {
    return true;
  }
  return false;
}

function diagonal(player) {
  if (
    (r1[0] == player &&
      r2[1] == player &&
      r3[2] == player &&
      r4[3] == player) ||
    (r1[3] == player && r2[2] == player && r3[1] == player && r4[0] == player)
  ) {
    return true;
  }
  return false;
}
function draw() {
  let r5 = r1.concat(r2).concat(r3).concat(r4);
  //console.log(r5);
  if (!r5.includes(0)) {
    document.getElementById("winner").innerHTML = "Draw";
    finished = true;
  }
}
function bolt() {
  let row = Math.floor(Math.random() * 4 + 1);
  let col = Math.floor(Math.random() * 4 + 1);
let random=row+","+col;
console.log(random);
  switch (row) {
    case 1:
      if (r1[col - 1] != 0) {
        bolt();
      }
      break;
    case 2:
      if (r2[col - 1] != 0) {
        bolt();
      }
      break;
    case 3:
      if (r3[col - 1] != 0) {
        bolt();
      }
      break;
    case 4:
      if (r4[col - 1] != 0) {
        bolt();
      }
      break;
  }
  document.getElementById(row + "," + col).click();
  
}
