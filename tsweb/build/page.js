// namespace Components { 
// 命名空间的嵌套
// export namespace SubComponents {
//     export class Test{
//         constructor() {
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Content = exports.Header = void 0;
    //         }
    //     }
    // }
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'Header';
            document.body.appendChild(elem);
        }
    }
    exports.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'Content';
            document.body.appendChild(elem);
        }
    }
    exports.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'Footer';
            document.body.appendChild(elem);
        }
    }
    exports.Footer = Footer;
});
// }
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // namespace Home {
    class Page {
        // constructor() {
        //   new Components.Header()
        //   new Components.Content()
        //   new Components.Footer()
        // }
        constructor() {
            new components_1.Header();
            new components_1.Content();
            new components_1.Footer();
        }
    }
    exports.default = Page;
});
// }
