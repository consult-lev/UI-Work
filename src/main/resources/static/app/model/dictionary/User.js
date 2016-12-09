Ext.define('APP.model.dictionary.User', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int',
	}, {
		name : 'name',
		type : 'string',
	}, {
		name : 'login',
		type : 'string',
	}, {
		name : 'isActive',
		type : 'boolean',
	}, {
		name : 'roles',
		type : 'auto',
	}, {
		name : 'hasRoles',
		type : 'auto',
	} ],
	proxy : {
		type : 'ajax',
		api : {
			read : 'need to update',
			update : '/admin/user/update',
			destroy : 'need to update',
		},
		reader : {
			type : 'json'
		},
		writer : {
			type : 'json',
			writeAllFields : true
		}
	}
});
