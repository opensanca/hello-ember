import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.lorem.words(); },
  resume() { return faker.lorem.paragraphs(); },
  image() { return faker.image.image(); },
  url() { return faker.internet.url(); },
});
