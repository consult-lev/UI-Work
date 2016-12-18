Ext.define('APP.view.admin.orders.OrdersGrid', {
    extend : 'Ext.grid.Panel',
    requires : [
        'APP.store.dictionary.OrdersStore',
        'APP.model.dictionary.Order',
        'APP.model.dictionary.SubOrder',
        'APP.view.admin.orders.OrderGridController'
    ],

    controller: "OrderGridController",
    width : "*",
    height : 400,
    title : 'Заказы',
    store : {
        type : 'OrdersStore'
    },

    viewConfig : {
        enableTextSelection : true
    },

    plugins : [
        {
            ptype : "gridfilters"
        }
    ],

    columns : [
        {
            xtype : 'rownumberer',
            text : '#'
        },
        {
            xtype: 'actioncolumn',
            width: 20,
            items: [
                {
                    icon : 'resources/icons/information.png',
                    tooltip : 'Информация',
                    handler : 'onInfo'
                }
            ]
        },
        {
            text : '№ Заказа',
            width : 90,
            dataIndex : 'number'
        },
        {
            text : 'Статус',
            width : 100,
            dataIndex : 'status'
        },
        {
            text : 'Объект',
            width : 140,
            dataIndex : 'object'
        },
        {
            text : 'Договор<br/>спецификация',
            width : 120,
            dataIndex : 'specificationNumber'
        },
        {
            text : 'Исполнитель',
            width : 120,
            dataIndex : 'manager'
        },
        {
            text : 'Подзаказы',
            xtype : 'widgetcolumn',
            flex : 1,
            tdCls: "without-padding",
            widget : {
                xtype : 'grid',
                bind : {
                    store : '{record.subOrders}'
                },
                emptyText : 'Подзаказов нет',
                columns : [
                    {
                        xtype : 'rownumberer',
                        text : '#'
                    },
                    {
                        xtype: 'actioncolumn',
                        width: 20,
                        items: [
                            {
                                icon : 'resources/icons/information.png',
                                tooltip : 'Информация',
                                handler : 'onInfoBySubOrder'
                            }
                        ]
                    },
                    {
                        text : '№ Заказа',
                        width : 120,
                        dataIndex : 'number'
                    },
                    {
                        text : 'Статус производства',
                        width : 120,
                        dataIndex : 'status'
                    },
                    {
                        text : 'Тип ТДМ',
                        flex : 1,
                        dataIndex : 'productTypeInfo',
                        renderer: function(value){
                            return value.classTypeName;
                        }
                    },
                    {
                        text : 'Кол-во',
                        width : 80,
                        dataIndex : 'count'
                    },
                    {
                        text : 'Документация',
                        width : 120,
                        dataIndex : 'productOrderDesignInfo',
                        renderer: function(value){
                            return value.productTypeName;
                        }
                    },
                    {
                        text : '№ проекта КД',
                        width : 120,
                        dataIndex : 'designProjectNum'
                    }
                ]
            }
        },
        {
            text : 'Лист согласования',
            width : 120,
            dataIndex : 'approveList'
        },
        {
            text : 'Примечание',
            width : 100,
            dataIndex : 'managerComments'
        },
        {
            text : 'Дата<br/>поставки<br/>по договору',
            xtype: 'datecolumn',
            width : 80,
            format: 'd.m.Y',
            dataIndex : 'contractDate'
        }
    ]

});