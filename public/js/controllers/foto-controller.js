angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
    $scope.foto = {};
    $scope.mensagem = '';
    if( $routeParams.fotoId ) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(foto => $scope.foto = foto)
            .error( erro => {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            });
    }

    $scope.submeter = () => {
        if($scope.formulario.$valid){
            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success( () => $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso' )
                    .error( (erro) => {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                    })
            }else{
                $http.post('v1/fotos', $scope.foto)
                .success(() => {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                })
                .error(erro => $scope.mensagem = "Não foi possível incluir a foto");
            }
        }
    }
});