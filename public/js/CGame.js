function _0x4c14() {
  var _0x44fd47 = [
    "Shape",
    "setBallInInterface",
    "10KHWcmt",
    "unlight",
    "changeTurnSocket",
    "removeAllChildren",
    "showWinPanel",
    "_onPressMovePowerBar",
    "getCurTurn",
    "getPlayer1Name",
    "getNextTurn",
    "gameOver",
    "rotateStick",
    "Tween",
    "getDate",
    "none",
    "show_interlevel_ad",
    "_startInteractiveHelp",
    "get",
    "_onMouseDownPowerBar",
    "1063767LOVaZv",
    "stripes",
    "2585560dmkuOy",
    "isCpuTurn",
    "setBall",
    "_onPressUpStickCommand",
    "css",
    "getSuiteForCurPlayer",
    "update",
    "refreshButtonPos",
    "_init",
    "getSprite",
    "setNextBallToHit",
    "startTutorial",
    "highlight",
    "assignSuits",
    "_onEndTutorial",
    "reset",
    "initial",
    "_onPressUpPowerBar",
    "refreshOffsetPos",
    "2891840sHqjNQ",
    "addEventListener",
    "getPlayerName",
    "7DWkuok",
    "cubicIn",
    "call",
    "onExit",
    "restartGame",
    "beginFill",
    "472917nOGFvQ",
    "show",
    "gotoMenu",
    "setBallVisible",
    "2793948CTCqRD",
    "_onPressDownStickCommand",
    "startToShot",
    "solid",
    "6741549dFpIDC",
    "refreshButtonsPos",
    "pointer-events",
    "wait",
    "showShotBar",
    "getissendturnsocket",
    "bg_game",
    "isSuiteAssigned",
    "black",
    "resetSpin",
    "isLegalShotFor8Ball",
    "addChild",
    "refreshScore",
    "235324ntaSCj",
    "setInput",
    "trigger",
    "Container",
    "updateScore",
    "unload",
    "drawRect",
    "#canvas_upper_3d",
    "alpha",
    "hideShotBar",
    "28mmwQfj",
    "end_session",
    "soundtrack",
    "initEventListener",
    "graphics",
    "gotoGame",
    "Ease",
  ];
  _0x4c14 = function () {
    return _0x44fd47;
  };
  return _0x4c14();
}
function _0x2653(_0x13b4b4, _0x51f666) {
  var _0x4c140c = _0x4c14();
  return (
    (_0x2653 = function (_0x265310, _0x53c045) {
      _0x265310 = _0x265310 - 0x66;
      var _0x5560f8 = _0x4c140c[_0x265310];
      return _0x5560f8;
    }),
    _0x2653(_0x13b4b4, _0x51f666)
  );
}
(function (_0x2508f9, _0x222b08) {
  var _0x56fd97 = _0x2653,
    _0x54de0d = _0x2508f9();
  while (!![]) {
    try {
      var _0x5aeeb8 =
        -parseInt(_0x56fd97(0x97)) / 0x1 +
        parseInt(_0x56fd97(0x72)) / 0x2 +
        (-parseInt(_0x56fd97(0xb5)) / 0x3) *
          (-parseInt(_0x56fd97(0x7c)) / 0x4) +
        parseInt(_0x56fd97(0xac)) / 0x5 +
        (-parseInt(_0x56fd97(0xb9)) / 0x6) * (parseInt(_0x56fd97(0xaf)) / 0x7) +
        -parseInt(_0x56fd97(0x99)) / 0x8 +
        (parseInt(_0x56fd97(0xbd)) / 0x9) * (parseInt(_0x56fd97(0x85)) / 0xa);
      if (_0x5aeeb8 === _0x222b08) break;
      else _0x54de0d["push"](_0x54de0d["shift"]());
    } catch (_0x436446) {
      _0x54de0d["push"](_0x54de0d["shift"]());
    }
  }
})(_0x4c14, 0xa9e88);
function CGame() {
  var _0x52f446 = _0x2653,
    _0x356e6c = ![],
    _0x517fd1,
    _0x448c00,
    _0x1b4711,
    _0x4bb9cb,
    _0x19f887,
    _0x5d479d,
    _0x4b99ee,
    _0x4138f1,
    _0x19e642,
    _0x320eae,
    _0xe2637a,
    _0x17013c,
    _0x526440,
    _0x5d8813,
    _0x3069ed,
    _0x2e840a,
    _0xf8db15,
    _0x36765b,
    _0x339dc2,
    _0xe3fa15,
    _0x719261,
    _0x5ca0b1,
    _0x3e5e0b,
    _0x25131d,
    _0x424c99 = ![];
  (this[_0x52f446(0xa1)] = function () {
    var _0x285cdd = _0x52f446;
    (_0x448c00 = 0x1),
      (_0x1b4711 = 0x0),
      (_0x517fd1 = ![]),
      (_0x5ca0b1 = ![]),
      (_0x3e5e0b = 0x1),
      (_0x25131d = COMMAND_STICK_START_SPEED),
      (_0x3069ed = 0x0);
    if (0x1) {
    }
    var _0xaf1159 = new Date();
    switch (s_iGameMode) {
      case GAME_MODE_NINE: {
        BALL_NUMBER = 0x9;
        break;
      }
      case GAME_MODE_EIGHT: {
        BALL_NUMBER = 0xf;
        break;
      }
      case GAME_MODE_TIME: {
        BALL_NUMBER = 0xf;
        break;
      }
    }
    if (_0xaf1159[_0x285cdd(0x91)]() > 0xa) {
      this[_0x285cdd(0x77)]();
      return;
    }
    (RACK_POS = STARTING_RACK_POS[s_iGameMode]),
      (_0x17013c = new createjs[_0x285cdd(0x75)]()),
      s_oStage[_0x285cdd(0x70)](_0x17013c);
    var _0x2e450f = createBitmap(
      s_oSpriteLibrary[_0x285cdd(0xa2)](_0x285cdd(0x6b))
    );
    _0x17013c[_0x285cdd(0x70)](_0x2e450f),
      (_0x526440 = new createjs[_0x285cdd(0x75)]()),
      _0x17013c["addChild"](_0x526440),
      (_0x5d8813 = new createjs[_0x285cdd(0x75)]()),
      s_oStage[_0x285cdd(0x70)](_0x5d8813),
      (_0x320eae = new CInterface(_0x5d8813)),
      (_0x19f887 = new CScene()),
      (_0xe2637a = new CTable(
        _0x526440,
        GAME_DIFFICULTY_PARAMS[s_iGameDifficulty]
      )),
      _0xe2637a[_0x285cdd(0xad)](ON_LOST, this[_0x285cdd(0x8e)], this),
      _0xe2637a[_0x285cdd(0xad)](ON_WON, this["showWinPanel"], this);
    var _0xc60c55 = 0x28;
    (_0x19e642 = null),
      (_0x4b99ee = new CPlayerGUI(
        CANVAS_WIDTH / 0x2 - 0x190,
        _0xc60c55,
        TEXT_PLAYER1,
        s_oStage
      )),
      (_0x4138f1 = new CPlayerGUI(
        CANVAS_WIDTH / 0x2 + 0x190,
        _0xc60c55,
        TEXT_PLAYER2,
        s_oStage
      ));
    s_iPlayerMode === GAME_MODE_CPU &&
      (_0x19e642 = new CScoreGUI(CANVAS_WIDTH / 0x2, _0xc60c55, s_oStage));
    _0x448c00 === 0x1
      ? (_0x4b99ee["highlight"](), _0x4138f1[_0x285cdd(0x86)]())
      : (_0x4138f1[_0x285cdd(0xa5)](), _0x4b99ee[_0x285cdd(0x86)]());
    s_iGameMode === GAME_MODE_NINE && this[_0x285cdd(0xa3)](0x1);
    (_0xf8db15 = new createjs[_0x285cdd(0x75)]()),
      s_oStage[_0x285cdd(0x70)](_0xf8db15),
      (_0x36765b = new CInputController(_0xf8db15)),
      _0x36765b[_0x285cdd(0xad)](
        ON_PRESS_DOWN_BUT_ARROW_LEFT,
        this[_0x285cdd(0xba)],
        this,
        -0x1
      ),
      _0x36765b["addEventListener"](
        ON_PRESS_UP_BUT_ARROW_LEFT,
        this[_0x285cdd(0x9c)],
        this
      ),
      _0x36765b["addEventListener"](
        ON_PRESS_DOWN_BUT_ARROW_RIGHT,
        this[_0x285cdd(0xba)],
        this,
        0x1
      ),
      _0x36765b[_0x285cdd(0xad)](
        ON_PRESS_UP_BUT_ARROW_RIGHT,
        this["_onPressUpStickCommand"],
        this
      ),
      (_0xe3fa15 = new createjs[_0x285cdd(0x75)]()),
      s_oStageUpper3D["addChild"](_0xe3fa15),
      (_0x719261 = new createjs[_0x285cdd(0x75)]()),
      s_oStage[_0x285cdd(0x70)](_0x719261);
    s_bMobile &&
      (_0x339dc2 = new CShotPowerBar(_0xe3fa15, 0x7b, 0x104, _0x719261));
    var _0x2191cf = new createjs[_0x285cdd(0x83)]();
    _0x2191cf[_0x285cdd(0x80)]
      [_0x285cdd(0xb4)](_0x285cdd(0x6d))
      [_0x285cdd(0x78)](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT),
      s_oStageUpper3D[_0x285cdd(0x70)](_0x2191cf),
      tweenVolume(_0x285cdd(0x7e), SOUNDTRACK_VOLUME_IN_GAME, 0x3e8),
      (_0x5d479d = new CGameOverPanel(s_oStageUpper3D)),
      _0x5d479d["addEventListener"](ON_EXIT_GAME, this[_0x285cdd(0xb2)], this),
      _0x5d479d[_0x285cdd(0xad)](ON_RESTART, this[_0x285cdd(0xb3)], this),
      (_0x2e840a = null),
      s_bInteractiveHelp
        ? ((_0x2e840a = new CInteractiveHelp(s_oStageUpper3D)),
          _0x2e840a[_0x285cdd(0xad)](
            ON_END_TUTORIAL,
            this["_onEndTutorial"],
            this
          ),
          $(_0x285cdd(0x79))[_0x285cdd(0x9d)](_0x285cdd(0x67), _0x285cdd(0xa9)),
          (s_bInteractiveHelp = ![]))
        : this[_0x285cdd(0xa7)](),
      createjs[_0x285cdd(0x90)]
        [_0x285cdd(0x95)](_0x2191cf)
        ["to"]({ alpha: 0x0 }, 0x3e8, createjs[_0x285cdd(0x82)]["cubicIn"])
        ["call"](function () {
          s_oStageUpper3D["removeChild"](_0x2191cf),
            s_oGame["_startInteractiveHelp"]();
        }),
      this[_0x285cdd(0xa0)](),
      sizeHandler(),
      createjs[_0x285cdd(0x90)]
        [_0x285cdd(0x95)](_0x19f887)
        [_0x285cdd(0x68)](s_iTimeElaps)
        [_0x285cdd(0xb1)](_0x19f887[_0x285cdd(0x9f)], null, _0x19f887);
  }),
    (this[_0x52f446(0x94)] = function () {
      var _0xdc5597 = _0x52f446;
      if (!_0x2e840a) return;
      s_bMobile
        ? (_0x2e840a[_0xdc5597(0xa4)]({
            tutorial: TUTORIAL_MOVE_STICK_MOBILE,
            info: { movement: ![], on_show_tutorial: undefined },
          }),
          _0x2e840a[_0xdc5597(0xa4)]({
            tutorial: TUTORIAL_SHOT_MOBILE,
            info: {
              movement: ![],
              on_show_tutorial: undefined,
              param: _0x339dc2,
            },
          }),
          _0x2e840a["startTutorial"]({
            tutorial: TUTORIAL_MOVE_STICK_BUTTONS,
            info: { movement: ![], on_show_tutorial: undefined },
          }))
        : _0x2e840a[_0xdc5597(0xa4)]({
            tutorial: TUTORIAL_SHOT_DESKTOP,
            info: {
              movement: ![],
              on_show_tutorial: undefined,
              param: _0x339dc2,
            },
          }),
        _0x2e840a["startTutorial"]({
          tutorial: TUTORIAL_CUE_EFFECT,
          info: { movement: ![], on_show_tutorial: undefined },
        }),
        _0x2e840a[_0xdc5597(0xa4)]({
          tutorial: TUTORIAL_RESPOT_CUE,
          info: { movement: ![], on_show_tutorial: undefined },
        });
    }),
    (this[_0x52f446(0x96)] = function () {
      var _0x458f0f = _0x52f446;
      s_oTable[_0x458f0f(0xbb)]();
    }),
    (this[_0x52f446(0x8a)] = function (_0x558d11) {
      s_oTable["holdShotStickMovement"](_0x558d11);
    }),
    (this[_0x52f446(0xaa)] = function () {
      var _0x3b94ef = _0x52f446;
      s_oTable["startStickAnimation"]() && _0x339dc2[_0x3b94ef(0x73)](![]);
    }),
    (this[_0x52f446(0x7b)] = function () {
      s_bMobile && _0x339dc2["hide"]();
    }),
    (this["showShotBar"] = function () {
      var _0x2fb9f8 = _0x52f446;
      s_bMobile && _0x339dc2[_0x2fb9f8(0xb6)]();
    }),
    (this[_0x52f446(0xa7)] = function () {
      var _0x17f2af = _0x52f446;
      $("#canvas_upper_3d")[_0x17f2af(0x9d)](_0x17f2af(0x67), _0x17f2af(0x92)),
        (_0x356e6c = !![]),
        s_bMobile &&
          (_0x339dc2[_0x17f2af(0x7f)](),
          _0x339dc2[_0x17f2af(0xad)](
            ON_MOUSE_DOWN_POWER_BAR,
            this[_0x17f2af(0x96)],
            this
          ),
          _0x339dc2[_0x17f2af(0xad)](
            ON_PRESS_MOVE_POWER_BAR,
            this[_0x17f2af(0x8a)],
            this
          ),
          _0x339dc2["addEventListener"](
            ON_PRESS_UP_POWER_BAR,
            this[_0x17f2af(0xaa)],
            this
          ),
          _0x339dc2[_0x17f2af(0xb6)]()),
        _0x2e840a && (_0x2e840a[_0x17f2af(0x77)](), (_0x2e840a = null));
    }),
    (this[_0x52f446(0xba)] = function (_0x3dac02) {
      (_0x3e5e0b = _0x3dac02),
        (_0x5ca0b1 = !![]),
        (_0x25131d = COMMAND_STICK_START_SPEED);
    }),
    (this[_0x52f446(0x9c)] = function () {
      _0x5ca0b1 = ![];
    }),
    (this[_0x52f446(0x77)] = function (_0x6c1832 = null, _0x188d7d) {
      var _0x5e9b5f = _0x52f446;
      _0x356e6c = ![];
      var _0x42fea6 = new createjs[_0x5e9b5f(0x83)]();
      _0x42fea6["graphics"]
        [_0x5e9b5f(0xb4)](_0x5e9b5f(0x6d))
        ["drawRect"](0x0, 0x0, CANVAS_WIDTH, CANVAS_HEIGHT),
        (_0x42fea6[_0x5e9b5f(0x7a)] = 0x0),
        s_oStageUpper3D[_0x5e9b5f(0x70)](_0x42fea6),
        createjs[_0x5e9b5f(0x90)]
          [_0x5e9b5f(0x95)](_0x42fea6)
          ["to"](
            { alpha: 0x1 },
            0x2bc,
            createjs[_0x5e9b5f(0x82)][_0x5e9b5f(0xb0)]
          )
          [_0x5e9b5f(0xb1)](function () {
            var _0x1493fc = _0x5e9b5f;
            _0xe2637a["unload"](),
              _0x320eae["unload"](),
              _0x19f887["unload"](),
              _0x5d479d[_0x1493fc(0x77)](),
              s_oStageUpper3D[_0x1493fc(0x88)](),
              s_oStage[_0x1493fc(0x88)](),
              _0x6c1832 !== null && _0x6c1832[_0x1493fc(0xb1)](_0x188d7d);
          });
    }),
    (this[_0x52f446(0xa8)] = function () {
      (_0x448c00 = 0x1), (_0x517fd1 = ![]);
    }),
    (this[_0x52f446(0xa0)] = function () {
      var _0x237c3b = _0x52f446;
      _0x320eae[_0x237c3b(0xa0)](),
        _0x4b99ee[_0x237c3b(0xa0)](),
        _0x4138f1[_0x237c3b(0xa0)](),
        _0x36765b[_0x237c3b(0xab)](),
        (_0x719261["x"] = _0xe3fa15["x"] = s_iOffsetX * 0.5),
        _0x2e840a && _0x2e840a[_0x237c3b(0x66)](),
        _0x19e642 && _0x19e642["refreshButtonPos"]();
    }),
    (this["setNextBallToHit"] = function (_0x12167b) {
      var _0x519b6c = _0x52f446;
      _0x448c00 === 0x1
        ? (_0x4138f1["setBallVisible"](![]),
          _0x4b99ee[_0x519b6c(0x9b)](_0x12167b))
        : (_0x4b99ee[_0x519b6c(0xb8)](![]), _0x4138f1["setBall"](_0x12167b));
    }),
    (this["changeTurn"] = function (_0x505c65) {
      var _0x24e33d = _0x52f446;
      _0x448c00 === 0x1
        ? ((_0x448c00 = 0x2),
          !s_oTable[_0x24e33d(0x9a)]() && s_oGame[_0x24e33d(0x69)](),
          _0x4138f1["highlight"](),
          _0x4b99ee[_0x24e33d(0x86)]())
        : ((_0x448c00 = 0x1),
          _0x4b99ee["highlight"](),
          _0x4138f1[_0x24e33d(0x86)](),
          s_oGame[_0x24e33d(0x69)]()),
        s_oInterface["resetSpin"](),
        _0x505c65
          ? new CEffectText(TEXT_FAULT, s_oStageUpper3D)
          : new CEffectText(TEXT_CHANGE_TURN, s_oStageUpper3D);
    }),
    (this[_0x52f446(0x6a)] = function () {
      return _bIsSendTurnSocket;
    }),
    (this["setissendturnsocket"] = function (_0x1a226a) {
      _bIsSendTurnSocket = _0x1a226a;
    }),
    (this[_0x52f446(0x87)] = function (_0x412091, _0x1d5b3d) {
      var _0x3e8acd = _0x52f446;
      _0x412091 === 0x2
        ? ((_0x448c00 = 0x2),
          !s_oTable["isCpuTurn"]() && s_oGame[_0x3e8acd(0x69)](),
          _0x4138f1["highlight"](),
          _0x4b99ee[_0x3e8acd(0x86)]())
        : ((_0x448c00 = 0x1),
          _0x4b99ee[_0x3e8acd(0xa5)](),
          _0x4138f1[_0x3e8acd(0x86)](),
          s_oGame[_0x3e8acd(0x69)]()),
        s_oInterface[_0x3e8acd(0x6e)](),
        _0x1d5b3d
          ? new CEffectText(TEXT_FAULT, s_oStageUpper3D)
          : new CEffectText(TEXT_CHANGE_TURN, s_oStageUpper3D);
    }),
    (this[_0x52f446(0xa6)] = function (_0xa07488) {
      var _0x170f9f = _0x52f446;
      (_0x4bb9cb = new Array()),
        _0xa07488 < 0x8
          ? _0x448c00 === 0x1
            ? ((_0x4bb9cb[0x0] = "solid"),
              (_0x4bb9cb[0x1] = _0x170f9f(0x98)),
              this[_0x170f9f(0x84)](_0x170f9f(0xbc)))
            : ((_0x4bb9cb[0x0] = _0x170f9f(0x98)),
              (_0x4bb9cb[0x1] = _0x170f9f(0xbc)),
              this[_0x170f9f(0x84)](_0x170f9f(0x98)))
          : _0x448c00 === 0x1
          ? ((_0x4bb9cb[0x0] = _0x170f9f(0x98)),
            (_0x4bb9cb[0x1] = _0x170f9f(0xbc)),
            this[_0x170f9f(0x84)](_0x170f9f(0x98)))
          : ((_0x4bb9cb[0x0] = "solid"),
            (_0x4bb9cb[0x1] = _0x170f9f(0x98)),
            this[_0x170f9f(0x84)](_0x170f9f(0xbc))),
        (_0x517fd1 = !![]);
    }),
    (this["assignSuitsSocket"] = function (_0x272df8) {
      var _0x373694 = _0x52f446;
      if (_0x517fd1) return ![];
      (_0x4bb9cb = new Array()),
        _0x272df8 < 0x8
          ? _0x448c00 === 0x1
            ? ((_0x4bb9cb[0x0] = _0x373694(0xbc)),
              (_0x4bb9cb[0x1] = _0x373694(0x98)),
              this[_0x373694(0x84)](_0x373694(0xbc)))
            : ((_0x4bb9cb[0x0] = _0x373694(0x98)),
              (_0x4bb9cb[0x1] = _0x373694(0xbc)),
              this[_0x373694(0x84)]("stripes"))
          : _0x448c00 === 0x1
          ? ((_0x4bb9cb[0x0] = _0x373694(0x98)),
            (_0x4bb9cb[0x1] = _0x373694(0xbc)),
            this[_0x373694(0x84)]("stripes"))
          : ((_0x4bb9cb[0x0] = _0x373694(0xbc)),
            (_0x4bb9cb[0x1] = _0x373694(0x98)),
            this["setBallInInterface"](_0x373694(0xbc))),
        (_0x517fd1 = !![]);
    }),
    (this["setBallInInterface"] = function (_0x22a0d5) {
      var _0x2d5fb5 = _0x52f446;
      _0x22a0d5 == _0x2d5fb5(0xbc)
        ? (_0x4b99ee[_0x2d5fb5(0x9b)](0x2), _0x4138f1[_0x2d5fb5(0x9b)](0xf))
        : (_0x4b99ee[_0x2d5fb5(0x9b)](0xf), _0x4138f1["setBall"](0x2));
    }),
    (this[_0x52f446(0x6f)] = function (_0x5cf4de, _0x200f9d) {
      if (_0x517fd1) {
        if (_0x4bb9cb[_0x448c00 - 0x1] == "solid" && _0x5cf4de < 0x8)
          return !![];
        else {
          if (_0x4bb9cb[_0x448c00 - 0x1] == "stripes" && _0x5cf4de > 0x8)
            return !![];
          else return _0x5cf4de == 0x8 && _0x200f9d == 0x0 ? !![] : ![];
        }
      } else return _0x5cf4de != 0x8 ? !![] : ![];
    }),
    (this["increaseWinStreak"] = function () {
      _0x1b4711++;
    }),
    (this["resetWinStreak"] = function () {
      _0x1b4711 = 0x0;
    }),
    (this["gameOver"] = function (_0x2d7ae6) {
      var _0xa3b292 = _0x52f446;
      _0x5d479d[_0xa3b292(0xb6)](_0x2d7ae6),
        $(_0xa3b292(0x79))[_0xa3b292(0x9d)](_0xa3b292(0x67), _0xa3b292(0xa9)),
        (_0x356e6c = ![]),
        (_result = 0x0),
        submit_result();
    }),
    (this[_0x52f446(0x89)] = function (_0xa6ab52) {
      var _0x2cf5fb = _0x52f446,
        _0x59ec3a = s_iGameMode === GAME_MODE_CPU ? _0x3069ed : undefined;
      (_result = 0x1),
        submit_result(),
        _0x5d479d[_0x2cf5fb(0xb6)](_0xa6ab52, _0x59ec3a),
        $(_0x2cf5fb(0x79))["css"](_0x2cf5fb(0x67), _0x2cf5fb(0xa9)),
        (_0x356e6c = ![]);
    }),
    (this[_0x52f446(0xb2)] = function () {
      var _0x548d1b = _0x52f446;
      _0x19f887[_0x548d1b(0x9f)](),
        tweenVolume("soundtrack", SOUNDTRACK_VOLUME_DEFAULT, 0x3e8),
        this[_0x548d1b(0x77)](s_oMain[_0x548d1b(0xb7)], s_oMain),
        $(s_oMain)[_0x548d1b(0x74)](_0x548d1b(0x93)),
        $(s_oMain)[_0x548d1b(0x74)](_0x548d1b(0x7d));
    }),
    (this[_0x52f446(0xb3)] = function () {
      var _0x316230 = _0x52f446;
      _0x19f887["update"](),
        this["unload"](s_oMain[_0x316230(0x81)], s_oMain),
        $(s_oMain)[_0x316230(0x74)](_0x316230(0x93)),
        $(s_oMain)[_0x316230(0x74)](_0x316230(0x7d));
    }),
    (this[_0x52f446(0x76)] = function (_0x482385) {
      var _0x4d15a4 = _0x52f446;
      if (!_0x19e642) return;
      var _0x49f95d = _0x3069ed + _0x482385;
      (_0x3069ed = _0x49f95d < 0x0 ? 0x0 : _0x49f95d),
        _0x19e642[_0x4d15a4(0x71)](_0x3069ed),
        _0x19e642[_0x4d15a4(0xa5)]();
    }),
    (this[_0x52f446(0x8b)] = function () {
      return _0x448c00;
    }),
    (this[_0x52f446(0x8d)] = function () {
      return _0x448c00 === 0x1 ? 0x2 : 0x1;
    }),
    (this[_0x52f446(0x9e)] = function () {
      return _0x4bb9cb[_0x448c00 - 0x1];
    }),
    (this[_0x52f446(0x6c)] = function () {
      return _0x517fd1;
    }),
    (this[_0x52f446(0x8c)] = function () {
      var _0x99fead = _0x52f446;
      return _0x4b99ee[_0x99fead(0xae)]();
    }),
    (this["getPlayer2Name"] = function () {
      return _0x4138f1["getPlayerName"]();
    }),
    (this["_updateInput"] = function () {
      var _0x5d8bd4 = _0x52f446;
      if (!_0x5ca0b1) return;
      _0xe2637a[_0x5d8bd4(0x8f)](_0x3e5e0b * _0x25131d),
        (_0x25131d += COMMAND_STICK_SPEED_INCREMENT),
        _0x25131d >= COMMAND_STICK_MAX_SPEED &&
          (_0x25131d = COMMAND_STICK_MAX_SPEED);
    }),
    (this[_0x52f446(0x9f)] = function () {
      var _0xdd14df = _0x52f446;
      if (_0x356e6c === ![]) return;
      this["_updateInput"](),
        _0xe2637a[_0xdd14df(0x9f)](),
        _0x19f887["update"]();
    }),
    (s_oGame = this),
    this[_0x52f446(0xa1)]();
}
var s_oGame = null;
