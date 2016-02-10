Ext.require(['Ext.data.*', 'Ext.grid.*']);


Ext.application({
    name: 'app',
    launch: function () {
        Ext.define('User', {
            extend: 'Ext.data.Model',
        });


        var data = {
            users: [
            ]
        };


//note how we set the 'root' in the reader to match the data structure above
        var store = Ext.create('Ext.data.Store', {
            autoLoad: true,
            storeId:'dataStore',
            model: 'User',
            data : data,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'users'
                },
                writer: {
                    type: 'json',
                    writeAllFields: false,
                    root: 'users'
                }
            }
        });

        var win = Ext.define('MyApp.view.ui.MyWindow', {
            extend: 'Ext.window.Window',


            height: 505,
            width: 462,
            title: 'Resuply Protein',


            initComponent: function() {
                var me = this;


                Ext.applyIf(me, {
                    items: [
                        {
                            xtype: 'form',
                            height: 270,
                            width: 900,
                            padding: 5,
                            bodyPadding: 10,

                            title: 'Basic Information',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'requestor',
                                    fieldLabel: 'Requestor',
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'requestorId',
                                    fieldLabel: 'Requestor ID'
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'RA Number',
                                    name: 'raNumber',
                                    store: {
                                        fields: ['abbr', 'name'],
                                        data : [
                                            {"abbr":"1", "name":"1"},
                                            {"abbr":"2", "name":"2"},
                                            {"abbr":"3", "name":"3"}
                                        ]
                                    },
                                    queryMode: 'local',
                                    displayField: 'name',
                                    valueField: 'abbr'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'theropArea',
                                    fieldLabel: 'Therop. Area'
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Add Contacts',
                                    name: 'addContacts',
                                    store: {
                                        fields: ['abbr', 'name'],
                                        data : [
                                            {"abbr":"1 Charac. Search", "name":"1 Charac. Search"},
                                            {"abbr":"2 Charac. Search", "name":"2 Charac. Search"},
                                            {"abbr":"3 Charac. Search", "name":"3 Charac. Search"}
                                        ]
                                    },
                                    queryMode: 'local',
                                    displayField: 'name',
                                    valueField: 'abbr'
                                },
                            ]
                        },
                        {
                            xtype: 'button',
                            id: 'btnAdd',
                            margin: '0 0 5 200',
                            text: 'Add',
                            listeners:
                            {
                                click : function()
                                {
                                    var form = win.down('form');
                                    var vals = form.getValues();
                                    store.add(vals);

                                }
                            }

                        },

                        {
                            xtype: 'gridpanel',
                            height: 174,
                            padding: 5,
                            width: 450,
                            title: 'Basic Information Output',
                            store: Ext.data.StoreManager.lookup('dataStore'),
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'requestor',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'requestorId',
                                    text: 'ID'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'raNumber',
                                    text: 'RA Number'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'theropArea',
                                    text: 'Therop. Area'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'addContacts',
                                    text: 'Add Contacts'
                                }

                            ]
                        }
                    ]
                });


                me.callParent(arguments);
            }
        });

        var win = Ext.create('MyApp.view.ui.MyWindow');
        win.show();
    }
});