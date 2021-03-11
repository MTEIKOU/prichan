let data=[
  {id:'HC-65', img:72955, name:'シンデレラプリンセス/ブルー', type:'W'},
  {id:'HC-66', img:72956, name:'シンデレラプリンセス/ブルー', type:'S'},
  {id:'HC-67', img:72957, name:'シンデレラプリンセス/ブルー', type:'H'},
  {id:'HC-68', img:72958, name:'シンデレラプリンセス/ピンク', type:'W'},
  {id:'HC-69', img:72959, name:'シンデレラプリンセス/ピンク', type:'S'},
  {id:'HC-70', img:72960, name:'シンデレラプリンセス/ピンク', type:'H'},
  {id:'HC-71', img:72961, name:'シンデレラプリンス/ブルー', type:'W'},
  {id:'HC-72', img:72962, name:'シンデレラプリンス/ブルー', type:'S'},
  {id:'HC-73', img:72963, name:'シンデレラプリンス/ブルー', type:'H'},
  {id:'HC-74', img:72964, name:'シンデレラプリンス/ピンク', type:'W'},
  {id:'HC-75', img:72965, name:'シンデレラプリンス/ピンク', type:'S'},
  {id:'HC-76', img:72966, name:'シンデレラプリンス/ピンク', type:'H'},
  {id:'HC-77', img:72968, name:'にんぎょひめ/', type:'T'},
  {id:'HC-78', img:72969, name:'にんぎょひめ/', type:'B'},
  {id:'HC-79', img:72970, name:'にんぎょひめ/', type:'S'},
  {id:'HC-80', img:72971, name:'にんぎょひめ/', type:'H'},
  {id:'HC-81', img:72972, name:'にんぎょひめ/ターコイズ', type:'T'},
  {id:'HC-82', img:72973, name:'にんぎょひめ/ターコイズ', type:'B'},
  {id:'HC-83', img:72974, name:'にんぎょひめ/ターコイズ', type:'S'},
  {id:'HC-84', img:72975, name:'にんぎょひめ/ターコイズ', type:'H'},
  {id:'HC-85', img:72976, name:'ホロスコープ/みずがめざ', type:'W'},
  {id:'HC-86', img:72977, name:'ホロスコープ/みずがめざ', type:'S'},
  {id:'HC-87', img:72978, name:'ホロスコープ/みずがめざ', type:'H'},
  {id:'HC-88', img:72979, name:'ホロスコープ/かにざ', type:'W'},
  {id:'HC-89', img:72980, name:'ホロスコープ/かにざ', type:'S'},
  {id:'HC-90', img:72981, name:'ホロスコープ/かにざ', type:'H'},
  {id:'HC-91', img:72982, name:'ホロスコープ/うおざ', type:'W'},
  {id:'HC-92', img:72983, name:'ホロスコープ/うおざ', type:'S'},
  {id:'HC-93', img:72984, name:'ホロスコープ/うおざ', type:'H'},
  {id:'HC-94', img:72985, name:'ホロスコープ/ふたござ', type:'W'},
  {id:'HC-95', img:72986, name:'ホロスコープ/ふたござ', type:'S'},
  {id:'HC-96', img:72987, name:'ホロスコープ/ふたござ', type:'H'},
];

let title={name:'ハッピーレア大量発生チャンネル', kikan:'3月4日（木）～3月31日（水）'};

window.addEventListener('load', function(){Load()})

function Load(){
  //キュー作成
  /*
  var data=[];
  for(var i in data){
  data[i]=data[i];
}

while(data.length>0){

var row =[];

//列データ作成
//名前変わったら改行
var temp = data.shift();
row.push(temp);
while(data.length>0 && temp.name == data[0].name){
row.push(data.shift());
}

//出力
var t="<tr>";
for(var i in row){
t+="<td>"+row[i].id+"</td>"
}
t+="</tr>";
document.getElementById('body').insertAdjacentHTML('beforeend',t);
}
*/
document.getElementById("div").insertAdjacentHTML('beforebegin',"<div id='title'>"+title.name+"</div>");
document.getElementById("div").insertAdjacentHTML('beforebegin',"<div id='kikan'>"+title.kikan+"</div>");
document.getElementById("div").innerHTML="<table id='table'><caption>HR</caption></table>";

for(var i in data){
  var type='';
  switch (data[i].type) {
    case 'H':
    type='ヘアアクセ';
    break;
    case 'W':
    type='ワンピース';
    break;
    case 'T':
    type='トップス';
    break;
    case 'B':
    type='ボトムス';
    break;
    case 'S':
    type='シューズ';
    break;
    default:
    break;

  }


  //DataLoad
  var n = DataLoad(data[i].id);

  //TableSet
  var rep = data[i].name.replace('/','<br>') ; // 改行置き換え
  var t='';
  t+="<tr>"
  t+="<td class='t1'>"+data[i].id+"</td>"
  t+="<td class='t2'><img src='img/Item_ID"+data[i].img+".png'></td>"
  t+="<td class='t3'>"+rep+type+"</td>"
  t+="<td class='t4'>"+"<button onclick='func(\""+data[i].id+"\",-1)'>-</button>"+"</td>"
  t+="<td class='t5' id='"+data[i].id+"'>"+n+"</td>"
  t+="<td class='t6'>"+"<button onclick='func(\""+data[i].id+"\",1)'>+</button>"+"</td>"
  t+="</tr>"
  document.getElementById("table").insertAdjacentHTML('beforeend',t);

  //ColorSet
  ColorSet(data[i].id);
}

}

function func(get,val){

  //所持数を本文から参照
  var n = parseInt(document.getElementById(get).textContent);

  //CountUp or CountDown
  var r=n+val;
  if( r >= 0 && r <10 ){ //0~9
    localStorage.setItem(get,r);
    document.getElementById(get).innerHTML=r;
  }
  if(r==0){localStorage.removeItem(get);}
  ColorSet(get);
}


function DataLoad(id){
  var n;
  // 0だったらlocalstrage削除 -> 0
  if(localStorage.getItem(id)==0){ localStorage.removeItem(id)}
  // nullだったら0
  if(!localStorage.getItem(id)){n=0}
  else{n = parseInt(localStorage.getItem(id),10);}
  return n;
}

function ColorSet(id){
  //ColorCheck
  if(parseInt(localStorage.getItem(id),10)>0){
    document.getElementById(id).classList.add("have");
  }
  else{
    document.getElementById(id).classList.remove("have");
  }
}

function Achieve(){
  //
}
