import get from 'ember-metal/get';
import Mixin from 'ember-metal/mixin';

export default Mixin.create({
  // sometimes we want to show a different kind of loading
  // while already on the destination route instead of
  // intermediately transitioning to a `${routeName}`_loading route
  inplaceLoading: false,

  actions: {
    loading(transition) {
      let route = this.routeName;
      if (get(this, 'inplaceLoading')) {
        let controller = this.controllerFor(route);
        controller.set('loading', true);
        transition.finally(() => controller.set('loading', false));
      } else {
        this.intermediateTransitionTo(`${route}_loading`);
        transition.finally(() => this.intermediateTransitionTo(route));
      }
    }
  }
});
