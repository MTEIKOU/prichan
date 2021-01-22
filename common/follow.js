window.addEventListener("load",function(){print()});
window.addEventListener("load",function(){event()});


var chara=[];
var coord=[];
var data=[];

/*
const name= ['mirai','emo','rinka','anna','sara','meru','anjyu','aira','maria','suzu','daia','naru','a-daia','kirachu','merupan','lovily','yui','alice','soruru','eve','ruruna'];
*/
const color=['fcc',  'ff9','9cf',  'f66', '6f6', 'c9f', 'cff',  'f99', 'ff6',  'ccc', '9cf', 'f9c', 'c9c',   'fcc',    '9cf',    '9f9',   'fcc','fc6',  'cff',   'ccc', 'ff9'];

function print(){

  document.getElementById('title').innerHTML="<font class='h1 bold'>フォロチケ</font><br class='br-sp'><font class='h2'>（" + title +"）</font>";

  //空白行削除
  var arr = str.filter(n => n.length > 1);

  for(let i in arr){
    //スペース詰め
    arr[i] = arr[i].trim();
    if(i%5 == 0){
      chara.push(arr[i]);
    }
    else{
      coord.push(arr[i].trim());
    }
  }

/*
  for(let i=0; i<chara.length;i++){
    var temp=[];
    for(let j=0; j<4; j++){
      temp.push(chara[i]+coord[i*4+j]);
    }
    list.push(temp);
  }
  console.log(list);
*/

  var t='';

  for(let i in chara){
    if(i%2==0){t+="<div class='colums'>";}

    t += "<table class='box'><tr><td colspan='2' style='background-color:#"+ color[(i%color.length)] +"' class='h2 bold'>" + chara[i] +"</td></tr>";
    t += "<tr><td rowspan='4' style='background-color:#"+ color[(i%color.length)] +"' class='chara' width='20%'><img src='img/fc_" + name[i] +".png' width='100%'></td>";
    for(j=0;j<4;j++){
      t += "<td class='item' id='" +i+j + "'>" + coord[i*4+j].slice(1) +"</td></tr>";
    }
    t += "</table>";

    if(i%2!=0){t+="</div><br>";}
    //else{t+="<span>"+""+"</span>"}

  }    document.getElementById('main').insertAdjacentHTML('beforeend',t);
}

function event(){
  //保存データ取得
  if(localStorage.getItem(keyname)) {
    data = JSON.parse(localStorage.getItem(keyname));
  }
  for (let i in data) {
    document.getElementById(data[i]).classList.add("have");
  }

  var items = document.getElementsByClassName("item");
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click",() => {

      //配列から要素を削除
      if  (data.indexOf(items[i].id) != -1){
        let d = data.findIndex(element => element === items[i].id);
        data.splice(d, 1);
        document.getElementById(items[i].id).classList.remove("have");
      }

      //要素がない場合追加
      else {
        data.push(items[i].id);
        document.getElementById(items[i].id).classList.add("have");
      }

      data.sort();
      localStorage.setItem(keyname,JSON.stringify(data));
    }, false);

  }
}
