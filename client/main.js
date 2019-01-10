// import myapp:client-web module
import 'meteor/myapp-client-web';
// import myapp:client-web module
import 'meteor/myapp-client-mobile';
// import Collection and method from api package
import { messagesInsert, Messages } from 'meteor/myapp-api';

import { Template } from 'meteor/templating';
import './main.html';

Template.hello.helpers({
  messages() {
    return Messages.find();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // Call imported method
    messagesInsert.call({ content: `From maypp :${Date.now()}`});
  },
});
