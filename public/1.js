webpackJsonp([1],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bea22a82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/History/history.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bea22a82", Component.options)
  } else {
    hotAPI.reload("data-v-bea22a82", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("828600a2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bea22a82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./history.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bea22a82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./history.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "\n@media screen and (max-width: 500px){\n.el-form-item[data-v-bea22a82]{\n\t\twidth: 100%;\n}\n}\n.content[data-v-bea22a82] {\n\tmargin: 10px;\n\ttext-align: center;\n}\n.name[data-v-bea22a82]{\n\twidth: 217px;\n}\n", ""]);

// exports


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  data: function data() {
    return {
      formData: {
        class: '',
        group: '',
        name: ''
      },
      options: [{
        label: '开发', value: 0
      }, {
        label: 'Python', value: 1
      }, {
        label: '美工', value: 2
      }],
      group_names: {},
      leave_users: []

    };
  },

  methods: {
    select_class: function select_class(val) {
      for (var i = 0; i < this.options.length; i++) {
        if (val == this.options[i].value) {
          return this.options[i].label;break;
        }
      }
    },
    onSubmit: function onSubmit() {
      console.log(this.formData.class);
      this.$http.post('/his_select', {
        'class_name': this.formData.class,
        'group_id': this.formData.group,
        'user_name': this.formData.name
      }).then(function (response) {
        var data = response.data;
        this.leave_users = data;
      }).then(function (response) {
        var data = response.data;

        if (data.code == 1) {
          this.$message({
            showClose: true,
            message: data.msg,
            type: 'error'
          });
        } else {
          this.leave_users = data;
        }
      });
    },
    onExport: function onExport() {
      console.log('nininin');
      this.$http.post('/export');
    }
  },
  watch: {
    'formData.class': {
      handler: function handler(val, oldval) {
        // if(val == oldval) return false;

        this.formData.group = '';

        this.$http.post('/grouphis', {
          'classid': val
        }).then(function (response) {
          var data = response.data;
          this.group_names = data;
        });
      },
      deep: true
    }
  },
  created: function created() {
    this.$http.post('/leave_select').then(function (response) {
      var data = response.data;
      this.leave_users = data;
      console.log(data);
    });
  }

});

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "container" } },
    [
      _c("header-menu"),
      _vm._v(" "),
      _c("sign-menu"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c(
            "el-form",
            { staticClass: "demo-form-inline", attrs: { inline: true } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "方向" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "方向" },
                      model: {
                        value: _vm.formData.class,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "class", $$v)
                        },
                        expression: "formData.class"
                      }
                    },
                    _vm._l(_vm.options, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.label, value: item.value }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "组别" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "组别" },
                      model: {
                        value: _vm.formData.group,
                        callback: function($$v) {
                          _vm.$set(_vm.formData, "group", $$v)
                        },
                        expression: "formData.group"
                      }
                    },
                    _vm._l(_vm.group_names, function(item) {
                      return _c("el-option", {
                        key: item.id,
                        attrs: { label: item.group_name, value: item.id }
                      })
                    })
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "姓名" } },
                [
                  _c("el-input", {
                    staticClass: "name",
                    attrs: { placeholder: "请输入内容" },
                    model: {
                      value: _vm.formData.name,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.formData,
                          "name",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "formData.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                    [_vm._v("查询")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.leave_users, border: "" }
            },
            [
              _c("el-table-column", { attrs: { prop: "name", label: "姓名" } }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "group_id", label: "组别" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "number", label: "本月请假次数", "min-width": "110px" }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bea22a82", module.exports)
  }
}

/***/ })

});