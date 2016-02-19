function getData(path, callback) {
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        var data = JSON.parse(xhttp.responseText);
        if (callback) callback(data);
    }
  };
  xhttp.open('GET', path);
  xhttp.send();
}



$(function() {


   

});
