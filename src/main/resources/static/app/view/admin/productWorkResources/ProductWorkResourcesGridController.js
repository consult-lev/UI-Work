Ext.define('APP.view.admin.productWorkResources.ProductWorkResourcesGridController', {
	extend : 'Ext.app.ViewController',
	requires : [],
	alias : 'controller.ProductWorkResourcesGridController',
	onInfo : function(grid, rowIndex, colIndex) {
		var rec = grid.getStore().getAt(rowIndex);
	},
	onRefresh : function() {
		this.getView().getStore().load();
	},
});