window.addEventListener('load', function(){remove()})//remove no script
window.addEventListener('load', function(){settitle()})
window.addEventListener('load', function(){schedule()})
window.addEventListener('load', function(){makeTable()})
window.addEventListener('load', function(){geturl()})

window.addEventListener('load', function(){setColor()})

window.addEventListener('load', function(){allcount()})
window.addEventListener('load', function(){Count()})
window.addEventListener('load', function(){achevement()})


const goal = new Date(end[0],end[1]-1,end[2]);
let motteru=[];
let zenbu=[];
let data=[];
//let para='';
let id2=[];

var size = (function(x){
  if(x==3){
    return "three";
  }else{
    return "four";
  }
}(row));

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


function allcount(){
  let count=0;
  for(let x=0; x<id.length; x++){
    for(let y=0; y<id[x].length; y++){
      if(id[x][y]!=0){
        count++;
      }
    }
  }
  zenbu=count;
}

function makeTable(){


  var t = "<table id='"+rare+"' class = 'table'><caption class='caption event'>" + rare + "</caption></table>"
  document.getElementById("main").insertAdjacentHTML('beforeend',t);


  //make table

  for(let x = 0; x < id.length; x++){
    t='';
    t += "<tr>"

    for(let y = 0;y < id[x].length; y++){
      if(id[x][y]==0 && y < row){
        t += "<td class='empty'></td>"
      }
      else if(id[x][y] != 0){
        t += "<td id='"+id[x][y]+"' class='"+size+" + item'><img src='img/Item_ID"+img[x][y]+".png'></br>" +id[x][y] +"</td>"
      }
    }
    t += "</tr>"
    let tbl = document.getElementById(rare);
    tbl.insertAdjacentHTML('beforeend',t);
  }
}

function Count(){

  let count =0;

  for (let key in data){
    //      if (localStorage.hasOwnProperty(key))
    let parent = (document.getElementById(data[key]).closest("table")).id;

    if(parent == rare){
      count++;
    }
    //      }
  }
  motteru=count;

}

function achevement(){
  let per = motteru + "/" + zenbu + " (" + Math.round((motteru/zenbu)*100*100)/100 + "%)";
  document.getElementById("total").innerHTML= per;
  const text = document.title + " " + per;
  console.log(text);
  //tweet(text);
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
  //Password();
}

function geturl(){

  //if(url.searchParams.has("id")){

  let data2=[];

  for(let x=0; x<id.length; x++){
    id2.push(id[x]);
  }

  let input = location.search.slice(4);

  if(input.length > id2.length){
    input = input.substr(0,id2.length);
  }
  else if(input.length < id2.length){
    let l = id2.length-input.length;
    console.log(l);
    for(let n=0; n<l; n++){
      input += "0";
    }
  }
  console.log(input +"(" + input.length +")" +"(" + id2.length +")");
  history.replaceState(null,null, "?id=" + input ) ;
  const afterText = String(input).split('');
  console.log(afterText);

  for(let i in afterText){
    const arr = parseInt(afterText[i],16).toString(2).padStart(4,"0").split("");
    const arr_r = arr.reverse();
    data2.push(arr_r);
  }

  for(let x=0; x<id2.length; x++){
    for(let y=0; y<id2[x].length; y++){
      if(id2[x][y] != 0){
        console.log(id2[x][y] +" "+data2[x][y]);
        if(data2[x][y] ==0){
          //let d = data.findIndex(element => element === id2[x][y]);
          //data.splice(d, 1);//削除
          document.getElementById(id2[x][y]).classList.remove("have");
        }

        if(data2[x][y]==1){
          //if(data.indexOf(id2[x][y]) == -1){
          //data.push(id2[x][y]);
          document.getElementById(id2[x][y]).classList.add("have");
          //}
        }
      }
    }
  }
}
