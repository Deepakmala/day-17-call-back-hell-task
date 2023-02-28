function countdown(num, callback) {
    var countdownElement = document.getElementById("countdown");
    countdownElement.textContent = num;
    if (num === 1) {
      setTimeout(function() {
        countdownElement.textContent = "Happy Independence Day";
        callback();
      }, 1000);
    } else {
      setTimeout(function() {
        countdown(num - 1, callback);
      }, 1000);
    }
  }
  
  countdown(10, function() {
    // do something after countdown finishes (if needed)
  });
  