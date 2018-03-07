// Created by iWeb 3.0.4 local-build-20130219

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,75),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(2,-2,199,4),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(201,-2,4,4),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(201,2,4,75),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(201,77,4,5),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(2,77,199,5),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,77,4,5),url:'Welcome_files/stroke_7.png'}],new IWSize(203,79))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
