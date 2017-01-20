import RSVP from 'rsvp';
import Route from 'ember-route';
import { later } from 'ember-runloop';
import Loading from 'ember-awesome-mixins/mixins/loading';

export default Route.extend(Loading, {
  model() {
    return new RSVP.Promise(resolve => {
      later(() => {
        resolve({ msg: 'Hold Your Horses' });
      }, 3000);
    });
  }
});
