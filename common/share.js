//window.addEventListener('load', function(){DataLoad()})

window.addEventListener('load', function(){remove()})//remove no script
window.addEventListener('load', function(){settitle()})
window.addEventListener('load', function(){schedule()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){geturl()})

window.addEventListener('load', function(){setColor()})

window.addEventListener('load', function(){allcount()})
window.addEventListener('load', function(){Count()})
window.addEventListener('load', function(){achevement()})

//window.addEventListener('load', function(){addEvent()})

const goal = new Date(end[0],end[1]-1,end[2]);
let motteru=[];
let zenbu=[];
let data=[];
//let para='';
let id2=[];
/*
function DataLoad(){
  if(localStorage.getItem(keyname)) {
    data = JSON.parse(localStorage.getItem(keyname));
  }
}
*/

function remove(){
  document.getElementById("disable").remove();
  document.title=title;
}

function settitle(){
  document.getElementById("title").innerHTML=title;
  document.getElementById("kikan").innerHTML=kikanStr(start) + "～" + kikanStr(end);
  //document.getElementById("reset").innerHTML="<input type='button' value='リセット' onClick='Reset()'>"
  document.getElementById("finish").innerHTML="終了まで<text id ='nokori' class='big'>" +"</text>日";
  //setForm();
  setlink();
}

function setlink(){
  //commonリンク作成
  var url = location.href;
  var ary = url.split('/');
  var str = ary[ary.length - 1];
  rep = url.replace(str, 'common.html');
  document.getElementById("info").innerHTML="<span class='bg'>作成は<a class='red' href=" +rep +">こちら</a></span>";
}

