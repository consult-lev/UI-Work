Ext.define('APP.view.admin.orders.OrderGridController', {
	extend : 'Ext.app.ViewController',
	requires : [],
	alias : 'controller.OrderGridController',

    /**
     * Клик по информационной иконке на против строки главной таблицы
     * @param gridView
     * @param rowIndex
     * @param colIndex
     * @param item
     * @param event
     * @param record    запись строки, по которой кликнули
     */
    onInfo : function(gridView, rowIndex, colIndex, item, event, record) {
        console.log(record);
		console.log("TODO something. Main Order");
	},

    /**
     * Клик по информационной иконке на против строки вложенной таблицы
     * @param gridView
     * @param rowIndex
     * @param colIndex
     * @param item
     * @param event
     * @param record    запись строки, по которой кликнули
     */
    onInfoBySubOrder: function(gridView, rowIndex, colIndex, item, event, record) {
        console.log(record);
        console.log("TODO something. SubOrder");
    },
});