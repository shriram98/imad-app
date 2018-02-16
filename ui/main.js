
var newButton = document.getElementById("res");
newButton.onclick = function() {
  document.getElementById("content").innerHTML = "this button is working";
  var text = document.getElementById("inp").value;
  var parsedHTML = "";
  var newRequest = new XMLHttpRequest();

  newRequest.onreadystatechange = function() {
    if(newRequest.readyState === XMLHttpRequest.DONE) {
      if(newRequest.status === 200) {
        var result = newRequest.responseText;
        result = JSON.parse(result);
        var x;
        for(x=0; x<result.length; x++) {
          parsedHTML += "<li>" + result[x] + "</li>";
        }
        document.getElementById("content").innerHTML = parsedHTML;
      }
    }
  }
  var url = 'http://localhost:8080/getDetails/' + text;
  newRequest.open('GET',url, true);
  newRequest.send(null);
};

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
