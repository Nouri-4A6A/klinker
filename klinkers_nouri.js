function id(e) { return document.getElementById(e); }

var klinker = [
    ["a", "!"],
	["e", "@"],
	["o", "#"],
	["u", "$"],
	["i", "%"],
];

id("knopjeEen").onclick = function(){
    var text = id("inputText").value;
	for(var i = 0; i < klinker.length; i++) {
		text = text.replace(klinker[i][0], klinker[i][1]);
}
    id("result").innerHTML += text + "<br>";
}