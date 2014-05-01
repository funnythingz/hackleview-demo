/// <reference path="controller/controller.ts" />

module DEMO {

    class Application {

        ready() {
            var controller: Controller = new Controller();
            controller.start();
        }

    }

    $(()=> {
        var demo: Application = new Application();
        demo.ready();
    });

}
