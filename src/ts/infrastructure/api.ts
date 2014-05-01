/// <reference path="../../../definitions/jquery.d.ts" />

module Infra {

    export class GistsAPI {

        static resolve(): JQueryXHR {

            var apiPath: string = 'https://api.github.com/gists';

            return $.ajax({type: 'get', url: apiPath, dataType: 'jsonp', async: true});

        }

    }

}
