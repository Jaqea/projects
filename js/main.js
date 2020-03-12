window.onload = function() {
    let oDiv = document.querySelectorAll('.div');
    for (i = 0; i < oDiv.length; i++) {
        oDiv[0].onclick = function() {
            ajax('./data/main.json', show, 0);
            oDiv[0].onclick = null;
        }
        oDiv[1].onclick = function() {
            ajax('./data/main.json', show, 1);
            oDiv[1].onclick = null;
        }
        oDiv[2].onclick = function() {
            ajax('./data/main.json', show, 2);
            oDiv[2].onclick = null;
        }
        oDiv[3].onclick = function() {
            ajax('./data/main.json', show, 3);
            oDiv[3].onclick = null;
        }
        oDiv[4].onclick = function() {
            ajax('./data/main.json', show, 4);
            oDiv[4].onclick = null;
        }
    }


    function ajax(url, fnsuc, i, fnfail) {
        var Ajax = new XMLHttpRequest();
        Ajax.open('GET', url + '?a=' + Math.random(), true);
        Ajax.responseType = 'json';
        Ajax.send();
        Ajax.onreadystatechange = function() {
            var jsn = Ajax.response;
            if (Ajax.readyState == 4) {
                if (Ajax.status == 200) {
                    fnsuc(jsn, i);
                } else {
                    if (fnfail) {
                        fnfail();
                    }
                }
            }
        }
    }


    function show(json, i) {
        var oUl = document.getElementsByTagName('ul')[i];
        var oLi0 = document.createElement('li');
        var oLi1 = document.createElement('li');
        var oLi2 = document.createElement('li');
        var oLi3 = document.createElement('li');
        oLi0.innerHTML = 'Name:  ' + json[i].Name;
        oLi1.innerHTML = 'Age:  ' + json[i].Age;
        oLi2.innerHTML = 'SecretIdentity:  ' + json[i].SecretIdentity;
        oLi3.innerHTML = 'Powers:  ' + json[i].Powers;
        oUl.appendChild(oLi0);
        oUl.appendChild(oLi1);
        oUl.appendChild(oLi2);
        oUl.appendChild(oLi3);
    }
}