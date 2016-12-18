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
            name : 'legalNumber',
            type : 'string'
        },
        {
            name : 'specificationNumber',
            type : 'string'
        },
        {
            name : 'contractDate',
            type : 'date'
        },
        {
            name : 'planDate',
            type : 'date'
        },
        {
            name : 'approveList',
            type : 'string'
        },
        {
            name : 'approveListDate',
            type : 'date'
        },
        {
            name : 'isArchived',
            type : 'boolean'
        },
        {
            name : 'status',
            type : 'string'
        },
        {
            name : 'manager',
            type : 'string'
        },
        {
            name : 'managerComments',
            type : 'string'
        },
        {
            name : 'adminComments',
            type : 'string'
        }
    ],

});
