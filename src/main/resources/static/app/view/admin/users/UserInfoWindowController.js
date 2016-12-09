Ext.define('APP.view.admin.users.UserInfoWindowController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.UserInfoWindowController',
	requires : [ 'APP.view.admin.users.UserChangePasswordWindow' ],
	loadRecord : function(record) {
		this.getForm().loadRecord(record);
		this.getForm().findField('hasRoles_admin').setValue(record.data.hasRoles.admin);
		this.getForm().findField('hasRoles_supplier').setValue(record.data.hasRoles.supplier);
		this.getForm().findField('hasRoles_dispatcher').setValue(record.data.hasRoles.dispatcher);
		this.getForm().findField('hasRoles_otk').setValue(record.data.hasRoles.otk);
		this.getForm().findField('hasRoles_saleMgr').setValue(record.data.hasRoles.saleMgr);
		this.getForm().findField('hasRoles_design').setValue(record.data.hasRoles.design);
		this.getForm().findField('hasRoles_accounting').setValue(record.data.hasRoles.accounting);
	},
	getForm : function() {
		return this.getView().down('form').getForm();
	},
	changePassword : function() {
		var changePasswordWindow = Ext.create('APP.view.admin.users.UserChangePasswordWindow').show();
		changePasswordWindow.getController().setUserId(this.getForm().getRecord().id);
	},
	save : function() {
		var t = this;
		var form = this.getForm();
		if (form.isValid()) {
			Ext.MessageBox.confirm('Подтверждение', 'Вы действительно хотите сохранить изменения?', function() {
				var data = form.getValues();
				var record = form.getRecord();
				if (record == null) {
					record = Ext.create('APP.model.dictionary.User', {
						id : -1
					});
				}
				form.updateRecord(record);
				record.data.hasRoles.admin = data.hasRoles_admin;
				record.data.hasRoles.supplier = data.hasRoles_supplier;
				record.data.hasRoles.dispatcher = data.hasRoles_dispatcher;
				record.data.hasRoles.otk = data.hasRoles_otk;
				record.data.hasRoles.saleMgr = data.hasRoles_saleMgr;
				record.data.hasRoles.design = data.hasRoles_design;
				record.data.hasRoles.accounting = data.hasRoles_accounting;
				record.save({
					success : function(data) {
						if (t.onSuccess != null) {
							t.onSuccess();
						}
						Ext.Msg.alert('Успех', "Изменения успешно созранены");
						t.getView().close();
					},
					failure : function(data, request) {
						var responseText = Ext.JSON.decode(request.error.response.responseText);
						Ext.Msg.alert('Ошибка', responseText.message);
					}
				});
			}, this);
		}
	}
});