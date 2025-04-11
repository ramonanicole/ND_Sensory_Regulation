window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var minutes = player.GetVar ("Minutes");
var sec_0 = player.GetVar ("Sec_0");
var seconds = player.GetVar ("Seconds");
var timerfinal = player.GetVar ("TimerFinal")
player.SetVar("TimerFinal", minutes + ":" + sec_0 + seconds)
}

};
