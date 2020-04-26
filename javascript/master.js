// [AIV_SHORT]  Build version: 0.0.27 - Sunday, April 26th, 2020, 3:17:13 PM  
 !function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){function r(t,e){void 0===e&&(e=[]);var r="";for(var n in e)r+=","+n;r=r.substring(1),console.log(t+"("+r+")")}new(function(){function t(t,e,n){r("Minesweeper Constructor",[t,e,n]),this.rows=t,this.cols=e,this.mines=n,this.field=[],this.game_wrapper=document.getElementById("game");for(var o,i,s=0,l=0,u=this.mines;l<this.rows;){for(;s<this.cols;){var c=!1;u>0&&(this.randomBool(33)||this.rows*this.cols-(l*this.rows+s)===u)&&(o="Test Mine",console.log(o),c=!0,u--),this.field.push({x:s,y:l,mine:c,searched:!1});var a=document.createElement("div");a.classList.add("block"),a.setAttribute("data-x",s.toString()),a.setAttribute("data-y",l.toString()),this.game_wrapper.appendChild(a),s++}s=0,l++}i=this.field,console.log(i),this.setupEventHandlers()}return t.prototype.randomBool=function(t){return!!(100*Math.random()<=t)},t.prototype.setupEventHandlers=function(){for(var t=this,e=document.querySelectorAll(".block"),r=0;r<e.length;)e[r].addEventListener("click",(function(e){t.clickedBlock(e)})),r++},t.prototype.clickedBlock=function(t){r("clickedBlock",[t]);t.target;var e=this.getTileId(parseInt(t.target.getAttribute("data-x")),parseInt(t.target.getAttribute("data-y")));this.selectedTile=this.field[e],this.searchSurroundingTiles(this.selectedTile)},t.prototype.getTileId=function(t,e){return e*this.rows+t},t.prototype.searchSurroundingTiles=function(t){r("searchSurroundingTiles",[t])},t}())(10,10,30)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHlwZXNjcmlwdC9tYXN0ZXIudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJmIiwiZnVuY3Rpb25fbmFtZSIsInBhcmFtcyIsInBhcmFtX2xpc3QiLCJwYXJhbSIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJNaW5lc3dlZXBlciIsInJvd3MiLCJjb2xzIiwibWluZXMiLCJ0aGlzIiwiZmllbGQiLCJnYW1lX3dyYXBwZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVzc2FnZSIsInZhcmlhYmxlIiwieCIsInkiLCJtaW5lc19sZWZ0IiwibWluZSIsInJhbmRvbUJvb2wiLCJwdXNoIiwic2VhcmNoZWQiLCJibG9jayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwic2V0dXBFdmVudEhhbmRsZXJzIiwiY2hhbmNlIiwiTWF0aCIsInJhbmRvbSIsIl90aGlzIiwiYmxvY2tzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsaWNrZWRCbG9jayIsInRhcmdldCIsImlkIiwiZ2V0VGlsZUlkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RlZFRpbGUiLCJzZWFyY2hTdXJyb3VuZGluZ1RpbGVzIiwidGlsZSJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxF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LEdBQzNDLE9BQVFBLEVBQUlSLEtBQUtILEtBQVFVLEdBRTdCWCxFQUFZWixVQUFVc0QsdUJBQXlCLFNBQVVDLEdBQ3JEbkQsRUFBRSx5QkFBMEIsQ0FBQ21ELEtBWTFCM0MsRUF2RXFCLEdBMEZyQixDQUFnQixHQUFJLEdBQUkiLCJmaWxlIjoibWFzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gQ29tcGlsZSBTZXR0aW5nc1xyXG52YXIgZGVidWcgPSB0cnVlO1xyXG4vLyAtLS0tLS0tLS0tLS0tLSBHQU1FIENMQVNTIC0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG52YXIgTWluZXN3ZWVwZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNaW5lc3dlZXBlcihyb3dzLCBjb2xzLCBtaW5lcykge1xyXG4gICAgICAgIGYoXCJNaW5lc3dlZXBlciBDb25zdHJ1Y3RvclwiLCBbcm93cywgY29scywgbWluZXNdKTtcclxuICAgICAgICB0aGlzLnJvd3MgPSByb3dzO1xyXG4gICAgICAgIHRoaXMuY29scyA9IGNvbHM7XHJcbiAgICAgICAgdGhpcy5taW5lcyA9IG1pbmVzO1xyXG4gICAgICAgIHRoaXMuZmllbGQgPSBbXTtcclxuICAgICAgICB0aGlzLmdhbWVfd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKTtcclxuICAgICAgICB2YXIgeCA9IDA7XHJcbiAgICAgICAgdmFyIHkgPSAwO1xyXG4gICAgICAgIHZhciBtaW5lc19sZWZ0ID0gdGhpcy5taW5lcztcclxuICAgICAgICAvLyBCdWlsZCBHcmlkLi5cclxuICAgICAgICB3aGlsZSAoeSA8IHRoaXMucm93cykge1xyXG4gICAgICAgICAgICB3aGlsZSAoeCA8IHRoaXMuY29scykge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRmluaXNoIHRoaXMgaWYuLlxyXG4gICAgICAgICAgICAgICAgdmFyIG1pbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChtaW5lc19sZWZ0ID4gMCAmJiAodGhpcy5yYW5kb21Cb29sKDMzKSB8fCAoKHRoaXMucm93cyAqIHRoaXMuY29scykgLSAoKHkgKiB0aGlzLnJvd3MpICsgeCkpID09PSBtaW5lc19sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG0oXCJUZXN0IE1pbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluZXNfbGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZC5wdXNoKHsgeDogeCwgeTogeSwgbWluZTogbWluZSwgc2VhcmNoZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJibG9ja1wiKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgeC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgeS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV93cmFwcGVyLmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgICAgICAgICAgICAgIHgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4ID0gMDtcclxuICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2KHRoaXMuZmllbGQpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKCk7XHJcbiAgICB9XHJcbiAgICBNaW5lc3dlZXBlci5wcm90b3R5cGUucmFuZG9tQm9vbCA9IGZ1bmN0aW9uIChjaGFuY2UpIHtcclxuICAgICAgICB2YXIgciA9ICEhKChNYXRoLnJhbmRvbSgpICogMTAwKSA8PSBjaGFuY2UpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfTtcclxuICAgIE1pbmVzd2VlcGVyLnByb3RvdHlwZS5zZXR1cEV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrJyk7XHJcbiAgICAgICAgdmFyIGMgPSAwO1xyXG4gICAgICAgIHdoaWxlIChjIDwgYmxvY2tzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBibG9ja3NbY10uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHsgX3RoaXMuY2xpY2tlZEJsb2NrKGV2ZW50KTsgfSk7XHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTWluZXN3ZWVwZXIucHJvdG90eXBlLmNsaWNrZWRCbG9jayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGYoXCJjbGlja2VkQmxvY2tcIiwgW2V2ZW50XSk7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzLmdldFRpbGVJZChwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSksIHBhcnNlSW50KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpKSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRpbGUgPSB0aGlzLmZpZWxkW2lkXTtcclxuICAgICAgICB0aGlzLnNlYXJjaFN1cnJvdW5kaW5nVGlsZXModGhpcy5zZWxlY3RlZFRpbGUpO1xyXG4gICAgfTtcclxuICAgIE1pbmVzd2VlcGVyLnByb3RvdHlwZS5nZXRUaWxlSWQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiAoeSAqIHRoaXMucm93cykgKyB4O1xyXG4gICAgfTtcclxuICAgIE1pbmVzd2VlcGVyLnByb3RvdHlwZS5zZWFyY2hTdXJyb3VuZGluZ1RpbGVzID0gZnVuY3Rpb24gKHRpbGUpIHtcclxuICAgICAgICBmKFwic2VhcmNoU3Vycm91bmRpbmdUaWxlc1wiLCBbdGlsZV0pO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgLy8gdG9wIGxlZnRcclxuICAgICAgICAvL3RvcFxyXG4gICAgICAgIC8vIHRvcCByaWdodFxyXG4gICAgICAgIC8vIHJpZ2h0XHJcbiAgICAgICAgLy8gYm90dG9tIHJpZ2h0XHJcbiAgICAgICAgLy8gYm90dG9tXHJcbiAgICAgICAgLy8gYm90dG9tIGxlZnRcclxuICAgICAgICAvLyBsZWZ0XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWluZXN3ZWVwZXI7XHJcbn0oKSk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tIERFQlVHIEZVTkNUSU9OUyAtLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuZnVuY3Rpb24gZihmdW5jdGlvbl9uYW1lLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSBbXTsgfVxyXG4gICAgdmFyIHBhcmFtX2xpc3QgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgcGFyYW1fbGlzdCArPSBcIixcIiArIHBhcmFtO1xyXG4gICAgfVxyXG4gICAgcGFyYW1fbGlzdCA9IHBhcmFtX2xpc3Quc3Vic3RyaW5nKDEpO1xyXG4gICAgY29uc29sZS5sb2coZnVuY3Rpb25fbmFtZSArIFwiKFwiICsgcGFyYW1fbGlzdCArIFwiKVwiKTtcclxufVxyXG5mdW5jdGlvbiBtKG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIHYodmFyaWFibGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhcmlhYmxlKTtcclxufVxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5ldyBNaW5lc3dlZXBlcigxMCwgMTAsIDMwKTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== 