webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/common/src/components/UIElements/Logo/index.js":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/ningqianjia/repo/SuperProps - React Next Landing Page Templates/Superprops/node_modules/common/src/components/UIElements/Logo/index.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ \"../../node_modules/common/src/components/Text/index.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ \"../../node_modules/common/src/components/Link/index.js\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ \"../../node_modules/common/src/components/Image/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ningqianjia/repo/SuperProps - React Next Landing Page Templates/Superprops/node_modules/common/src/components/UIElements/Logo/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Logo = function Logo(_ref) {\n  var logoWrapperStyle = _ref.logoWrapperStyle,\n      logoStyle = _ref.logoStyle,\n      titleStyle = _ref.titleStyle,\n      withAchor = _ref.withAchor,\n      anchorProps = _ref.anchorProps,\n      logoSrc = _ref.logoSrc,\n      title = _ref.title,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"logoWrapperStyle\", \"logoStyle\", \"titleStyle\", \"withAchor\", \"anchorProps\", \"logoSrc\", \"title\"]);\n\n  return __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, logoWrapperStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }), withAchor ? __jsx(\"a\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, anchorProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), logoSrc ? __jsx(_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    src: logoSrc,\n    alt: title\n  }, logoStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  })) : __jsx(_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    content: 'title'\n  }, titleStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? __jsx(_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    src: logoSrc,\n    alt: title\n  }, logoStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  })) : __jsx(_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    content: title\n  }, titleStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = Logo;\nLogo.propTypes = {\n  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,\n  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,\n  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,\n  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,\n  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\n};\nLogo.defaultProps = {\n  logoWrapperStyle: {\n    display: 'inline-block',\n    mr: '1rem',\n    'a:hover,a:focus': {\n      textDecoration: 'none'\n    }\n  },\n  titleStyle: {\n    display: 'inline-block',\n    fontSize: '2rem',\n    lineHeight: 'inherit',\n    whiteSpace: 'nowrap'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\n\nvar _c;\n\n$RefreshReg$(_c, \"Logo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL25pbmdxaWFuamlhL3JlcG8vU3VwZXJQcm9wcyAtIFJlYWN0IE5leHQgTGFuZGluZyBQYWdlIFRlbXBsYXRlcy9TdXBlcnByb3BzL25vZGVfbW9kdWxlcy9jb21tb24vc3JjL2NvbXBvbmVudHMvVUlFbGVtZW50cy9Mb2dvL2luZGV4LmpzP2ZhMmQiXSwibmFtZXMiOlsiTG9nbyIsImxvZ29XcmFwcGVyU3R5bGUiLCJsb2dvU3R5bGUiLCJ0aXRsZVN0eWxlIiwid2l0aEFjaG9yIiwiYW5jaG9yUHJvcHMiLCJsb2dvU3JjIiwidGl0bGUiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheSIsIm1yIiwidGV4dERlY29yYXRpb24iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUNYQyxnQkFEVyxRQUNYQSxnQkFEVztBQUFBLE1BRVhDLFNBRlcsUUFFWEEsU0FGVztBQUFBLE1BR1hDLFVBSFcsUUFHWEEsVUFIVztBQUFBLE1BSVhDLFNBSlcsUUFJWEEsU0FKVztBQUFBLE1BS1hDLFdBTFcsUUFLWEEsV0FMVztBQUFBLE1BTVhDLE9BTlcsUUFNWEEsT0FOVztBQUFBLE1BT1hDLEtBUFcsUUFPWEEsS0FQVztBQUFBLE1BUVJDLEtBUlE7O0FBQUEsU0FVWCxNQUFDLDZDQUFELHlGQUFVQSxLQUFWLEVBQXFCUCxnQkFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHRyxTQUFTLEdBQ1Isa0dBQU9DLFdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHQyxPQUFPLEdBQ04sTUFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRUEsT0FBWjtBQUFxQixPQUFHLEVBQUVDO0FBQTFCLEtBQXFDTCxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRE0sR0FHTixNQUFDLDZDQUFEO0FBQU0sV0FBTyxFQUFFO0FBQWYsS0FBNEJDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKSixDQURRLEdBU1IsbUVBQ0dHLE9BQU8sR0FDTixNQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQSxPQUFaO0FBQXFCLE9BQUcsRUFBRUM7QUFBMUIsS0FBcUNMLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FETSxHQUdOLE1BQUMsNkNBQUQ7QUFBTSxXQUFPLEVBQUVLO0FBQWYsS0FBMEJKLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKSixDQVZKLENBVlc7QUFBQSxDQUFiOztLQUFNSCxJO0FBK0JOQSxJQUFJLENBQUNTLFNBQUwsR0FBaUI7QUFDZkgsU0FBTyxFQUFFSSxpREFBUyxDQUFDQyxNQURKO0FBRWZKLE9BQUssRUFBRUcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGVDtBQUdmWCxrQkFBZ0IsRUFBRVMsaURBQVMsQ0FBQ0csTUFIYjtBQUlmWCxXQUFTLEVBQUVRLGlEQUFTLENBQUNHLE1BSk47QUFLZlYsWUFBVSxFQUFFTyxpREFBUyxDQUFDRyxNQUxQO0FBTWZULFdBQVMsRUFBRU0saURBQVMsQ0FBQ0ksSUFOTjtBQU9mVCxhQUFXLEVBQUVLLGlEQUFTLENBQUNHO0FBUFIsQ0FBakI7QUFVQWIsSUFBSSxDQUFDZSxZQUFMLEdBQW9CO0FBQ2xCZCxrQkFBZ0IsRUFBRTtBQUNoQmUsV0FBTyxFQUFFLGNBRE87QUFFaEJDLE1BQUUsRUFBRSxNQUZZO0FBR2hCLHVCQUFtQjtBQUNqQkMsb0JBQWMsRUFBRTtBQURDO0FBSEgsR0FEQTtBQVFsQmYsWUFBVSxFQUFFO0FBQ1ZhLFdBQU8sRUFBRSxjQURDO0FBRVZHLFlBQVEsRUFBRSxNQUZBO0FBR1ZDLGNBQVUsRUFBRSxTQUhGO0FBSVZDLGNBQVUsRUFBRTtBQUpGO0FBUk0sQ0FBcEI7QUFlZXJCLG1FQUFmIiwiZmlsZSI6Ii4uLy4uL25vZGVfbW9kdWxlcy9jb21tb24vc3JjL2NvbXBvbmVudHMvVUlFbGVtZW50cy9Mb2dvL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi8uLi9UZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL0xpbmsnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJztcblxuY29uc3QgTG9nbyA9ICh7XG4gIGxvZ29XcmFwcGVyU3R5bGUsXG4gIGxvZ29TdHlsZSxcbiAgdGl0bGVTdHlsZSxcbiAgd2l0aEFjaG9yLFxuICBhbmNob3JQcm9wcyxcbiAgbG9nb1NyYyxcbiAgdGl0bGUsXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxMaW5rIHsuLi5wcm9wc30gey4uLmxvZ29XcmFwcGVyU3R5bGV9PlxuICAgIHt3aXRoQWNob3IgPyAoXG4gICAgICA8YSB7Li4uYW5jaG9yUHJvcHN9PlxuICAgICAgICB7bG9nb1NyYyA/IChcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvU3JjfSBhbHQ9e3RpdGxlfSB7Li4ubG9nb1N0eWxlfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9eyd0aXRsZSd9IHsuLi50aXRsZVN0eWxlfSAvPlxuICAgICAgICApfVxuICAgICAgPC9hPlxuICAgICkgOiAoXG4gICAgICA8PlxuICAgICAgICB7bG9nb1NyYyA/IChcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvU3JjfSBhbHQ9e3RpdGxlfSB7Li4ubG9nb1N0eWxlfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0IGNvbnRlbnQ9e3RpdGxlfSB7Li4udGl0bGVTdHlsZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICl9XG4gIDwvTGluaz5cbik7XG5cbkxvZ28ucHJvcFR5cGVzID0ge1xuICBsb2dvU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsb2dvV3JhcHBlclN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2dvU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHdpdGhBY2hvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGFuY2hvclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuTG9nby5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ29XcmFwcGVyU3R5bGU6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtcjogJzFyZW0nLFxuICAgICdhOmhvdmVyLGE6Zm9jdXMnOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlU3R5bGU6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBMb2dvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/common/src/components/UIElements/Logo/index.js\n");

/***/ })

})