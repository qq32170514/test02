// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 320,
    height: 320
  });
  
  // then create a layer
  var layer = new Konva.Layer();
  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,   // x position of the center
    y: stage.height() / 2,  // y position of the center
    radius: 140,             // circle radius
    fill: 'red',            // color to fill the area
    stroke: 'black',        // color to draw the line
    strokeWidth: 10          // line width
  });
  
  // add the shape to the layer
  layer.add(circle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();