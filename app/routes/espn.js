import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.$.get(' https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=c4ea221e6833496bad7716c6c4fc5ece');
	}
});
