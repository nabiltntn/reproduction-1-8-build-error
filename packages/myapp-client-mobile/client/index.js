import { messagesInsert, Messages } from 'meteor/myapp-api';

// Make call from myapp-client
messagesInsert.call({ content: `From maypp-client-mobile :${Date.now()}`});
