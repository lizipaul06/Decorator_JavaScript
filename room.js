const Room = function(area, painted = false){
this.area = area;
this.painted = painted;
};

Room.prototype.painted_room = function () {
  return this.painted = true;
};




module.exports = Room;
