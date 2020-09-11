var mode = window.localStorage.getItem("dark");

if (mode == 'true'){
  $("body").addClass("dark");
  $(".change").text("ON");
}

$(".change").on("click", function(){
  if( $("body").hasClass("dark")){
      $("body").removeClass("dark");
      $(".change").text("OFF");
      window.localStorage.setItem("dark", false)
  }
  else{
    $("body").addClass("dark");
    $(".change").text("ON");
    window.localStorage.setItem("dark", true)
  }
})



function Dec2Bin(dec){
  var n = parseInt(dec);
  var r = n.toString(2);
  return(r)
}
function Bin2Dec(bin){
  var d = parseInt(bin, 2);
  return(d)
}



function getBinAndDecrypt(){
  var binN = $("#bin").val();
  var d = Bin2Dec(binN);
  return d
}
function getDecAndEncrypt(){
  var decN = $("#dec").val();
  var b = Dec2Bin(decN);
  return b
}



$("#e").on("click", function(){
  var n = getDecAndEncrypt();
  $("#bin").val(n)
})
$("#d").on("click", function(){
  var n = getBinAndDecrypt();
  $("#dec").val(n)
})
