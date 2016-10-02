(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.controller('ShoppingListToBuyShowController',ShoppingListToBuyShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}



ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
  showList.buyItem=function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }
}
ShoppingListToBuyShowController.$inject=['ShoppingListService'];
function ShoppingListToBuyShowController(ShoppingListService){
  var showList=this;
  showList.items=ShoppingListService.getToBuyItems();
  showList.removeItem=function(itemIndex){
  ShoppingListService.cancelBuy(itemIndex);
  }
}
function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [{name:"Waffels",quantity:5},{name:"Candies",quantity:11},{name:"Cookies with strawberries",quantity:15},{name:"Cookies",quantity:9},{name:"Milk of Birds",quantity:1+"kg"},{name:"Cola",quantity:1+"l"}];
  var toBuyItems = [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };
  service.addItemToBuy = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
service.removeItemFromBuyList=function(itemIndex){
    toBuyItems.splice(itemIndex,1);
}
//getters
  service.getItems = function () {
    return items;
  };
  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.buyItem=function(itemIndex){
    service.addItemToBuy(items[itemIndex].name,items[itemIndex].quantity);
    service.removeItem(itemIndex);
  }
  service.cancelBuy=function (itemIndex) {
    service.addItem(toBuyItems[itemIndex].name,toBuyItems[itemIndex].quantity);
    service.removeItemFromBuyList(itemIndex);
  }
}

})();
