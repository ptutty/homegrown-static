// referring page can set number of resullts returned - see script tag property 'display'

window.careersHubJobFeedConfig = {
    baseURL : 'https://myadvantage.warwick.ac.uk',
    jobsEndpoint : '/api/public/v1/jobs',
    jobDetailURL : '/students/jobs/Detail/',
    display : 6 // you can change this
};

window.jobList = new Vue({
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
      var url = self.config.baseURL + self.config.jobsEndpoint + "?take=" + self.config.display;

      axios.get(url)
      .then(function (response) {
        self.items = response.data;
        self.addDetailsURL(response);
      })
      .catch(function (error) {
          console.log("cannot get any results");
          jQuery("jobsList > ul.media-list").html("<li>Cannot displays any results at this time.</li>");

      });

    },
    methods: {
       addDetailsURL: function(response) {
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
