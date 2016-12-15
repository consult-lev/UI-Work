Ext.define('APP.store.dictionary.OrdersStore', {
    extend: 'Ext.data.Store',
    alias: 'store.OrdersStore',

    model : 'APP.model.dictionary.Order',
    proxy : {
        type : 'ajax',
        url : ROOT_URL + '/data/grid.json',
        reader : {
            type : 'json'
        }
    },
    autoLoad : true
});
