controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.create(img`
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        5 5 
        `, SpriteKind.Player)
    bullet.setPosition(fighter.x, fighter.y - 12)
    bullet.setVelocity(0, -90)
})
let bullet: Sprite = null
let fighter: Sprite = null
fighter = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Player)
fighter.setPosition(80, 111)
controller.moveSprite(fighter, 100, 0)
effects.blizzard.startScreenEffect()
