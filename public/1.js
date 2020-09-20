(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Admin.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/Admin.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_Sidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/Sidebar.vue */ "./resources/js/backend/views/layouts/Sidebar.vue");
/* harmony import */ var _layouts_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Header.vue */ "./resources/js/backend/views/layouts/Header.vue");
/* harmony import */ var _layouts_Footer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/Footer.vue */ "./resources/js/backend/views/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Admin",
  components: {
    Footer: _layouts_Footer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Header: _layouts_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Sidebar: _layouts_Sidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/backend/services/auth_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',
  methods: {
    logout: function () {
      var _logout = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["logout"]();

              case 2:
                this.$router.push('/admin-login');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", [
    _c(
      "div",
      { attrs: { id: "wrapper" } },
      [
        _c("Sidebar"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "d-flex flex-column",
            attrs: { id: "content-wrapper" }
          },
          [
            _c(
              "div",
              { attrs: { id: "content" } },
              [_c("Header"), _vm._v(" "), _c("router-view")],
              1
            ),
            _vm._v(" "),
            _c("Footer")
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "scroll-to-top rounded", attrs: { href: "#page-top" } },
      [_c("i", { staticClass: "fas fa-angle-up" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("footer", { staticClass: "sticky-footer bg-white" }, [
        _c("div", { staticClass: "container my-auto" }, [
          _c("div", { staticClass: "copyright text-center my-auto" }, [
            _c("span", [_vm._v("Copyright © Your Website 2020")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass:
          "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("ul", { staticClass: "navbar-nav ml-auto" }, [
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
            _vm._m(5),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-right shadow animated--grow-in",
                attrs: { "aria-labelledby": "userDropdown" }
              },
              [
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "dropdown-item", on: { click: _vm.logout } },
                  [
                    _c("i", {
                      staticClass:
                        "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                    }),
                    _vm._v("\n                    Logout\n                ")
                  ]
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-link d-md-none rounded-circle mr-3",
        attrs: { id: "sidebarToggleTop" }
      },
      [_c("i", { staticClass: "fa fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "form",
      {
        staticClass:
          "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
      },
      [
        _c("div", { staticClass: "input-group" }, [
          _c("input", {
            staticClass: "form-control bg-light border-0 small",
            attrs: {
              type: "text",
              placeholder: "Search for...",
              "aria-label": "Search",
              "aria-describedby": "basic-addon2"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "button" } },
              [_c("i", { staticClass: "fas fa-search fa-sm" })]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow d-sm-none" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "searchDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [_c("i", { staticClass: "fas fa-search fa-fw" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
          attrs: { "aria-labelledby": "searchDropdown" }
        },
        [
          _c(
            "form",
            { staticClass: "form-inline mr-auto w-100 navbar-search" },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  staticClass: "form-control bg-light border-0 small",
                  attrs: {
                    type: "text",
                    placeholder: "Search for...",
                    "aria-label": "Search",
                    "aria-describedby": "basic-addon2"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" }
                    },
                    [_c("i", { staticClass: "fas fa-search fa-sm" })]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "alertsDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [
          _c("i", { staticClass: "fas fa-bell fa-fw" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-danger badge-counter" }, [
            _vm._v("3+")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
          attrs: { "aria-labelledby": "alertsDropdown" }
        },
        [
          _c("h6", { staticClass: "dropdown-header" }, [
            _vm._v("\n                Alerts Center\n                ")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-primary" }, [
                  _c("i", { staticClass: "fas fa-file-alt text-white" })
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 12, 2019")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("A new monthly report is ready to download!")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-success" }, [
                  _c("i", { staticClass: "fas fa-donate text-white" })
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 7, 2019")
                ]),
                _vm._v(
                  "\n                    $290.29 has been deposited into your account!\n                "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "mr-3" }, [
                _c("div", { staticClass: "icon-circle bg-warning" }, [
                  _c("i", {
                    staticClass: "fas fa-exclamation-triangle text-white"
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("December 2, 2019")
                ]),
                _vm._v(
                  "\n                    Spending Alert: We've noticed unusually high spending for your account.\n                "
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item text-center small text-gray-500",
              attrs: { href: "#" }
            },
            [_vm._v("Show All Alerts")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow mx-1" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "messagesDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [
          _c("i", { staticClass: "fas fa-envelope fa-fw" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge badge-danger badge-counter" }, [
            _vm._v("7")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
          attrs: { "aria-labelledby": "messagesDropdown" }
        },
        [
          _c("h6", { staticClass: "dropdown-header" }, [
            _vm._v("\n                Message Center\n                ")
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/fn_BT9fwg_E/60x60",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-success" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-weight-bold" }, [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Hi there! I am wondering if you can help me with a problem I've been having."
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Emily Fowler · 58m")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/AU4VPcFN4LE/60x60",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator" })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "I have the photos that you ordered last month, how would you like them sent to you?"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Jae Chun · 1d")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/CS2uCrpNzJY/60x60",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-warning" })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Last month's report looks great, I am very happy with the progress so far, keep up the good work!"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Morgan Alvarez · 2d")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item d-flex align-items-center",
              attrs: { href: "#" }
            },
            [
              _c("div", { staticClass: "dropdown-list-image mr-3" }, [
                _c("img", {
                  staticClass: "rounded-circle",
                  attrs: {
                    src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "status-indicator bg-success" })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("div", { staticClass: "text-truncate" }, [
                  _vm._v(
                    "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good..."
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "small text-gray-500" }, [
                  _vm._v("Chicken the Dog · 2w")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item text-center small text-gray-500",
              attrs: { href: "#" }
            },
            [_vm._v("Read More Messages")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle",
        attrs: {
          href: "#",
          id: "userDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c(
          "span",
          { staticClass: "mr-2 d-none d-lg-inline text-gray-600 small" },
          [_vm._v("Valerie Luna")]
        ),
        _vm._v(" "),
        _c("img", {
          staticClass: "img-profile rounded-circle",
          attrs: { src: "https://source.unsplash.com/QAB-WJcbgJk/60x60" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-user fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n                Profile\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n                Settings\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-list fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v("\n                Activity Log\n                ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      {
        staticClass:
          "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
        attrs: { id: "accordionSidebar" }
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("hr", { staticClass: "sidebar-divider my-0" }),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item active" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: "/admin" } },
              [
                _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                _vm._v(" "),
                _c("span", [_vm._v("Dashboard")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: "/admin/categories" } },
              [
                _c("i", { staticClass: "fas fa-fw fa-table" }),
                _vm._v(" "),
                _c("span", [_vm._v("Danh mục sản phẩm")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: "/admin/products" } },
              [
                _c("i", { staticClass: "fas fa-fw fa-table" }),
                _vm._v(" "),
                _c("span", [_vm._v("Sản phẩm")])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("hr", { staticClass: "sidebar-divider d-none d-md-block" }),
        _vm._v(" "),
        _vm._m(1)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "sidebar-brand d-flex align-items-center justify-content-center",
        attrs: { href: "index.html" }
      },
      [
        _c("div", { staticClass: "sidebar-brand-icon rotate-n-15" }, [
          _c("i", { staticClass: "fas fa-laugh-wink" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar-brand-text mx-3" }, [
          _vm._v("SB Admin "),
          _c("sup", [_vm._v("2")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center d-none d-md-inline" }, [
      _c("button", {
        staticClass: "rounded-circle border-0",
        attrs: { id: "sidebarToggle" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/views/Admin.vue":
/*!**********************************************!*\
  !*** ./resources/js/backend/views/Admin.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=f877ea76&scoped=true& */ "./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f877ea76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/Admin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/Admin.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/backend/views/Admin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Admin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Admin.vue?vue&type=template&id=f877ea76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/Admin.vue?vue&type=template&id=f877ea76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_f877ea76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/layouts/Footer.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/views/layouts/Footer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=15e35f5b& */ "./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=15e35f5b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Footer.vue?vue&type=template&id=15e35f5b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_15e35f5b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/layouts/Header.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/views/layouts/Header.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=3715c34d& */ "./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/layouts/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=3715c34d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Header.vue?vue&type=template&id=3715c34d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_3715c34d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/views/layouts/Sidebar.vue":
/*!********************************************************!*\
  !*** ./resources/js/backend/views/layouts/Sidebar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=4f33084c& */ "./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/layouts/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=4f33084c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/views/layouts/Sidebar.vue?vue&type=template&id=4f33084c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_4f33084c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);