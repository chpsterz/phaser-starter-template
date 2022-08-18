class Game extends Phaser.Scene
{   

    constructor()
    {
        super({
            key: "Game"
        });
    }

    preload() {
    preloadImages(this);
    }

    create() {
    createPlayer(this);
    }
    update() {
    playerMovement(this)
    }
}