
//boxes
AFRAME.registerComponent("boxes",{
    schema:{
      height:{type:"number",default:3},
      width:{type:"number",default:3},
      depth:{type:"number",default:3}
    },
    init:function(){
      for(var i=0;i<6;i++){
        var box = document.createElement("a-entity")
        box.setAttribute("id","box")
        posX=Math.random()*20
        posY=Math.random()*20
        posZ=Math.random()*20-80
        position={x:posX,y:posY,z:posZ}
        box.setAttribute("position",position)
        box.setAttribute("geometry",{
          primitive:"sphere",
        })
        box.setAttribute("material",{
          src:"./images/boxtexture1.jpg",
        })
        box.setAttribute("static-body",{})
        var sceneEl=document.querySelector("#scene")
        sceneEl.appendChild(box)
      }
    }
  })