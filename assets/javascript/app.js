  //variables
  var count = 15 * 1000;
  var TimeRemaining;
  var intervalId;
  var correctAnswer;
  var wrongAnswer;
  var unAnswered;

  $(".quesAnswer").hide();
  $("#timeRemaining").hide();
  $(".allDone").hide();

  //hides the start button and starts to count down the set time.
  //when "start button" clicked it displays a page with question and answer and "done" button.

  $("#start").on("click", function() {

      var seconds;
      $("#timeRemaining").show();
      timeConverter(count);
      $(".quesAnswer").show();

      $("#start").hide();
      run();
  });
  //function run to start the quiz.

  function run() {
      intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
      seconds--;
      $("#timeRemaining").html("<p> Time Remaining </p>" + seconds + " seconds");

      if (seconds === 0) {
          stop();
          gameOver();
      }

  }

  function stop() {
      clearInterval(intervalId);
  }



  function timeConverter(t) {

      //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
      var minutes = Math.floor(t / 60);
      // var seconds = t - (minutes * 60);
      seconds = ((t % 60000) / 1000).toFixed(0);

      if (seconds < 10) {
          seconds = "0" + seconds;
      }

      if (minutes === 0) {
          minutes = "00";
      }

      $("#timeRemaining").html("<p> Time Remaining</p>" + seconds + " seconds");
  }

  //when clicked on done button, it hides the question answer page.
  $("#done").on("click", function() {

      gameOver();
  });

  function gameOver() {
      $(".quesAnswer").hide();
      $("#timeRemaining").hide();
      $(".correct").show();
      $(".wrong").show();
      $(".unanswer").show();
      $(".allDone").show();
      answer();

  };
  // When checked correct answer
  // correctAnswer++;
  function answer() {
      correctAnswer = 0;
      wrongAnswer = 0;
      unAnswered = 0;
      var arrayQ = ["question1", "question2", "question3", "question4"]
      for (var i = 0; i < arrayQ.length; i++) {
          var ans = $("input[name='" + arrayQ[i] + "']:checked");
          console.log(ans);


          if (!ans.length) {
              unAnswered++;
          } else if (ans.hasClass("correct")) {
              correctAnswer++;
          } else {
              wrongAnswer++;
          }
      }
      console.log(correctAnswer);
      console.log(wrongAnswer);
      console.log(unAnswered);

      $("#numbers-correct").html("Correct Answer :" + correctAnswer);
      $("#numbers-wrong").html("Wrong Answer :" + wrongAnswer);
      $("#numbers-incorrect").html("Unanswered:" + unAnswered);
  }
