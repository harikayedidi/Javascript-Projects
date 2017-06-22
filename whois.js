function whois(domain) {
        var domain = domain.replace(/(^\w+:|^)\/\//, '').replace('www.','');
        /*code for CORS*/
        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            }
        });
        $.ajax({
            url: "https://www.whois.com/whois/" + domain,
            type: 'GET',
            success: function(results) {
                return $(results).find('div.whois_main_column').html();
            }
        });
    }