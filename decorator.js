const Decorator = function(){
  this.paintStock = [];
};


Decorator.prototype.countPaint = function () {
   return this.paintStock.length;
};

Decorator.prototype.addcan = function (paint) {
  return this.paintStock.push(paint)
};

Decorator.prototype.paintTotalVol = function () {
  total = 0
  for (paint of this.paintStock){
    total += paint.paintVol
  }
  return total
};

Decorator.prototype.enoughPaint = function (room) {
 return this.paintTotalVol() >= room.area
};

Decorator.prototype.paintRoom = function (room)
  if (this.enoughPaint(room)){
   return room.painted = true;
 };

module.exports = Decorator;
