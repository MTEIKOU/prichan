window.addEventListener('load', function(){makeArray()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){addEvent()})
window.addEventListener('load', function(){setColor()})
window.addEventListener('load', function(){IDCount()})

let sum=0;
let having=0;

let rare = ["ER","FR","PR","SR","R","N"];

let all =[];

let er =[
  [72513,72511,72512,0],
  [72516,72514,72515,0],
  [72519,72517,72518,0],
  [72522,72520,72521,0]
];
let fr =[
  [72526,72523,72524,72525],
  [72530,72527,72528,72529]
];
let pr =[
  [72534,72531,72532,72533],
  [72538,72535,72536,72537],
  [72542,72539,72540,72541],
  [72546,72543,72544,72545]
];
let sr =[
  [72549,72547,72548,0],
  [72553,72550,72551,72552],
  [72590,72588,72589,0],
  [72557,72554,72555,72556],
  [72561,72558,72559,72560]
];
let ra =[
  [72566,72563,72564,72565],
  [72570,72567,72568,72569],
  [72574,72571,72572,72573],
  [72578,72575,72576,72577],
  [72582,72579,72580,72581],
  [72586,72583,72584,72585],
  [72590,72587,72588,72589]
];
let no =[
  [72594,72591,72592,72593],
  [72598,72595,72596,72597],
  [72602,72599,72600,72601],
  [72605,72603,72604,0],
  [0,72606,72607,0]
];

function makeArray(){
  if (er.length) {all.push(er);}
  if (fr.length) {all.push(fr);}
  if (pr.length) {all.push(pr);}
  if (sr.length) {all.push(sr);}
  if (ra.length) {all.push(ra);}
  if (no.length) {all.push(no);}
}

/*
function makeArrayy(){
for(var i=0;i<e.length;i++){
er.push([e[i][0],e[i][0]-e[i][1]+1,e[i][0]-e[i][1]+2,e[i][0]-e[i][1]+3]);
}
all.push(er);

for(var i=0;i<f.length;i++){
fr.push([f[i][0],f[i][0]-f[i][1]+1,f[i][0]-f[i][1]+2,f[i][0]-f[i][1]+3]);
}
all.push(fr);

for(var i=0;i<p.length;i++){
pr.push([p[i][0],p[i][0]-p[i][1]+1,p[i][0]-p[i][1]+2,p[i][0]-p[i][1]+3]);
}
all.push(pr);

for(var i=0;i<s.length;i++){
sr.push([s[i][0],s[i][0]-s[i][1]+1,s[i][0]-s[i][1]+2,s[i][0]-s[i][1]+3]);
}
all.push(sr);
}
function makeTablePR(){
//Rare Array Loop
var tbl = document.getElementById("PR");

//  表作成
var x;
var y;
var t = '';

for(x = 0; x < pr.length; x++){
t += "<tr>";
for(y = 0;y < pr[x].length; y++){
t += "<td id='"+pr[x][y]+"' class='item'><img src='img/Item_ID"+pr[x][y]+".png'></td>";
}
t += "</tr>";
}
tbl.innerHTML = t;

};
function makeTableSR(){
//Rare Array Loop
var tbl = document.getElementById(rare[3]);

//  表作成
var x;
var y;
var t = '';

for(x = 0; x < sr.length; x++){
t += "<tr>";
for(y = 0;y < sr[x].length; y++){
t += "<td id='"+sr[x][y]+"' class='item'><img src='img/Item_ID"+sr[x][y]+".png'></td>";
}
t += "</tr>";
}
tbl.innerHTML = t;

};
*/

function makeTable(){

  var x;
  var y;
  var t = '';
  var c = '';

  for(var n=0;n<rare.length;n++){

    c += "<table width = 100%><caption><img class = 'icon' src='../../common/PT_rarity_" + rare[n] +".png'>"+ rare[n] +"<img class = 'icon' src='../../common/PT_rarity_" + rare[n] +".png'></caption></table>"
    c += "<table id='" + rare[n] + "'class = 'table'></table>"
    var wr = document.getElementById("WR");
    document.body.insertAdjacentHTML('beforeend',c);
    c ="";
  }


  for(n=0;n<all.length;n++){

    for(x = 0; x < all[n].length; x++){

      t += "<tr>"

      for(y = 0;y < all[n][x].length; y++){
        if(all[n][x][y]==0){
          t += "<td></td>"
        }
        else{
          t += "<td id='"+all[n][x][y]+"' class='item'><img src='img/Item_ID"+all[n][x][y]+".png'></td>"
        }
      }
      t += "</tr>"
    }
    var tbl = document.getElementById(rare[n]);
    tbl.insertAdjacentHTML('afterbegin',t);
    t='';

  }
};

function addEvent(){
  let items = document.getElementsByClassName("item");
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click",() => {

      let key = localStorage.getItem(items[i].id)
      //alert("keyは" + key + "です。");
      if(key==1){
        localStorage.removeItem(items[i].id);
        document.getElementById(items[i].id).style.backgroundColor = "white";
        having--;
        CountText();
      }
      else{
        localStorage.setItem(items[i].id,1);
        document.getElementById(items[i].id).style.backgroundColor = "gray";
        having++;
        CountText();
      }
      console.log(having + "/" +sum);
    }, false);
  }
}

function setColor(){
  for (key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      document.getElementById(key).style.backgroundColor = "gray";
      having++;
    }
  }

}

function IDCount(){
  for(let n=0; n<all.length; n++){
    for(let x = 0; x < all[n].length; x++){
      for(let y = 0;y < all[n][x].length; y++){
        if(all[n][x][y]!=0){
          sum++;
        }
      }
    }
  }
  CountText();
}

function CountText(){
  let text = document.getElementById('count');
  text.innerText = having + "/" + sum + " (" + Math.round((having/sum)*100*100)/100 + "%)";
}

/*
表の生成
イベント追加
src

var elem = document.createElement('div'); //div要素を作成
var text = document.createTextNode('テキストノードを作成する');
document.body.appendChild(elem);　//body直下にdiv要素を追加
elem.appendChild(text); //作成したdiv要素にテキストノードを追加
elem.addEventListener("click", func, false); //where func is your function name
var comment = document.createComment('コメントノード');
document.body.insertBefore(comment,elem);　//elemの前にコメントノードを挿入


*/

/*
const er=[
img/Item_ID72513.png,img/Item_ID72511.png,img/Item_ID72512.png,,
img/Item_ID72516.png,img/Item_ID72514.png,img/Item_ID72515.png,,
];

const fr =[
[img/Item_ID72519.png,img/Item_ID72517.png,img/Item_ID72518.png,],
[img/Item_ID72522.png,img/Item_ID72520.png,img/Item_ID72521.png,],
];

const pr =[
[img/Item_ID72526.png,img/Item_ID72523.png,img/Item_ID72524.png,img/Item_ID72525.png],
[img/Item_ID72530.png,img/Item_ID72527.png,img/Item_ID72528.png,img/Item_ID72529.png],
];
*/
