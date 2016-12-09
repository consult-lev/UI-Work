Ext.define('APP.view.admin.users.UserChangePasswordWindow', {
	extend : 'Ext.window.Window',
	controller : 'UserChangePasswordWindowController',
	requires : [ 'APP.view.admin.users.UserChangePasswordWindowController' ],
	title : 'Изменить пароль',
	height : 190,
	width : 300,
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
			title : 'Пароль',
			defaultType : 'textfield',
			items : [ {
				allowBlank : false,
				fieldLabel : 'Новый пароль',
				name : 'newPassword1',
				inputType : 'password'
			}, {
				allowBlank : false,
				fieldLabel : 'Новый пароль',
				name : 'newPassword2',
				inputType : 'password'
			} ]
		} ]
	} ],
	initComponent : function() {
		this.buttons = [ {
			text : 'Изменить',
			handler : 'changePassword'
		}, {
			text : 'Закрыть',
			scope : this,
			handler : this.close
		} ];
		this.callParent(arguments);
	}
});
