/// <reference path="../../definitions/fastclick.d.ts" />

/// <reference path="controller/controller.ts" />

module DEMO {

    class Application {

        ready() {
            FastClick.attach(document.body);

            var controller: Controller = new Controller();
            controller.start();
        }

    }

    $(()=> {
        var demo: Application = new Application();
        demo.ready();
    });

}
