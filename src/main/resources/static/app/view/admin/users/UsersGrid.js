Ext.define('APP.view.admin.users.UsersGrid', {
	extend : 'Ext.grid.Panel',
	requires : [ 'Ext.grid.Panel', 'APP.store.dictionary.UsersStore', 'APP.view.admin.users.UsersGridController' ],
	controller : 'UsersGridController',
	width : "*",
	height : 400,
	title : 'Пользователи',
	plugins : 'gridfilters',
	store : {
		type : 'UsersStore'
	},
	tools : [ {
		type : 'refresh',
		tooltip : 'Обновить',
		handler : 'onRefresh'
	}, {
		type : 'plus',
		handler : 'onAddUser',
		tooltip : 'Добавить пользователя',
	} ],
	viewConfig : {
		enableTextSelection : true
	},

	columns : [ {
		xtype : 'rownumberer'
	}, {
		text : 'Имя',
		flex : 1,
		width : "*",
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
			handler : 'onInfo'
		} ]
	}, {
		text : 'Логин',
		width : 100,
		dataIndex : 'login'

	}, {
		text : 'Роли',
		width : 150,
		dataIndex : 'roles'

	} ],

});