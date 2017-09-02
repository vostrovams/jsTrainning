/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('pays', [])
        .controller('PaysController', function  paysController() {
            this.country = {};
            this.index = {};

            // var Pays = {};
            this.countries = [{name: 'RDC', capital: 'KINSHASA'},
                {name: 'ANGOLA', capital: 'LUANDA'},
                {name: 'FRANCE', capital: 'PARIS'},
                {name: 'BELGIQUE', capital: 'BRUXELLES'}];


            this.deleteItem = function deleteItem(index) {

                this.countries.splice(index, 1);

            };

            //fonction pour enregistrer le nouveau pays

            this.enregistrer = function(pays) {

                this.country = angular.copy(pays);
                this.countries.push(pays);

            };

            //fonction pour recuperer l'item à modifier
            this.getItem = function(ind, pays) {

                this.country = angular.copy(pays);
                this.index = angular.copy(ind);


            };
            //fonction pour modifier l'item selectionner
            this.modifier = function(index, country) {
//this.country = angular.copy(country);
                this.countries.splice(index, 1, country);
            };





        });

