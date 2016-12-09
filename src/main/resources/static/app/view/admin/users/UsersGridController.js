Ext.define('APP.view.admin.users.UsersGridController', {
	extend : 'Ext.app.ViewController',
	requires : [ 'APP.view.admin.users.UserInfoWindow' ],
	alias : 'controller.UsersGridController',
	onInfo : function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
		var info = Ext.create('APP.view.admin.users.UserInfoWindow').show();
		info.getController().loadRecord(rec);
		info.getController().onSuccess = function() {
			grid.getStore().load();
		}
	},
	onRefresh : function() {
		this.getView().getStore().load();
	},
	onAddUser : function() {
		var grid = this.getView();
		var create = Ext.create('APP.view.admin.users.UserInfoWindow').show();
		create.getController().onSuccess = function() {
			grid.getStore().load();
		}
	}
});