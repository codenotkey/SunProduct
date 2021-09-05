// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var myCss = "\n/*1.\u51C6\u5907\u5757\u753B\u5E03*/\n\n.contain{\n    height: 100vh;\n    width: 100%;\n    background-color: #333333;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* 2.\u753B\u51FA\u4E00\u4E2A\u5706,\u5C06\u5929\u7A7A\u753B\u4E3A\u84DD\u8272\uFF0C\u52A0\u4E0A\u5185\u9634\u5F71*/\n.land{\n    height: 200px;\n    width: 200px;\n    background: #0071e2;\n    border-radius: 50%;\n    box-shadow: 0px 3px 5px 3px #222 inset;\n    overflow: hidden;\n    transform: scale(2.5);\n    position: relative;\n}\n\n/* 3.\u6DFB\u52A0\u9EC4\u8272\u7684\u6C99\u6F20*/\n.ground{\n    background: #d8a811;\n    width: 100%;\n    height: 200px;\n    top: 120px;\n    position: absolute;\n}\n\n/* 4.\u753B\u51FA\u6E10\u53D8\u8272\u7684\u6708\u4EAE*/\n.sun{\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background:linear-gradient(135deg , #ea5600 0%, #e50000 100%);\n    position: absolute;\n    left: 80px;\n    top: 20px;\n    animation: sunAnimation 1.2s ease-in-out infinite alternate;\n}\n\n/* 5.\u6DFB\u52A0\u767D\u8272\u7684\u661F\u661F*/\n.stars{\n    position: absolute;\n    width: 2px;\n    height: 2px;\n    top: 60px;\n    left: 62px;\n    border-radius: 5px;\n    background: white;\n    animation: sparkle 1.9s ease-in-out infinite alternate;\n}\n\n/* 6.\u5229\u7528\u4F2A\u5143\u7D20\u591A\u6DFB\u52A0\u4E24\u9897\u661F\u661F*/\n.stars::after{\n    position: absolute;\n    content: ' ';\n    right: 20px;\n    top: 20px;\n    width: 2px;\n    height: 2px;\n    border-radius: 5px;\n    background: inherit;\n    animation: sparkle 1.5s ease-in-out infinite alternate;\n}\n.stars::before{\n    position: absolute;\n    content: ' ';\n    right:20px;\n    bottom: 26px;\n    width: 2px;\n    height: 2px;\n    border-radius: 5px;\n    background: inherit;\n    animation: sparkle 1.2s ease-in-out infinite alternate;\n}\n\n/* 6.\u5229\u7528+\u9009\u62E9\u5668\uFF0C\u590D\u5236\u4E00\u4EFD\u661F\u661F\uFF0C\u5E76\u79FB\u52A8\u5B83\u7684\u4F4D\u7F6E*/\n.stars + .stars {\n    top: 60px;\n    left: 130px;\n    } \n.stars + .stars::after{\n    right: -20px;\n    top: 20px;\n    }\n.stars + .stars::before{\n    right:-20px;\n    bottom: 26px;\n}\n\n /* 7. \u5229\u7528border\u75314\u4E2A\u4E09\u89D2\u5F62\u7EC4\u6210,\u753B\u51FA\u5C71\u8109 */\n.mountain{\n    position: absolute;\n    bottom: 20px;\n    left:70px;\n    border-left: 30px solid transparent;   \n    border-right: 90px solid transparent; \n    border-bottom: 100px solid #555;\n}\n\n/*8. \u7528\u4F2A\u5143\u7D20\u753B\u51FA\u6C99\u6F20\u7684\u6697\u90E8 */\n.mountain::before{\n    position: absolute;\n    content: \"\";\n    left: -70px;\n    border-left: 60px solid transparent;\n    /* border-right: 0px solid transparent; */\n    border-bottom: 100px solid #444;\n    /* \u6B6A\u659C\u4E00\u5B9A\u7684\u5EA6\u6570\uFF0C\u505A\u6210\u5C71\u7684\u6697\u9762 */\n    transform: skewX(-11deg);\n}\n.mountain+.mountain{\n    bottom: -5px;\n    left: 120px;\n}\n.mountain+.mountain +.mountain{\n    bottom: -12px;\n    left: 0;\n    border-bottom: 100px solid #777777;\n}\n.mountain+.mountain+.mountain::before{\n    border-bottom: 100px solid #666;\n}\n\n/*10. \u6DFB\u52A0\u661F\u661F\u548C\u6708\u4EAE\u7684\u52A8\u753B */\n@keyframes sparkle {\n    0%{\n        background-color: #fff;\n        transform: scale(1);\n    }\n    100%{\n        background-color: #ffce00;;\n        transform: scale(1.1);\n    }\n}\n@keyframes sunAnimation {\n    0%{\n        background: linear-gradient(135deg, #ea5600 0%, #e50000 100%);\n        transform: scale(1);\n    }\n    100%{\n        background: linear-gradient(135deg, #f55d05 0%, #e00000 100%);\n        transform: scale(1.1);\n    }\n}    \n";
var _default = myCss;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string2 = '';
var player = {
  id: undefined,
  time: 50,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    if (_css.default[player.n] === '\n') {
      string2 += '<br>';
    } else if (_css.default[player.n] === ' ') {
      string2 += '&nbsp';
    } else {
      string2 += _css.default[player.n];
    }

    player.ui.demo.innerHTML = string2;
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 600;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/陈森/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51771" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/陈森/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map