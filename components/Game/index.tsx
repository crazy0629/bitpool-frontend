import { Header } from "@/components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IState } from "@/store";
import { notification } from "antd";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import Image from "next/image";
import FullScreen from "@/public/full-screen.svg";

export default function GameComponent() {
  const [uid, setUid] = useState(0);
  const [cid, setCid] = useState("");
  const [level, setLevel] = useState(0);
  const router = useRouter();
  const { currentUser } = useSelector((state: IState) => state.auth);

  const requestFullScreen = () => {
    const elem: any = document.getElementById("iframe");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  useEffect(() => {
    if (!currentUser) {
      notification.warning({
        message: "Warning!",
        description: "Please Login!",
      });
      router.push("/");
    }

    const getFromLocalStorage = (key: string) => {
      if (!key || typeof window === "undefined" || !localStorage) {
        return "";
      }
      return window.localStorage.getItem(key);
    };

    const cid: any = getFromLocalStorage("cid");
    const uid: any = Cookie.get("uid");
    const level: any = getFromLocalStorage("level");
    setCid(cid);
    setUid(parseInt(uid));
    setLevel(parseInt(level));
  }, [currentUser]);

  return (
    <div className="w-full absolute xl:relative top-0 left-0 h-full">
      <Header />

      <div className="min-h-90vh w-full bg-white relative">
        <Image
          priority={true}
          height={75}
          width={79}
          src={FullScreen}
          alt="full screen"
          className="cursor-pointer z-50 absolute bottom-10 right-0"
          onClick={requestFullScreen}
        />
        {uid && cid && (
          <iframe
            src={`https://portal.bitpool.gg/?c=${cid}&u=${uid}`}
            id="iframe"
            className="w-full absolute top-0 left-0 h-full"
          ></iframe>
        )}
        {/* <iframe
          id="iframe"
          className="w-full absolute top-0 left-0 h-full"
          srcDoc={`<!DOCTYPE html><html> <head> <title>BitPool</title> <link rel="stylesheet" href="css/reset.css" type="text/css" /> <link rel="stylesheet" href="css/main.css" type="text/css" /> <link rel="stylesheet" href="css/orientation_utils.css" type="text/css" /> <link rel="stylesheet" href="css/ios_fullscreen.css" type="text/css" /> <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" /> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" /> <meta name="msapplication-tap-highlight" content="no" /> <script> // init global variable var _user_id = ${uid}; var _challenge_id = ${cid}; var _hard_level = ${level}; var _match_id = 1; var _base_url = "https://play.bitpool.gg/api/"; var _result = 1; var price = 0; var url_string = window.location.href; var url = new URL(url_string); </script> <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script> <script type="text/javascript" src="js/easeljs-NEXT.min.js"></script> <script type="text/javascript" src="js/tweenjs.js"></script> <script type="text/javascript" src="js/three.min.js"></script> <script type="text/javascript" src="js/screenfull.js"></script> <script type="text/javascript" src="js/sprintf.min.js"></script> <script type="text/javascript" src="js/platform.js"></script> <script type="text/javascript" src="js/ios_fullscreen.js"></script> <script type="text/javascript" src="js/howler.min.js"></script> <script type="text/javascript" src="js/ctl_utils.js"></script> <script type="text/javascript" src="js/sprite_lib.js"></script> <script type="text/javascript" src="js/settings.js"></script> <script type="text/javascript" src="js/CAreYouSurePanel.js"></script> <script type="text/javascript" src="js/CInputController.js"></script> <script type="text/javascript" src="js/CLang.min.js"></script> <script type="text/javascript" src="js/CPreloader.js"></script> <script type="text/javascript" src="js/CMain.js"></script> <script type="text/javascript" src="js/CTextButton.js"></script> <script type="text/javascript" src="js/CGfxButton.js"></script> <script type="text/javascript" src="js/CToggle.js"></script> <script type="text/javascript" src="js/CMenu.js"></script> <script type="text/javascript" src="js/CDifficultyMenu.js"></script> <script type="text/javascript" src="js/CGame.js"></script> <script type="text/javascript" src="js/CInterface.js"></script> <script type="text/javascript" src="js/CScene.js"></script> <script type="text/javascript" src="js/CCreditsPanel.js"></script> <script type="text/javascript" src="js/CTable.js"></script> <script type="text/javascript" src="js/CGUIExpandible.js"></script> <script type="text/javascript" src="js/CEdge.js"></script> <script type="text/javascript" src="js/CVector2.js"></script> <script type="text/javascript" src="js/CMath.js"></script> <script type="text/javascript" src="js/CCTLText.js"></script> <script type="text/javascript" src="js/CBall.js"></script> <script type="text/javascript" src="js/CStick.js"></script> <script type="text/javascript" src="js/CPhysicsController.js"></script> <script type="text/javascript" src="js/CPlayerGUI.js"></script> <script type="text/javascript" src="js/CBallSpinGUI.js"></script> <script type="text/javascript" src="js/CGameOverPanel.js"></script> <script type="text/javascript" src="js/CHandBallDrag.js"></script> <script type="text/javascript" src="js/CEffectText.js"></script> <script type="text/javascript" src="js/CInteractiveHelp.js"></script> <script type="text/javascript" src="js/CButLang.js"></script> <script type="text/javascript" src="js/CRollingScore.js"></script> <script type="text/javascript" src="js/CScoreGUI.js"></script> <script type="text/javascript" src="js/CShotPowerBar.js"></script> <script type="text/javascript" src="js/CLocalStorage.js"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js" integrity="sha512-v8ng/uGxkge3d1IJuEo6dJP8JViyvms0cly9pnbfRxT6/31c3dRWxIiwGnMSWwZjHKOuY3EVmijs7k1jz/9bLA==" crossorigin="anonymous" referrerpolicy="no-referrer" ></script> </head> <body ondragstart="return false;" ondrop="return false;"> <div style=" position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; " ></div> <script> function _0x17fe() { const _0x2b7913 = [ "submit-match-result", "POST", "href", "ready", "1111", "2097FuwVPa", "share_event", "start_session", "status", "13704lhfPYZ", "difficalty", "https://bitpool.gg/winner/", "stringify", "744718bMPTzL", "application/json", "show_interlevel_ad", "http://localhost:8000/", "__ctlArcadeStartSession", "get-challenge-by-id", "end_level", "true", "save_score", "42vXCGPT", "location", "iswon", "===", "Challenge\x20is\x20Over", "__ctlArcadeEndSession", "ctl-arcade", "885npIsDD", "3170kIMwkq", "__ctlArcadeEndLevel", "room100000", "restart_level", "data", "json", "amount", "485915tqqCQW", "2513FIGXUp", "4689993vkIJsj", "parent", "1018zKEBGf", "1458340qQIkiU", ]; _0x17fe = function () { return _0x2b7913; }; return _0x17fe(); } const _0x34ab14 = _0x1c74; (function (_0x1ed271, _0xebaab1) { const _0x28e798 = _0x1c74, _0x51d687 = _0x1ed271(); while (!![]) { try { const _0x18ba69 = -parseInt(_0x28e798(0x11f)) / 0x1 + (-parseInt(_0x28e798(0x110)) / 0x2) * (parseInt(_0x28e798(0x104)) / 0x3) + -parseInt(_0x28e798(0x111)) / 0x4 + (-parseInt(_0x28e798(0x10c)) / 0x5) * (-parseInt(_0x28e798(0xfd)) / 0x6) + (-parseInt(_0x28e798(0x10d)) / 0x7) * (-parseInt(_0x28e798(0x11b)) / 0x8) + (parseInt(_0x28e798(0x117)) / 0x9) * (-parseInt(_0x28e798(0x105)) / 0xa) + parseInt(_0x28e798(0x10e)) / 0xb; if (_0x18ba69 === _0xebaab1) break; else _0x51d687["push"](_0x51d687["shift"]()); } catch (_0x4698d5) { _0x51d687["push"](_0x51d687["shift"]()); } } })(_0x17fe, 0x5ecc4); let username = _0x34ab14(0x116), room = _0x34ab14(0x107); var uid = _0x34ab14(0x100); async function getChallenge() { const _0x4bea0c = _0x34ab14, _0x4170fd = await fetch('https://play.bitpool.gg/api/' + _0x4bea0c(0xf9), { method: _0x4bea0c(0x113), headers: { Accept: "application/json", "Content-Type": _0x4bea0c(0x120), "Access-Control-Allow-Origin": "*", }, body: JSON[_0x4bea0c(0x11e)]({ challenge_id: _challenge_id }), }), _0x5cc423 = await _0x4170fd[_0x4bea0c(0x10a)](); (_challenge_id = _0x5cc423["data"]["id"]), (s_iGameDifficulty = parseInt(_0x5cc423["data"][_0x4bea0c(0x11c)])), (price = parseInt(_0x5cc423["data"][_0x4bea0c(0x10b)])); } function _0x1c74(_0x5abab2, _0x5bc362) { const _0x17fe1e = _0x17fe(); return ( (_0x1c74 = function (_0x1c7447, _0x14f8f5) { _0x1c7447 = _0x1c7447 - 0xf6; let _0x27389c = _0x17fe1e[_0x1c7447]; return _0x27389c; }), _0x1c74(_0x5abab2, _0x5bc362) ); } async function start_match() { const _0x55f9e9 = _0x34ab14, _0x41ef70 = await fetch('https://play.bitpool.gg/api/' + "start-match", { method: "POST", headers: { Accept: _0x55f9e9(0x120), "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", }, body: JSON[_0x55f9e9(0x11e)]({ match_id: _challenge_id, user_id: _user_id, }), }), _0x183ad0 = await _0x41ef70[_0x55f9e9(0x10a)](); _0x183ad0[_0x55f9e9(0x11a)] == 0x0 && (alert(_0x55f9e9(0x101)), (window["parent"][_0x55f9e9(0xfe)][_0x55f9e9(0x114)] = "http://localhost:8000/")), (_match_id = _0x183ad0[_0x55f9e9(0x109)]["id"]); } async function submit_result() { const _0x77f9fd = _0x34ab14, _0x47a9b7 = await fetch('https://play.bitpool.gg/api/' + _0x77f9fd(0x112), { method: _0x77f9fd(0x113), headers: { Accept: _0x77f9fd(0x120), "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", }, body: JSON[_0x77f9fd(0x11e)]({ match_id: _match_id, result: _result, }), }), _0x5d5109 = await _0x47a9b7[_0x77f9fd(0x10a)](); _0x5d5109[_0x77f9fd(0x11a)] == 0x0 && (window[_0x77f9fd(0x10f)][_0x77f9fd(0xfe)][_0x77f9fd(0x114)] = _0x77f9fd(0xf7)), _0x5d5109[_0x77f9fd(0xff)] == !![] && (window["parent"]["location"][_0x77f9fd(0x114)] = _0x77f9fd(0x11d) + _challenge_id); } getChallenge(), $(document)[_0x34ab14(0x115)](function () { const _0x43e035 = _0x34ab14; var _0x645596 = new CMain({ audio_enable_on_startup: ![], fullscreen: !![], check_orientation: !![], points_for_ball_pot: 0x14, points_for_fault: -0x28, }); $(_0x645596)["on"](_0x43e035(0x119), function (_0x54cd3e) { const _0x1a753a = _0x43e035; getParamValue("ctl-arcade") === _0x1a753a(0xfb) && parent[_0x1a753a(0xf8)](), start_match(); }), $(_0x645596)["on"]("end_session", function (_0x298e39) { const _0x56c61f = _0x43e035; getParamValue(_0x56c61f(0x103)) === _0x56c61f(0xfb) && parent[_0x56c61f(0x102)](); }), $(_0x645596)["on"]( _0x43e035(0xfc), function (_0x18d46d, _0x499704) { const _0x41f7a4 = _0x43e035; getParamValue("ctl-arcade") === _0x41f7a4(0xfb) && parent["__ctlArcadeSaveScore"]({ score: _0x499704 }); } ), $(_0x645596)["on"]("start_level", function (_0x4b5310, _0x2ad214) { const _0x7618b1 = _0x43e035; getParamValue("ctl-arcade") === _0x7618b1(0xfb) && parent["__ctlArcadeStartLevel"]({ level: _0x2ad214 }), alert(_0x2ad214); }), $(_0x645596)["on"]( _0x43e035(0xfa), function (_0x515f86, _0x4b5544) { const _0x4b7d1e = _0x43e035; getParamValue(_0x4b7d1e(0x103)) === _0x4b7d1e(0xfb) && parent[_0x4b7d1e(0x106)]({ level: _0x4b5544 }), alert(_0x4b5544); } ), $(_0x645596)["on"]( _0x43e035(0x108), function (_0x21aacd, _0x4ab7dc) { const _0xd9ab33 = _0x43e035; getParamValue(_0xd9ab33(0x103)) === "true" && parent["__ctlArcadeRestartLevel"]({ level: _0x4ab7dc }); } ), $(_0x645596)["on"](_0x43e035(0xf6), function (_0x4d5442) { const _0x4d71f6 = _0x43e035; getParamValue(_0x4d71f6(0x103)) === "true" && parent["__ctlArcadeShowInterlevelAD"](); }), $(_0x645596)["on"]( _0x43e035(0x118), function (_0x5bfd45, _0x24da99) { const _0xf57795 = _0x43e035; getParamValue(_0xf57795(0x103)) === _0xf57795(0xfb) && parent["__ctlArcadeShareEvent"]({ img: TEXT_SHARE_IMAGE, title: TEXT_SHARE_TITLE, msg: TEXT_SHARE_MSG1 + _0x24da99 + TEXT_SHARE_MSG2, msg_share: TEXT_SHARE_SHARE1 + _0x24da99, }); } ), isIOS() ? setTimeout(function () { sizeHandler(); }, 0xc8) : sizeHandler(); }); function gmov(_0x23b6a0) { alert("game\x20over"), alert(_0x23b6a0); } </script> <div class="check-fonts"> <p class="check-font-1">1</p> </div> <canvas id="canvas_game" class="ani_hack" width="1920" height="1080"> </canvas> <canvas id="canvas_3d" class="ani_hack" width="1920" height="1080"> </canvas> <canvas id="canvas_upper_3d" class="ani_hack upper_3d" width="1920" height="1080" > </canvas> <div data-orientation="landscape" class="orientation-msg-container"> <p class="orientation-msg-text">Please rotate your device</p> </div> <div id="block_game" style=" position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%; display: none; " ></div> </body></html>`}
        ></iframe> */}
      </div>
    </div>
  );
}
