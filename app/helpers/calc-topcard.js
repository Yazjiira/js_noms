import Ember from 'ember';

export function calcTopcard(params, hash) {
  const BASE_WIDTH = 390;
  const BASE_HEIGHT = 94;

  var radius = hash.radius,
      width = hash.width,
      height = Math.floor((width*94)/390),
      curvedBase = [];

  //1. first point - bottom left
  curvedBase.push('M0,' + height);

  //2. next point - bottom right
  curvedBase.push('L' + width + ',' + height);

  //3. next point point to help with curve
  curvedBase.push('L' + width + ',' + radius*2);

  //4. start curve
  curvedBase.push('Q' + width + ',0 ' + Math.floor(width - radius*3) + ',' + radius);

  //5. next point before last curve
  curvedBase.push('L' + radius + ',' + Math.floor(height - radius*2));

  //6. curve to the bottom left
  curvedBase.push('Q' + radius + ',' + Math.floor(height - radius*2) + ' 0,' + (height - radius) + ' Z'); 

  //M0,94 L390,94 L390,0 L2,90 L 1,90 Z
  //M0,94 L390,94 L390,5 Q390,0 386,1 L2,90 Q1,90 0,92

  return curvedBase.join(' ');
}

export default Ember.HTMLBars.makeBoundHelper(calcTopcard);
