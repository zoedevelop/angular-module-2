(
    function () {
        'use strict';

        let lista1 =[{
            cantidad: 5,
            nombre: "jugos"
        },
        {
            cantidad: 2,
            nombre: "manzanas"
        },
        {
            cantidad: 15,
            nombre: "cervezas"
        },
        {
            cantidad: 20,
            nombre: "galletas"
        },
        {
            cantidad: 200,
            nombre: "cigarillos"
        }
] 

        angular.module('marketApp',[])
        .controller('listComprar',listComprar)
        .controller('listComprado', listComprado);


        listComprar.$inject = ['$scope']

        function listComprar($scope){
            $scope.comprar = lista1;
            $scope.msj = function () {
                if($scope.comprar.length == 0){
                    $scope.have = "Todo Esta Comprado";
                }else{
                    $scope.have = "Continue Comprando";
                }  
                return have;   
            };
          
        }
        function listComprado(){
            
        }

    }
)()