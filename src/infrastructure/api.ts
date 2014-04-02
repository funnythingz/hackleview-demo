module VimeoAPI {

    export class Videos {

        static responseFromVimeosOfUser(vimeoUserName: string) {

            var vimeosAPIPath: string = 'http://vimeo.com/api/v2/'+ vimeoUserName.toString() +'/videos.json';

            var responseJSON: Object[];

            var getVimeoJSONP = $.ajax({
                type: 'get',
                url: vimeosAPIPath,
                dataType: 'json',
                async: false
            });

            getVimeoJSONP.done(function(json) {
                responseJSON = json;
            });

            getVimeoJSONP.fail(function(json) {
                responseJSON = json;
            });

            return responseJSON;

        }
    
    }

}

(function() {
    console.log(VimeoAPI.Videos.responseFromVimeosOfUser('terjes'));
})();
