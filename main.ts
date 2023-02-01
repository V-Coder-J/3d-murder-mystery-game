controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite2, 16, 1000)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite4, 16, 1000)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 1000)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite3, 16, 1000)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Render.setViewMode(ViewMode.raycastingView)
mySprite = Render.getRenderSpriteVariable()
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player))
Render.setAttribute(Render.attribute.wallZScale, 1.25)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player))
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player))
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile5`)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player))
tiles.placeOnRandomTile(mySprite4, assets.tile`myTile4`)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
