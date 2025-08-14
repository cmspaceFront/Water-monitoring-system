System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui","jimu-ui/basic/color-picker"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/bar-chart/src/setting/setting.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/** @jsx jsx */




const sectionStyle = {
    background: "#28292d",
    borderRadius: 12,
    padding: 18,
    marginBottom: 22,
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
    border: "1px solid #23262f22",
};
const rowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginBottom: 14,
};
const labelStyle = {
    fontWeight: 500,
    fontSize: 14,
    marginBottom: 2,
    color: "#f3f3f3",
};
const LANGS = [
    { label: "Русский", value: "ru" },
    { label: "O‘zbek", value: "uz" },
    { label: "Ўзбек", value: "uzcryl" },
];
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
            const fields = (schema === null || schema === void 0 ? void 0 : schema.fields)
                ? Object.values(schema.fields).map((f) => ({
                    name: f.jimuName || f.name,
                    alias: f.alias || f.jimuName || f.name,
                }))
                : [];
            this.setState({ availableFields: fields });
        };
        this.updateProp = (field, value) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: Object.assign(Object.assign({}, this.props.config), { [field]: value }),
            });
        };
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources,
            });
            setTimeout(this.updateAvailableFields, 200);
        };
        // === БАРЫ ===
        this.addBar = () => {
            var _a, _b, _c, _d, _e;
            const { availableFields } = this.state;
            const newBar = {
                field: ((_a = availableFields[0]) === null || _a === void 0 ? void 0 : _a.name) || "",
                color: "#299AFF",
                label_ru: "",
                label_uz: "",
                label_uzcryl: "",
                borderRadiusTopLeft: (_b = this.props.config.barBorderRadius) !== null && _b !== void 0 ? _b : 18,
                borderRadiusTopRight: (_c = this.props.config.barBorderRadius) !== null && _c !== void 0 ? _c : 18,
                borderRadiusBottomRight: (_d = this.props.config.barBorderRadius) !== null && _d !== void 0 ? _d : 18,
                borderRadiusBottomLeft: (_e = this.props.config.barBorderRadius) !== null && _e !== void 0 ? _e : 18,
            };
            const bars = Array.isArray(this.props.config.bars)
                ? [...this.props.config.bars, newBar]
                : [newBar];
            this.updateProp("bars", bars);
        };
        this.updateBar = (i, key, value) => {
            const bars = Array.isArray(this.props.config.bars)
                ? [...this.props.config.bars]
                : [];
            bars[i] = Object.assign(Object.assign({}, bars[i]), { [key]: value });
            this.updateProp("bars", bars);
        };
        this.removeBar = (i) => {
            const bars = Array.isArray(this.props.config.bars)
                ? [...this.props.config.bars]
                : [];
            bars.splice(i, 1);
            this.updateProp("bars", bars);
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
        var _a, _b, _c, _d, _e, _f;
        const { config, useDataSources } = this.props;
        const { availableFields } = this.state;
        const bars = Array.isArray(config.bars) ? config.bars : [];
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { fontSize: 14, color: "#fff", background: "#212126" } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u0430\u043D\u043D\u044B\u0445"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043B\u0435 \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430 \u0434\u0430\u043C\u0431\u044B"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: config.damFilterField || (availableFields.find(f => f.name === 'title') ? 'title' : ((_a = availableFields[0]) === null || _a === void 0 ? void 0 : _a.name) || ''), onChange: e => this.updateProp('damFilterField', e.target.value) }, availableFields.map(f => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f.name, value: f.name }, f.alias)))))),
            availableFields.length > 0 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 16, marginBottom: 8 }) }, "\u0411\u0430\u0440\u044B \u0434\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u044B"),
                bars.map((bar, i) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: i, style: Object.assign(Object.assign({}, rowStyle), { border: "1px solid #292929", borderRadius: 8, marginBottom: 10, padding: 10, background: "#262729" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 14, marginBottom: 4 }) },
                            "\u0411\u0430\u0440 ",
                            i + 1),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041F\u043E\u043B\u0435 \u0434\u0430\u043D\u043D\u044B\u0445"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: bar.field, onChange: e => this.updateBar(i, "field", e.target.value) }, availableFields.map(f => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f.name, value: f.name }, f.alias))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u0431\u0430\u0440\u0430"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: bar.color || "#299AFF", onChange: color => this.updateBar(i, "color", color) })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041B\u0435\u0439\u0431\u043B (RU)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: bar.label_ru || "", onChange: e => this.updateBar(i, "label_ru", e.target.value) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041B\u0435\u0439\u0431\u043B (UZ)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: bar.label_uz || "", onChange: e => this.updateBar(i, "label_uz", e.target.value) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041B\u0435\u0439\u0431\u043B (UZCRYL)"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: bar.label_uzcryl || "", onChange: e => this.updateBar(i, "label_uzcryl", e.target.value) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u043B\u0435\u0439\u0431\u043B\u0430"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: bar.attributeField || "", onChange: e => this.updateBar(i, "attributeField", e.target.value) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "" }, "\u2014"),
                                availableFields.map(f => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f.name, value: f.name }, f.alias))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u043E\u0432 \u0431\u0430\u0440\u0430"),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12, color: '#ccc' } }, "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043B\u0435\u0432\u044B\u0439"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_b = (_a = bar.borderRadiusTopLeft) !== null && _a !== void 0 ? _a : config.barBorderRadius) !== null && _b !== void 0 ? _b : 18, min: 0, max: 64, onChange: val => this.updateBar(i, "borderRadiusTopLeft", val), style: { width: 60 } })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12, color: '#ccc' } }, "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043F\u0440\u0430\u0432\u044B\u0439"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_d = (_c = bar.borderRadiusTopRight) !== null && _c !== void 0 ? _c : config.barBorderRadius) !== null && _d !== void 0 ? _d : 18, min: 0, max: 64, onChange: val => this.updateBar(i, "borderRadiusTopRight", val), style: { width: 60 } })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12, color: '#ccc' } }, "\u041D\u0438\u0436\u043D\u0438\u0439 \u043F\u0440\u0430\u0432\u044B\u0439"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_f = (_e = bar.borderRadiusBottomRight) !== null && _e !== void 0 ? _e : config.barBorderRadius) !== null && _f !== void 0 ? _f : 18, min: 0, max: 64, onChange: val => this.updateBar(i, "borderRadiusBottomRight", val), style: { width: 60 } })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'flex', flexDirection: 'column', gap: 4 } },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { fontSize: 12, color: '#ccc' } }, "\u041D\u0438\u0436\u043D\u0438\u0439 \u043B\u0435\u0432\u044B\u0439"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_h = (_g = bar.borderRadiusBottomLeft) !== null && _g !== void 0 ? _g : config.barBorderRadius) !== null && _h !== void 0 ? _h : 18, min: 0, max: 64, onChange: val => this.updateBar(i, "borderRadiusBottomLeft", val), style: { width: 60 } })))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", type: "tertiary", style: { marginTop: 8, background: "#c33", color: "#fff" }, onClick: () => this.removeBar(i) }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0431\u0430\u0440")));
                }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { onClick: this.addBar, style: { width: "100%", marginTop: 10 }, size: "sm" }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u0430\u0440"))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (RU)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: config.title_ru || "", onChange: e => this.updateProp("title_ru", e.target.value) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (UZ)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: config.title_uz || "", onChange: e => this.updateProp("title_uz", e.target.value) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A (UZCRYL)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { value: config.title_uzcryl || "", onChange: e => this.updateProp("title_uzcryl", e.target.value) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0410\u0442\u0440\u0438\u0431\u0443\u0442 \u0434\u043B\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: config.titleAttribute || "", onChange: e => this.updateProp("titleAttribute", e.target.value) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "" }, "\u2014"),
                        availableFields.map(f => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: f.name, value: f.name }, f.alias))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: config.titleFontSize || 17, min: 10, max: 36, onChange: val => this.updateProp("titleFontSize", val) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 16, marginBottom: 8 }) }, "\u0426\u0432\u0435\u0442\u0430 \u0442\u0435\u043A\u0441\u0442\u0430"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 (\u0441\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.percentTextColor || "#333", onChange: color => this.updateProp("percentTextColor", color) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 (\u0442\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.percentTextColorDark || "#fff", onChange: color => this.updateProp("percentTextColorDark", color) })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439 \u0431\u0430\u0440\u043E\u0432 (\u0441\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.barLabelTextColor || "#333", onChange: color => this.updateProp("barLabelTextColor", color) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0426\u0432\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u0435\u0439 \u0431\u0430\u0440\u043E\u0432 (\u0442\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.barLabelTextColorDark || "#fff", onChange: color => this.updateProp("barLabelTextColorDark", color) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 16, marginBottom: 8 }) }, "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D (\u0441\u0432\u0435\u0442\u043B\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.bgColor || "#fff", onChange: color => this.updateProp("bgColor", color) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0424\u043E\u043D (\u0442\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: config.bgColorDark || "#232324", onChange: color => this.updateProp("bgColorDark", color) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 16, marginBottom: 8 }) }, "\u0421\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u0443\u0433\u043B\u043E\u0432"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 (px)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_b = config.borderRadius) !== null && _b !== void 0 ? _b : 16, min: 0, max: 64, onChange: val => this.updateProp("borderRadius", val) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0411\u0430\u0440\u044B (px)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_c = config.barBorderRadius) !== null && _c !== void 0 ? _c : 18, min: 0, max: 64, onChange: val => this.updateProp("barBorderRadius", val) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0411\u0430\u0440\u044B \u0431\u043E\u0440\u0434\u0435\u0440 (px)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_d = config.barBorderWidth) !== null && _d !== void 0 ? _d : '0px', min: 0, max: 64, onChange: val => this.updateProp("barBorderWidth", val) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0411\u0430\u0440\u044B \u0431\u043E\u0440\u0434\u0435\u0440 \u0446\u0432\u0435\u0442"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, { color: (_e = config.barBorderColor) !== null && _e !== void 0 ? _e : "#fff", onChange: color => this.updateProp("barBorderColor", color) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: sectionStyle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: Object.assign(Object.assign({}, labelStyle), { fontSize: 16, marginBottom: 8 }) }, "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u044B"),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: rowStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u041E\u0442\u0441\u0442\u0443\u043F \u043C\u0435\u0436\u0434\u0443 \u0431\u0430\u0440\u0430\u043C\u0438 (px)"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.NumericInput, { value: (_f = config.barMargin) !== null && _f !== void 0 ? _f : 10, min: 0, max: 40, onChange: val => this.updateProp("barMargin", val) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: labelStyle }, "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Select, { value: config.enableBarAnimation === false ? "off" : "on", onChange: e => this.updateProp("enableBarAnimation", e.target.value === "on") },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "on" }, "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430"),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "off" }, "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9iYXItY2hhcnQvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uRCxlQUFlO0FBUUk7QUFFd0Q7QUFDVDtBQUNUO0FBRXpELE1BQU0sWUFBWSxHQUF3QjtJQUN4QyxVQUFVLEVBQUUsU0FBUztJQUNyQixZQUFZLEVBQUUsRUFBRTtJQUNoQixPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFNBQVMsRUFBRSw0QkFBNEI7SUFDdkMsTUFBTSxFQUFFLHFCQUFxQjtDQUM5QixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQXdCO0lBQ3BDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsYUFBYSxFQUFFLFFBQVE7SUFDdkIsR0FBRyxFQUFFLENBQUM7SUFDTixZQUFZLEVBQUUsRUFBRTtDQUNqQixDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQXdCO0lBQ3RDLFVBQVUsRUFBRSxHQUFHO0lBQ2YsUUFBUSxFQUFFLEVBQUU7SUFD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QUUsUUFBUTtvQkFDbEIseURBQU0sS0FBSyxFQUFFLFVBQVUsb0hBQWlDO29CQUN4RCwrQ0FBQyxpREFBWSxJQUNYLEtBQUssRUFBRSxZQUFNLENBQUMsU0FBUyxtQ0FBSSxFQUFFLEVBQzdCLEdBQUcsRUFBRSxDQUFDLEVBQ04sR0FBRyxFQUFFLEVBQUUsRUFDUCxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FDbEQ7b0JBQ0YseURBQU0sS0FBSyxFQUFFLFVBQVUsaUlBQStCO29CQUN0RCwrQ0FBQywyQ0FBTSxJQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsa0JBQWtCLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDekQsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7d0JBRTdFLDJEQUFRLEtBQUssRUFBQyxJQUFJLHVEQUFrQjt3QkFDcEMsMkRBQVEsS0FBSyxFQUFDLEtBQUssNkRBQW1CLENBQy9CLENBQ0wsQ0FDRixDQUNGLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9iYXItY2hhcnQvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19jb2xvcl9waWNrZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIFJlYWN0LFxuICBqc3gsXG4gIEltbXV0YWJsZSxcbiAgRGF0YVNvdXJjZVR5cGVzLFxuICBEYXRhU291cmNlTWFuYWdlcixcbiAgVXNlRGF0YVNvdXJjZSxcbn0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XG5pbXBvcnQgeyBOdW1lcmljSW5wdXQsIFNlbGVjdCwgVGV4dElucHV0LCBCdXR0b24gfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgQ29sb3JQaWNrZXIgfSBmcm9tIFwiamltdS11aS9iYXNpYy9jb2xvci1waWNrZXJcIjtcblxuY29uc3Qgc2VjdGlvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBiYWNrZ3JvdW5kOiBcIiMyODI5MmRcIixcbiAgYm9yZGVyUmFkaXVzOiAxMixcbiAgcGFkZGluZzogMTgsXG4gIG1hcmdpbkJvdHRvbTogMjIsXG4gIGJveFNoYWRvdzogXCIwIDFweCAzcHggcmdiYSgwLDAsMCwwLjA3KVwiLFxuICBib3JkZXI6IFwiMXB4IHNvbGlkICMyMzI2MmYyMlwiLFxufTtcbmNvbnN0IHJvd1N0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgZ2FwOiA0LFxuICBtYXJnaW5Cb3R0b206IDE0LFxufTtcbmNvbnN0IGxhYmVsU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGZvbnRXZWlnaHQ6IDUwMCxcbiAgZm9udFNpemU6IDE0LFxuICBtYXJnaW5Cb3R0b206IDIsXG4gIGNvbG9yOiBcIiNmM2YzZjNcIixcbn07XG5cbmNvbnN0IExBTkdTID0gW1xuICB7IGxhYmVsOiBcItCg0YPRgdGB0LrQuNC5XCIsIHZhbHVlOiBcInJ1XCIgfSxcbiAgeyBsYWJlbDogXCJP4oCYemJla1wiLCB2YWx1ZTogXCJ1elwiIH0sXG4gIHsgbGFiZWw6IFwi0I7Qt9Cx0LXQulwiLCB2YWx1ZTogXCJ1emNyeWxcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sIHsgYXZhaWxhYmxlRmllbGRzOiB7IG5hbWU6IHN0cmluZzsgYWxpYXM/OiBzdHJpbmcgfVtdIH0+IHtcbiAgc3VwcG9ydGVkVHlwZXMgPSBJbW11dGFibGUoW0RhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXJdKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBhdmFpbGFibGVGaWVsZHM6IFtdIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZUF2YWlsYWJsZUZpZWxkcygpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnVzZURhdGFTb3VyY2VzICE9PSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSB7XG4gICAgICB0aGlzLnVwZGF0ZUF2YWlsYWJsZUZpZWxkcygpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVBdmFpbGFibGVGaWVsZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkRzID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8uWzBdO1xuICAgIGlmICghbWFpbkRzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXZhaWxhYmxlRmllbGRzOiBbXSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhbERzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKG1haW5Ecy5kYXRhU291cmNlSWQpO1xuICAgIGNvbnN0IHNjaGVtYSA9IHJlYWxEcz8uZ2V0U2NoZW1hKCk7XG4gICAgY29uc3QgZmllbGRzID0gc2NoZW1hPy5maWVsZHNcbiAgICAgID8gT2JqZWN0LnZhbHVlcyhzY2hlbWEuZmllbGRzKS5tYXAoKGY6IGFueSkgPT4gKHtcbiAgICAgICAgICBuYW1lOiBmLmppbXVOYW1lIHx8IGYubmFtZSxcbiAgICAgICAgICBhbGlhczogZi5hbGlhcyB8fCBmLmppbXVOYW1lIHx8IGYubmFtZSxcbiAgICAgICAgfSkpXG4gICAgICA6IFtdO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdmFpbGFibGVGaWVsZHM6IGZpZWxkcyB9KTtcbiAgfTtcbiAgdXBkYXRlUHJvcCA9IChmaWVsZDogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXG4gICAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGVBdmFpbGFibGVGaWVsZHMsIDIwMCk7XG4gIH07XG5cbiAgLy8gPT09INCR0JDQoNCrID09PVxuICBhZGRCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBhdmFpbGFibGVGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbmV3QmFyID0ge1xuICAgICAgZmllbGQ6IGF2YWlsYWJsZUZpZWxkc1swXT8ubmFtZSB8fCBcIlwiLFxuICAgICAgY29sb3I6IFwiIzI5OUFGRlwiLFxuICAgICAgbGFiZWxfcnU6IFwiXCIsXG4gICAgICBsYWJlbF91ejogXCJcIixcbiAgICAgIGxhYmVsX3V6Y3J5bDogXCJcIixcbiAgICAgIGJvcmRlclJhZGl1c1RvcExlZnQ6IHRoaXMucHJvcHMuY29uZmlnLmJhckJvcmRlclJhZGl1cyA/PyAxOCxcbiAgICAgIGJvcmRlclJhZGl1c1RvcFJpZ2h0OiB0aGlzLnByb3BzLmNvbmZpZy5iYXJCb3JkZXJSYWRpdXMgPz8gMTgsXG4gICAgICBib3JkZXJSYWRpdXNCb3R0b21SaWdodDogdGhpcy5wcm9wcy5jb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4LFxuICAgICAgYm9yZGVyUmFkaXVzQm90dG9tTGVmdDogdGhpcy5wcm9wcy5jb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4LFxuICAgIH07XG4gICAgY29uc3QgYmFycyA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5jb25maWcuYmFycylcbiAgICAgID8gWy4uLnRoaXMucHJvcHMuY29uZmlnLmJhcnMsIG5ld0Jhcl1cbiAgICAgIDogW25ld0Jhcl07XG4gICAgdGhpcy51cGRhdGVQcm9wKFwiYmFyc1wiLCBiYXJzKTtcbiAgfTtcbiAgdXBkYXRlQmFyID0gKGk6IG51bWJlciwga2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBjb25zdCBiYXJzID0gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmNvbmZpZy5iYXJzKVxuICAgICAgPyBbLi4udGhpcy5wcm9wcy5jb25maWcuYmFyc11cbiAgICAgIDogW107XG4gICAgYmFyc1tpXSA9IHsgLi4uYmFyc1tpXSwgW2tleV06IHZhbHVlIH07XG4gICAgdGhpcy51cGRhdGVQcm9wKFwiYmFyc1wiLCBiYXJzKTtcbiAgfTtcbiAgcmVtb3ZlQmFyID0gKGk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGJhcnMgPSBBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuY29uZmlnLmJhcnMpXG4gICAgICA/IFsuLi50aGlzLnByb3BzLmNvbmZpZy5iYXJzXVxuICAgICAgOiBbXTtcbiAgICBiYXJzLnNwbGljZShpLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVByb3AoXCJiYXJzXCIsIGJhcnMpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpZywgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhdmFpbGFibGVGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgYmFycyA9IEFycmF5LmlzQXJyYXkoY29uZmlnLmJhcnMpID8gY29uZmlnLmJhcnMgOiBbXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNCwgY29sb3I6IFwiI2ZmZlwiLCBiYWNrZ3JvdW5kOiBcIiMyMTIxMjZcIiB9fT5cbiAgICAgICAgey8qIDEuINCY0YHRgtC+0YfQvdC40Log0LTQsNC90L3Ri9GFICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QmNGB0YLQvtGH0L3QuNC6INC00LDQvdC90YvRhTwvc3Bhbj5cbiAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcbiAgICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgICAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlQ2hhbmdlfVxuICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAwLiDQn9C+0LvQtSDQtNC70Y8g0YTQuNC70YzRgtGA0LAg0LTQsNC80LHRiyAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0J/QvtC70LUg0LTQu9GPINGE0LjQu9GM0YLRgNCwINC00LDQvNCx0Ys8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZGFtRmlsdGVyRmllbGQgfHwgKGF2YWlsYWJsZUZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSAndGl0bGUnKSA/ICd0aXRsZScgOiBhdmFpbGFibGVGaWVsZHNbMF0/Lm5hbWUgfHwgJycpfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZVByb3AoJ2RhbUZpbHRlckZpZWxkJywgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YXZhaWxhYmxlRmllbGRzLm1hcChmID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Zi5uYW1lfSB2YWx1ZT17Zi5uYW1lfT57Zi5hbGlhc308L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDIuINCR0LDRgNGLICovfVxuICAgICAgICB7YXZhaWxhYmxlRmllbGRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3NlY3Rpb25TdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmxhYmVsU3R5bGUsIGZvbnRTaXplOiAxNiwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgICAgICDQkdCw0YDRiyDQtNC40LDQs9GA0LDQvNC80YtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2JhcnMubWFwKChiYXIsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4ucm93U3R5bGUsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMyOTI5MjlcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzI2MjcyOVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyAuLi5sYWJlbFN0eWxlLCBmb250U2l6ZTogMTQsIG1hcmdpbkJvdHRvbTogNCB9fT5cbiAgICAgICAgICAgICAgICAgINCR0LDRgCB7aSArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7Qn9C+0LvQtSDQtNCw0L3QvdGL0YU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYXIuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlQmFyKGksIFwiZmllbGRcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YXZhaWxhYmxlRmllbGRzLm1hcChmID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Zi5uYW1lfSB2YWx1ZT17Zi5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmLmFsaWFzfVxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDQsdCw0YDQsDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17YmFyLmNvbG9yIHx8IFwiIzI5OUFGRlwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y29sb3IgPT4gdGhpcy51cGRhdGVCYXIoaSwgXCJjb2xvclwiLCBjb2xvcil9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7Qm9C10LnQsdC7IChSVSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYXIubGFiZWxfcnUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVCYXIoaSwgXCJsYWJlbF9ydVwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCb0LXQudCx0LsgKFVaKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhci5sYWJlbF91eiB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZUJhcihpLCBcImxhYmVsX3V6XCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JvQtdC50LHQuyAoVVpDUllMKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhci5sYWJlbF91emNyeWwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVCYXIoaSwgXCJsYWJlbF91emNyeWxcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QkNGC0YDQuNCx0YPRgiDQtNC70Y8g0LvQtdC50LHQu9CwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFyLmF0dHJpYnV0ZUZpZWxkIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlQmFyKGksIFwiYXR0cmlidXRlRmllbGRcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+4oCUPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIHthdmFpbGFibGVGaWVsZHMubWFwKGYgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmLm5hbWV9IHZhbHVlPXtmLm5hbWV9PntmLmFsaWFzfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QodC60YDRg9Cz0LvQtdC90LjQtSDRg9Cz0LvQvtCyINCx0LDRgNCwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgZmxleFdyYXA6ICd3cmFwJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyNjY2MnIH19PtCS0LXRgNGF0L3QuNC5INC70LXQstGL0Lk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Jhci5ib3JkZXJSYWRpdXNUb3BMZWZ0ID8/IGNvbmZpZy5iYXJCb3JkZXJSYWRpdXMgPz8gMTh9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezY0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnVwZGF0ZUJhcihpLCBcImJvcmRlclJhZGl1c1RvcExlZnRcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAnI2NjYycgfX0+0JLQtdGA0YXQvdC40Lkg0L/RgNCw0LLRi9C5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYXIuYm9yZGVyUmFkaXVzVG9wUmlnaHQgPz8gY29uZmlnLmJhckJvcmRlclJhZGl1cyA/PyAxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NjR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IHRoaXMudXBkYXRlQmFyKGksIFwiYm9yZGVyUmFkaXVzVG9wUmlnaHRcIiwgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA2MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogNCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogMTIsIGNvbG9yOiAnI2NjYycgfX0+0J3QuNC20L3QuNC5INC/0YDQsNCy0YvQuTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFyLmJvcmRlclJhZGl1c0JvdHRvbVJpZ2h0ID8/IGNvbmZpZy5iYXJCb3JkZXJSYWRpdXMgPz8gMTh9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezY0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnVwZGF0ZUJhcihpLCBcImJvcmRlclJhZGl1c0JvdHRvbVJpZ2h0XCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDQgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDEyLCBjb2xvcjogJyNjY2MnIH19PtCd0LjQttC90LjQuSDQu9C10LLRi9C5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYXIuYm9yZGVyUmFkaXVzQm90dG9tTGVmdCA/PyBjb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs2NH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy51cGRhdGVCYXIoaSwgXCJib3JkZXJSYWRpdXNCb3R0b21MZWZ0XCIsIHZhbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGVydGlhcnlcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA4LCBiYWNrZ3JvdW5kOiBcIiNjMzNcIiwgY29sb3I6IFwiI2ZmZlwiIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUJhcihpKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjCDQsdCw0YBcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRCYXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiAxMCB9fVxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICArINCU0L7QsdCw0LLQuNGC0Ywg0LHQsNGAXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogMy4g0JfQsNCz0L7Qu9C+0LLQvtC6INC4INGB0YLQuNC70LggKNC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQv9C+INCw0L3QsNC70L7Qs9C40Lgg0YEgcGllLWNoYXJ0KSAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JfQsNCz0L7Qu9C+0LLQvtC6IChSVSk8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcudGl0bGVfcnUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVQcm9wKFwidGl0bGVfcnVcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7Ql9Cw0LPQvtC70L7QstC+0LogKFVaKTwvc3Bhbj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy50aXRsZV91eiB8fCBcIlwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnVwZGF0ZVByb3AoXCJ0aXRsZV91elwiLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCX0LDQs9C+0LvQvtCy0L7QuiAoVVpDUllMKTwvc3Bhbj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy50aXRsZV91emNyeWwgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVQcm9wKFwidGl0bGVfdXpjcnlsXCIsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCQ0YLRgNC40LHRg9GCINC00LvRjyDQt9Cw0LPQvtC70L7QstC60LA8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcudGl0bGVBdHRyaWJ1dGUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy51cGRhdGVQcm9wKFwidGl0bGVBdHRyaWJ1dGVcIiwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+4oCUPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthdmFpbGFibGVGaWVsZHMubWFwKGYgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmLm5hbWV9IHZhbHVlPXtmLm5hbWV9PntmLmFsaWFzfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QoNCw0LfQvNC10YAg0LfQsNCz0L7Qu9C+0LLQutCwPC9zcGFuPlxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnRpdGxlRm9udFNpemUgfHwgMTd9XG4gICAgICAgICAgICAgIG1pbj17MTB9XG4gICAgICAgICAgICAgIG1heD17MzZ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdGhpcy51cGRhdGVQcm9wKFwidGl0bGVGb250U2l6ZVwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDQuINCm0LLQtdGC0LAg0YLQtdC60YHRgtCwICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGFiZWxTdHlsZSwgZm9udFNpemU6IDE2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICDQptCy0LXRgtCwINGC0LXQutGB0YLQsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDQv9GA0L7RhtC10L3RgtC+0LIgKNGB0LLQtdGC0LvQsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLnBlcmNlbnRUZXh0Q29sb3IgfHwgXCIjMzMzXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiB0aGlzLnVwZGF0ZVByb3AoXCJwZXJjZW50VGV4dENvbG9yXCIsIGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KbQstC10YIg0L/RgNC+0YbQtdC90YLQvtCyICjRgtGR0LzQvdCw0Y8g0YLQtdC80LApPC9zcGFuPlxuICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgIGNvbG9yPXtjb25maWcucGVyY2VudFRleHRDb2xvckRhcmsgfHwgXCIjZmZmXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiB0aGlzLnVwZGF0ZVByb3AoXCJwZXJjZW50VGV4dENvbG9yRGFya1wiLCBjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDQv9C+0LTQv9C40YHQtdC5INCx0LDRgNC+0LIgKNGB0LLQtdGC0LvQsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmJhckxhYmVsVGV4dENvbG9yIHx8IFwiIzMzM1wifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y29sb3IgPT4gdGhpcy51cGRhdGVQcm9wKFwiYmFyTGFiZWxUZXh0Q29sb3JcIiwgY29sb3IpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QptCy0LXRgiDQv9C+0LTQv9C40YHQtdC5INCx0LDRgNC+0LIgKNGC0ZHQvNC90LDRjyDRgtC10LzQsCk8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5iYXJMYWJlbFRleHRDb2xvckRhcmsgfHwgXCIjZmZmXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiB0aGlzLnVwZGF0ZVByb3AoXCJiYXJMYWJlbFRleHRDb2xvckRhcmtcIiwgY29sb3IpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIDUuINCm0LLQtdGCINGE0L7QvdCwICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGFiZWxTdHlsZSwgZm9udFNpemU6IDE2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICDQptCy0LXRgiDRhNC+0L3QsFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QpNC+0L0gKNGB0LLQtdGC0LvQsNGPINGC0LXQvNCwKTwvc3Bhbj5cbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICBjb2xvcj17Y29uZmlnLmJnQ29sb3IgfHwgXCIjZmZmXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiB0aGlzLnVwZGF0ZVByb3AoXCJiZ0NvbG9yXCIsIGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0KTQvtC9ICjRgtGR0LzQvdCw0Y8g0YLQtdC80LApPC9zcGFuPlxuICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgIGNvbG9yPXtjb25maWcuYmdDb2xvckRhcmsgfHwgXCIjMjMyMzI0XCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiB0aGlzLnVwZGF0ZVByb3AoXCJiZ0NvbG9yRGFya1wiLCBjb2xvcil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogNi4g0KHQutGA0YPQs9C70LXQvdC40LUg0YPQs9C70L7QsiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17c2VjdGlvblN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IC4uLmxhYmVsU3R5bGUsIGZvbnRTaXplOiAxNiwgbWFyZ2luQm90dG9tOiA4IH19PlxuICAgICAgICAgICAg0KHQutGA0YPQs9C70LXQvdC40LUg0YPQs9C70L7QslxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QmtC+0L3RgtC10LnQvdC10YAgKHB4KTwvc3Bhbj5cbiAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5ib3JkZXJSYWRpdXMgPz8gMTZ9XG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXs2NH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnVwZGF0ZVByb3AoXCJib3JkZXJSYWRpdXNcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JHQsNGA0YsgKHB4KTwvc3Bhbj5cbiAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5iYXJCb3JkZXJSYWRpdXMgPz8gMTh9XG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXs2NH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnVwZGF0ZVByb3AoXCJiYXJCb3JkZXJSYWRpdXNcIiwgdmFsKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17bGFiZWxTdHlsZX0+0JHQsNGA0Ysg0LHQvtGA0LTQtdGAIChweCk8L3NwYW4+XG4gICAgICAgICAgICA8TnVtZXJpY0lucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuYmFyQm9yZGVyV2lkdGggPz8gJzBweCd9XG4gICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgbWF4PXs2NH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB0aGlzLnVwZGF0ZVByb3AoXCJiYXJCb3JkZXJXaWR0aFwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QkdCw0YDRiyDQsdC+0YDQtNC10YAg0YbQstC10YI8L3NwYW4+XG4gICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgY29sb3I9e2NvbmZpZy5iYXJCb3JkZXJDb2xvciA/PyBcIiNmZmZcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NvbG9yID0+IHRoaXMudXBkYXRlUHJvcChcImJhckJvcmRlckNvbG9yXCIsIGNvbG9yKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiA3LiDQkNC90LjQvNCw0YbQuNGPINC4INC+0YLRgdGC0YPQv9GLICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgLi4ubGFiZWxTdHlsZSwgZm9udFNpemU6IDE2LCBtYXJnaW5Cb3R0b206IDggfX0+XG4gICAgICAgICAgICDQkNC90LjQvNCw0YbQuNGPINC4INC+0YLRgdGC0YPQv9GLXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2xhYmVsU3R5bGV9PtCe0YLRgdGC0YPQvyDQvNC10LbQtNGDINCx0LDRgNCw0LzQuCAocHgpPC9zcGFuPlxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmJhck1hcmdpbiA/PyAxMH1cbiAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICBtYXg9ezQwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IHRoaXMudXBkYXRlUHJvcChcImJhck1hcmdpblwiLCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtsYWJlbFN0eWxlfT7QkNC90LjQvNCw0YbQuNGPINC/0YDQuCDQvdCw0LLQtdC00LXQvdC40Lg8L3NwYW4+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuZW5hYmxlQmFyQW5pbWF0aW9uID09PSBmYWxzZSA/IFwib2ZmXCIgOiBcIm9uXCJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMudXBkYXRlUHJvcChcImVuYWJsZUJhckFuaW1hdGlvblwiLCBlLnRhcmdldC52YWx1ZSA9PT0gXCJvblwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9uXCI+0JLQutC70Y7Rh9C10L3QsDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2ZmXCI+0J7RgtC60LvRjtGH0LXQvdCwPC9vcHRpb24+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9