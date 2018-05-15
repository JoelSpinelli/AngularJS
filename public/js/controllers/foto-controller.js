angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = () => {
        if($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
            .success(() => {
                $scope.foto = {};
                $scope.mensagem = 'Foto cadastrada com sucesso';
            })
            .error(erro => $scope.mensagem = "Não foi possível incluir a foto");
        }
    }
});