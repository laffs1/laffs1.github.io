gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.localVariables = [];
gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects1= [];
gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects2= [];
gdjs.Title_32ScreenCode.GDLogoObjects1= [];
gdjs.Title_32ScreenCode.GDLogoObjects2= [];
gdjs.Title_32ScreenCode.GDStartGameObjects1= [];
gdjs.Title_32ScreenCode.GDStartGameObjects2= [];
gdjs.Title_32ScreenCode.GDTitleObjects1= [];
gdjs.Title_32ScreenCode.GDTitleObjects2= [];
gdjs.Title_32ScreenCode.GDterrainBlock2Objects1= [];
gdjs.Title_32ScreenCode.GDterrainBlock2Objects2= [];
gdjs.Title_32ScreenCode.GDcollectibleObjects1= [];
gdjs.Title_32ScreenCode.GDcollectibleObjects2= [];
gdjs.Title_32ScreenCode.GDmainPlayerObjects1= [];
gdjs.Title_32ScreenCode.GDmainPlayerObjects2= [];
gdjs.Title_32ScreenCode.GDterrainBlockObjects1= [];
gdjs.Title_32ScreenCode.GDterrainBlockObjects2= [];
gdjs.Title_32ScreenCode.GDDoorObjects1= [];
gdjs.Title_32ScreenCode.GDDoorObjects2= [];
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects1= [];
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects2= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.Title_32ScreenCode.GDStartGameObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDStartGameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDStartGameObjects1[i].getBehavior("Flash").Flash(1000000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12284228);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Music2.mp3", 1, true, 25, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlock2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlock2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDcollectibleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDcollectibleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDmainPlayerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDmainPlayerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlockObjects1.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlockObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDoorObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDoorObjects2.length = 0;
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects1.length = 0;
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);
gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDtitlscreenbackgroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Title_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDStartGameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDTitleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlock2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlock2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDcollectibleObjects1.length = 0;
gdjs.Title_32ScreenCode.GDcollectibleObjects2.length = 0;
gdjs.Title_32ScreenCode.GDmainPlayerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDmainPlayerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlockObjects1.length = 0;
gdjs.Title_32ScreenCode.GDterrainBlockObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDoorObjects1.length = 0;
gdjs.Title_32ScreenCode.GDDoorObjects2.length = 0;
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects1.length = 0;
gdjs.Title_32ScreenCode.GDfake_9595one_9595_9595_9595Objects2.length = 0;


return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
