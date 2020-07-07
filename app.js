(function () {
    'use strict'

    var shoppingListModule = angular.module('market', []);

    shoppingListModule.controller('compras', compras)
    shoppingListModule.controller('carga', carga)
    shoppingListModule.service('comprado', comprado)

    function comprado() {
        var comprado = this;

        comprado.compras = [
            { name: 'beer', quantity: 12 },
            { name: 'cookies', quantity: 40 },
            { name: 'Oranges', quantity: 1 },
            { name: 'meat', quantity: 5 },
            { name: 'milk', quantity: 2 },
        ];

        comprado.boughtList = [];

        comprado.getcompras = function () {
            return comprado.compras;
        }

        comprado.getBoughtList = function () {
            return comprado.boughtList;
        }

        comprado.markAsBought = function (index) {
            comprado.boughtList.push(comprado.compras[index]);
            comprado.compras.splice(index, 1);
        }
    }

    compras.$inject = ['comprado'];
    function compras(comprado) {
        var showcompras = this;
        showcompras.items = comprado.getcompras();

        showcompras.markAsBought = function (itemIndex) {
            comprado.markAsBought(itemIndex);
        };
    }

    carga.$inject = ['comprado'];
    function carga(comprado) {
        var alreadyBoughtList = this;
        alreadyBoughtList.items = comprado.getBoughtList();
    }
})();