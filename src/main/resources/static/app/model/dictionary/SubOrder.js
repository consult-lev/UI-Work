Ext.define('APP.model.dictionary.SubOrder', {
    extend : 'Ext.data.Model',
    entityName: 'SubOrder',
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
            name : 'comments',
            type : 'string'
        },
        {
            name : 'status',
            type : 'string'
        },
        {
            name : 'clientOrderId',
            reference: {
                type: 'Order',
                role: 'Order'
            },
            type : 'int'
        }
    ]
});
