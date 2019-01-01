	var testVideo = fluidPlayer(
        'my-video',
        {
            layout: 'default',
            vastLoadedCallback: function() {console.log('vast loaded')},
            noVastVideoCallback: function() {console.log('no vast')},
            vastVideoSkippedCallback: function() {console.log('vast skipped')},
            vastVideoEndedCallback: function() {console.log('vast ended')},
            adList: [{roll: 'preRoll', vastTag: 'http://googleads.g.doubleclick.net/pagead/ads?ad_type=video&client=ca-video-pub-4968145218643279&videoad_start_delay=0&description_url=http%3A%2F%2Fwww.google.com&max_ad_duration=40000&adtest=on'}]
        }
    );
