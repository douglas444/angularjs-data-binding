(function () {

    angular.module('app', []);

    angular.module('app').controller('mainController', function($scope){

        $scope.form = [
            {
                id: 0,
                type: 0,//open question
                content: {
                    text: "What is your opinion about the operation of the software?"
                }
            },

            {
                id: 1,
                type: 1,//multiple choice question
                content: {
                    text: "Select the language you work with",
                    items: ["Java", "JavaScript", "Python"]
                }
            },

            {
                id: 2,
                type: 2,//evaluation of items
                content: {
                    text: "Evaluate the items below:",
                    items: ["Item A", "Item B", "Item C"]
                }
            }
        ];

        $scope.answers = [];

        $scope.sendForm = function () {
            console.log($scope.answers);
        }

    });

})();
