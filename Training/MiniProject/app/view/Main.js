Ext.define('MiniProject.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
    ],
    config: {
		tabBarPosition : "bottom",
		items : [
			{
				title : "Home",
				xtype : "home",
				iconCls : "home",
				id : "home"
			},
			{
				title : "Beginner",
				xtype : "beginner",
				id : "beginner"
			},
			{
				title : "Advanced",
				xtype : "advanced",
				id : "advanced"
			}
		]
    }
});
