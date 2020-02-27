window.onload = function() {
    var oBox = document.querySelector('.box');
    var oHeader = document.querySelector('.header');
    var aLi1 = oHeader.querySelectorAll('li');
    var oBtn = document.getElementById('sendBtn');
    var oTxt = document.getElementById('txt');
    var oTarea = document.getElementById('txtarea');
    var oMaxNum = document.querySelector('.maxNum');
    var oTitle = document.querySelector('.title');
    var aLi2 = oTitle.querySelectorAll('li');
    var oList = document.querySelector('.list');
    var oUl = oList.querySelector('ul');
    var imgSrc, index = 0;
    setTimeout(function() {
        oBox.className = 'public box'
    }, 2000)
    oTarea.onkeyup = function() {
        oMaxNum.innerText = 140 - oTarea.value.length;
        if (oMaxNum.innerText <= 0) {
            alert('字数超出限制了哦！');
            oMaxNum.innerText = 0;
        }
    }
    for (let i = 0; i < aLi1.length; i++) {
        aLi1[i].onclick = function() {
            for (let i = 0; i < aLi1.length; i++) {
                aLi1[i].className = '';
            }
            this.className = 'active';
            imgSrc = this.children[0].src;
        }
    }

    for (let i = 0; i < aLi2.length; i++) {
        aLi2[i].index = i;
        aLi2[i].onclick = function() {
            index = this.index;
            for (let i = 0; i < aLi2.length; i++) {
                aLi2[i].className = ''
            }
            this.className = 'current'
            var aLi3 = oUl.querySelectorAll('li');
            for (let i = 0; i < aLi3.length; i++) {
                oUl.removeChild(oUl.children[0])
            }
            for (let i = 0; i < arr[this.index].length; i++) {
                createNewLi(arr[this.index][i].name, arr[this.index][i].content, arr[this.index][i].imgSrc, arr[this.index][i].time)
            }
        }
    }

    var arr = [
        [{
            name: '张三一号',
            content: '我是一号风景评论',
            imgSrc: './images/6.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '张三二号',
            content: '我是二号风景评论',
            imgSrc: './images/3.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '张三三号',
            content: '我是三号风景评论',
            imgSrc: './images/4.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '张三四号',
            content: '我是四号风景评论',
            imgSrc: './images/7.jpg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '张三五号',
            content: '我是五号风景评论',
            imgSrc: './images/8.jpg',
            time: '2020年2月13日 16:55:8'
        }],
        [{
            name: '李四一号',
            content: '我是一号食品评论',
            imgSrc: './images/9.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '李四二号',
            content: '我是一号食品评论',
            imgSrc: './images/10.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '李四三号',
            content: '我是一号食品评论',
            imgSrc: './images/3.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '李四四号',
            content: '我是一号食品评论',
            imgSrc: './images/8.jpg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '李四五号',
            content: '我是一号食品评论',
            imgSrc: './images/4.jpeg',
            time: '2020年2月13日 16:55:8'
        }],
        [{
            name: '王五一号',
            content: '我是一号旅游评论',
            imgSrc: './images/5.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '王五二号',
            content: '我是二号旅游评论',
            imgSrc: './images/6.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '王五三号',
            content: '我是三号旅游评论',
            imgSrc: './images/8.jpg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '王五四号',
            content: '我是四号旅游评论',
            imgSrc: './images/7.jpg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '王五五号',
            content: '我是五号旅游评论',
            imgSrc: './images/3.jpeg',
            time: '2020年2月13日 16:55:8'
        }],
        [{
            name: '赵六一号',
            content: '我是一号影视评论',
            imgSrc: './images/3.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '赵六二号',
            content: '我是二号影视评论',
            imgSrc: './images/5.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '赵六三号',
            content: '我是三号影视评论',
            imgSrc: './images/4.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '赵六四号',
            content: '我是四号影视评论',
            imgSrc: './images/9.jpeg',
            time: '2020年2月13日 16:55:8'
        }, {
            name: '赵六五号',
            content: '我是五号影视评论',
            imgSrc: './images/10.jpeg',
            time: '2020年2月13日 16:55:8'
        }]
    ];


    for (let i = 0; i < arr[0].length; i++) {
        createNewLi(arr[0][i].name, arr[0][i].content, arr[0][i].imgSrc, arr[0][i].time)
    }


    oBtn.onclick = function() {
        if (!oTxt.value || !oTarea.value) {
            alert('昵称和内容不能为空哦！');
        } else {
            if (imgSrc) {
                var newObj = {
                    name: oTxt.value,
                    content: oTarea.value,
                    imgSrc: imgSrc,
                    time: newTime()
                };
                arr[index].push(newObj);
                createNewLi(newObj.name, newObj.content, newObj.imgSrc, newObj.time);
                oTxt.value = '';
                oTarea.value = '';
                oMaxNum.innerText = 140;
                imgSrc = '';
                for (let i = 0; i < aLi1.length; i++) {
                    aLi1[i].className = '';
                }
            } else {
                alert('头像还没选呢！');
            }
        }
    }

    function newTime() {
        var d = new Date();
        return d.getFullYear() + '年' + (parseInt(d.getMonth()) + 1) + '月' + d.getDate() + '日' + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
    } //从左往右加

    function createNewLi(name, content, imgSrc, times) {
        var newLi = document.createElement('li');
        var newUserPic = document.createElement('div');
        newUserPic.className = 'userPic';
        var newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.alt = '头像图片';
        var newUserCon = document.createElement('div');
        newUserCon.className = 'userCon';
        var newUserName = document.createElement('div');
        newUserName.className = 'userName';
        var nameA = document.createElement('a');
        nameA.href = 'javascript:;';
        nameA.innerText = name;
        var contentSpan = document.createElement('span');
        contentSpan.innerText = '：' + content;
        var time = document.createElement('div');
        time.className = 'time';
        var timeSpan = document.createElement('span');
        timeSpan.innerText = times;
        var timeA = document.createElement('a');
        timeA.href = 'javescript:;';
        timeA.innerText = '删除';

        function checkAult(item) {
            return item.name == name
        }
        timeA.onclick = function() {
            arr[index].splice(arr[index].findIndex(checkAult), 1);
            oUl.removeChild(newLi);
        }
        time.appendChild(timeSpan);
        time.appendChild(timeA);
        newUserName.appendChild(nameA);
        newUserName.appendChild(contentSpan);
        newUserCon.appendChild(newUserName);
        newUserCon.appendChild(time);
        newUserPic.appendChild(newImg);
        newLi.appendChild(newUserPic);
        newLi.appendChild(newUserCon);
        oUl.insertBefore(newLi, oUl.children[0])
    }
}