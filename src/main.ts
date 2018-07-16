class HelloScene extends Phaser.Scene {
  key: 'hello';
  create () {
    this.add.text(0, 0, 'Hello', { font: '72px sans-serif', fill: '#FF4136' });
  }
}

new Phaser.Game({
  backgroundColor: 0x001f3f,
  scene: HelloScene
  // scene: new HelloScene({ key: 'hello-again' })
});
