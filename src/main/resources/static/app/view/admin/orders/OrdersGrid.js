Ext.define('APP.view.admin.orders.OrdersGrid',
		{
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

			plugins : [ {
				ptype : "gridfilters"
			}, ],

			columns : [
                {
                    xtype : 'rownumberer',
                    text : '#'
                }, {
                    text : '№ Заказа',
                    width : 200,
                    dataIndex : 'number'
                }, {
                    text : 'Статус',
                    width : 200,
                    dataIndex : 'status'
                }, {
                    text : 'Объект',
                    width : 200,
                    dataIndex : 'object'
                }, {
                    text : 'Исполнитель',
                    width : 200,
                    dataIndex : 'manager'
                }, {
                    xtype : 'widgetcolumn',
                    text : 'Подзаказы',
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
                            }, {
                                text : '№ Заказа',
                                flex : 1,
                                dataIndex : 'number'
                            }, {
                                text : 'Статус',
                                flex : 1,
                                dataIndex : 'status'
                            },
                            {
                                xtype: 'actioncolumn',
                                width: 40,
                                items: [
                                    {
                                        icon : 'resources/icons/information.png',
                                        tooltip : 'Информация',
                                        handler : 'onInfoBySubOrder'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    xtype: 'actioncolumn',
                    width: 40,
                    items: [
                        {
                            icon : 'resources/icons/information.png',
                            tooltip : 'Информация',
                            handler : 'onInfo'
                        }
                    ]
                }
            ],

		});