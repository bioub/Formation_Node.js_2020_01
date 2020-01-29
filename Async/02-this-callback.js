class Contact {
  name = 'Romain';
  hello() {
    console.log('My name is ' + this.name);
  }
  helloAsync() {
    setTimeout(() => this.hello(), 100);
  }
}

const romain = new Contact();
romain.hello();
romain.helloAsync();
