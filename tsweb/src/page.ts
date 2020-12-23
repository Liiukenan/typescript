import { Content, Footer, Header } from './components';
// namespace Home {
  export default class Page {
    // constructor() {
    //   new Components.Header()
    //   new Components.Content()
    //   new Components.Footer()
    // }
    constructor() {
        new Header();
        new Content();
        new Footer();
      }
  }
// }
