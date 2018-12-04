// referring page can set number of resullts returned - see script tag property 'display'

window.careersHubJobFeedConfig = {
    baseURL : 'https://myadvantage.warwick.ac.uk',
    jobsEndpoint : '/api/public/v1/jobs',
    jobDetailURL : '/students/jobs/Detail/',
    display : 6 // you can change this
};

window.careersHubFeed = new Vue({
  el: '#jobsList',
  data: {
    items: null,
    config : window.careersHubJobFeedConfig
  },
  beforeCreate() {
      var display = jQuery('#jobs-feed-script').attr("display");
      if (display) {
        window.careersHubJobFeedConfig.display = display;
      }
  },
  mounted: function(){
    var self = this;
    jQuery.ajax({ // pulls in remote data stored in json format.
              url: self.config.baseURL + self.config.jobsEndpoint + "?take=" + self.config.display,
              method: 'GET',
              success: function (data) {
                  self.items = data;
                  self.addDetailsURL();
              },
              error: function (error) {
                  console.log(error);
              }
          });
    },
    methods: {
       addDetailsURL: function() {
          var self = this;
          for (i = 0; i < self.items.length; i++)
            {
              self.items[i].detailURL =   self.config.baseURL + self.config.jobDetailURL + self.items[i].id;
            };

          jQuery('#jobsList ul.media-list').on('click', 'li', function() {
              event.preventDefault();
              window.location.href = self.items[jQuery(this).index()].detailURL;
           });
        }
    }
  });
