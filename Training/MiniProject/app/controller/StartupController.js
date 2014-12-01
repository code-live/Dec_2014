Ext.define('MiniProject.controller.StartupController', {
    extend: 'Ext.app.Controller',
	alternateClassName : "StartupController",
    config: {
        refs: {
            "mainView" : "#main",
			"noInternetView" : "#nointernetview"
        },
        control: {
            
        }
    },
	statics : {
		self : null 
	},	
	init : function(){
		this.statics().self = this;
		this.initializeStartupScreen();
		setTimeout(this.monitorInternetStatus(),10000);
	},
	initializeStartupScreen : function(){
		if(!navigator.onLine){
			Ext.Viewport.setActiveItem({
					xtype : "nointernetview",
					id : "nointernetview"
			});
		}
		else{
			Ext.Viewport.setActiveItem({
					xtype : "main",
					id : "main"
			});
		}
			
	},
	monitorInternetStatus : function(){
		window.setInterval(this.performInternetCheck,10000);
	},
	performInternetCheck : function(){
		var ref = StartupController.self;
		if(navigator.onLine){
			if(ref.getMainView())
				Ext.Viewport.setActiveItem(ref.getMainView());
			else
				Ext.Viewport.setActiveItem({
						xtype : "main",
						id : "main"
				});
		}
		else{
			if(ref.getNoInternetView())
				Ext.Viewport.setActiveItem(ref.getNoInternetView());
			else
				Ext.Viewport.setActiveItem({
						xtype : "nointernetview",
						id : "nointernetview"
				});
		}
	}
	
});
