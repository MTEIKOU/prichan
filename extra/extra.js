let offset;
let old;

// 画像用配列
var images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png'
];

window.onload = function(){

    // 画像プリロード
    for (i = 0; i < images.length; i++){
        var img = document.createElement('img');
        img.src = images[i];
    }
}

function Random(p1){
  let result='';
  let p2 = Math.floor(Math.random() * 6);

  let e=hand(p2%3);

  //console.log(p2);
  //画像被り防止
  if(old == p2){
    if(p2<3){
      p2 +=3;
    }
    else{
      p2 -=3;
    }
  }
  old = p2;
  //console.log(p2);
  //switch((p1-p2+6)%3)
  switch((p1-p2+6)%3){
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

  document.getElementById("img").innerHTML="<img class='image' src='" + (p2+1) + ".png' alt='" + e +"'>";
  //document.getElementById("hand").innerHTML=e;
  document.getElementById("result").innerHTML=result;

}

function hand(input){
  let hand=''
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
