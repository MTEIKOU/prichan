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

function Sort(){
  //LocalStorage Sort
}
