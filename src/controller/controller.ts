/// <reference path="../../definitions/jquery.d.ts" />
/// <reference path="../infrastructure/hackleview.ts" />

module HACKLE {

    export class Controller {
    }

}

$(() => {
    var vimeosView: DEMO.VimeosView = new DEMO.VimeosView();
    $('#main').append(vimeosView.render().$el);
});
