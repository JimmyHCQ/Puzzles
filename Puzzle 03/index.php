<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
<section id="section">
    <div class="letterGrid">
      <div id="puzzle1"></div>
      <div id="puzzle2"></div>
      <div id="puzzle3"></div>
      <div id="puzzle4"></div>
    </div>
    <div>
      <div id="letterB" class="button" onclick="nuts=letterB, letter='B', put()">B</div>
      <div id="letterI" class="button" onclick="nuts=letterI, letter='I', put()">I</div>
      <div id="letterT" class="button" onclick="nuts=letterT, letter='T', put()">T</div>
      <div id="letterE" class="button" onclick="nuts=letterE, letter='E', put()">E</div>
    </div>
    <div id="resetB" class="button" onclick="reset()">reset</div>
  </section>
    <script type="text/javascript" src="js/script.js"></script>
  </body>
</html>