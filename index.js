window.addEventListener('load',function(){schedule()});

/*
function AllReset(){
res=confirm("全データ削除しますか？");
if(res==true){
localStorage.clear();
location.reload();
}
}
*/ //All Reset

function schedule(){
  for(let i=0; i<day.length; i++){
  const text = kikan(day[i][0]) + "～" + kikan(day[i][1]);
  console.log(kikan(day[i][0]) +"~"+kikan(day[i][1]));
  const text2 = info(day[(i+1)][1]);
  console.log(i +' ' +day[(i+1)][1]);
  document.getElementById((i+1)+'dan').innerHTML=text;// +' '+ text2;
  }

}

function kikan(arr){

    if(arr.length != 3){
      let str="";
      return str;
    }

    else{
      const date = new Date(arr[0], arr[1]-1, arr[2]);
      const WeekStr = ['日','月','火','水','木','金','土'];
      const str = (''+date.getFullYear()).slice(-2)
      + '/' + ('0' + (date.getMonth()+1)).slice(-2)
      + '/' + ('0' + date.getDate()).slice(-2)
      +'('+ WeekStr[date.getDay()] +')';
      return str;
    }
}

function info(goal){
let text='';
  if(goal.length == 3){//終了日入力済
    const limit = CountDown(goal);
    const days = limit[0].toString();

    if(limit.some(x => x>0)){ // && limit[0]<10){//残り10日未満 赤
      //document.getElementById("nokori").classList.add("red");
      text = "開催中"
    }
    if(limit.every(x => x==0)){//終了済　黒
      text = "終了"
    }
    return text;
  }

  else{//終了日未定
    //document.getElementById("nokori").innerHTML="?";
    const text='開催中';
    return text;
  }

  //if(limit.some(x => x>0))refresh();

}

function CountDown(goal){
  const due = new Date(goal[0], goal[1]-1, goal[2]);
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
