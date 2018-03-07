// Created by iWeb 2.0.2 local-build-20080108

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,209),url:'Tutors_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Tutors_files/stroke_1.png'},{rect:new IWRect(1,-1,447,2),url:'Tutors_files/stroke_2.png'},{rect:new IWRect(448,-1,2,2),url:'Tutors_files/stroke_3.png'},{rect:new IWRect(448,1,2,209),url:'Tutors_files/stroke_4.png'},{rect:new IWRect(448,210,2,2),url:'Tutors_files/stroke_5.png'},{rect:new IWRect(1,210,447,2),url:'Tutors_files/stroke_6.png'},{rect:new IWRect(-1,210,2,2),url:'Tutors_files/stroke_7.png'}],new IWSize(449,211)),reflection_1:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Tutors_files/TutorsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
