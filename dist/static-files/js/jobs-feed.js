// referring page can set number of resullts returned - see script tag property 'take'
window.careersHubFeedConfig = {
    baseURL : 'https://myadvantage.warwick.ac.uk',
    jobsEndpoint : '/api/public/v1/jobs',
    eventsEndpoint : '/api/public/v1/events',
    eventDetailURL : '/students/events/detail/',
    jobDetailURL : '/students/jobs/Detail/',
    take : 10 // you can change this
};

window.careersHubFeed = new Vue({
  el: 'section#careersHubFeed',
  data: {
    items: null,
    config : window.careersHubFeedConfig
  },
  beforeCreate() {
      var take = jQuery('#job_feed_script').attr("take");
      if (take) {
        window.careersHubFeedConfig.take = take;
      }
  },
  mounted: function(){
    var self = this;
    jQuery.ajax({ // pulls in remote data stored in json format.
              url: self.config.baseURL + self.config.jobsEndpoint + "?take=" + self.config.take,
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
              console.log(self.items[i].title);
              self.items[i].detailURL =   self.config.baseURL + self.config.jobDetailURL + self.items[i].id;
            };

          jQuery('ul.media-list').on('click', 'li', function() {
              event.preventDefault();
              window.location.href = self.items[jQuery(this).index()].detailURL;
           });
        }
    }
  });
