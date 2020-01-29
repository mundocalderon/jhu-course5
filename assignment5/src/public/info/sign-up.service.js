(function (){ 
'use strict';

	angular.module('public')
	.service('SignUpService', SignUpService);

	SignUpService.$inject = ['$http', 'ApiPath'];
	function SignUpService($http, ApiPath) {
		var service = this;

		var userInfo;

		service.setUserInfo = function(object){
			userInfo = object;
		}

		service.getUserInfo = function(){
			return userInfo;
		}

		service.validateFav = function (short_name) {
	    return $http.get(ApiPath + '/menu_items/' + short_name.toUpperCase() + '.json').then(function (response) {
	      return response.data;
			});
		};

	}

})();