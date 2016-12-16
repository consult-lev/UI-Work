Ext.define('APP.view.admin.orders.OrdersGrid', {
    extend : 'Ext.grid.Panel',
    requires : [
        'APP.store.dictionary.OrdersStore',
        'APP.view.admin.users.UsersGridController'
    ],

    width : "*",
    height : 400,
    title : 'Заказы',
    store : {
        type : 'OrdersStore'
    },

    viewConfig : {
        enableTextSelection : true
    },

    plugins: [
        {
            ptype: "gridfilters",
        },
        {
            ptype: 'rowwidget',
            widget: {
                xtype: 'grid',
                bind: {
                    store: '{record.list}',
                    title: 'Orders for {record.number}'
                }
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
                },
                {
                    text: 'Статус',
                    flex: 1,
                    dataIndex: 'status'
                }
            ],
            listeners: {
                expandbody: function(node, record) {
                    console.log(record);
                }
            }
        }
    ],

    columns: [
        {
            xtype: 'rownumberer',
            text: '#'
        },
        {
            text: '№ Заказа',
            flex: 1,
            dataIndex: 'number'
        },
        {
            text: 'Статус',
            flex: 1,
            dataIndex: 'status'
        },
        {
            text: 'Объект',
            flex: 1,
            dataIndex: 'object'
        },
        {
            text: 'Исполнитель',
            flex: 1,
            dataIndex: 'manager'
        }
    ]
});