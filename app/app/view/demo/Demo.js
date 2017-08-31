/**
 * This view is an example list of people.
 */
Ext.define('app.view.demo.Demo', {
    extend: 'Ext.grid.Panel',
    xtype: 'demo',
    alias: 'demo',

    requires: [
        'app.view.main.List'
    ],

    requires: [
        'app.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {text: 'Phone', dataIndex: 'phone', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
