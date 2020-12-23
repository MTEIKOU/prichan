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
  document.getElementById((i+1)+'dan').innerHTML=text;
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
      console.log(str);
      return str;
    }
}
/*
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
}*/
