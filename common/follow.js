window.addEventListener("load",function(){print()});
window.addEventListener("load",function(){event()});


var chara=[];
var coord=[];
var data=[];
const color=['FCC','FF6','9CF','F99','6F6','C9F'];

function print(){

  document.getElementById('title').innerHTML=title;

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
    t = "<table border='3'><tr><td colspan='2' style='background-color:#"+ color[(i%color.length)] +"' class='big caption'>" + chara[i] +"</td></tr>";
    t += "<tr><td rowspan='4' style='background-color:#"+ color[(i%color.length)] +"' class='chara' width='20%'><img src='fc/fc_" + name[i] +".png' width='100%'></td>";
    for(j=0;j<4;j++){
      t += "<td class='item' id='" +i+j + "'>" + coord[i*4+j].slice(1) +"</td></tr>";
    }
    t += "<table><br>";
    document.getElementById('main').insertAdjacentHTML('beforeend',t);
  }
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