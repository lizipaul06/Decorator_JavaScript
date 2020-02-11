const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');


describe('Room', function() {
   beforeEach(function(){
     room = new Room(30);
   });

   it('should have an area', function(){
     const actual = room.area;
     const expected = 30;
     assert.strictEqual(actual, expected);
   });

   it('should start not painted', function(){
     const actual = room.painted;
     const expected = false;
     assert.strictEqual(actual,expected);
   });

   it('should paint that room', function(){
     room.painted_room();
     const actual = room.painted
     const expected = true;
     assert.strictEqual(actual, expected);
   });

   describe('Paint', function(){
     beforeEach(function(){
       paint = new Paint(20);
     });

     it('should have a volume', function(){
       const actual = paint.paintVol;
       const expected = 20;
       assert.strictEqual(actual, expected);
     });
     it('should check if volume if empty', function(){

       const actual = paint.isempty();
       const expected = false;
       assert.strictEqual(actual, expected);

     });

     it('should set volume to empty', function(){
       paint.emptypaint();
       const actual = paint.paintVol;
       const expected = 0;
       assert.strictEqual(actual, expected);

     });
     describe('Decorator', function(){
       beforeEach(function(){
         decorator = new Decorator();
       });

       it('should have no cans of paint', function(){
         const actual = decorator.countPaint();
         const expected = 0;
         assert.strictEqual(actual, expected);

       });

       it('should be able to add a can of paint', function(){
         decorator.addcan(paint)
         const actual = decorator.countPaint();
         const expected = 1;
         assert.strictEqual(actual, expected);

       });

       it('should be able to calculate paint volume', function(){
         decorator.addcan(paint)
         decorator.addcan(paint)
         const actual = decorator.paintTotalVol();
         const expected = 40;
         assert.strictEqual(actual, expected);

       });

       it('should be able to check if can paint room', function(){
         decorator.addcan(paint)
         const actual = decorator.enoughPaint(room);
         const expected = false;
         assert.strictEqual(actual, expected);

       });

       it('should be able to paint room', function(){
         decorator.paintRoom(room)
         const actual = room.painted
         const expected = true;
         assert.strictEqual(actual, expected);

       });

     });

   });

});
