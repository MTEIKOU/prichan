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
console.log(day);
  for(let i=0; i<day.length; i++){
  let test =''
  text = kikan(day[i][0]) + "～" + kikan(day[i][1]);
  console.log(i +1);
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
      let str = date.getFullYear()
      + '/' + ('0' + (date.getMonth()+1)).slice(-2)
      + '/' + ('0' + date.getDate()).slice(-2)
      +'('+ WeekStr[date.getDay()] +')';
      return str;
      console.log(str);
    }

}
