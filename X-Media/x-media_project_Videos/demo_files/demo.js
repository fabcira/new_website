// Created by iWeb 3.0.1 local-build-20100908

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id8" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="580" height="401" style="height: 401px; left: 44px; position: absolute; top: 8px; width: 580px; z-index: 1; "><param name="src" value="Media/WP19_Bike_Brakes_Use_Case.wmv" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id8" type="video/quicktime" width="580" height="401" style="height: 401px; left: 44px; position: absolute; top: 8px; width: 580px; z-index: 1; "><param name="src" value="demo_files/WP19_Bike_Brakes_Use_Case.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/WP19_Bike_Brakes_Use_Case.wmv"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id8" type="video/quicktime" width="580" height="401" data="Media/WP19_Bike_Brakes_Use_Case.wmv" style="height: 401px; left: 44px; position: absolute; top: 8px; width: 580px; z-index: 1; "><param name="src" value="Media/WP19_Bike_Brakes_Use_Case.wmv"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('demo_files/demoMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id9');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
