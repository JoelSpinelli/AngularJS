angular.module('minhasDiretivas', []).directive('meuPainel', () => {
    var ddo = {};

    ddo.restrict = "AE";
    
    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('minhaFoto', () => {
    var ddo = {};

    ddo.restrict = "AE";
    
    ddo.scope = {
        url: '@',
        titulo: '@'
    };

    ddo.transclude = true;
    
    ddo.templateUrl = 'js/directives/minha-foto.html';

    return ddo;
})
.directive('meuBotaoPerigo', () => {
    var ddo = {};
    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&' //usar para passar uma expressão
    }
    
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>'

    return ddo;
})