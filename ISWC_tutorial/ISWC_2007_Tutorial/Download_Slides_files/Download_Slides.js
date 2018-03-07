// Created by iWeb 2.0.2 local-build-20080108

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,175),url:'Download_Slides_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Download_Slides_files/stroke_1.png'},{rect:new IWRect(1,-1,134,2),url:'Download_Slides_files/stroke_2.png'},{rect:new IWRect(135,-1,2,2),url:'Download_Slides_files/stroke_3.png'},{rect:new IWRect(135,1,2,175),url:'Download_Slides_files/stroke_4.png'},{rect:new IWRect(135,176,2,2),url:'Download_Slides_files/stroke_5.png'},{rect:new IWRect(1,176,134,2),url:'Download_Slides_files/stroke_6.png'},{rect:new IWRect(-1,176,2,2),url:'Download_Slides_files/stroke_7.png'}],new IWSize(136,177))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Download_Slides_files/Download_SlidesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
