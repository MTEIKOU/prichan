window.addEventListener("load",function(){load()});

function load(){
  document.getElementById("button").innerHTML="<input type='button' value='Click' onClick='Random()'>"
}

function Random(you){
  let res = Math.floor(Math.random() * Math.floor(3));
  let result='';
  let hand='';
  switch (res) {
    case 0:
    hand='グー';
    break;
    case 1:
    hand='チョキ';
    break;
    case 2:
    hand='パー';
    break;
  }
  if(you == res){
    let result='あいこ'
  }


  document.getElementById("hand").innerHTML=hand;
  document.getElementById("result").innerHTML='';
}
