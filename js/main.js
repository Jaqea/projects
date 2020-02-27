window.onload = function() {
    var oTxt = document.querySelector('.txt');
    var oBtn = document.querySelector('.btn');
    var oDiv3 = document.querySelector('.div3');
    var arr1 = ['怪兽威利', '大老爹', '圣诞老人'];
    var arr2 = ['迪士尼乐园', '救助站', '白宫'];
    var arr3 = ['在人行道化成了一坨泥', '自燃了', '变成一条鼻涕虫爬走了'];
    var arr = [];

    oBtn.onclick = generated;
    oTxt.onkeydown = function(e) {
        if (e.keyCode == 13)
            generated();
    }

    function random(arr) {
        var index = Math.floor(arr.length * Math.random());
        return arr[index];
    }

    function generated() {
        if (arr) arr = [];
        arr.push(random(arr1));
        arr.push(random(arr2));
        arr.push(random(arr3));
        if (!oTxt.value)
            name = '李雷';
        else name = oTxt.value;
        oDiv3.innerText = '外边有34度，' + arr[0] + '出去遛弯。当走到' + arr[1] + '时小伙伴们都惊呆了，他' + arr[2] + '。' + name + '全程目睹但他并没有慌，因为' + arr[0] + '是一个270斤的胖子，天气又辣么热。';
    }
}