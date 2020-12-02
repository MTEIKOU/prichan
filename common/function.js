window.addEventListener('load', function(){DataLoad()})
window.addEventListener('load', function(){remove()})//remove no script
window.addEventListener('load', function(){settitle()})
window.addEventListener('load', function(){schedule()})
window.addEventListener('load', function(){allcount()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){addEvent()})
window.addEventListener('load', function(){setColor()})
window.addEventListener('load', function(){tweetReset()})


let motteru=[];
let zenbu=[];
const goal = new Date(ymd[0],ymd[1]-1,ymd[2]);
let data=[];

function DataLoad(){
  if(localStorage.getItem(keyname)) {
    data = JSON.parse(localStorage.getItem(keyname));
  }
}

function remove(){
  document.getElementById("disable").remove();
  document.title=title;
}

function settitle(){
  document.getElementById("title").innerText=title;
  document.getElementById("kikan").innerText=kikan;
  document.getElementById("reset").innerHTML="<input type='button' value='リセット' onClick='Reset()'>"
}

function setgoal(){
  const goal = new Date(ymd[0],ymd[1]-1,ymd[2]);
}

function schedule(){
  const limit = CountDown(goal);
  document.getElementById("limit").innerHTML="終了まで<span class='big'>"+limit[0]+"</span>日";
  if(limit[0]!='?')refresh();
}

function CountDown(due){
  if(ymd[0]==9999 || ymd[1]==0 || ymd[2] ==0){
    const count = ['?','?','?','?'];
    return count;
  }
  else{
    const now = new Date();
    const rest = due.getTime() - now.getTime();
    const sec = Math.max(Math.floor(rest/1000)%60,0);
    const min = Math.max(Math.floor(rest/1000/60)%60,0);
    const hours = Math.max(Math.floor(rest/1000/60/60)%24,0);
    const days = Math.max(Math.floor(rest/1000/60/60/24),0);
    const count = [days,hours,min,sec];
    return count;
  }
}

function refresh(){
  setTimeout(schedule,1000);
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
  //console.log(a);
}


function makeTable(){

  //make rare caption
  for(let n=0;n<rare.length;n++){
    let t='';
    switch(rare[n]){
      case "WR":
      t += "<table id='WR' class = 'table'><caption class='WR'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'>WR<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'></caption></table>"
      break;

      case "ITEM":
      t += "<table id='ITEM' class = 'table'><caption class='ITEM'>パシャっとアイテム</caption></table>"
      break;

      default:
      t += "<table id='" + rare[n] + "'class = 'table'><caption class='" +rare[n]+"'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'>"+ rare[n] +"<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'></caption></table>"
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
            t += "<td id='"+id[x][y][z]+"' class='item'><img src='https://mteikou.github.io/prichan/common/img/Item_Question.png'></br>" +id[x][y][z] +"</td>"
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

//add clickevent
function addEvent(){
  let items = document.getElementsByClassName("item");
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click",() => {

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


      /*      let key = localStorage.getItem(items[i].id)
      /*
      if(key==1){
      localStorage.removeItem(items[i].id);
      document.getElementById(items[i].id).classList.remove("have");
      //document.getElementById(items[i].id).classList.add("nohave");
      console.log("removed " + items[i].id);
      console.log((document.getElementById(items[i].id).closest(".table")).id);
    }

    else{
    localStorage.setItem(items[i].id,1);
    document.getElementById(items[i].id).classList.add("have");
    //document.getElementById(items[i].id).classList.remove("nohave");
    console.log("added " + items[i].id);
  }
  */
    data.sort();
    localStorage.setItem(keyname,JSON.stringify(data));
    console.log(data);
    Count();
    achevement();
    }, false);

  }
}

function Count(){
  for(let i=0; i<rare.length; i++){

    let count =0;
    for (let key in data){
//      if (localStorage.hasOwnProperty(key))
        let parent = (document.getElementById(data[key]).closest("table")).id;

        if(parent == rare[i]){
          count++;
        }
//      }
    }
    motteru[i]=count;
  }
  let a ='';
  for(let i=0; i<id.length; i++){
    a += rare[i] + ":" +motteru[i] + "/" + zenbu[i] + " ";

  }
  //console.log(a);
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
  tweet(text);
}


function setColor(){
  //保存データ取得
  if(localStorage.getItem(keyname)) {
    data = JSON.parse(localStorage.getItem(keyname));
  }
  for (let i in data) {
    document.getElementById(data[i]).classList.add("have");
  }
  Count();
  achevement();
}

function Reset(){
  res=confirm("リセットしますか？");
  if(res==true){
    localStorage.removeItem(keyname);
    location.reload();
  }
}

function tweetReset(){

}

function tweet(text){
  document.getElementById('twitter').innerHTML='';
  twttr.widgets.createShareButton(
    location.href,
    document.getElementById('twitter'),
    {
      text: text
    }
  );
}
