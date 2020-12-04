
function Random(p1){

  let p2 = Math.floor(Math.random() * 6);
  let result='';
  let e=hand(p2%3);

  //console.log(p1 +'-'+p2+'+3%3='+((p1-p2+6)%3));
  switch((p1-p2+6)%3){
    case 0:
    result = 'あいこ';
    break;
    case 1:
    result = '負け…';
    break;
    case 2:
    result = '勝ち!';
    break;
  }


  document.getElementById("image").innerHTML="<img src='" + (p2+1) + ".png'>";
  document.getElementById("hand").innerHTML=e;
  document.getElementById("result").innerHTML=result;
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
