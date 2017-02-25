import { Meteor } from 'meteor/meteor';

import { loadParties } from './imports/fixtures/parties';

import './imports/publications/parties';
import './imports/publications/users';
import '../both/methods/parties.methods';
import './imports/publications/images';

console.log ('hi hk0');
Meteor.startup(() => {
  console.log ('hi hk1');
  loadParties();
});
