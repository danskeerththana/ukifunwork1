SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
 SC.stream('/tracks/85374179', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/85374179', function(sound) {
 $('#start2').click(function(e) {
   e.preventDefault();
   sound.start();
 });
 $('#stop2').click(function(e) {
   e.preventDefault();
   sound.stop();
 });
});


//  SC.stream('/tracks/79082412', function(sound) {
//   $('#start2').click(function(e) {
//     e.preventDefault();
//     sound.start();
//   });
//   $('#stop2').click(function(e) {
//     e.preventDefault();
//     sound.stop();
//   });
// });



 SC.stream('/tracks/240185122', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/142308376', function(sound) {
  $('#start4').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop4').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/79105406', function(sound) {
  $('#start5').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop5').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/272819930', function(sound) {
  $('#start6').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop6').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/184922621', function(sound) {
  $('#start7').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop7').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/184922621', function(sound) {
  $('#start8').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop8').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/309607440', function(sound) {
  $('#start9').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop9').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/298828514', function(sound) {
  $('#start10').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop10').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/173647504', function(sound) {
  $('#start11').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop11').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



 SC.stream('/tracks/168179704', function(sound) {
  $('#start12').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop12').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});

});