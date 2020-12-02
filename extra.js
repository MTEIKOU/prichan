
function Random(p1){

  let p2 = Math.floor(Math.random() * Math.floor(3));
  let result='';
  let e=hand(p2);

  switch((p1-p2+3)%3){
    case 0:
    result += 'DRAW';
    break;
    case 1:
    result += 'LOSE';
    break;
    case 2:
    result += 'WIN!';
    break;
  }

  console.log("")
  document.getElementById("hand").innerText=e;
  document.getElementById("result").innerText=result;
}

function hand(input){
  let hand='相手:'
  switch (input) {
    case 0:
    hand+='グー';
    break;
    case 1:
    hand+='チョキ';
    break;
    case 2:
    hand+='パー';
    break;
  }
  return hand;
}
