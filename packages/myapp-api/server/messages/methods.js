import { _ } from 'meteor/underscore';
import { Messages } from '../../modules/messages/messages';

export function messagesInsert(message) {
  return Messages.insert(message);
}