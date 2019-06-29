//动画函数，可设置元素任意样式属性的连续变化
function animate(element, json, time=20,fn,) 
{
  clearInterval(element.timeId); //防止定时器叠加
  element.timeId = setInterval(function () 
  {
    
    var flag = true; //为清理定时器做准备
    for (var attr in json) 
    {
      if (attr == "opacity") //透明属性数值单独处理
      {  
        var current = getStyle(element, attr) * 100;
        var target = json[attr] * 100;
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current / 100; 
      } 
      else if (attr == "zIndex") //styl中的命名z-index在对象中为驼峰命名
      { 
        element.style[attr] = json[attr];//层级属性直接赋值       
      } else  
      {//普通属性
        var current = parseInt(getStyle(element, attr));//获取属性的值。并转换为整数
        var target = json[attr]; //获取目标值
        var step = (target - current) / 10; //步距为缓动效果
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;//移动后的值
        element.style[attr] = current + "px";//改变后的值赋值给元素
      }      
      if (current != target)//需要所有属性达到目标
      {
        flag = false;
      }
    }
    if (flag) 
    {
      clearInterval(element.timeId);
      if (fn) //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数      
      {
        fn();
      }
    }
  }, time);
}

// 获取元素样式属性（兼容函数），动画函数依赖此方法
function getStyle(element,attr) 
{
  if(window.getComputedStyle)
  {//谷歌，火狐浏览器
		return window.getComputedStyle(element,null)[attr];
  }else
  {//ie8
		return element.currentStyle[attr];
 	}
}