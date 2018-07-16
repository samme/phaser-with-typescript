new Phaser.Game({
    backgroundColor: 0x001f3f,
    scene: Object.assign(new Phaser.Scene({ key: 'default' }), {
        create: function () {
            this.add.text(0, 0, 'Hello', { font: '72px sans-serif', fill: '#FF4136' });
        }
    })
});
