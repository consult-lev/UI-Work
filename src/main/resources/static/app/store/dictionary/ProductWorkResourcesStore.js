Ext.define('APP.store.dictionary.ProductWorkResourcesStore', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductWorkResourcesStore',
	fields : [ 'id', 'name', 'active', 'imageUrl' ],
	proxy : {
		type : 'ajax',
		url : ROOT_URL + '/admin/productWorkResource/list',
		reader : {
			type : 'json',
		}
	},
	autoLoad : true
});
