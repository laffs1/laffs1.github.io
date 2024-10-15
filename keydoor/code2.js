gdjs.Level_322Code = {};
gdjs.Level_322Code.localVariables = [];
gdjs.Level_322Code.GDmainPlayerObjects3_1final = [];

gdjs.Level_322Code.GDmainPlayer1Objects1= [];
gdjs.Level_322Code.GDmainPlayer1Objects2= [];
gdjs.Level_322Code.GDmainPlayer1Objects3= [];
gdjs.Level_322Code.GDmainPlayer1Objects4= [];
gdjs.Level_322Code.GDterrainBlock12Objects1= [];
gdjs.Level_322Code.GDterrainBlock12Objects2= [];
gdjs.Level_322Code.GDterrainBlock12Objects3= [];
gdjs.Level_322Code.GDterrainBlock12Objects4= [];
gdjs.Level_322Code.GDcollectible2Objects1= [];
gdjs.Level_322Code.GDcollectible2Objects2= [];
gdjs.Level_322Code.GDcollectible2Objects3= [];
gdjs.Level_322Code.GDcollectible2Objects4= [];
gdjs.Level_322Code.GDDorr1Objects1= [];
gdjs.Level_322Code.GDDorr1Objects2= [];
gdjs.Level_322Code.GDDorr1Objects3= [];
gdjs.Level_322Code.GDDorr1Objects4= [];
gdjs.Level_322Code.GDhazardBlockObjects1= [];
gdjs.Level_322Code.GDhazardBlockObjects2= [];
gdjs.Level_322Code.GDhazardBlockObjects3= [];
gdjs.Level_322Code.GDhazardBlockObjects4= [];
gdjs.Level_322Code.GDSparkleParticleObjects1= [];
gdjs.Level_322Code.GDSparkleParticleObjects2= [];
gdjs.Level_322Code.GDSparkleParticleObjects3= [];
gdjs.Level_322Code.GDSparkleParticleObjects4= [];
gdjs.Level_322Code.GDbackgroundImageObjects1= [];
gdjs.Level_322Code.GDbackgroundImageObjects2= [];
gdjs.Level_322Code.GDbackgroundImageObjects3= [];
gdjs.Level_322Code.GDbackgroundImageObjects4= [];
gdjs.Level_322Code.GDDownButtonObjects1= [];
gdjs.Level_322Code.GDDownButtonObjects2= [];
gdjs.Level_322Code.GDDownButtonObjects3= [];
gdjs.Level_322Code.GDDownButtonObjects4= [];
gdjs.Level_322Code.GDterrainBlock2Objects1= [];
gdjs.Level_322Code.GDterrainBlock2Objects2= [];
gdjs.Level_322Code.GDterrainBlock2Objects3= [];
gdjs.Level_322Code.GDterrainBlock2Objects4= [];
gdjs.Level_322Code.GDcollectibleObjects1= [];
gdjs.Level_322Code.GDcollectibleObjects2= [];
gdjs.Level_322Code.GDcollectibleObjects3= [];
gdjs.Level_322Code.GDcollectibleObjects4= [];
gdjs.Level_322Code.GDmainPlayerObjects1= [];
gdjs.Level_322Code.GDmainPlayerObjects2= [];
gdjs.Level_322Code.GDmainPlayerObjects3= [];
gdjs.Level_322Code.GDmainPlayerObjects4= [];
gdjs.Level_322Code.GDterrainBlockObjects1= [];
gdjs.Level_322Code.GDterrainBlockObjects2= [];
gdjs.Level_322Code.GDterrainBlockObjects3= [];
gdjs.Level_322Code.GDterrainBlockObjects4= [];
gdjs.Level_322Code.GDDoorObjects1= [];
gdjs.Level_322Code.GDDoorObjects2= [];
gdjs.Level_322Code.GDDoorObjects3= [];
gdjs.Level_322Code.GDDoorObjects4= [];
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects1= [];
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects2= [];
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects3= [];
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects4= [];


gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12317476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDmainPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


};gdjs.Level_322Code.asyncCallback12320252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects4);

{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects4.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects4[i].getBehavior("Animation").setAnimationName("mainPlayer");
}
}gdjs.Level_322Code.localVariables.length = 0;
}
gdjs.Level_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level_322Code.localVariables);
for (const obj of gdjs.Level_322Code.GDmainPlayerObjects3) asyncObjectsList.addObject("mainPlayer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level_322Code.asyncCallback12320252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_322Code.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects3);
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDmainPlayerObjects3[k] = gdjs.Level_322Code.GDmainPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12314516);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDmainPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("mainPlayer");
}
}}

}


{



}


