var reason=[
    "kalpesh",
    "payal",
    "ved",
    "rutvi"];
  
  var image=[
  "daddy.jpg",
    "mom.jpg",
    "brother.jpg",
    "me.jpg"];
  
  var i=0;
  function nextimage() 
  {
    document.getElementById("img").src=image[i];
    document.getElementById("reason1").innerHTML=reason[i];
    i++;
    if(i==4){
      i=0;
    }
  }
