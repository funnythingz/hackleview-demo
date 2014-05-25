/// <reference path="../../../definitions/handlebars.d.ts" />

module DEMO {

    // Hadlebarsなヘルパー
    export class Helper {

        static hoge(): string {
            return "";
        }

    }

    Handlebars.registerHelper('hoge', Helper.hoge);
}

