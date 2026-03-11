const text = "BTech Student | Web Developer | Building Projects";
let i = 0;

function typing(){
 if(i < text.length){
  document.getElementById("typing").innerHTML += text.charAt(i);
  i++;
  setTimeout(typing,50);
 }
}

typing();
