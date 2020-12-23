// namespace Components { 
    // 命名空间的嵌套
    // export namespace SubComponents {
    //     export class Test{
    //         constructor() {

    //         }
    //     }
    // }
    export class Header {
        constructor() {
          const elem = document.createElement('div')
          elem.innerText = 'Header'
          document.body.appendChild(elem)
        }
      }
    export  class Content {
        constructor() {
          const elem = document.createElement('div')
          elem.innerText = 'Content'
          document.body.appendChild(elem)
        }
      }
    export  class Footer {
       constructor() {
          const elem = document.createElement('div')
          elem.innerText = 'Footer'
          document.body.appendChild(elem)
        }
      }
// }
