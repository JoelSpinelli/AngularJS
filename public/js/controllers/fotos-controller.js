angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('/v1/fotos')
    .success( fotos => $scope.fotos = fotos )
    .error(erro => console.log(erro));

    $scope.remover = (foto) => {
        $http.delete('v1/fotos/' + foto._id)
        .success( () => {
            let indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        })
        .error( () => $scope.mensagem ='Não foi possível remover a foto ' + foto.titulo);
    };
});