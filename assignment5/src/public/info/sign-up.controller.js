(function (){ 
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
	var signUp = this;
	signUp.user = SignUpService.getUserInfo();

	signUp.submit = function (){
		var promise = SignUpService.validateFav(signUp.user.fav);
		console.log(promise);

		promise.then(function(response){
			signUp.completed = true;
			console.log("in the promise then", response);
			signUp.user.fav = response;
			SignUpService.setUserInfo(signUp.user);
			

		}).catch(function(error){
			console.log("in the promise catch", error);
			signUp.notValidFav = true;
		});

	}
}

})();