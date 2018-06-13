function countDown(num){
  if(num>=0){
    setTimeout(function(){
      console.log(num);
      countDown(num - 1);
    },1000);
  }
};
