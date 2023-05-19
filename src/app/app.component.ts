import { Component, ElementRef } from '@angular/core';
import { Layer } from 'konva/lib/Layer';
import { Stage } from 'konva/lib/Stage';
import { Circle } from 'konva/lib/shapes/Circle';
import { Rect } from 'konva/lib/shapes/Rect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'konva-chart-practice';
  constructor(private elementRef: ElementRef){}
  ngAfterViewInit() {
    const stage = new Stage({
      container: 'stage-container',
      width: window.innerWidth,
      height: window.innerHeight, 
    });

    const layer = new Layer();
    stage.add(layer);

    const rect = new Rect({
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: 'red',
      draggable: true
    });
    layer.add(rect);

    const circle = new Circle({
      x: 200,
      y: 200,
      radius: 50,
      fill: 'blue',
      draggable: true
    });
    layer.add(circle);

    layer.draw();
  }
}
