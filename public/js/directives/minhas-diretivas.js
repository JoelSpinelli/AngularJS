angular.module('minhasDiretivas', []).directive('meuPainel', () => {
    var ddo = {};

    ddo.restrict = "AE";
    
    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
});