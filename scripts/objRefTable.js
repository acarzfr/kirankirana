const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Function,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Plugins.Button,
		C3.Behaviors.Pin,
		C3.Plugins.Arr,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Behaviors.Fade,
		C3.Behaviors.custom,
		C3.Plugins.TiledBg,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Arr.Acts.Clear,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Cnds.PickNth,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Arr.Acts.Delete,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Arr.Cnds.IsEmpty,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Exps.CurValue,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Function.Cnds.OnFunction,
		C3.Plugins.Function.Exps.Param,
		C3.Plugins.Function.Acts.CallFunction,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Exps.float,
		C3.Plugins.System.Exps.loadingprogress,
		C3.Plugins.Audio.Cnds.IsSilent,
		C3.Plugins.Audio.Acts.SetSilent
	];
};
self.C3_JsPropNameTable = [
	{Function: 0},
	{secildi: 0},
	{secicisi: 0},
	{yatay: 0},
	{dikey: 0},
	{ceviz: 0},
	{Touch: 0},
	{Audio: 0},
	{baslaBtn: 0},
	{bgSp: 0},
	{bannerSp: 0},
	{sahip: 0},
	{Pin: 0},
	{secici: 0},
	{kirBtn: 0},
	{secilenDizi: 0},
	{Browser: 0},
	{geciciDizi: 0},
	{oyuncuTxt: 0},
	{adi: 0},
	{oyuncu1: 0},
	{gonderBtn: 0},
	{btnBasla: 0},
	{Text: 0},
	{bilgi: 0},
	{Sine: 0},
	{Fade: 0},
	{p1Ok: 0},
	{p2Ok: 0},
	{sonucTxt: 0},
	{logo: 0},
	{genelZemin: 0},
	{oyuncu2: 0},
	{ugur: 0},
	{karınca: 0},
	{bilgiMenuZemin: 0},
	{bilgi2: 0},
	{anaSayfaBtn: 0},
	{CustomMovement: 0},
	{menuAlttaTamamOlmadan: 0},
	{TiledBackground: 0},
	{ok: 0},
	{ok2: 0},
	{yukleniyor: 0},
	{Sine2: 0},
	{maymun: 0},
	{Keyboard: 0},
	{cevizDizi: 0},
	{sureTxt: 0},
	{makineninSecimi: 0},
	{ikioyuncu: 0},
	{tekoyuncu: 0},
	{maymunSecici: 0},
	{ses: 0},
	{bilgizemin: 0},
	{yazılar: 0},
	{nasiloynanir: 0},
	{oyununamaci: 0},
	{emegigecenler: 0},
	{tamam: 0},
	{bilgiMenuZemin2: 0},
	{tekraroyna: 0},
	{buttonlar: 0},
	{OYUN_TURU: 0},
	{rndSayi: 0},
	{Makine_Kactane_Ceviz_Kiracak: 0},
	{kirilmaSaniyesi: 0},
	{sure: 0},
	{secimSayisi: 0},
	{ky: 0},
	{kx: 0},
	{maymununSectigiCeviz: 0},
	{Parameter0: 0}
];

self.InstanceType = {
	Function: class extends self.IInstance {},
	ceviz: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	baslaBtn: class extends self.IButtonInstance {},
	bgSp: class extends self.ISpriteInstance {},
	bannerSp: class extends self.ISpriteInstance {},
	secici: class extends self.ISpriteInstance {},
	kirBtn: class extends self.ISpriteInstance {},
	secilenDizi: class extends self.IArrayInstance {},
	Browser: class extends self.IInstance {},
	geciciDizi: class extends self.IArrayInstance {},
	oyuncuTxt: class extends self.ITextInstance {},
	oyuncu1: class extends self.ISpriteInstance {},
	gonderBtn: class extends self.ISpriteInstance {},
	btnBasla: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	bilgi: class extends self.ITextInstance {},
	p1Ok: class extends self.ISpriteInstance {},
	p2Ok: class extends self.ISpriteInstance {},
	sonucTxt: class extends self.ITextInstance {},
	logo: class extends self.ISpriteInstance {},
	genelZemin: class extends self.ISpriteInstance {},
	oyuncu2: class extends self.ISpriteInstance {},
	ugur: class extends self.ISpriteInstance {},
	karınca: class extends self.ISpriteInstance {},
	bilgiMenuZemin: class extends self.ISpriteInstance {},
	bilgi2: class extends self.ISpriteInstance {},
	anaSayfaBtn: class extends self.ISpriteInstance {},
	menuAlttaTamamOlmadan: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	ok: class extends self.ISpriteInstance {},
	ok2: class extends self.ISpriteInstance {},
	yukleniyor: class extends self.ISpriteInstance {},
	maymun: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	cevizDizi: class extends self.IArrayInstance {},
	sureTxt: class extends self.ITextInstance {},
	makineninSecimi: class extends self.IArrayInstance {},
	ikioyuncu: class extends self.ISpriteInstance {},
	tekoyuncu: class extends self.ISpriteInstance {},
	maymunSecici: class extends self.ISpriteInstance {},
	ses: class extends self.ISpriteInstance {},
	bilgizemin: class extends self.ISpriteInstance {},
	yazılar: class extends self.ISpriteInstance {},
	nasiloynanir: class extends self.ISpriteInstance {},
	oyununamaci: class extends self.ISpriteInstance {},
	emegigecenler: class extends self.ISpriteInstance {},
	tamam: class extends self.ISpriteInstance {},
	bilgiMenuZemin2: class extends self.ISpriteInstance {},
	tekraroyna: class extends self.ISpriteInstance {},
	buttonlar: class extends self.ISpriteInstance {}
}