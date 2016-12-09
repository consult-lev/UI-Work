Ext.define('APP.store.dictionary.UsersStore', {
	extend : 'Ext.data.Store',
	alias : 'store.UsersStore',
	model : 'APP.model.dictionary.User',
	proxy : {
		type : 'ajax',
		url : '/data/users.json',
		reader : {
			type : 'json',
		}
	},
	autoLoad : true
});
