// Created by iWeb 3.0.1 local-build-20100908

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id6" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="610" height="397" style="height: 397px; left: 47px; position: absolute; top: 43px; width: 610px; z-index: 1; "><param name="src" value="Media/wp19_demo_intro_with_audio.avi" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id6" type="video/quicktime" width="610" height="397" style="height: 397px; left: 47px; position: absolute; top: 43px; width: 610px; z-index: 1; "><param name="src" value="Introduction_files/wp19_demo_intro_with_audio.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/wp19_demo_intro_with_audio.avi"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id6" type="video/quicktime" width="610" height="397" data="Media/wp19_demo_intro_with_audio.avi" style="height: 397px; left: 47px; position: absolute; top: 43px; width: 610px; z-index: 1; "><param name="src" value="Media/wp19_demo_intro_with_audio.avi"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Introduction_files/IntroductionMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id10');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
