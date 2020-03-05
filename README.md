## 第六次作业

弹跳小球

思路：

- 创建 `canvas` 绘制环境，绘制圆

- 产生一定范围的随机数、随机颜色

- 构造固定小球对象，弹跳小球对象

  ```js
  function fixedBall(x, y, r, color) {
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color;
      this.makeFixedBall = function() {
          //canvas绘制空心圆
      }
  }
  ```

  ```js
  function boundBall(x, y, speedX, speedY, r, color) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.r = r;
      this.color = color;
      this.makeBoundBall = function(){
          //canvas绘制填充圆
      },
          this.move = function(){
          this.x += this.speedX;
          this.y += this.speedY;//均速
          //判断弹跳条件
      },
          this.changeColor = function(){
          //判断相撞条件(两中心距离 <= 两圆半径之和),改变颜色
      },
          this.clearBoundBall = function(){
          //判断相撞条件(两中心距离 <= 两圆半径之和),清除小球，改变数量
      }
  }
  ```

- 创建弹跳函数

  ```js
  function bound() {
      //1、绘制可视区矩形
      
      //2、绘制固定小球
      
      //3、循环创建弹跳小球对象
      
      //4、循环调用弹跳小球方法
      
      //5、requestAnimationFrame定时器调用bound函数。
  }
      bound();
  ```

- 给固定小球对象添加一个可移动方法，通过键盘实现移动