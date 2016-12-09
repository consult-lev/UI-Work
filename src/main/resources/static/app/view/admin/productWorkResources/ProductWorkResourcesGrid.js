Ext.define('APP.view.admin.productWorkResources.ProductWorkResourcesGrid', {
	extend : 'Ext.grid.Panel',
	requires : [ 'Ext.grid.Panel', 'APP.view.admin.productWorkResources.ProductWorkResourcesGridController', 'APP.store.dictionary.ProductWorkResourcesStore' ],
	width : "*",
	height : 300,
	title : 'Станки',
	controller : 'ProductWorkResourcesGridController',
	plugins : 'gridfilters',
	store : {
		type : 'ProductWorkResourcesStore'
	},
	tools : [ {
		type : 'refresh',
		tooltip : 'Обновить',
		handler : 'onRefresh'
	}, {
		type : 'plus',
		handler : 'onAddResource',
		tooltip : 'Добавить станок',
	} ],
	columns : [ {
		xtype : 'rownumberer'
	}, {
		text : 'Название',
		flex : 1,
		width : "60%",
		hideable : false,
		dataIndex : 'name',
		filter : {
			type : 'string',
		}
	}, {
		xtype : 'actioncolumn',
		width : 25,
		hideable : false,
		sortable : false,
		items : [ {
			icon : 'resources/icons/information.png',
			tooltip : 'Информация',
			handler : 'onInfo',
		} ]
	} ],
});