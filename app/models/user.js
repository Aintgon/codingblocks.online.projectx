import DS from 'ember-data';
import { computed }  from '@ember/object';

export default DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  fullName: computed('firstname', 'lastname', function () {
    return this.firstname + ' ' + this.lastname
  }),
  email: DS.attr(),
  college: DS.attr(),
  organization: DS.attr(),
  hackJwt: DS.attr(),
  lastReadNotification: DS.attr (),
  photo: DS.attr(),
  oneauthId: DS.attr(),
  roleId: DS.attr(),
  verifiedemail: DS.attr(),
  verifiedmobile: DS.attr(),
  orgLogo: computed('organization', function() {
    switch(this.organization) {
      case 'chitkara':
        return 'https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo.png';
      case 'saitm':
        return 'https://minio.codingblocks.com/public/saitm.png';
      case 'bml':
        return 'https://minio.codingblocks.com/public/bml-logo.jpeg';
      default:
        return 'https://minio.codingblocks.com/amoeba/OnlineLogo2020.svg';
    }
  })
  //contents: DS.hasMany('content'),
  //courseRuns: DS.hasMany('run'),
  //runAttempt: DS.belongsTo('run-attempt')
});
