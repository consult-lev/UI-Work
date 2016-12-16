Ext.define('APP.model.dictionary.Order', {
    extend : 'Ext.data.Model',
    entityName: 'Order',
    fields : [
        {
            name : 'id',
            type : 'int'
        },
        {
            name : 'number',
            type : 'string'
        },
        {
            name : 'object',
            type : 'string'
        },
        {
            name : 'status',
            type : 'string'
        },
        {
            name : 'manager',
            type : 'string'
        }
    ],
});
