try {
    function onClickAuto() {
        u(`Cracked by Tom - Vinh Duyet`);
        P.cat.clickAuto = !0;
        this.m_img_AutoRed.visible = !0;
	    if (!P.cat.buyAuto) {
          P.cat.buyAuto = !0;
    	}
        P.cat.isAuto = !0;
        this.ani8.play(0, !0);
    	Laya.timer.loop(500, this, this.checkAuto);
    	this.checkFreeCat();
    	this.m_btn_AutoSetting.visible = !0;
    }
    M.prototype.onClickAuto = onClickAuto;
} catch (e) {

}
