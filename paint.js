const Paint = function(paintVol){
  this.paintVol = paintVol;

}

Paint.prototype.isempty = function () {
  return this.paintVol == 0;
};


Paint.prototype.emptypaint = function () {
  return this.paintVol = 0;
};




module.exports = Paint;
