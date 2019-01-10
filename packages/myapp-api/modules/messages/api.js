import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method'; 

export const messagesInsert = new ValidatedMethod({
  name: 'messages/insert',
  validate: null,
  async run(message) {
    if (Meteor.isServer) {
      const { messagesInsert: method } = await import('../../server/messages/methods');
      return method.call(this, message);
    }
  },
});