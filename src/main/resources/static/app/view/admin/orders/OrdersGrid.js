Ext.define('APP.view.admin.orders.OrdersGrid',
		{
			extend : 'Ext.grid.Panel',
			requires : [ 'APP.store.dictionary.OrdersStore', 'APP.model.dictionary.Order', 'APP.model.dictionary.SubOrder',
					'APP.view.admin.users.UsersGridController' ],

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

			columns : [ {
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
			}, {
				text : 'Объект',
				flex : 1,
				dataIndex : 'object'
			}, {
				text : 'Исполнитель',
				width : 500,
				dataIndex : 'manager'
			}, {
				text : 'Button',
				width : 400,
				xtype : 'widgetcolumn',
				widget : {
					xtype : 'container',
					layout : 'hbox',
					bind : {
						foo : '{record}'
					},
					items : [ {
						xtype : 'container',
						flex : 1
					}, {
						xtype : 'grid',
						width : 500,
						bind : {
							store : '{record.subOrders}'
						},
						emptyText : 'Подзаказов нет',
						columns : [ {
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
						} ]
					} ],
					setFoo : Ext.emptyFn
				// костыль
				}
			} ],

			listeners : {
				select : function(grid, record) {
					console.log(record);
					console.log(record.subOrders());
				}
			}
		});