function getnumber(num){
var result = document.getElementById("result");
 result.value += num;
}
function cleareachreult() {
  var result = document.getElementById("result");
  result.value = result.value.slice(0,-1);
}
function square(a){
  var result = document.getElementById("result");
  result.value *= result.value
}
function clearreult(){
  var result = document.getElementById("result");
  result.value = ""
}
function getresult(){
  var result = document.getElementById("result");
  result.value = eval(result.value)
}




