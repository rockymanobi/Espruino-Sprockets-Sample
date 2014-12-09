App = App || {};
// パーツです
App.Part = (function{

  var Part = function(){
  };
  Part.prototype = {
    sayHoge: function doSome(){
      console.log("hoge");
    },
  };

})();


// Mainの処理
App = App || {};
function onInit(){
  var part = new App.Part();
  part.sayHoge();
};
