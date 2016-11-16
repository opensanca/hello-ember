import Ember from 'ember';

export function upcase(params) {
  return params[0] && params[0].toUpperCase();
}

export default Ember.Helper.helper(upcase);
