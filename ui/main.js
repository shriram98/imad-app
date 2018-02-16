var button = document.getElementById("counter");

button.onclick = function() {
  //make a request to end point

  var request = new XMLHttpRequest();

  //capture and store the result 
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      //take some action
      if(request.status === 200) {
        var counter = request.responseText;
        var span = document.getElementById("count");
        span.innerHTML = counter.toString();
      }
    }
    // if not done
  }

  request.open('GET', 'http://localhost:8080/counter', true);
  request.send(null);
};


document.getElementById("res").onclick = function() {
  var text = document.getElementById("inp").value;
  var requestDetails = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if ( request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        var details = request.responseText;
        details = JSON.parse(details);
        document.getElementById("content").innerHTML = details;
      } 
    }
    //make the request
    request.open('GET', 'http://localhost:8080/getDetails/${text}', true);
    request.send(null);
  }
}
