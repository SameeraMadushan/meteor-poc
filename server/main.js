import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  'testCall': function() {
      console.log('asdasd');
      return 'Awesome';
  }
});
