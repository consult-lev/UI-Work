Ext.define('APP.view.admin.users.UserInfoWindow', {
	extend : 'Ext.window.Window',
	controller : 'UserInfoWindowController',
	requires : [ 'APP.view.admin.users.UserInfoWindowController' ],
	title : 'Информаця о пользователе',
	height : 350,
	width : 400,
	modal : true,
	resizable : false,
	layout : 'fit',

	items : [ {
		xtype : 'form',
		padding : '5 5 0 5',
		border : false,
		style : 'background-color: #fff;',

		items : [ {
			xtype : 'fieldset',
			title : 'Общее',
			defaultType : 'textfield',
			defaults : {
				anchor : '100%'
			},
			items : [ {
				allowBlank : false,
				fieldLabel : 'Имя',
				name : 'name',
				emptyText : 'Имя'
			}, {
				allowBlank : false,
				fieldLabel : 'Логин',
				name : 'login',
				emptyText : 'Логин'
			}, {
				xtype : 'checkboxfield',
				fieldLabel : 'Активен',
				name : 'isActive',
				inputValue : true,
				uncheckedValue : false
			} ]
		}, {
			xtype : 'fieldset',
			layout : 'hbox',
			title : 'Роли',
			defaultType : 'container',
			defaults : {
				anchor : '100%',
				flex : 1,
			},
			items : [ {
				defaultType : 'checkboxfield',
				defaults : {
					anchor : '100%'
				},
				items : [ {
					fieldLabel : 'Администратор',
					name : 'hasRoles_admin',
					inputValue : true,
					uncheckedValue : false
				}, {
					fieldLabel : 'Снабжение',
					name : 'hasRoles_supplier',
					inputValue : true,
					uncheckedValue : false
				}, {
					fieldLabel : 'Диспетчер',
					name : 'hasRoles_dispatcher',
					inputValue : true,
					uncheckedValue : false
				}, {
					fieldLabel : 'ОТК',
					name : 'hasRoles_otk',
					inputValue : true,
					uncheckedValue : false
				} ],
			}, {
				defaultType : 'checkboxfield',
				defaults : {
					anchor : '100%'
				},
				items : [ {
					fieldLabel : 'Менеджер',
					name : 'hasRoles_saleMgr',
					inputValue : true,
					uncheckedValue : false
				}, {
					fieldLabel : 'Проектировщик',
					name : 'hasRoles_design',
					inputValue : true,
					uncheckedValue : false
				}, {
					fieldLabel : 'Бухгалтер',
					name : 'hasRoles_accounting',
					inputValue : true,
					uncheckedValue : false
				} ],
			} ]
		} ]
	} ],
	initComponent : function() {
		this.buttons = [ {
			text : 'Сменить пароль',
			handler : 'changePassword'
		}, {
			text : 'Сохранить',
			handler : 'save'
		}, {
			text : 'Закрыть',
			scope : this,
			handler : this.close
		} ];

		this.callParent(arguments);
	}
});
