'use strict';

module.exports = (app) => {
    
    
    var messages = require('../controllers/msgController');

    app.route('/messages')
        .get(messages.list_all_messages)
        .post(messages.create_a_messages);

    app.route('/messages/:msgId')
        .get(messages.read_a_message)
        .put(messages.update_a_message) 
        .delete(messages.delete_a_message);        
};