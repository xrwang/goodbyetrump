var page = require('webpage').create();

page.open('https://twitter.com/realDonaldTrump', function (s) {
    console.log(s);
    page.render('test.png');
    var title = page.evaluate(function() {
     return document.title;
   });

   console.log(title);
    phantom.exit();
});
