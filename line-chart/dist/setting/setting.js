System.register(["jimu-core","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/basic/color-picker","jimu-core/react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lucide-react/dist/esm/Icon.js":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/plus.js":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/plus.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plus", __iconNode);


//# sourceMappingURL=plus.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/trash.js":
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/trash.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Trash)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("trash", __iconNode);


//# sourceMappingURL=trash.js.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/line-chart/src/setting/setting.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/** @jsx jsx */






// Общий стиль для SettingRow: label сверху, отступы, одинаковый размер шрифта
const rowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginBottom: 14,
};
const labelStyle = {
    fontWeight: 500,
    fontSize: 13,
    marginBottom: 2,
    color: "#fff",
};
const sectionStyle = {
    background: "#333",
    borderRadius: 10,
    padding: 16,
    marginBottom: 22,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
};
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.updateAvailableFields = () => {
            var _a;
            const mainDs = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
            if (!mainDs) {
                this.setState({ availableFields: [] });
                return;
            }
            const realDs = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(mainDs.dataSourceId);
            const schema = realDs === null || realDs === void 0 ? void 0 : realDs.getSchema();
            const fields = (schema === null || schema === void 0 ? void 0 : schema.fields) ? Object.keys(schema.fields) : [];
            this.setState({ availableFields: fields });
        };
        this.updateProp = (field, value) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: Object.assign(Object.assign({}, this.props.config), { [field]: value }),
            });
        };
        this.updateLine = (index, key, value) => {
            const newLines = [...(this.props.config.lines || [])];
            newLines[index] = Object.assign(Object.assign({}, newLines[index]), { [key]: value });
            this.updateProp("lines", newLines);
        };
        this.addLine = () => {
            const defaultField = this.state.availableFields[0];
            if (defaultField) {
                const newLine = {
                    field: defaultField,
                    label: defaultField,
                    color: "#000000",
                    pointColor: "#000000",
                    strokeWidth: 2,
                    pointRadius: 4,
                    show: true,
                    lineStyle: "monotone",
                };
                const updatedLines = [...(this.props.config.lines || []), newLine];
                this.updateProp("lines", updatedLines);
            }
            else {
                alert("Нет доступных полей в выбранном источнике данных.");
            }
        };
        this.removeLine = (index) => {
            const newLines = [...(this.props.config.lines || [])];
            newLines.splice(index, 1);
            this.updateProp("lines", newLines);
        };
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources,
            });
            setTimeout(this.updateAvailableFields, 200); // reload fields
        };
        this.state = { availableFields: [] };
    }
    componentDidMount() {
        this.updateAvailableFields();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.useDataSources !== this.props.useDataSources) {
            this.updateAvailableFields();
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        const { config, useDataSources } = this.props;
        const { availableFields } = this.state;
        const years = Array.isArray(config.availableYears)
            ? config.availableYears
            : [];
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "p-3", style: { fontSize: 14, color: "#222", background: "#666" } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u0430\u043D\u043D\u044B\u0445"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, labelStyle), { marginBottom: 10, fontSize: 15 }) }, "\u041B\u0438\u043D\u0438\u0438"), (_a = config.lines) === null || _a === void 0 ? void 0 :
                _a.map((line, i) => {
                    var _a, _b;
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: i, style: Object.assign(Object.assign({}, rowStyle), { background: "#333", marginBottom: 16 }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 14 }) },
                            "\u041B\u0438\u043D\u0438\u044F ",
                            i + 1),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043B\u0435"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", value: line.field, onChange: (e) => this.updateLine(i, "field", e.target.value) }, availableFields.map((f) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f, value: f }, f))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043B\u0438\u043D\u0438\u044E"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: line.show, onChange: (e) => this.updateLine(i, "show", e.target.checked) })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C overlap (\u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: !!line.overlap, onChange: (e) => this.updateLine(i, "overlap", e.target.checked) })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: 12,
                            } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u043B\u0438\u043D\u0438\u0438"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: line.color, onChange: (val) => this.updateLine(i, "color", val) })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0442\u043E\u0447\u043A\u0438"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: line.pointColor, onChange: (val) => this.updateLine(i, "pointColor", val) })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0434\u0438\u0443\u0441 \u0442\u043E\u0447\u043A\u0438"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: "sm", value: (_a = line.pointRadius) !== null && _a !== void 0 ? _a : 4, onChange: (val) => this.updateLine(i, "pointRadius", val) })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0422\u043E\u043B\u0449\u0438\u043D\u0430"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { size: "sm", value: (_b = line.strokeWidth) !== null && _b !== void 0 ? _b : 2, onChange: (val) => this.updateLine(i, "strokeWidth", val) })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0421\u0442\u0438\u043B\u044C \u043B\u0438\u043D\u0438\u0438"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", value: line.lineStyle || "monotone", onChange: (e) => this.updateLine(i, "lineStyle", e.target.value) },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "monotone" }, "Monotone"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "linear" }, "Linear"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "step" }, "Step"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "basis" }, "Basis")))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", type: "tertiary", style: {
                                marginTop: 8,
                                width: "100%",
                                background: "#ee0303",
                                color: "#fff",
                            }, onClick: () => this.removeLine(i) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], { style: { marginRight: 5, width: "15px" } }),
                            "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043B\u0438\u043D\u0438\u044E")));
                }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.addLine, style: { width: "100%" }, size: "sm" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], { style: { marginRight: 5, width: "15px" } }),
                    "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u0438\u043D\u0438\u044E")),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0413\u043E\u0434\u044B \u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F (\u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C 10)"),
                    years.map((year, idx) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: idx, style: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 6,
                        } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { style: { width: 90, marginRight: 12 }, value: year, min: 1900, max: 2200, step: 1, onChange: (val) => {
                                // Обновляем конкретный год
                                const newYears = [...years];
                                newYears[idx] = Number(val);
                                this.updateProp("availableYears", newYears.filter(Boolean));
                            } }),
                        years.length > 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", type: "tertiary", style: {
                                padding: 2,
                                color: "#fff",
                                background: "#c33",
                                borderRadius: 6,
                            }, onClick: () => {
                                const newYears = [...years];
                                newYears.splice(idx, 1);
                                this.updateProp("availableYears", newYears);
                            } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 20, lineHeight: 0 } }, "\u00D7")))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", style: {
                            marginTop: 6,
                            width: 120,
                            background: "#1a4",
                            color: "#fff",
                            borderRadius: 8,
                        }, disabled: years.length >= 10, onClick: () => {
                            if (years.length < 10) {
                                const nextYear = years.length > 0
                                    ? Math.max(...years) + 1
                                    : new Date().getFullYear();
                                this.updateProp("availableYears", [...years, nextYear]);
                            }
                        } }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0434"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12, color: "#eee", marginTop: 4 } }, "\u0412 \u044D\u0442\u0438\u0445 \u043F\u043E\u043B\u044F\u0445 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u0434\u043E 5 \u0433\u043E\u0434\u043E\u0432. \u041E\u043D\u0438 \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432 \u0434\u0440\u043E\u043F\u0434\u0430\u0443\u043D\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430."))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043B\u0435 X-Axis"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { size: "sm", value: config.xAxisField || availableFields[0] || "", onChange: (e) => this.updateProp("xAxisField", e.target.value) }, availableFields.map((f) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f, value: f }, f)))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (UZ)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.chartTitle || "", onChange: (e) => this.updateProp("chartTitle", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (RU)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.chartTitleRu || "", onChange: (e) => this.updateProp("chartTitleRu", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (UZCRYL)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.chartTitleUzCryl || "", onChange: (e) => this.updateProp("chartTitleUzCryl", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0428\u0440\u0438\u0444\u0442"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.chartTitleFontFamily || "", placeholder: "Times", onChange: (e) => this.updateProp("chartTitleFontFamily", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: (_b = config.chartTitleFontSize) !== null && _b !== void 0 ? _b : 18, onChange: (val) => this.updateProp("chartTitleFontSize", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041E\u0442\u0441\u0442\u0443\u043F \u0441\u0432\u0435\u0440\u0445\u0443"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: (_c = config.chartTitlePaddingTop) !== null && _c !== void 0 ? _c : 0, onChange: (val) => this.updateProp("chartTitlePaddingTop", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: config.chartTitleAlign || "left", onChange: (e) => this.updateProp("chartTitleAlign", e.target.value) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "left" }, "\u0421\u043B\u0435\u0432\u0430"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "center" }, "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "right" }, "\u0421\u043F\u0440\u0430\u0432\u0430")))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.textColor, onChange: (val) => this.updateProp("textColor", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.bgColor, onChange: (val) => this.updateProp("bgColor", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0421\u0435\u0442\u043A\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.showGrid, onChange: (e) => this.updateProp("showGrid", e.target.checked) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "Tooltip"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.showTooltip, onChange: (e) => this.updateProp("showTooltip", e.target.checked) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041B\u0435\u0433\u0435\u043D\u0434\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.showLegend, onChange: (e) => this.updateProp("showLegend", e.target.checked) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D tooltip"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.tooltipBg, onChange: (val) => this.updateProp("tooltipBg", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 tooltip"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.tooltipTextColor, onChange: (val) => this.updateProp("tooltipTextColor", val) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0443\u043C"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.zoomEnabled, onChange: (e) => this.updateProp("zoomEnabled", e.target.checked) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0422\u0435\u043D\u044C \u043F\u043E\u0434 \u043B\u0438\u043D\u0438\u0435\u0439"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.showShadow, onChange: (e) => this.updateProp("showShadow", e.target.checked) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.fullscreenEnabled, onChange: (e) => this.updateProp("fullscreenEnabled", e.target.checked) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: config.fullscreenBtnPosition || "top-right", onChange: (e) => this.updateProp("fullscreenBtnPosition", e.target.value) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "top-left" }, "\u0421\u043B\u0435\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "top-right" }, "\u0421\u043F\u0440\u0430\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "bottom-left" }, "\u0421\u043B\u0435\u0432\u0430 \u0441\u043D\u0438\u0437\u0443"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "bottom-right" }, "\u0421\u043F\u0440\u0430\u0432\u0430 \u0441\u043D\u0438\u0437\u0443"))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: (_d = config.fullscreenBtnSize) !== null && _d !== void 0 ? _d : 36, onChange: (val) => this.updateProp("fullscreenBtnSize", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D \u043A\u043D\u043E\u043F\u043A\u0438"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.fullscreenBtnBgColor, onChange: (val) => this.updateProp("fullscreenBtnBgColor", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0438\u043A\u043E\u043D\u043A\u0438"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.fullscreenBtnTextColor, onChange: (val) => this.updateProp("fullscreenBtnTextColor", val) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0438\u043A\u043E\u043D\u043A\u0438"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { value: (_e = config.fullscreenBtnIconSize) !== null && _e !== void 0 ? _e : 16, onChange: (val) => this.updateProp("fullscreenBtnIconSize", val) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0434\u0438\u0443\u0441 (\u0441\u043B\u0435\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.borderTopLeftRadius || "", onChange: (e) => this.updateProp("borderTopLeftRadius", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0434\u0438\u0443\u0441 (\u0441\u043F\u0440\u0430\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.borderTopRightRadius || "", onChange: (e) => this.updateProp("borderTopRightRadius", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0434\u0438\u0443\u0441 (\u0441\u043B\u0435\u0432\u0430 \u0441\u043D\u0438\u0437\u0443)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.borderBottomLeftRadius || "", onChange: (e) => this.updateProp("borderBottomLeftRadius", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0434\u0438\u0443\u0441 (\u0441\u043F\u0440\u0430\u0432\u0430 \u0441\u043D\u0438\u0437\u0443)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: config.borderBottomRightRadius || "", onChange: (e) => this.updateProp("borderBottomRightRadius", e.target.value) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, labelStyle), { marginBottom: 10, fontSize: 15 }) }, "\u0422\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.enableDarkTheme, onChange: (e) => this.updateProp("enableDarkTheme", e.target.checked) })),
                config.enableDarkTheme && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeBgColor, onChange: (val) => this.updateProp("darkThemeBgColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430 (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeTextColor, onChange: (val) => this.updateProp("darkThemeTextColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0433\u0440\u0430\u043D\u0438\u0446\u044B (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeBorderColor, onChange: (val) => this.updateProp("darkThemeBorderColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0441\u0435\u0442\u043A\u0438 (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeGridColor, onChange: (val) => this.updateProp("darkThemeGridColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D \u0442\u0443\u043B\u0442\u0438\u043F\u0430 (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeTooltipBg, onChange: (val) => this.updateProp("darkThemeTooltipBg", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0422\u0435\u043A\u0441\u0442 \u0442\u0443\u043B\u0442\u0438\u043F\u0430 (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeTooltipTextColor, onChange: (val) => this.updateProp("darkThemeTooltipTextColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0422\u0435\u043A\u0441\u0442 \u043B\u0435\u0433\u0435\u043D\u0434\u044B (\u0442\u0435\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeLegendTextColor, onChange: (val) => this.updateProp("darkThemeLegendTextColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D \u043A\u043D\u043E\u043F\u043A\u0438"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeFullscreenBtnBgColor, onChange: (val) => this.updateProp("darkThemeFullscreenBtnBgColor", val) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0438\u043A\u043E\u043D\u043A\u0438"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.darkThemeFullscreenBtnTextColor, onChange: (val) => this.updateProp("darkThemeFullscreenBtnTextColor", val) }))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, labelStyle), { marginBottom: 10, fontSize: 15 }) }, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u043F\u043E \u0434\u0430\u0442\u0430\u043C"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0434\u0430\u0442"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: config.dateRangeExportEnabled, onChange: (e) => this.updateProp("dateRangeExportEnabled", e.target.checked) })),
                config.dateRangeExportEnabled && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { value: config.dateRangeExportPosition || "left", onChange: (e) => this.updateProp("dateRangeExportPosition", e.target.value) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "left" }, "\u0421\u043B\u0435\u0432\u0430 \u043E\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u0433\u043E\u0434\u043E\u0432"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "right" }, "\u0421\u043F\u0440\u0430\u0432\u0430 \u043E\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u0433\u043E\u0434\u043E\u0432")))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9saW5lLWNoYXJ0L2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEO0FBQ0s7QUFDVzs7QUFFbEUsYUFBYSxpREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVUsb0RBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2REFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0VBQVk7QUFDN0IsdUJBQXVCLGlFQUFXLFlBQVksdUJBQXVCO0FBQ3JFO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLG9EQUFhO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtEO0FBQzhCO0FBQ25EOztBQUU3QjtBQUNBLG9CQUFvQixpREFBVTtBQUM5QixPQUFPLHFCQUFxQixVQUFVLG9EQUFhLENBQUMsZ0RBQUk7QUFDeEQ7QUFDQTtBQUNBLGlCQUFpQixrRUFBWTtBQUM3QixrQkFBa0IsaUVBQVcsQ0FBQyxrRUFBWSxZQUFZO0FBQ3RELGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrRUFBWTtBQUN0QztBQUNBOztBQUV1QztBQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7QUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNE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bkQsMkRBQVEsS0FBSyxFQUFDLE9BQU8sNEhBQWdDLENBQzlDLENBQ0wsQ0FDUCxDQUNHLENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9JY29uLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2NyZWF0ZUx1Y2lkZUljb24uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vZGVmYXVsdEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGx1cy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy90cmFzaC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9zaGFyZWQvc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saW5lLWNoYXJ0L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjUzNi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRBdHRyaWJ1dGVzIGZyb20gJy4vZGVmYXVsdEF0dHJpYnV0ZXMuanMnO1xuaW1wb3J0IHsgbWVyZ2VDbGFzc2VzLCBoYXNBMTF5UHJvcCB9IGZyb20gJy4vc2hhcmVkL3NyYy91dGlscy5qcyc7XG5cbmNvbnN0IEljb24gPSBmb3J3YXJkUmVmKFxuICAoe1xuICAgIGNvbG9yID0gXCJjdXJyZW50Q29sb3JcIixcbiAgICBzaXplID0gMjQsXG4gICAgc3Ryb2tlV2lkdGggPSAyLFxuICAgIGFic29sdXRlU3Ryb2tlV2lkdGgsXG4gICAgY2xhc3NOYW1lID0gXCJcIixcbiAgICBjaGlsZHJlbixcbiAgICBpY29uTm9kZSxcbiAgICAuLi5yZXN0XG4gIH0sIHJlZikgPT4gY3JlYXRlRWxlbWVudChcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHJlZixcbiAgICAgIC4uLmRlZmF1bHRBdHRyaWJ1dGVzLFxuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgc3Ryb2tlV2lkdGg6IGFic29sdXRlU3Ryb2tlV2lkdGggPyBOdW1iZXIoc3Ryb2tlV2lkdGgpICogMjQgLyBOdW1iZXIoc2l6ZSkgOiBzdHJva2VXaWR0aCxcbiAgICAgIGNsYXNzTmFtZTogbWVyZ2VDbGFzc2VzKFwibHVjaWRlXCIsIGNsYXNzTmFtZSksXG4gICAgICAuLi4hY2hpbGRyZW4gJiYgIWhhc0ExMXlQcm9wKHJlc3QpICYmIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgLi4ucmVzdFxuICAgIH0sXG4gICAgW1xuICAgICAgLi4uaWNvbk5vZGUubWFwKChbdGFnLCBhdHRyc10pID0+IGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycykpLFxuICAgICAgLi4uQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFtjaGlsZHJlbl1cbiAgICBdXG4gIClcbik7XG5cbmV4cG9ydCB7IEljb24gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SWNvbi5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjUzNi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWVyZ2VDbGFzc2VzLCB0b0tlYmFiQ2FzZSwgdG9QYXNjYWxDYXNlIH0gZnJvbSAnLi9zaGFyZWQvc3JjL3V0aWxzLmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbi5qcyc7XG5cbmNvbnN0IGNyZWF0ZUx1Y2lkZUljb24gPSAoaWNvbk5hbWUsIGljb25Ob2RlKSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IGZvcndhcmRSZWYoXG4gICAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IGNyZWF0ZUVsZW1lbnQoSWNvbiwge1xuICAgICAgcmVmLFxuICAgICAgaWNvbk5vZGUsXG4gICAgICBjbGFzc05hbWU6IG1lcmdlQ2xhc3NlcyhcbiAgICAgICAgYGx1Y2lkZS0ke3RvS2ViYWJDYXNlKHRvUGFzY2FsQ2FzZShpY29uTmFtZSkpfWAsXG4gICAgICAgIGBsdWNpZGUtJHtpY29uTmFtZX1gLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICksXG4gICAgICAuLi5wcm9wc1xuICAgIH0pXG4gICk7XG4gIENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IHRvUGFzY2FsQ2FzZShpY29uTmFtZSk7XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMdWNpZGVJY29uIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUx1Y2lkZUljb24uanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MC41MzYuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIGRlZmF1bHRBdHRyaWJ1dGVzID0ge1xuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB3aWR0aDogMjQsXG4gIGhlaWdodDogMjQsXG4gIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gIGZpbGw6IFwibm9uZVwiLFxuICBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsXG4gIHN0cm9rZVdpZHRoOiAyLFxuICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gIHN0cm9rZUxpbmVqb2luOiBcInJvdW5kXCJcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRBdHRyaWJ1dGVzIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRBdHRyaWJ1dGVzLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTM2LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNNSAxMmgxNFwiLCBrZXk6IFwiMWF5czBoXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiA1djE0XCIsIGtleTogXCJzNjk5bGVcIiB9XVxuXTtcbmNvbnN0IFBsdXMgPSBjcmVhdGVMdWNpZGVJY29uKFwicGx1c1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgUGx1cyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wbHVzLmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuNTM2LjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2XCIsIGtleTogXCJtaXl0cmNcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTMgNmgxOFwiLCBrZXk6IFwiZDB3bTBqXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04IDZWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYyXCIsIGtleTogXCJlNzkxamlcIiB9XVxuXTtcbmNvbnN0IFRyYXNoID0gY3JlYXRlTHVjaWRlSWNvbihcInRyYXNoXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBUcmFzaCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFzaC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjUzNi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5jb25zdCB0b0tlYmFiQ2FzZSA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG5jb25zdCB0b0NhbWVsQ2FzZSA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKFxuICAvXihbQS1aXSl8W1xccy1fXSsoXFx3KS9nLFxuICAobWF0Y2gsIHAxLCBwMikgPT4gcDIgPyBwMi50b1VwcGVyQ2FzZSgpIDogcDEudG9Mb3dlckNhc2UoKVxuKTtcbmNvbnN0IHRvUGFzY2FsQ2FzZSA9IChzdHJpbmcpID0+IHtcbiAgY29uc3QgY2FtZWxDYXNlID0gdG9DYW1lbENhc2Uoc3RyaW5nKTtcbiAgcmV0dXJuIGNhbWVsQ2FzZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsQ2FzZS5zbGljZSgxKTtcbn07XG5jb25zdCBtZXJnZUNsYXNzZXMgPSAoLi4uY2xhc3NlcykgPT4gY2xhc3Nlcy5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gIHJldHVybiBCb29sZWFuKGNsYXNzTmFtZSkgJiYgY2xhc3NOYW1lLnRyaW0oKSAhPT0gXCJcIiAmJiBhcnJheS5pbmRleE9mKGNsYXNzTmFtZSkgPT09IGluZGV4O1xufSkuam9pbihcIiBcIikudHJpbSgpO1xuY29uc3QgaGFzQTExeVByb3AgPSAocHJvcHMpID0+IHtcbiAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKHByb3Auc3RhcnRzV2l0aChcImFyaWEtXCIpIHx8IHByb3AgPT09IFwicm9sZVwiIHx8IHByb3AgPT09IFwidGl0bGVcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBoYXNBMTF5UHJvcCwgbWVyZ2VDbGFzc2VzLCB0b0NhbWVsQ2FzZSwgdG9LZWJhYkNhc2UsIHRvUGFzY2FsQ2FzZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgUmVhY3QsXG4gIGpzeCxcbiAgSW1tdXRhYmxlLFxuICBVc2VEYXRhU291cmNlLFxuICBEYXRhU291cmNlVHlwZXMsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQge1xuICBTZXR0aW5nU2VjdGlvbixcbiAgU2V0dGluZ1Jvdyxcbn0gZnJvbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUZXh0SW5wdXQsIE51bWVyaWNJbnB1dCwgU3dpdGNoLCBCdXR0b24sIFNlbGVjdCB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgSU1Db25maWcsIExpbmVDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBDb2xvclBpY2tlciB9IGZyb20gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiO1xuaW1wb3J0IHsgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBQbHVzLCBUcmFzaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuLy8g0J7QsdGJ0LjQuSDRgdGC0LjQu9GMINC00LvRjyBTZXR0aW5nUm93OiBsYWJlbCDRgdCy0LXRgNGF0YMsINC+0YLRgdGC0YPQv9GLLCDQvtC00LjQvdCw0LrQvtCy0YvQuSDRgNCw0LfQvNC10YAg0YjRgNC40YTRgtCwXG5jb25zdCByb3dTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIGdhcDogNCxcbiAgbWFyZ2luQm90dG9tOiAxNCxcbn07XG5cbmNvbnN0IGxhYmVsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udFNpemU6IDEzLFxuICBtYXJnaW5Cb3R0b206IDIsXG4gIGNvbG9yOiBcIiNmZmZcIixcbn07XG5cbmNvbnN0IHNlY3Rpb25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgYmFja2dyb3VuZDogXCIjMzMzXCIsXG4gIGJvcmRlclJhZGl1czogMTAsXG4gIHBhZGRpbmc6IDE2LFxuICBtYXJnaW5Cb3R0b206IDIyLFxuICBib3hTaGFkb3c6IFwiMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4wNClcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxuICB7IGF2YWlsYWJsZUZpZWxkczogc3RyaW5nW10gfVxuPiB7XG4gIHN1cHBvcnRlZFR5cGVzID0gSW1tdXRhYmxlKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSk7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgYXZhaWxhYmxlRmllbGRzOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVBdmFpbGFibGVGaWVsZHMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnVzZURhdGFTb3VyY2VzICE9PSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUF2YWlsYWJsZUZpZWxkcygpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUF2YWlsYWJsZUZpZWxkcyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluRHMgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5bMF07XG4gICAgaWYgKCFtYWluRHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmFpbGFibGVGaWVsZHM6IFtdIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWFsRHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoXG4gICAgICBtYWluRHMuZGF0YVNvdXJjZUlkXG4gICAgKTtcbiAgICBjb25zdCBzY2hlbWEgPSByZWFsRHM/LmdldFNjaGVtYSgpO1xuICAgIGNvbnN0IGZpZWxkcyA9IHNjaGVtYT8uZmllbGRzID8gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcykgOiBbXTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXZhaWxhYmxlRmllbGRzOiBmaWVsZHMgfSk7XG4gIH07XG5cbiAgdXBkYXRlUHJvcCA9IChmaWVsZDoga2V5b2YgSU1Db25maWcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcbiAgICAgICAgW2ZpZWxkXTogdmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIHVwZGF0ZUxpbmUgPSAoaW5kZXg6IG51bWJlciwga2V5OiBrZXlvZiBMaW5lQ29uZmlnLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3TGluZXMgPSBbLi4uKHRoaXMucHJvcHMuY29uZmlnLmxpbmVzIHx8IFtdKV07XG4gICAgbmV3TGluZXNbaW5kZXhdID0geyAuLi5uZXdMaW5lc1tpbmRleF0sIFtrZXldOiB2YWx1ZSB9O1xuICAgIHRoaXMudXBkYXRlUHJvcChcImxpbmVzXCIsIG5ld0xpbmVzKTtcbiAgfTtcblxuICBhZGRMaW5lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRGaWVsZCA9IHRoaXMuc3RhdGUuYXZhaWxhYmxlRmllbGRzWzBdO1xuICAgIGlmIChkZWZhdWx0RmllbGQpIHtcbiAgICAgIGNvbnN0IG5ld0xpbmU6IExpbmVDb25maWcgPSB7XG4gICAgICAgIGZpZWxkOiBkZWZhdWx0RmllbGQsXG4gICAgICAgIGxhYmVsOiBkZWZhdWx0RmllbGQsXG4gICAgICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgcG9pbnRDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBwb2ludFJhZGl1czogNCxcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgbGluZVN0eWxlOiBcIm1vbm90b25lXCIsXG4gICAgICB9O1xuICAgICAgY29uc3QgdXBkYXRlZExpbmVzID0gWy4uLih0aGlzLnByb3BzLmNvbmZpZy5saW5lcyB8fCBbXSksIG5ld0xpbmVdO1xuICAgICAgdGhpcy51cGRhdGVQcm9wKFwibGluZXNcIiwgdXBkYXRlZExpbmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCLQndC10YIg0LTQvtGB0YLRg9C/0L3Ri9GFINC/0L7Qu9C10Lkg0LIg0LLRi9Cx0YDQsNC90L3QvtC8INC40YHRgtC+0YfQvdC40LrQtSDQtNCw0L3QvdGL0YUuXCIpO1xuICAgIH1cbiAgfTtcblxuICByZW1vdmVMaW5lID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuZXdMaW5lcyA9IFsuLi4odGhpcy5wcm9wcy5jb25maWcubGluZXMgfHwgW10pXTtcbiAgICBuZXdMaW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUHJvcChcImxpbmVzXCIsIG5ld0xpbmVzKTtcbiAgfTtcblxuICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXMsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZUF2YWlsYWJsZUZpZWxkcywgMjAwKTsgLy8gcmVsb2FkIGZpZWxkc1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhdmFpbGFibGVGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeWVhcnMgPSBBcnJheS5pc0FycmF5KGNvbmZpZy5hdmFpbGFibGVZZWFycylcbiAgICAgID8gY29uZmlnLmF2YWlsYWJsZVllYXJzXG4gICAgICA6IFtdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicC0zXCJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogXCIjMjIyXCIsIGJhY2tncm91bmQ6IFwiIzY2NlwiIH19XG4gICAgICA+XG4gICAgICAgIHsvKiDQmNGB0YLQvtGH0L3QuNC6INC00LDQvdC90YvRhSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JjRgdGC0L7Rh9C90LjQuiDQtNCw0L3QvdGL0YU8L3NwYW4+XG4gICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXG4gICAgICAgICAgICAgIHR5cGVzPXt0aGlzLnN1cHBvcnRlZFR5cGVzfVxuICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qINCb0LjQvdC40LggKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgLi4ubGFiZWxTdHlsZSwgbWFyZ2luQm90dG9tOiAxMCwgZm9udFNpemU6IDE1IH19PlxuICAgICAgICAgICAg0JvQuNC90LjQuFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7Y29uZmlnLmxpbmVzPy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnJvd1N0eWxlLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLmxhYmVsU3R5bGUsIGZvbnRTaXplOiAxNCB9fT7Qm9C40L3QuNGPIHtpICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0J/QvtC70LU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5lLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZUxpbmUoaSwgXCJmaWVsZFwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2F2YWlsYWJsZUZpZWxkcy5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Z9IHZhbHVlPXtmfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zn1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0J/QvtC60LDQt9GL0LLQsNGC0Ywg0LvQuNC90LjRjjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsaW5lLnNob3d9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlTGluZShpLCBcInNob3dcIiwgZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+XG4gICAgICAgICAgICAgICAgICDQoNCw0LfRgNC10YjQuNGC0Ywgb3ZlcmxhcCAo0LTQu9GPINGB0YDQsNCy0L3QtdC90LjRjylcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ISFsaW5lLm92ZXJsYXB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGluZShpLCBcIm92ZXJsYXBcIiwgZS50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxuICAgICAgICAgICAgICAgICAgZ2FwOiAxMixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCm0LLQtdGCINC70LjQvdC40Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2xpbmUuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZUxpbmUoaSwgXCJjb2xvclwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KbQstC10YIg0YLQvtGH0LrQuDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17bGluZS5wb2ludENvbG9yfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVMaW5lKGksIFwicG9pbnRDb2xvclwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KDQsNC00LjRg9GBINGC0L7Rh9C60Lg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5lLnBvaW50UmFkaXVzID8/IDR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZUxpbmUoaSwgXCJwb2ludFJhZGl1c1wiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KLQvtC70YnQuNC90LA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsaW5lLnN0cm9rZVdpZHRoID8/IDJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZUxpbmUoaSwgXCJzdHJva2VXaWR0aFwiLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KHRgtC40LvRjCDQu9C40L3QuNC4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGluZS5saW5lU3R5bGUgfHwgXCJtb25vdG9uZVwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaW5lKGksIFwibGluZVN0eWxlXCIsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb25vdG9uZVwiPk1vbm90b25lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaW5lYXJcIj5MaW5lYXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInN0ZXBcIj5TdGVwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYXNpc1wiPkJhc2lzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXJ0aWFyeVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2VlMDMwM1wiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVMaW5lKGkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYXNoIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1LCB3aWR0aDogXCIxNXB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQu9C40L3QuNGOXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZExpbmV9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBzaXplPVwic21cIj5cbiAgICAgICAgICAgIDxQbHVzIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA1LCB3aWR0aDogXCIxNXB4XCIgfX0gLz5cbiAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LvQuNC90LjRjlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog0JTQvtGB0YLRg9C/0L3Ri9C1INCz0L7QtNCwICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7Qk9C+0LTRiyDQtNC70Y8g0YHRgNCw0LLQvdC10L3QuNGPICjQvNCw0LrRgdC40LzRg9C8IDEwKTwvc3Bhbj5cbiAgICAgICAgICAgIHt5ZWFycy5tYXAoKHllYXIsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDkwLCBtYXJnaW5SaWdodDogMTIgfX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt5ZWFyfVxuICAgICAgICAgICAgICAgICAgbWluPXsxOTAwfVxuICAgICAgICAgICAgICAgICAgbWF4PXsyMjAwfVxuICAgICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQutC+0L3QutGA0LXRgtC90YvQuSDQs9C+0LRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3WWVhcnMgPSBbLi4ueWVhcnNdO1xuICAgICAgICAgICAgICAgICAgICBuZXdZZWFyc1tpZHhdID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImF2YWlsYWJsZVllYXJzXCIsIG5ld1llYXJzLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3llYXJzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2MzM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1llYXJzID0gWy4uLnllYXJzXTtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdZZWFycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoXCJhdmFpbGFibGVZZWFyc1wiLCBuZXdZZWFycyk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAyMCwgbGluZUhlaWdodDogMCB9fT7Dlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7Lyog0JrQvdC+0L/QutCwINC00L7QsdCw0LLQuNGC0Ywg0LPQvtC0ICovfVxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNixcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzFhNFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt5ZWFycy5sZW5ndGggPj0gMTB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeWVhcnMubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRZZWFyID1cbiAgICAgICAgICAgICAgICAgICAgeWVhcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gTWF0aC5tYXgoLi4ueWVhcnMpICsgMVxuICAgICAgICAgICAgICAgICAgICAgIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9wKFwiYXZhaWxhYmxlWWVhcnNcIiwgWy4uLnllYXJzLCBuZXh0WWVhcl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgKyDQlNC+0LHQsNCy0LjRgtGMINCz0L7QtFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiBcIiNlZWVcIiwgbWFyZ2luVG9wOiA0IH19PlxuICAgICAgICAgICAgICDQkiDRjdGC0LjRhSDQv9C+0LvRj9GFINC80L7QttC90L4g0LfQsNC00LDRgtGMINC00L4gNSDQs9C+0LTQvtCyLiDQntC90Lgg0L/QvtGP0LLRj9GC0YHRjyDQsiDQtNGA0L7Qv9C00LDRg9C90LVcbiAgICAgICAgICAgICAg0LLQuNC00LbQtdGC0LAuXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDQntGB0LggKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCf0L7Qu9C1IFgtQXhpczwvc3Bhbj5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy54QXhpc0ZpZWxkIHx8IGF2YWlsYWJsZUZpZWxkc1swXSB8fCBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcInhBeGlzRmllbGRcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXZhaWxhYmxlRmllbGRzLm1hcCgoZikgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmfSB2YWx1ZT17Zn0+XG4gICAgICAgICAgICAgICAgICB7Zn1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qINCX0LDQs9C+0LvQvtCy0L7QuiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JfQsNCz0L7Qu9C+0LLQvtC6IChVWik8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuY2hhcnRUaXRsZSB8fCBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcImNoYXJ0VGl0bGVcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JfQsNCz0L7Qu9C+0LLQvtC6IChSVSk8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuY2hhcnRUaXRsZVJ1IHx8IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVQcm9wKFwiY2hhcnRUaXRsZVJ1XCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCX0LDQs9C+0LvQvtCy0L7QuiAoVVpDUllMKTwvc3Bhbj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5jaGFydFRpdGxlVXpDcnlsIHx8IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoXCJjaGFydFRpdGxlVXpDcnlsXCIsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QqNGA0LjRhNGCPC9zcGFuPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNoYXJ0VGl0bGVGb250RmFtaWx5IHx8IFwiXCJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGltZXNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9wKFwiY2hhcnRUaXRsZUZvbnRGYW1pbHlcIiwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCg0LDQt9C80LXRgCDRiNGA0LjRhNGC0LA8L3NwYW4+XG4gICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuY2hhcnRUaXRsZUZvbnRTaXplID8/IDE4fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiY2hhcnRUaXRsZUZvbnRTaXplXCIsIHZhbCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QntGC0YHRgtGD0L8g0YHQstC10YDRhdGDPC9zcGFuPlxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNoYXJ0VGl0bGVQYWRkaW5nVG9wID8/IDB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJjaGFydFRpdGxlUGFkZGluZ1RvcFwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JLRi9GA0LDQstC90LjQstCw0L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNoYXJ0VGl0bGVBbGlnbiB8fCBcImxlZnRcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImNoYXJ0VGl0bGVBbGlnblwiLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiPtCh0LvQtdCy0LA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPtCf0L4g0YbQtdC90YLRgNGDPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPtCh0L/RgNCw0LLQsDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDQk9GA0LDRhNC40Lov0KHRgtC40LvRjCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KbQstC10YIg0YLQtdC60YHRgtCwPC9zcGFuPlxuICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgIGNvbG9yPXtjb25maWcudGV4dENvbG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwidGV4dENvbG9yXCIsIHZhbCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QpNC+0L08L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5iZ0NvbG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiYmdDb2xvclwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KHQtdGC0LrQsDwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLnNob3dHcmlkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcInNob3dHcmlkXCIsIGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+VG9vbHRpcDwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLnNob3dUb29sdGlwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcInNob3dUb29sdGlwXCIsIGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JvQtdCz0LXQvdC00LA8L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5zaG93TGVnZW5kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcInNob3dMZWdlbmRcIiwgZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVG9vbHRpcCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9IHRvb2x0aXA8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy50b29sdGlwQmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJ0b29sdGlwQmdcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCm0LLQtdGCINGC0LXQutGB0YLQsCB0b29sdGlwPC9zcGFuPlxuICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgIGNvbG9yPXtjb25maWcudG9vbHRpcFRleHRDb2xvcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHRoaXMudXBkYXRlUHJvcChcInRvb2x0aXBUZXh0Q29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDQntGC0L7QsdGA0LDQttC10L3QuNC1L9C30YPQvC/Qv9C+0LvQvdGL0Lkg0Y3QutGA0LDQvSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JfRg9C8PC9zcGFuPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuem9vbUVuYWJsZWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVQcm9wKFwiem9vbUVuYWJsZWRcIiwgZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QotC10L3RjCDQv9C+0LQg0LvQuNC90LjQtdC5PC9zcGFuPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuc2hvd1NoYWRvd31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJzaG93U2hhZG93XCIsIGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0J/QvtC70L3Ri9C5INGN0LrRgNCw0L08L3NwYW4+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5mdWxsc2NyZWVuRW5hYmxlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImZ1bGxzY3JlZW5FbmFibGVkXCIsIGUudGFyZ2V0LmNoZWNrZWQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCf0L7Qt9C40YbQuNGPINC60L3QvtC/0LrQuCDQv9C+0LvQvdC+0LPQviDRjdC60YDQsNC90LA8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZnVsbHNjcmVlbkJ0blBvc2l0aW9uIHx8IFwidG9wLXJpZ2h0XCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb3AoXCJmdWxsc2NyZWVuQnRuUG9zaXRpb25cIiwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvcC1sZWZ0XCI+0KHQu9C10LLQsCDRgdCy0LXRgNGF0YM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvcC1yaWdodFwiPtCh0L/RgNCw0LLQsCDRgdCy0LXRgNGF0YM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJvdHRvbS1sZWZ0XCI+0KHQu9C10LLQsCDRgdC90LjQt9GDPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJib3R0b20tcmlnaHRcIj7QodC/0YDQsNCy0LAg0YHQvdC40LfRgzwvb3B0aW9uPlxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCg0LDQt9C80LXRgCDQutC90L7Qv9C60Lg8L3NwYW4+XG4gICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZnVsbHNjcmVlbkJ0blNpemUgPz8gMzZ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJmdWxsc2NyZWVuQnRuU2l6ZVwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9INC60L3QvtC/0LrQuDwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmZ1bGxzY3JlZW5CdG5CZ0NvbG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiZnVsbHNjcmVlbkJ0bkJnQ29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCm0LLQtdGCINC40LrQvtC90LrQuDwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmZ1bGxzY3JlZW5CdG5UZXh0Q29sb3J9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJmdWxsc2NyZWVuQnRuVGV4dENvbG9yXCIsIHZhbCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QoNCw0LfQvNC10YAg0LjQutC+0L3QutC4PC9zcGFuPlxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmZ1bGxzY3JlZW5CdG5JY29uU2l6ZSA/PyAxNn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHRoaXMudXBkYXRlUHJvcChcImZ1bGxzY3JlZW5CdG5JY29uU2l6ZVwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qINCg0LDQtNC40YPRgSDQs9GA0LDQvdC40YYgKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCg0LDQtNC40YPRgSAo0YHQu9C10LLQsCDRgdCy0LXRgNGF0YMpPC9zcGFuPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmJvcmRlclRvcExlZnRSYWRpdXMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImJvcmRlclRvcExlZnRSYWRpdXNcIiwgZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCg0LDQtNC40YPRgSAo0YHQv9GA0LDQstCwINGB0LLQtdGA0YXRgyk8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuYm9yZGVyVG9wUmlnaHRSYWRpdXMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QoNCw0LTQuNGD0YEgKNGB0LvQtdCy0LAg0YHQvdC40LfRgyk8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyB8fCBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9wKFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLCBlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KDQsNC00LjRg9GBICjRgdC/0YDQsNCy0LAg0YHQvdC40LfRgyk8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvcChcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCIsIGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog0KLQtdC80L3QsNGPINGC0LXQvNCwICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IC4uLmxhYmVsU3R5bGUsIG1hcmdpbkJvdHRvbTogMTAsIGZvbnRTaXplOiAxNSB9fT5cbiAgICAgICAgICAgINCi0LXQvNC90LDRjyDRgtC10LzQsFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JLQutC70Y7Rh9C40YLRjCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC1INC/0LXRgNC10LrQu9GO0YfQtdC90LjQtTwvc3Bhbj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZURhcmtUaGVtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJlbmFibGVEYXJrVGhlbWVcIiwgZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtjb25maWcuZW5hYmxlRGFya1RoZW1lICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9ICjRgtC10LzQvdCw0Y8g0YLQtdC80LApPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5kYXJrVGhlbWVCZ0NvbG9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHRoaXMudXBkYXRlUHJvcChcImRhcmtUaGVtZUJnQ29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDRgtC10LrRgdGC0LAgKNGC0LXQvNC90LDRjyDRgtC10LzQsCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmRhcmtUaGVtZVRleHRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJkYXJrVGhlbWVUZXh0Q29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDQs9GA0LDQvdC40YbRiyAo0YLQtdC80L3QsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maWcuZGFya1RoZW1lQm9yZGVyQ29sb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiZGFya1RoZW1lQm9yZGVyQ29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDRgdC10YLQutC4ICjRgtC10LzQvdCw0Y8g0YLQtdC80LApPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5kYXJrVGhlbWVHcmlkQ29sb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiZGFya1RoZW1lR3JpZENvbG9yXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9INGC0YPQu9GC0LjQv9CwICjRgtC10LzQvdCw0Y8g0YLQtdC80LApPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5kYXJrVGhlbWVUb29sdGlwQmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiZGFya1RoZW1lVG9vbHRpcEJnXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KLQtdC60YHRgiDRgtGD0LvRgtC40L/QsCAo0YLQtdC80L3QsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maWcuZGFya1RoZW1lVG9vbHRpcFRleHRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJkYXJrVGhlbWVUb29sdGlwVGV4dENvbG9yXCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KLQtdC60YHRgiDQu9C10LPQtdC90LTRiyAo0YLQtdC80L3QsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maWcuZGFya1RoZW1lTGVnZW5kVGV4dENvbG9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHRoaXMudXBkYXRlUHJvcChcImRhcmtUaGVtZUxlZ2VuZFRleHRDb2xvclwiLCB2YWwpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9INC60L3QvtC/0LrQuDwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmRhcmtUaGVtZUZ1bGxzY3JlZW5CdG5CZ0NvbG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gdGhpcy51cGRhdGVQcm9wKFwiZGFya1RoZW1lRnVsbHNjcmVlbkJ0bkJnQ29sb3JcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCm0LLQtdGCINC40LrQvtC90LrQuDwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmRhcmtUaGVtZUZ1bGxzY3JlZW5CdG5UZXh0Q29sb3J9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJkYXJrVGhlbWVGdWxsc2NyZWVuQnRuVGV4dENvbG9yXCIsIHZhbCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qINCt0LrRgdC/0L7RgNGCINC/0L4g0LTQsNGC0LDQvCAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5sYWJlbFN0eWxlLCBtYXJnaW5Cb3R0b206IDEwLCBmb250U2l6ZTogMTUgfX0+XG4gICAgICAgICAgICDQrdC60YHQv9C+0YDRgiDQv9C+INC00LDRgtCw0LxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCS0LrQu9GO0YfQuNGC0Ywg0LrQsNC70LXQvdC00LDRgNGMINC00LvRjyDQstGL0LHQvtGA0LAg0LTQsNGCPC9zcGFuPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuZGF0ZVJhbmdlRXhwb3J0RW5hYmxlZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJkYXRlUmFuZ2VFeHBvcnRFbmFibGVkXCIsIGUudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y29uZmlnLmRhdGVSYW5nZUV4cG9ydEVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0J/QvtC30LjRhtC40Y8g0LrQsNC70LXQvdC00LDRgNGPPC9zcGFuPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5kYXRlUmFuZ2VFeHBvcnRQb3NpdGlvbiB8fCBcImxlZnRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUHJvcChcImRhdGVSYW5nZUV4cG9ydFBvc2l0aW9uXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWZ0XCI+0KHQu9C10LLQsCDQvtGCINCy0YvQsdC+0YDQsCDQs9C+0LTQvtCyPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+0KHQv9GA0LDQstCwINC+0YIg0LLRi9Cx0L7RgNCwINCz0L7QtNC+0LI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=