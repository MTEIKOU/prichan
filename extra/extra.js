let offset = 1;

function Random(p1){

  let p2 = Math.floor(Math.random() * 3);
  let result='';
  //let e=hand(p2%3);

  //switch((p1-p2+6)%3)
  switch((p1-p2+3)%3){
    case 0:
    result = 'あいこ';
    document.getElementById("result").classList.remove("red");
    document.getElementById("result").classList.remove("blue");
    break;
    case 1:
    result = '負け…';
    document.getElementById("result").classList.remove("red");
    document.getElementById("result").classList.add("blue");
    break;
    case 2:
    result = '勝ち!';
    document.getElementById("result").classList.add("red");
    document.getElementById("result").classList.remove("blue");
    break;
  }

  document.getElementById("img").innerHTML="<img class='image' src='" + (p2 + offset) + ".png'>";
  //document.getElementById("hand").innerHTML=e;
  document.getElementById("result").innerHTML=result;

  if(offset==1){offset=4}
  else{offset=1}

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
