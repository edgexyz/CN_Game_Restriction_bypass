/*
Arknights CN bypass Anti-addiction

******************
QuantumultX:

[rewrite_local]
^https?:\/\/as\.hypergryph\.com\/online\/v1\/ping url script-response-body https://raw.githubusercontent.com/edgexyz/CN_Game_Restriction_bypass/main/Scripts/ak_anti-addiction_bypass.js

[mitm]
hostname = as.hypergryph.com

******************/
var obj = JSON.parse($response.body);
obj.result = 0;
obj.message = "OK";
obj.interval = 2300;
obj.alertTime = 600;
obj.timeLeft = -1;
$done({body: JSON.stringify(obj)});