document.write("<!-- Collect the nav links, forms, and other content for toggling -->");

document.write('<nav class="navbar navbar-inverse navbar-default">');
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
document.write("        <li ><a href='index.html'>Home</a></li>");
//document.write("        <li><a href='Research.html'>Research</a></li>");
document.write("         <li><a href='#' class='dropdown-toggle' data-toggle='dropdown'>About Me<b class='caret'></b></a>");
document.write("            <ul class='dropdown-menu'>");
document.write("                <li><a href='About.html'>About Me</a></li>");
document.write("                <li><a href='News.html'>Recent News</a></li>");
document.write("                <li><a href='Vitae.html'>Short Bio</a></li>");
document.write("                <li><a href='Contacts.html'>Contacts</a></li>");
document.write("            </ul>");
document.write("        </li>");
document.write("        <li class='dropdown'>");
document.write("            <a href='#' class='dropdown-toggle' data-toggle='dropdown'>Research <b class='caret'></b></a>");
document.write("            <ul class='dropdown-menu'>");
document.write("                <li><a href='Research.html'>Research Area</a></li>");
document.write("                <li><a href='Papers.html'>Publications</a></li>");
document.write("                <li><a href='Projects.html'>Projects</a></li>");
document.write("                <li><a href='Talks.html'>Talks and Tutorials</a></li>");
document.write("                <li><a href='Videos.html'>Some Videos of Talks and Tutorials</a></li>");
document.write("            </ul>");
document.write("        </li>");
document.write("        <li><a href='Industry.html'>Industry</a></li>");
document.write("        <li><a href='Teaching.html'>Teaching</a></li>");
document.write("        <li><a href='PhD_Students.html'>PhD Students</a></li>");
//document.write("        <li><a href='OpenPositions.html'>Open Positions</a></li>");
document.write("        <li><a href='Outreach.html'>School Outreach</a></li>");
document.write("        <li><a href='Contacts.html'>Contacts</a></li>");

document.write("    </ul>");
document.write("</div>");
document.write("</div>");

document.write('</nav>');

document.write("<!-- /.navbar-collapse -->");
