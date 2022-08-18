/**
 * @brief Updates the player movement.
 * @param refer refers to the 'update' function context
*/

function playerMovement(refer) {
    if (refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT).isDown)
    {
        refer.human.x -= 4;
    }
    else if (refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT).isDown)
    {
        refer.human.x += 4;
    }
    else if (refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP).isDown)
    {
        refer.human.y -= 4;
    }
    else if (refer.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN).isDown)
    {
        refer.human.y += 4;
    }
}