class App {
  constructor() {
    this.serverName = 'localHost';

    console.log(this.getServerName.bind(this));
  }
  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();
