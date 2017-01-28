import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		function getJSON(url){
		  return new Promise(function(resolve, reject){
		    var xhr = new XMLHttpRequest();

		    xhr.open('GET', url);
		    xhr.onreadystatechange = handler;
		    xhr.responseType = 'json';
		    xhr.setRequestHeader('Accept', 'application/json');
		    xhr.send();
		    function handler() {
		      if (this.readyState === this.DONE) {
		        if (this.status === 200) {
		          resolve(this.response);
		        } else {
						  reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
		        }
		      }
		    }
		  });
		}
		return getJSON('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=c4ea221e6833496bad7716c6c4fc5ece').then(function(json) {
			  // on fulfillment
			   var data = JSON.stringify(json);
		         localStorage.setItem('bbcsports', data);
		         return JSON.parse(data);
			}, function(reason) {
			  // on rejection
			  Ember.run.later((function() {
				  //do something in here that will run in 2 seconds
				  console.log(reason);
				  var data = JSON.parse(localStorage.getItem('bbcsports'));
		         return data;
				}), 2000);
			});

		
	}
});
