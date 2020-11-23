window.addEventListener('load', function(){makeArray()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){addEvent()})
window.addEventListener('load', function(){setColor()})
window.addEventListener('load', function(){IDCount()})
let sum=0;
let having=0;

let all =[];
let r = [er,fr,pr,sr,ra,no];

//male all array
function makeArray(){
  for(var n=0;n<r.length;n++){
    if (r[n].length) {all.push(r[n]);}
  }
}

function makeTable(){
  //main caption
  var t = '';
  t+="<div id='top'><b><font size=5>"+title+"</font></b><font size=4>"+kikan+"</font></div><div class='center'><div class = 'inline' id='count'></div><div class ='inline'><input type='button' value='リセット' onclick='Reset();'></div></div>"
  document.getElementById("noscript").insertAdjacentHTML('afterend',t);
  t ="";

  //other rare caption
  for(var n=0;n<rare.length;n++){
    t += "<table id='" + rare[n] + "'class = 'table'><caption class='" +rare[n]+"'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'>"+ rare[n] +"<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_" + rare[n] +".png'></caption></table>"
    document.body.insertAdjacentHTML('beforeend',t);
    t ="";
  }

  //wr caption
  if(wr.length){
    t += "<table id='WR' class = 'table'><caption class='WR'><img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'>WR<img class = 'icon' src='https://mteikou.github.io/prichan/common/img/PT_rarity_Q.png'></caption></table>"
    document.body.insertAdjacentHTML('beforeend',t);
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
          t += "<td id='" +wr[x][y] + "'class='item'><img src='../../common/img/Item_Question.png'></br>"+wr[x][y]+"</td>"
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
          t += "<td id='"+all[n][x][y]+"' class='item'><img src='img/Item_ID"+all[n][x][y]+".png'></td>"
        }
      }
      t += "</tr>"
    }
    var tbl = document.getElementById(rare[n]);
    tbl.insertAdjacentHTML('afterbegin',t);
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
  localStorage.clear();
  location.reload();
}
