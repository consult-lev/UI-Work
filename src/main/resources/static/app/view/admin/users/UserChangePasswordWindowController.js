Ext.define('APP.view.admin.users.UserChangePasswordWindowController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.UserChangePasswordWindowController',
	requires : [],
	setUserId : function(userId){
		this.userId = userId;
	},
	getForm : function() {
		return this.getView().down('form').getForm();
	},
	changePassword : function() {
		var t = this;
		var form = this.getForm();
		if (form.isValid()) {
			var data = form.getValues();
			if (data.newPassword1 != data.newPassword2) {
				Ext.Msg.alert('Ошибка', 'Пароли не совпадают');
				return;
			}
			data.id =this.userId; 
			Ext.MessageBox.confirm('Подтверждение', 'Вы действительно хотите изменить пароль?', function() {
				Ext.Ajax.request({
					url : '/admin/user/change_password',
					method : 'POST',
					headers : {
						'Content-Type' : 'application/json'
					},
					params : Ext.JSON.encode(data),
					success : function(response, opts) {
						Ext.Msg.alert('Успех', "Пароль успешно изменен");
						t.getView().close();
					},
					failure : function(response, opts) {
						var responseText = Ext.JSON.decode(response.responseText);
						Ext.Msg.alert('Ошибка', responseText.message);
					}
				});
			}, this);
		}
	}
});