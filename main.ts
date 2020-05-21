enum ActionKind {
    Walking,
    Idle,
    Jumping
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.setAction(mySprite, ActionKind.Jumping)
    mySprite.startEffect(effects.rings, 300)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
effects.blizzard.startScreenEffect()
mySprite = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite.ay = 300
let anim = animation.createAnimation(ActionKind.Jumping, 25)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 4 b 
b d d c d 5 5 b 5 4 4 4 4 4 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. b b d d d 5 5 5 5 5 5 5 b . . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
c b 5 5 b c d d 5 5 5 5 5 5 b . 
b b c c c d d d 5 5 5 5 5 d b . 
. . . . c c d d d 5 5 5 b b . . 
. . . . . . c c c c c b b . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
. b b b d 5 5 5 5 5 4 4 4 4 4 b 
b d d d b b d 5 5 4 4 4 4 4 b . 
b b d 5 5 5 b 5 5 5 5 5 5 b . . 
c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
c b d c d 5 5 b 5 5 5 5 5 5 b . 
. c d d c c b d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
. . . . . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite, anim)
