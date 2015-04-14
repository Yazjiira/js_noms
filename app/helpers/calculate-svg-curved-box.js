import Ember from 'ember';

export function calculateSvgCurvedBox(params, hash) {
  var radius = hash.radius,
      width = hash.width,
      height = hash.height,
      curvedBase = [];

  //1. first point - bottom left
  curvedBase.push('M0,' + height);

  //2. next point - bottom right
  curvedBase.push('L' + height + ',' + width);

  //3. next point for  

  //M0,94 L390,94 L390,0 L2,90 L 1,90 Z
  //M0,94 L390,94 L390,5 Q390,0 386,1 L2,90 Q1,90 0,92

  return "M0,94 L390,94 L390,0 L0,94";
}

export default Ember.HTMLBars.makeBoundHelper(calculateSvgCurvedBox);
