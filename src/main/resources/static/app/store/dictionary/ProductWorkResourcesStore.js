Ext.define('APP.store.dictionary.ProductWorkResourcesStore', {
	extend : 'Ext.data.Store',
	alias : 'store.ProductWorkResourcesStore',
	fields : [ 'id', 'name', 'active', 'imageUrl' ],
	proxy : {
		type : 'ajax',
		url : '/data/resources.json',
		reader : {
			type : 'json',
		}
	},
	autoLoad : true
});
