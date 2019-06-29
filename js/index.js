
var btn = document.getElementById ("btn")
btn.onclick = function()
{
  
  move()
}

var move = function()
  {
    animate (dv1,//一
      {
        "width": 100,
        "height": 100,
        "left": 100,
        "top": 300,
      },10,animate(dv2,
      {
        "width": 100,
        "height": 100,
        "left": 200,
        "top": 300,
      },20,animate(dv3,
      {
        "width": 100,
        "height": 100,
        "left": 300,
        "top": 300,
        "opacity":1
      },25,animate(dv4,
      {
        "width": 100,
        "height": 100,
        "left": 400,
        "top": 300,
        "opacity":1
      },30,function()
      {
        animate (dv1,//二
          {
            "width": 100,
            "height": 100,
            "left": 600,
            "top": 300,
          },20,animate(dv2,
          {
            "left": 700,
            "top": 300,
          },20,animate(dv3,
          {
            "left": 800,
            "top": 300,
            "opacity":1
          },20,animate(dv4,
          {
            "left": 900,
            "top": 300,
            "opacity":1
          },20,function()
          {
            animate (dv1, //三
              {
                "width": 300,
                "height": 300,
                "left": 100,
                "top": 30,
              },20,animate(dv2,
              {
                "width": 300,
                "height": 300,
                "left": 400,
                "top": 330,
              },20,animate(dv3,
              {
                "width": 300,
                "height": 300,
                "left": 800,
                "top": 30,
                "opacity":1
              },20,animate(dv4,
              {
                "width": 300,
                "height": 300,
                "left": 1200,
                "top": 330,
                "opacity":1
              },20,move))))
          }))))        
      }))))
    
  }
