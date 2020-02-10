controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Moving_Left = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Moving_Left = false
})
let projectile: Sprite = null
let Moving_Left = false
Moving_Left = false
game.onUpdateInterval(500, function () {
    if (Moving_Left) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 1 1 1 . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 . . . . . . . 
. . . . . . . 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 . . . . . . 1 1 1 1 1 1 . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. 1 1 1 1 1 1 1 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), 0)
        projectile.y = Math.randomRange(10, 100)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 . . . . . . 
. . 1 . . . . 1 1 1 1 1 . . . . 
. . 1 . 1 1 1 . . . 1 1 . . . . 
. . 1 1 . . 1 1 1 1 1 1 . 1 1 1 
. 1 . 1 . 1 . . 1 1 1 1 1 . . 1 
1 . . 1 . 1 . 1 1 . 1 1 . . . 1 
1 . . 1 . 1 1 1 . 1 . 1 . . . 1 
1 . . 1 1 1 1 . 1 . . 1 . . . 1 
1 . . 1 1 1 . 1 . . . 1 . . . 1 
1 . . . 1 1 1 . . . . 1 . . . . 
1 . . . . 1 1 1 . . . 1 . . 1 . 
. 1 1 . 1 1 1 1 1 . 1 1 1 1 . . 
. . . 1 . 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -100), 0)
        projectile.y = Math.randomRange(10, 100)
    }
})
