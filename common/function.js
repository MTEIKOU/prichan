window.addEventListener('load', function(){remove()})
window.addEventListener('load', function(){settitle()})
window.addEventListener('load', function(){schedule()})
window.addEventListener('load', function(){collect()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){addEvent()})
window.addEventListener('load', function(){setColor()})
window.addEventListener('load', function(){IDCount()})
let sum=0;
let having=0;
var t = '';
const goal = new Date(yy,mm-1,dd);

function remove(){
  document.getElementById("disable").remove();
  document.title=title;
}

function settitle(){
  document.getElementById("title").innerText=title;
  document.getElementById("kikan").innerText=kikan;
  document.getElementById("reset").innerHTML="<input type='button' value='リセット' onClick='Reset()'>"
}

function schedule(){
  const limit = CountDown(goal);
  document.getElementById("limit").innerHTML="終了まで<span class='big'>"+limit[0]+"</span>日";
  refresh();
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
schedule();

function collect(){
  let zenbu=[];
  for(let x=0; x<all.length; x++){
    let arare=0;
    for(let y=0; y<all[x].length; y++){
      for(let z=0; z<all[x][y].length; z++){
        if(all[x][y][z]!=0){
          arare++;
        }
      }
    }
    zenbu.push(arare);
    console.log(arare);
  }
}


function makeTable(){

  //other rare caption
  for(var n=0;n<rare.length;n++){
    t += "<table id='" + rare[n] + "'class = 'table'><caption class='" +rare[n]+"'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'>"+ rare[n] +"<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'></caption></table>"
    document.getElementById("main").insertAdjacentHTML('beforeend',t);
    t ="";
  }

  //wr caption
  if(wr.length){
    t += "<table id='WR' class = 'table'><caption class='WR'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'>WR<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'></caption></table>"
    document.getElementById("main").insertAdjacentHTML('beforeend',t);
    t ="";
  }

  //wr table
  if(wr.length){
    for(var x = 0; x < wr.length; x++){
      t += "<tr>"
      for(var y = 0;y < wr[x].length; y++){

        if(wr[x][y]==0){
          t += "<td class='empty'></td>"
        }
        else{
          t += "<td id='" +wr[x][y] + "'class='item'><img src='https://mteikou.github.io/prichan/common/img/Item_Question.png'></br>"+wr[x][y]+"</td>"
        }
      }
      t += "</tr>"
    }
    document.getElementById("WR").insertAdjacentHTML('afterbegin',t);
    t='';
  }

  //other rare table
  for(var n=0;n<all.length;n++){
    for(var x = 0; x < all[n].length; x++){

      t += "<tr>"

      for(var y = 0;y < all[n][x].length; y++){
        if(all[n][x][y]==0){
          t += "<td class='empty'></td>"
        }
        else{
          t += "<td id='"+id[n][x][y]+"' class='item'><img src='../img/Item_ID"+all[n][x][y]+".png'></br>" +id[n][x][y] +"</td>"
        }
      }
      t += "</tr>"
    }
    var tbl = document.getElementById(rare[n]);
    tbl.insertAdjacentHTML('afterbegin',t);
    t='';
  }

  //item
  if(pa.length){
    t += "<table id='PA' class = 'table'><caption class='PA'>パシャっとアイテム</caption></table>"
    document.getElementById("main").insertAdjacentHTML('beforeend',t);
    t ="";

    t += "<tr>"
    for(var x = 0;x < pa.length; x++){

      if(pa[x]==0){
        t += "<td class='empty'></td>"
      }
      else{
        t += "<td id='"+pa[x]+"' class='item'><img src='../img/Item_ID"+pa[x]+".png'></br>"+ pa_id[x]+"</td>"
      }
    }
    t += "</tr>"

    document.getElementById("PA").insertAdjacentHTML('afterbegin',t);
    t='';
  }
}

//add clickevent
function addEvent(){
  let items = document.getElementsByClassName("item");
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click",() => {
      let key = localStorage.getItem(items[i].id)

      if(key==1){
        localStorage.removeItem(items[i].id);
        document.getElementById(items[i].id).style.backgroundColor = "white";
        having--;
        console.log("removed " + items[i].id);
        CountText();
      }

      else{
        localStorage.setItem(items[i].id,1);
        document.getElementById(items[i].id).style.backgroundColor = "gray";
        having++;
        console.log("added " + items[i].id);
        CountText();
      }
    }, false);
  }
}

function setColor(){
  for (var key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      document.getElementById(key).style.backgroundColor = "gray";
      having++;
      console.log(key + " " + having);
    }
  }
}

function IDCount(){
  sum = document.getElementsByClassName("item").length;
  let text = document.getElementById('count');
  text.innerHTML = having + "/" + sum + " (" + Math.round((having/sum)*100*100)/100 + "%)";
}

function CountText(){
  let text = document.getElementById('count');
  text.innerText = having + "/" + sum + " (" + Math.round((having/sum)*100*100)/100 + "%)";
}

function Reset(){
  res=confirm("リセットしますか？");
  if(res==true){
    localStorage.clear();
    location.reload();
  }
}
