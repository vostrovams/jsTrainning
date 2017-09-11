angular.module('pays', [])
        .controller('PaysController', function  paysController() {
			var vm=this;
            vm.country = {};
            vm.index;

            vm.countries = [{name: 'RDC', capital: 'KINSHASA'},
                {name: 'ANGOLA', capital: 'LUANDA'},
                {name: 'FRANCE', capital: 'PARIS'},
                {name: 'BELGIQUE', capital: 'BRUXELLES'}];


            vm.deleteItem = function deleteItem(index) {
                vm.countries.splice(index, 1);
            };
            vm.enregistrer = function(pays) {
                vm.countries.push(pays);
            };
            vm.getItem = function(ind, pays) {
                vm.country = angular.copy(pays);
                vm.index = angular.copy(ind);
            };
            vm.modifier = function(index, pay) {
                vm.countries.splice(index, 1, pay);
            };
        });

