Ext.define("MiniProject.view.NoInternetView",{
	extend : "Ext.Panel",
	xtype  : "nointernetview",
	config : {
		items:[
			{
				xtype : "titlebar",
				title : "Welcome",
				height : "5%"
			},
			{
				xtype : "label",
				centered : true,
				html : "You are not connected to the internet.<br/>Please call us at <a href='tel:9847429583'>98435435324</a>"
			}
		]
	}
});