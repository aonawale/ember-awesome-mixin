import Mixin from 'ember-metal/mixin';

export default Mixin.create({
  activate() {
    this._super(...arguments);
    window.scrollTo(0, 0);
  }
});
