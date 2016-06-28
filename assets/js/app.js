angular.module('NCSS',['ui.router','controllers','services'])
.config(function ($stateProvider,$urlRouterProvider){

	$stateProvider 
	.state('main',{

		url:'/main',
		abstract:true,
		templateUrl: 'templates/main.html'
	})
	.state('main.home',{
		url:'/main',
		views: {
			'main':{
				templateUrl: 'templates/main.html',
				controller:'homeCtrl'
			}
		}
		
	});
	$urlRouterProvider.otherwise('/main/home');
})