import { createApp } from "vue";
import myAppName from "../../ngApp";

angular.module(myAppName).directive("ngVue", [
  "$compile",
  ($compile) => {
    return {
      link: ($scope, $element, $attrs) => {
        import("../vue-hello-world/HelloWorld.vue").then(
          ({ default: HelloWorld }) => {
            createApp(HelloWorld).mount($element[0]);
          }
        );
      },
      restrict: "E"
    };
  }
]);
