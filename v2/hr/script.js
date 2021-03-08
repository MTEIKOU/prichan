let data=[
  {id:'HC-65', img:72955, name:'シンデレラプリンセスブルー', type:'W'},
  {id:'HC-66', img:72956, name:'シンデレラプリンセスブルー', type:'S'},
  {id:'HC-67', img:72957, name:'シンデレラプリンセスブルー', type:'H'},
  {id:'HC-68', img:72958, name:'シンデレラプリンセスピンク', type:'W'},
  {id:'HC-69', img:72959, name:'シンデレラプリンセスピンク', type:'S'},
  {id:'HC-70', img:72960, name:'シンデレラプリンセスピンク', type:'H'},
  {id:'HC-71', img:72961, name:'シンデレラプリンスブルー', type:'W'},
  {id:'HC-72', img:72962, name:'シンデレラプリンスブルー', type:'S'},
  {id:'HC-73', img:72963, name:'シンデレラプリンスブルー', type:'H'},
  {id:'HC-74', img:72964, name:'シンデレラプリンスピンク', type:'W'},
  {id:'HC-75', img:72965, name:'シンデレラプリンスピンク', type:'S'},
  {id:'HC-76', img:72966, name:'シンデレラプリンスピンク', type:'H'},
  {id:'HC-77', img:72968, name:'にんぎょひめ', type:'T'},
  {id:'HC-78', img:72969, name:'にんぎょひめ', type:'B'},
  {id:'HC-79', img:72970, name:'にんぎょひめ', type:'S'},
  {id:'HC-80', img:72971, name:'にんぎょひめ', type:'H'},
  {id:'HC-81', img:72972, name:'にんぎょひめターコイズ', type:'T'},
  {id:'HC-82', img:72973, name:'にんぎょひめターコイズ', type:'B'},
  {id:'HC-83', img:72974, name:'にんぎょひめターコイズ', type:'S'},
  {id:'HC-84', img:72975, name:'にんぎょひめターコイズ', type:'H'},
  {id:'HC-85', img:72976, name:'ホロスコープみずがめざ', type:'W'},
  {id:'HC-86', img:72977, name:'ホロスコープみずがめざ', type:'S'},
  {id:'HC-87', img:72978, name:'ホロスコープみずがめざ', type:'H'},
  {id:'HC-88', img:72979, name:'ホロスコープかにざ', type:'W'},
  {id:'HC-89', img:72980, name:'ホロスコープかにざ', type:'S'},
  {id:'HC-90', img:72981, name:'ホロスコープかにざ', type:'H'},
  {id:'HC-91', img:72982, name:'ホロスコープうおざ', type:'W'},
  {id:'HC-92', img:72983, name:'ホロスコープうおざ', type:'S'},
  {id:'HC-93', img:72984, name:'ホロスコープうおざ', type:'H'},
  {id:'HC-94', img:72985, name:'ホロスコープふたござ', type:'W'},
  {id:'HC-95', img:72986, name:'ホロスコープふたござ', type:'S'},
  {id:'HC-96', img:72987, name:'ホロスコープふたござ', type:'H'},

];


window.addEventListener('load', function(){setting()})

function setting(){
  //キュー作成
  var queue=[];
  for(var i in data){
    queue[i]=data[i];
  }
  /*
  while(queue.length>0){

  var row =[];

  //列データ作成
  var temp = queue.shift();
  row.push(temp);
  while(queue.length>0 && temp.name == queue[0].name){
  row.push(queue.shift());
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
document.getElementById("div").innerHTML="<table id='table'></table>";

for(var i in queue){
  //出力
  var type='';
  switch (queue[i].type) {
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

  }
  var t="<tr>"
  t+="<td>"+queue[i].id+"</td><td><img src='img/Item_ID"+queue[i].img+".png'></td><td>"+queue[i].name+type+"</td><td class='count'>"+"-"+"</td><td class='count'>"+"0"+"</td><td class='count'>"+"+"+"</td>"
  t+="</tr>"
  document.getElementById("table").insertAdjacentHTML('beforeend',t);
}

}
