try {
    function onClickAuto() {
        u(`AutoBot ${P.cat.isAuto ? 'OFF' : 'ON'} by Tom00702 - Vinh Duyet`)
        P.cat.isAuto = !P.cat.isAuto,
        P.cat.isAuto ? (this.ani8.play(0, !0),
        Laya.timer.loop(500, this, this.checkAuto),
        this.checkFreeCat()) : (Laya.timer.clearAll(this.checkAuto),
        this.ani8.stop(),
        Laya.timer.loop(5e3, this, this.checkSum)),
        this.m_img_StopAuto.visible = !P.cat.isAuto
    }
    M.prototype.onClickAuto = onClickAuto;
} catch (e) {
    throw e;
}
