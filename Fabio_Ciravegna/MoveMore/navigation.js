document.write("<!-- Collect the nav links, forms, and other content for toggling -->");
document.write('<style>');
document.write('ul.nav li a, ul.nav li a:visited {color: white !important;}');
document.write('ul.nav li a:hover, ul.nav li a:active {color: white !important;}');
document.write('ul.nav li.active a {color: #white !important;}');
document.write('</style>');

document.write('<nav class="navbar navbar-inverse navbar-default" style="background: rgb(231, 206, 40); font-color:white">');
document.write('<div class="container-fluid">');
document.write('  <div class="navbar-header">');
document.write('     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-main">');
document.write('      <span class="sr-only">Toggle navigation</span>');
document.write('      <span class="icon-bar"></span>');
document.write('      <span class="icon-bar"></span>');
document.write('      <span class="icon-bar"></span>');
document.write('    </button>');
document.write('  </div>');
document.write('  <div class="collapse navbar-collapse" id="navbar-main">');

document.write("    <ul class='nav navbar-nav'>");
document.write("                <li><a href='index.html'>Home</a></li>");
document.write("                <li><a href='privacy.html'>Privacy</a></li>");
document.write("                <li><a href='terms_of_use.html'>Terms of Use</a></li>");
document.write("                <li><a href='copyright.html'>Open Source Declaration</a></li>");
document.write("        <li><a href='../Contacts.html'>Contacts</a></li>");

document.write("    </ul>");
document.write("</div>");
document.write("</div>");

document.write('</nav>');

document.write("<!-- /.navbar-collapse -->");
