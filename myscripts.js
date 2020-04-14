// first we need to create a stage

var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 500,
    height: 500
  });
  
  // then create a layer
  var layer = new Konva.Layer();

  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 5,   // x position of the center
    y: stage.height() / 5,  // y position of the center
    radius: 180,             // circle radius
    fill: 'green',            // color to fill the area
    stroke: 'red',        // color to draw the line
    strokeWidth: 4          // line width
  });


  // add the shape to the layer
  layer.add(circle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();