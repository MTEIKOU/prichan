window.addEventListener('load', function(){makeArray()})
//window.addEventListener('load', function(){makeCaption()})
window.addEventListener('load', function(){makeTable()})
//window.addEventListener('load', function(){makeTableSR()})
//window.addEventListener('load', function(){addEvent()} )
window.addEventListener('load', function(){setColor()})

let rare = ["ER","FR","PR","SR","R","N"];

let e=[
  [72511,3],
  [72514,3]
];

let f=[
  [72527,4],
  [72531,4]
];

let p=[
  [72534,4],
  [72538,4],
  [72542,4],
  [72546,4]
];

let s=[
  [72549,3],
  [72553,4],
  [72390,3],
  [72557,4],
  [72561,4]
];

let r=[
  [72566,4],
  [72570,4],
  [72574,4],
  [72578,4],
  [72582,4],
  [72586,4],
  [72590,4]
];

let n=[
  [72594,4],
  [72598,4],
];

let all =[];
let er =[];
let fr =[];
let pr =[];
let sr =[];
let ra =[];
let no =[];

function makeArray(){
  for(var i=0;i<e.length;i++){
    er.push([e[i][0],e[i][0]-e[i][1]+1,e[i][0]-e[i][1]+2,e[i][0]-e[i][1]+3]);
  }
  if (e.length) {all.push(er);}


  for(var i=0;i<f.length;i++){
    fr.push([f[i][0],f[i][0]-f[i][1]+1,f[i][0]-f[i][1]+2,f[i][0]-f[i][1]+3]);
  }
  if (f.length) {all.push(fr);}

  for(var i=0;i<p.length;i++){
    pr.push([p[i][0],p[i][0]-p[i][1]+1,p[i][0]-p[i][1]+2,p[i][0]-p[i][1]+3]);
  }
  if (p.length) {all.push(pr);}

  for(var i=0;i<s.length;i++){
    sr.push([s[i][0],s[i][0]-s[i][1]+1,s[i][0]-s[i][1]+2,s[i][0]-s[i][1]+3]);
  }
  if (s.length) {all.push(sr);}

  for(var i=0;i<r.length;i++){
    ra.push([r[i][0],r[i][0]-r[i][1]+1,r[i][0]-r[i][1]+2,r[i][0]-r[i][1]+3]);
  }
  if (r.length) {all.push(ra);}

  for(var i=0;i<n.length;i++){
    no.push([n[i][0],n[i][0]-n[i][1]+1,n[i][0]-n[i][1]+2,n[i][0]-n[i][1]+3]);
  }
  if (n.length) {all.push(no);}


}

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

function makeTable(){
  //Rare Array Loop
  /*
  let et = document.getElementById("ER");
  let ft = document.getElementById("FR");
  let pt = document.getElementById("PR");
  let st = document.getElementById("SR");
  */

  var body = document.body;
  //  表作成
  var x;
  var y;
  var t = '';
  var c = '';

  for(var n=0;n<rare.length;n++){

    c += "<table width = 100%><caption><img class = 'icon' src='..\..\common\PT_rarity_FR.png'>"+ rare[n] +"<img class = 'icon' src='..\..\common\PT_rarity_FR.png'></caption></table>"
    c += "<table id='" + rare[n] + "'class = 'table'></table>"
    body.innerHTML = c;

      var tbl = document.getElementById(rare[n]);

    for(x = 0; x < all[n].length; x++){
      t += "<tr>";
      for(y = 0;y < all[n][x].length; y++){
        t += "<td id='"+all[n][x][y]+"' class='item'><img src='img/Item_ID"+all[n][x][y]+".png'></td>";
      }
      t += "</tr>";
    }
    tbl.innerHTML = t;

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
      }
      else{
        localStorage.setItem(items[i].id,1);
        document.getElementById(items[i].id).style.backgroundColor = "gray";
      }

    }, false);
  }
}

function setColor(){
  for (key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      document.getElementById(key).style.backgroundColor = "gray";
    }
  }

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
