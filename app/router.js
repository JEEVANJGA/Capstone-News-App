import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('bbc');
  this.route('bbcsports');
  this.route('cnn');
  this.route('espn');
});

export default Router;
