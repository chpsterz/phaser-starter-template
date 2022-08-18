/**
 * @brief Creates the player entity.
 * @param refer refers to the 'create' function context
*/

function createPlayer(refer) {
refer.human = refer.physics.add.image(window.innerWidth / 2, window.innerHeight / 2, 'human');
}