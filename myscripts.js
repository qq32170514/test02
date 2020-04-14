


var stage = new Konva.Stage({
    container: 'container',  
    width: 160,
    height: 160
  });
  

  var layer = new Konva.Layer();
  

  var circle = new Konva.Circle({
    x: stage.width() / 2,   
    y: stage.height() / 2,  
    radius: 70,             
    fill: 'red',            
    stroke: 'black',        
    strokeWidth: 4          
  });
  
 
  layer.add(circle);
  
  
  stage.add(layer);
  
 
  layer.draw();