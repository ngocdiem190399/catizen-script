try {
    function onClickAuto() {
        u(`AutoBot ${P.cat.isAuto ? 'deactivated' : 'activated'}!\n\nCracked by @clqkx`)
        P.cat.isAuto = !P.cat.isAuto,
        P.cat.isAuto ? (this.ani8.play(0, !0),
        Laya.timer.loop(500, this, this.checkAuto),
        this.checkFreeCat()) : (Laya.timer.clearAll(this.checkAuto),
        this.ani8.stop(),
        Laya.timer.loop(5e3, this, this.checkSum)),
        this.m_img_StopAuto.visible = !P.cat.isAuto
    }
    M.prototype.onClickAuto = onClickAuto
    console.log(`${consolePrefix}Script loaded`, consoleGreen);
    console.log(`${consolePrefix}Crack by @clqkx`, consoleGreen);
} catch (e) {
    console.log(`${consolePrefix}An error occurred, the BrakePoint is set incorrectly!`, consoleRed);
    console.log(`${consolePrefix}Please follow the instructions, and you will succeed :*`, consoleRed);
}
