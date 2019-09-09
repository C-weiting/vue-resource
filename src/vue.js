import Complier from './complier.js';
import Observer from './observer.js';

class Vue {
  constructor(options) {
    this.$options = options;
    this.$el = options.el
    this.$data = options.data;

    this.observer(this.$data);
    this.complier();
  }

  observer(data) {
    new Observer(data);
  }

  complier() {
    new Complier(this.$el, this)
  }
}

export default Vue;