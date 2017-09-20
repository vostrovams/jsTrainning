angular.module('pays', [])
    .controller('PaysController', ['$http', function ($http) {
        var vm = this;
        this.index;
        this.mesg = "";
        var pays = {};
     
        this.load = function () {
            $http.get('/countries').then(function (response) {
                    console.log(response.data);
                    vm.countries = response.data;
                    });}
              this.load();
        this.ajouter = function (newCountry) {
            this.pays = angular.copy(newCountry)
            console.log(pays);
            $http.post('/countries', JSON.stringify(newCountry)).then(function (response) {
                    console.log(response.data);
                    vm.countries = response.data;
                    if (response.data) {
                        vm.mesg = "insertion reussi avec succès";
                    }
                    else {
                        vm.mesg = "echec de l'ajout du nouvel enregistrement";
                    }
                });
        }

        this.init = function () {
            vm.mesg = "";
            vm.pays = {}
            vm.index = {}
        }
      
        this.getItem = function (ind, pays) {
            this.pays = angular.copy(pays);
            this.index = angular.copy(ind);
        }

         this.modifier = function (index, country) {
            $http.put('/countries/' + index, JSON.stringify(country)).then(function (response) {
                    console.log(response.data);
                    vm.countries = response.data;

                    if (response.data) {
                        vm.mesg = "modification  reussi avec succès";
                    }
                    else {
                        vm.mesg = "echec de la modification de l'enregistrement";
                    }});  }
       
        this.deleteItem = function (index) {
            $http.delete('/countries/' + index).then(function (response) {
                    console.log(response.data);
                    vm.countries = response.data;
                    vm.pays = {}
                    vm.index = {}
                    if (response.data) {
                        vm.mesg = "suppression  reussi avec succès";
                    }                    else {
                        vm.mesg = "echec de la suppression de l'enregistrement";
                    }  });
        }}]);

