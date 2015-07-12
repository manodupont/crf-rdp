/**
 * Created by Mano on 28/06/15.
 */
angular.module('crfRdpApp')
    .factory('Equipiers', ['$resource', function ($resource) {
        return $resource('/equipiers/', null,
            {
                'update': {method: 'PUT'}
            });
    }]);
