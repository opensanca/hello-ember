import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  resume: DS.attr('string'),
  image: DS.attr('string'),
  url: DS.attr('string')
});
