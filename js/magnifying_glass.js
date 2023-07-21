/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-21 20:08:45
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-21 21:34:10
 * @FilePath: \html\work\js\day20\magnifying_glass\js\magnifying_glass.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var oPreview = document.querySelector('.preview');
var oMask = document.querySelector('.mask');
var oEnlarge = document.querySelector('.enlargement');
var oEnlargeImg = document.querySelector('.enlargement>img');
var mouseEventMap = {
  'mouseenter': function(){
    oMask.classList.add('active');
    oEnlarge.classList.add('active');
  },
  'mouseleave': function(){
    oMask.classList.remove('active');
    oEnlarge.classList.remove('active');
  },
  'mousemove': function(e){
    var x = e.clientX - oPreview.getBoundingClientRect().left - oMask.getBoundingClientRect().width/2;
    var y = e.clientY - oPreview.getBoundingClientRect().top - oMask.getBoundingClientRect().height/2;
    x = Math.min(x, oPreview.getBoundingClientRect().width - oMask.getBoundingClientRect().width);
    x = Math.max(0,x);
    y = Math.min(y, oPreview.getBoundingClientRect().height - oMask.getBoundingClientRect().height);
    y = Math.max(0,y);
    oMask.style.left = x + 'px';
    oMask.style.top = y + 'px';
    var ratioX = (oEnlargeImg.offsetWidth - oEnlarge.offsetWidth)/(oPreview.offsetWidth - oMask.offsetWidth);
    var ratioY =(oEnlargeImg.offsetHeight - oEnlarge.offsetHeight)/(oPreview.offsetHeight - oMask.offsetHeight);
    oEnlargeImg.style.marginLeft = -ratioX * x + 'px';
    oEnlargeImg.style.marginTop = -ratioY * y + 'px';
  }
}

oPreview.addEventListener('mouseenter',handle,false);
oPreview.addEventListener('mouseleave',handle,false);
oPreview.addEventListener('mousemove',handle,false);

function handle(e){
  if(mouseEventMap[e.type] && typeof mouseEventMap[e.type] === 'function'){
    mouseEventMap[e.type](e);
  }
}