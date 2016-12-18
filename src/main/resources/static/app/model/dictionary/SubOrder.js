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
            name : 'count',
            type : 'int'
        },
        {
            name : 'designProjectNum',
            type : 'string'
        },
        {
            name : 'designExecutor',
            type : 'string'
        },
        {
            name : 'productTypeInfo',
            type : 'auto'
        },
        {
            name : 'productOrderDesignInfo',
            type : 'auto'
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
