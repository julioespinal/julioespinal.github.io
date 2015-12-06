window.onload = function() {
	resizePageContainer(window.innerWidth, window.innerHeight)
	socialize()
}

window.onresize = function() {
	resizePageContainer(window.innerWidth, window.innerHeight)
}


function resizePageContainer(innerWidth, innerHeight) {
	document.getElementById("page_container").setAttribute("style", "height:" + innerHeight + "px")
	
	var el = document.getElementById("main_content")
	el.setAttribute("style", "min-height:" + (innerHeight-el.offsetTop) + "px")
}

function getAge() {
	var date = new Date()
	var years = date.getFullYear() - 1987
	
	if (date.getMonth() < 8) years -= 1
	
	document.getElementById("getAge").innerHTML = years
}


function build(o, ar) {
	var ret = ""
	for (var i = 0, j = 0; i < ar.length; ++i, ++j) {
		j %= o.length
		ret += String.fromCharCode(ar[i] - o[j])
	}
	
	return ret
}

function create(s) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = s;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function doIt(o, i, a, b, c) {
	var l = String.fromCharCode(a) + String.fromCharCode(b)
	var li = l + "_link"
	var frag = create("<a id=\"" + li + "\"><img src=\"" + l + "_logo.png\"></a>")
	var e = document.getElementById(l)
	e.appendChild(frag);
	var el = e.firstChild
	
	el.onmouseover = function() {
		if (c) {
			el.href = build(o, i)
			c = false
		}
	}
	

}

function socialize() {
	doIt([736, 83, 408, -982, 566, -264, -669, 209, -116, -999, -652, 81, 362],
		 [840, 199, 524, -870, 681, -206, -622, 256, 3, -880, -533, 127, 470, 841,
		  193, 515, -881, 666, -159, -559, 255, -17, -888, -543, 128, 474, 853,
		  181, 455, -876, 683, -156, -564, 320, -71, -898, -537, 193, 467, 846,
		  180, 516, -935, 622, -166, -622, 265, -60, -947, -605, 134, 411, 789],
		 105, 110, true);
//	doIt([-365, -734, 211, 247, -693, 45, 230, -289, 890, -27, -784, -355, -561],
//		 [-261, -618, 327, 359, -578, 103, 277, -242, 1009, 92, -665, -309, -459,
//		  -268, -635, 312, 345, -582, 156, 337, -243, 989, 84, -675, -308, -455,
//		  -248, -626, 316, 358, -647, 146, 345, -177, 995, 83, -687, -247],
//		 102, 98, true);
	doIt([10, 803, -713, 962, 381, -588, 624, 281, 861, 384, 368, -730, 718],
		 [119, 900, -608, 1070, 497, -477, 682, 382, 976, 496, 473, -620, 815,
		  118, 849, -607, 1079, 489, -483, 735, 327, 958, 448, 471, -621, 815,
		  115, 911, -667, 1061, 492, -479],
		 101, 109, true)
}