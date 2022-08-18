var game_config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scaleMode: Phaser.Scale.RESIZE,
    backgroundColor: '#006400',
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 }
        }
    },
    scene: [ Game ]
};

var game = new Phaser.Game(game_config);