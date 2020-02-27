window.onload = function() {
    var oBtn = document.querySelector('.btn');
    var oTxt = document.querySelector('.txt');
    var oDiv2 = document.querySelector('.div2');
    var aLi = oDiv2.querySelectorAll('li');
    var randNum = Math.ceil(100 * Math.random());
    var count = 0;
    oBtn.onclick = guess;
    oTxt.onkeydown = function(e) {
        if (e.keyCode == 13)
            guess()
        else return
    }

    function guess() {
        if (isNaN(parseInt(oTxt.value))) {
            alert('请输入一个0~100以内的数字！');
        } else {
            count++;
            if (count == 10) {
                oTxt.disabled = true;
                oBtn.disabled = true;
                oBtn.className = 'btn btn1';
            }
            oDiv2.style.display = 'block';
            if (oTxt.value != randNum) {
                oTxt.value > randNum ? aLi[2].innerText = '刚才你猜高了' : aLi[2].innerText = '刚才你猜低了';
                aLi[0].innerText += oTxt.value + '\xa0';
                if (count == 10) {
                    aLi[1].innerText = '!!!GAME OVER!!!';
                    createBtn();
                } else
                    aLi[1].innerText = '很遗憾，你猜错了';
                aLi[1].className = 'error';
                oTxt.value = '';
            } else {
                aLi[1].innerText = '恭喜你，猜对了';
                aLi[1].className = 'success';
                aLi[2].innerText = '';
                count = 0;
                oTxt.disabled = true;
                oBtn.disabled = true;
                oBtn.className = 'btn btn1';
                createBtn();
            }
        }
    }

    function createBtn() {
        var newBtn = document.createElement('input');
        var newLi = document.createElement('li');
        var oUl = oDiv2.querySelector('ul');
        newBtn.type = 'button';
        newBtn.className = 'btn';
        newBtn.style.marginLeft = '0px';
        newBtn.value = '开始新游戏';
        newBtn.onclick = function() {
            oTxt.disabled = false;
            oBtn.disabled = false;
            aLi[0].innerText = '上次猜的数：';
            oBtn.className = 'btn';
            oDiv2.style.display = 'none';
            oUl.removeChild(newLi);
            oTxt.value = '';
            randNum = Math.ceil(100 * Math.random());
        }
        newLi.appendChild(newBtn);
        oUl.appendChild(newLi);
    }
}