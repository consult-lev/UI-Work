Ext.define('APP.view.admin.orders.OrdersGrid', {
    extend : 'Ext.grid.Panel',
    requires : [
        'APP.store.dictionary.UsersStore',
        'APP.view.admin.users.UsersGridController'
    ],
//	controller : 'UsersGridController',
    width : "*",
    height : 400,
    title : 'Заказы',
    plugins : 'gridfilters',
    store : {
        type : 'OrdersStore'
    },
    //tools : [
    //    {
    //        type : 'refresh',
    //        tooltip : 'Обновить',
    //        handler : 'onRefresh'
    //    },
    //    {
    //        type : 'plus',
    //        handler : 'onAddUser',
    //        tooltip : 'Добавить пользователя'
    //    }
    //],
    viewConfig : {
        enableTextSelection : true
    },


    columns: [
        {
            xtype: 'rownumberer',
            text: '#'
        },
        {
            text: '№ Заказа',
            flex: 1,
            dataIndex: 'number'
        }
    ],

    //columns : [ {
    //    xtype : 'rownumberer'
    //}, {
    //    text : 'Имя',
    //    flex : 1,
    //    width : "*",
    //    hideable : false,
    //    dataIndex : 'name',
    //    filter : {
    //        type : 'string',
    //    }
    //}, {
    //    xtype : 'actioncolumn',
    //    width : 25,
    //    hideable : false,
    //    sortable : false,
    //    items : [ {
    //        icon : 'resources/icons/information.png',
    //        tooltip : 'Информация',
    //        handler : 'onInfo'
    //    } ]
    //}, {
    //    text : 'Логин',
    //    width : 100,
    //    dataIndex : 'login'
    //
    //}, {
    //    text : 'Роли',
    //    width : 150,
    //    dataIndex : 'roles'
    //
    //} ],

});