{

gdjs.Level_322Code.GDmainPlayerObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_322Code.GDmainPlayerObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects4);
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDmainPlayerObjects4[i].getBehavior("PlatformerObject").canJump() ) {
        isConditionTrue_1 = true;
        gdjs.Level_322Code.GDmainPlayerObjects4[k] = gdjs.Level_322Code.GDmainPlayerObjects4[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_322Code.GDmainPlayerObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_322Code.GDmainPlayerObjects3_1final.indexOf(gdjs.Level_322Code.GDmainPlayerObjects4[j]) === -1 )
            gdjs.Level_322Code.GDmainPlayerObjects3_1final.push(gdjs.Level_322Code.GDmainPlayerObjects4[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects4);
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDmainPlayerObjects4[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level_322Code.GDmainPlayerObjects4[k] = gdjs.Level_322Code.GDmainPlayerObjects4[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_322Code.GDmainPlayerObjects4.length; j < jLen ; ++j) {
        if ( gdjs.Level_322Code.GDmainPlayerObjects3_1final.indexOf(gdjs.Level_322Code.GDmainPlayerObjects4[j]) === -1 )
            gdjs.Level_322Code.GDmainPlayerObjects3_1final.push(gdjs.Level_322Code.GDmainPlayerObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_322Code.GDmainPlayerObjects3_1final, gdjs.Level_322Code.GDmainPlayerObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDmainPlayerObjects3[k] = gdjs.Level_322Code.GDmainPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12319388);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDmainPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("Falling");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDmainPlayerObjects3[k] = gdjs.Level_322Code.GDmainPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12320380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDmainPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_322Code.GDmainPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_322Code.GDmainPlayerObjects3[i].getBehavior("Animation").setAnimationName("mainPlayer");
}
}
{ //Subevents
gdjs.Level_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDmainPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDmainPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDmainPlayerObjects2[k] = gdjs.Level_322Code.GDmainPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDmainPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) != 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects1Objects = Hashtable.newFrom({"mainPlayer": gdjs.Level_322Code.GDmainPlayerObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDhazardBlockObjects1Objects = Hashtable.newFrom({"hazardBlock": gdjs.Level_322Code.GDhazardBlockObjects1});
gdjs.Level_322Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("hazardBlock"), gdjs.Level_322Code.GDhazardBlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDhazardBlockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "death.aac", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


};gdjs.Level_322Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level_322Code.eventsList2(runtimeScene);
}


{


gdjs.Level_322Code.eventsList3(runtimeScene);
}


};gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects = Hashtable.newFrom({"mainPlayer": gdjs.Level_322Code.GDmainPlayerObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDcollectibleObjects2Objects = Hashtable.newFrom({"collectible": gdjs.Level_322Code.GDcollectibleObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSparkleParticleObjects2Objects = Hashtable.newFrom({"SparkleParticle": gdjs.Level_322Code.GDSparkleParticleObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects = Hashtable.newFrom({"mainPlayer": gdjs.Level_322Code.GDmainPlayerObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects = Hashtable.newFrom({"mainPlayer": gdjs.Level_322Code.GDmainPlayerObjects2});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects2});
gdjs.Level_322Code.eventsList5 = function(runtimeScene) {

{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12330524);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), false);
}}

}


};gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects1Objects = Hashtable.newFrom({"mainPlayer": gdjs.Level_322Code.GDmainPlayerObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects1});
gdjs.Level_322Code.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("collectible"), gdjs.Level_322Code.GDcollectibleObjects2);
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDcollectibleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_322Code.GDcollectibleObjects2 */
gdjs.Level_322Code.GDSparkleParticleObjects2.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSparkleParticleObjects2Objects, (( gdjs.Level_322Code.GDcollectibleObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDcollectibleObjects2[0].getPointX("Center")), (( gdjs.Level_322Code.GDcollectibleObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDcollectibleObjects2[0].getPointY("Center")), "Player");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Key.wav", false, 50, 1);
}{for(var i = 0, len = gdjs.Level_322Code.GDcollectibleObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDcollectibleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects2[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDoorObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Unlock.wav", false, 50, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects2);
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDDoorObjects2[i].getBehavior("Animation").getAnimationName() == "Unlocked" ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDDoorObjects2[k] = gdjs.Level_322Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Level_322Code.GDDoorObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects2);
/* Reuse gdjs.Level_322Code.GDmainPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects2.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects2[i].setPosition((( gdjs.Level_322Code.GDmainPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDmainPlayerObjects2[0].getPointX("")) - 32,(( gdjs.Level_322Code.GDmainPlayerObjects2.length === 0 ) ? 0 :gdjs.Level_322Code.GDmainPlayerObjects2[0].getPointY("")) - 150);
}
}
{ //Subevents
gdjs.Level_322Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainPlayer"), gdjs.Level_322Code.GDmainPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDmainPlayerObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12331628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DownButton"), gdjs.Level_322Code.GDDownButtonObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDDownButtonObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDDownButtonObjects1[i].hide();
}
}}

}


};gdjs.Level_322Code.eventsList7 = function(runtimeScene) {

{



}


{



}


{


gdjs.Level_322Code.eventsList4(runtimeScene);
}


{


gdjs.Level_322Code.eventsList6(runtimeScene);
}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDmainPlayer1Objects1.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects2.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects3.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects4.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects1.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects2.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects3.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects4.length = 0;
gdjs.Level_322Code.GDcollectible2Objects1.length = 0;
gdjs.Level_322Code.GDcollectible2Objects2.length = 0;
gdjs.Level_322Code.GDcollectible2Objects3.length = 0;
gdjs.Level_322Code.GDcollectible2Objects4.length = 0;
gdjs.Level_322Code.GDDorr1Objects1.length = 0;
gdjs.Level_322Code.GDDorr1Objects2.length = 0;
gdjs.Level_322Code.GDDorr1Objects3.length = 0;
gdjs.Level_322Code.GDDorr1Objects4.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects1.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects2.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects3.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects4.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects1.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects2.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects3.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects4.length = 0;
gdjs.Level_322Code.GDDownButtonObjects1.length = 0;
gdjs.Level_322Code.GDDownButtonObjects2.length = 0;
gdjs.Level_322Code.GDDownButtonObjects3.length = 0;
gdjs.Level_322Code.GDDownButtonObjects4.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects1.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects2.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects3.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects4.length = 0;
gdjs.Level_322Code.GDcollectibleObjects1.length = 0;
gdjs.Level_322Code.GDcollectibleObjects2.length = 0;
gdjs.Level_322Code.GDcollectibleObjects3.length = 0;
gdjs.Level_322Code.GDcollectibleObjects4.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects1.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects2.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects3.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects4.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects1.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects2.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects3.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects4.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects3.length = 0;
gdjs.Level_322Code.GDDoorObjects4.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects1.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects2.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects3.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects4.length = 0;

gdjs.Level_322Code.eventsList7(runtimeScene);
gdjs.Level_322Code.GDmainPlayer1Objects1.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects2.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects3.length = 0;
gdjs.Level_322Code.GDmainPlayer1Objects4.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects1.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects2.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects3.length = 0;
gdjs.Level_322Code.GDterrainBlock12Objects4.length = 0;
gdjs.Level_322Code.GDcollectible2Objects1.length = 0;
gdjs.Level_322Code.GDcollectible2Objects2.length = 0;
gdjs.Level_322Code.GDcollectible2Objects3.length = 0;
gdjs.Level_322Code.GDcollectible2Objects4.length = 0;
gdjs.Level_322Code.GDDorr1Objects1.length = 0;
gdjs.Level_322Code.GDDorr1Objects2.length = 0;
gdjs.Level_322Code.GDDorr1Objects3.length = 0;
gdjs.Level_322Code.GDDorr1Objects4.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects1.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects2.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects3.length = 0;
gdjs.Level_322Code.GDhazardBlockObjects4.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects1.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects2.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects3.length = 0;
gdjs.Level_322Code.GDSparkleParticleObjects4.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects1.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects2.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects3.length = 0;
gdjs.Level_322Code.GDbackgroundImageObjects4.length = 0;
gdjs.Level_322Code.GDDownButtonObjects1.length = 0;
gdjs.Level_322Code.GDDownButtonObjects2.length = 0;
gdjs.Level_322Code.GDDownButtonObjects3.length = 0;
gdjs.Level_322Code.GDDownButtonObjects4.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects1.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects2.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects3.length = 0;
gdjs.Level_322Code.GDterrainBlock2Objects4.length = 0;
gdjs.Level_322Code.GDcollectibleObjects1.length = 0;
gdjs.Level_322Code.GDcollectibleObjects2.length = 0;
gdjs.Level_322Code.GDcollectibleObjects3.length = 0;
gdjs.Level_322Code.GDcollectibleObjects4.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects1.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects2.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects3.length = 0;
gdjs.Level_322Code.GDmainPlayerObjects4.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects1.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects2.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects3.length = 0;
gdjs.Level_322Code.GDterrainBlockObjects4.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects3.length = 0;
gdjs.Level_322Code.GDDoorObjects4.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects1.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects2.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects3.length = 0;
gdjs.Level_322Code.GDfake_9595one_9595_9595_9595Objects4.length = 0;


return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
