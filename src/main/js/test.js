Ext.require(['Ext.data.*', 'Ext.grid.*']);


Ext.application({
    name: 'app',
    launch: function () {
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [

                {name: 'name',   mapping: 'name', type: 'string'}, // we can use mapping for field names that do not match
                {name: 'dob',    mapping: 'dob', type: 'date'},
                {name: 'email',  mapping: 'email', type: 'string'},
                {name: 'mobile', mapping: 'mobile', type: 'string'},

            ]
        });


//this data does not line up to our model fields - the phone field is called phoneNumber
        var data = {
            users: [
                {

                    name: 'abc',
                    dob: '4/12/2012',
                    email: 'abc@yahoo.com',
                    mobile:'9800000774'
                },
                {

                    name: 'xyz',
                    dob: '4/13/2012',
                    email: 'xyz@yahoo.com',
                    mobile:'9821111774'
                }
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
            title: 'My Window',


            initComponent: function() {
                var me = this;


                Ext.applyIf(me, {
                    items: [
                        {
                            xtype: 'form',
                            height: 270,
                            padding: 5,
                            bodyPadding: 10,

                            title: 'My Form',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'name', // assign name to field
                                    // id: 'txtnm', // using id is bad practice
                                    fieldLabel: 'Name',
                                    allowBlank: false,
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textareafield',
                                    name: 'address',
//                            id: 'txtadd',
                                    fieldLabel: 'Address',
                                    allowBlank: false,
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'dob',
//                            id: 'dtDob',
                                    fieldLabel: 'DOB',
                                    allowBlank: false,
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'email',
//                            id: 'txtemail',
                                    fieldLabel: 'Email',
                                    allowBlank: false,
                                    vtype: 'email',
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'mobile',
//                            id: 'txtmob',
                                    fieldLabel: 'Mobile no',
                                    allowBlank: false,
                                    maskRe: /[0-9]/,
                                    maxLength: 10,
                                    minLength: 10,
                                    anchor: '100%'
                                },
                                {
                                    xtype: 'textfield',
                                    name: 'password',
//                            id: 'txtpwd',
                                    inputType: 'password',
                                    fieldLabel: 'Password',
                                    allowBlank: false,
                                    anchor: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            id: 'btnSubmit',
                            margin: '0 0 5 200',
                            text: 'Submit',
                            listeners:
                            {
                                click : function()
                                {
                                    //alert("hi");
                                    var form = win.down('form');
                                    var vals = form.getValues();
                                    store.add(vals);

                                    //store.add({name: 'data'}, {dob: '4/12/2012'},{email: 'data@yahoo.com'}, {mobile: '5678654321'});
                                    //What to write here to add data of a controls in grid
                                }
                            }

                        },

                        {
                            xtype: 'gridpanel',
                            height: 174,
                            padding: 5,
                            width: 450,
                            title: 'My Grid Panel',
                            store: Ext.data.StoreManager.lookup('dataStore'),
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'dob',
                                    text: 'DOB'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'email',
                                    text: 'Email'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'mobile',
                                    text: 'Contact no'
                                },

                            ],
                            viewConfig: {


                            }
                        }
                    ]
                });


                me.callParent(arguments);
            }
        });




//        Ext.define('MyApp.MyWindow', {
//            extend: 'Ext.Window',
//            title: 'Welcome!',
//            initComponent: function () {
//                this.items = [{
//                    xtype: 'textfield',
//                    name: 'tfName',
//                    fieldLabel: 'Enter your name'
//                }], this.callParent(arguments);
//            }
//        });
        var win = Ext.create('MyApp.view.ui.MyWindow');
        win.show();
    }
});