function kikanStr(arr){
  if(arr.length != 3){
    let str="";
    return str;
  }

  else{
    const date = new Date(arr[0], arr[1]-1, arr[2]);
    const WeekStr = ['日','月','火','水','木','金','土'];
    let str = date.getFullYear()
    + '/' + ('0' + (date.getMonth()+1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    +'('+ WeekStr[date.getDay()] +')';
    return str;
  }
}

function schedule(){

  const limit = CountDown(goal);
  if(end.length == 3){//終了日入力済
    document.getElementById("nokori").innerHTML=limit[0];
    if(limit.some(x => x>0) && limit[0]<10){//残り10日未満 赤
      document.getElementById("nokori").classList.add("red");
    }
    if(limit.every(x => x==0)){//終了済　黒
      document.getElementById("nokori").classList.remove("red");
      document.getElementById("finish").innerHTML="終了しました。";
    }
  }

  else{//終了日未定
    document.getElementById("nokori").innerHTML="?";
  }

  if(limit.some(x => x>0))refresh();
}

function CountDown(due){
  const now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.max(Math.floor(rest/1000)%60,0);
  const min = Math.max(Math.floor(rest/1000/60)%60,0);
  const hours = Math.max(Math.floor(rest/1000/60/60)%24,0);
  const days = Math.max(Math.floor(rest/1000/60/60/24),0);
  const count = [days,hours,min,sec];
  return count;
}

function refresh(){
  setTimeout(schedule,1000);
}

function setForm(){
  let a=''
  let n=0;
  for(let x=0; x<id.length; x++){
    n += id[x].length;
  }

  a += "<form name='form' id='form' action=''>"
  a += "<span>復元コード</span>"
  a += "<input type='text' id='text' name='text' size='" + n +"' maxlength='" + n +"'>"
  a += "<input type='button' value='復元' onclick='Restore()'>"
  a += "</form>"
  document.getElementById("restore").innerHTML=a;
}

function allcount(){
  for(let x=0; x<id.length; x++){
    let count=0;
    for(let y=0; y<id[x].length; y++){
      for(let z=0; z<id[x][y].length; z++){
        if(id[x][y][z]!=0){
          count++;
        }
      }
    }
    zenbu[x]=count;
  }
  let a ='';
  for(let i in zenbu){
    a += (rare[i] +":"+zenbu[i] + " ");
  }
  console.log(a);
}

function makeTable(){

  //make rare caption
  for(let n=0;n<rare.length;n++){
    let t='';
    switch(rare[n]){
      case "WR":
      t += "<table id='WR' class = 'table'><caption class='WR'><img class = 'icon' src='https://yoppyy.github.io/prichan/common/img/PT_rarity_Q.png'>WR<img class = 'icon' src='https://yoppyy.github.io/prichan/common/img/PT_rarity_Q.png'></caption></table>"
      break;

      case "ITEM":
      t += "<table id='ITEM' class = 'table'><caption class='ITEM'>パシャっとアイテム</caption></table>"
      break;

      default:
      t += "<table id='" + rare[n] + "'class = 'table'><caption class='" +rare[n]+"'><img class = 'icon' src='https://yoppyy.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'>"+ rare[n] +"<img class = 'icon' src='https://yoppyy.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'></caption></table>"
      break;
    }
    document.getElementById("main").insertAdjacentHTML('beforeend',t);
  }

  //make table
  for(let x=0;x<rare.length;x++){
    let t='';
    for(let y = 0; y < id[x].length; y++){

      t += "<tr>"

      for(let z = 0;z < id[x][y].length; z++){
        if(id[x][y][z]==0){
          t += "<td class='empty'></td>"
        }
        else{
          if(rare[x]=="WR"){
            t += "<td id='"+id[x][y][z]+"' class='item'><img src='https://yoppyy.github.io/prichan/common/img/Item_Question.png'></br>" +id[x][y][z] +"</td>"
          }
          else{
            t += "<td id='"+id[x][y][z]+"' class='item'><img src='img/Item_ID"+img[x][y][z]+".png'></br>" +id[x][y][z] +"</td>"
          }
        }
      }
      t += "</tr>"
    }
    let tbl = document.getElementById(rare[x]);
    tbl.insertAdjacentHTML('afterbegin',t);
  }
}

/*
//add clickevent
function addEvent(){
  let items = document.getElementsByClassName("item");
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
      Count();
      achevement();
      Password();
    }, false);

  }
}
*/
function Count(){

  for(let i=0; i<rare.length; i++){
    let cnt =Number('0');
    for (let j in data){

      let parent = (document.getElementById(data[j]).closest("table")).id;

      if(parent == rare[i]){
        cnt++;
      }
    }
    motteru[i]=cnt;
  }

  let a ='';
  for(let i=0; i<id.length; i++){
    a += rare[i] + ":" +motteru[i] + "/" + zenbu[i] + " ";

  }
  console.log(a);
}

function achevement(){
  let have=0;
  let sum=0;
  let total='';
  let each='';

  for(let i=0; i<rare.length; i++){
    have += motteru[i];
    sum += zenbu[i];
    each += rare[i] + ":" + motteru[i] + "/" + zenbu[i];
    if(i != rare.length-1){
      each += " ";
    }
  }
  total = have + "/" + sum + " (" + Math.round((have/sum)*100*100)/100 + "%)";
  document.getElementById("total").innerHTML= total;
  document.getElementById("each").innerHTML= each;
  const text = document.title + " " + total + "\n" + each;
  console.log(text);
  //tweet(text);
}


function setColor(){
  /*
  //保存データ取得
  if(localStorage.getItem(keyname)) {
    data = JSON.parse(localStorage.getItem(keyname));
  }
  for (let i in data) {
    document.getElementById(data[i]).classList.add("have");
  }
  Count();
  achevement();
  //Password();*/
  for (let i in data) {
    document.getElementById(data[i]).classList.add("have");
  }
}
/*
function Reset(){
  res=confirm("リセットしますか？");
  if(res==true){
    localStorage.removeItem(keyname);
    location.reload();
  }
}

function tweet(text){
  document.getElementById('twitter').innerHTML='';
  twttr.widgets.createShareButton(
    location.href + "?id=" + para,
    document.getElementById('twitter'),
    {
      text: text
    }
  );
}
*/
function Password(){
  let str="";
  for(let x=0; x<id.length; x++){
    for(let y=0; y<id[x].length; y++){
      let n=0;
      let temp=[];

      for(let z=0; z<id[x][y].length; z++){
        if(id[x][y][z]==0){
          temp.push("-1");
        }
        else if(data.indexOf(id[x][y][z]) != -1){
          temp.push(1);
          switch (z) {
            case 0:
            n+=1;
            break;
            case 1:
            n+=2;
            break;
            case 2:
            n+=4;
            break;
            case 3:
            n+=8;
            break;
          }

        }
        else{
          n+=0;
          temp.push(0);
        }

      }

      if(temp.every(value => value != 0)){n=15;}
      str += n.toString(16);
    }
  }
  document.forms.form.text.value = str;
  para = str;

}

function geturl(){

  //if(url.searchParams.has("id")){

      let data2=[];

      for(let x=0; x<id.length; x++){
        for(let y=0; y<id[x].length; y++){
          id2.push(id[x][y]);
        }
      }

      let input = location.search.slice(4);
      //console.log(input);
      if(input.length > id2.length){
        input = input.substr(0,id2.length);
      }
      else if(input.length < id2.length){
        let l = id2.length-input.length;
        //console.log(l);
        for(let n=0; n<l; n++){
          input += "0";
        }
      }
      //console.log(input +"(" + input.length +")" +"(" + id2.length +")");
      history.replaceState(null,null, "?id=" + input ) ;
      const afterText = String(input).split('');

      for(let i in afterText){
        const arr = parseInt(afterText[i],16).toString(2).padStart(4,"0").split("");
        const arr_r = arr.reverse();
        data2.push(arr_r);
      }

      for(let x=0; x<id2.length; x++){
        for(let y=0; y<id2[x].length; y++){
          if(id2[x][y] != 0){

/*
            if(data2[x][y] ==0){
              let d = data.findIndex(element => element === id2[x][y]);
              data.splice(d, 1);//削除
              //document.getElementById(id2[x][y]).classList.remove("have");
            }
*/
            if(data2[x][y]==1){
              //if(data.indexOf(id2[x][y]) == -1){
                data.push(id2[x][y]);
                //document.getElementById(id2[x][y]).classList.add("have");
              //}
            }
          }
        }
      }
      data.sort();
      //console.log(data);
      //localStorage.setItem(keyname,JSON.stringify(data));
      //location.reload();
    //}
}
