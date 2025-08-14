System.register(["jimu-core/react","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/bar-chart/src/runtime/DamCodeDictionary.ts":
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/bar-chart/src/runtime/DamCodeDictionary.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Словарь соответствий коротких кодов и полных названий дамб (uzcryl)
const DAMB_CODE_TO_TITLE = {
    todakol: "Тўдакўл сув омбори",
    chortoq: "Чортоқ сув омбори ",
    topalang: "Тўпаланг сув омбори",
    tosinsoy: "Тўсинсой сув омбори ",
    toshkent: "Тошкент сув омбори ",
    talimarjon: "Талимаржон сув омбори",
    kattakorgon: "Каттақўрғон сув омбори",
    zarkent: "Заркент сув омбори ",
    zomin: "Зомин сув омбори ",
    qorovultepa: "Қоровултепа сув омбори ",
    oktepa: "Оқтепа сув омбори",
    jiydalisoy: "Жийдалисой сув омбори",
    ohangaron: "Оҳангарон сув омбори ",
    pachkamar: "Пачкамар сув омбори ",
    karkidon: "Каркидон сув омбори ",
    jizzakh: "Жиззах сув омбори",
    hisorak: "Хисорак сув омбори",
    qorgontepa: "Қўрғонтепа сув омбори ",
    chorvoq: "Чорвоқ сув омбори ",
    quyumozor: "Қуйимозор сув омбори ",
    oqdaryo: "Оқ дарё сув омбори",
    shurkul: "Шўркўл сув омбори",
    qorasuv: "Қорасув сув омбори (Наманган)",
    uchqizil: "Учқизил сув омбори",
    qorabog: "Қорабоғ сув омбори",
    nugayli: "Нуғайли сув омбори",
    yangikurgan: "Янги Қўрғон сув омбори",
    qamashi: "Қамаши сув омбори",
    sobirsoy: "Собирсой сув омбори",
    degrez: "Дегрез сув омбори",
    eskiyer: "Эскиер сув омбори",
    girvansoy: "Ғирвонсой сел омбори",
    oqbilol: "Оқбилол сел омбори",
    kengkol: "Кенгкўл сув омбори",
    omondara: "Омондара сел омбори",
    rezaksoy: "Резаксой сув омбори",
    qoratepa: "Қоратепа сув омбори",
    kamongaron: "Камонгарон сув омбори",
    mominobod: "Мўминобод сел омбори",
    kokseraskoy: "Кўксераксой сув омбори",
    ertikon: "Ертикон сув омбори",
    langar: "Лангар сув омбори",
    fargona: "Марказий Фарғона сув омбори",
    qarasuv: "Қорасув сув омбори",
    qalqama: "Қалқама сув  омбори", //+++
    shorabsoy: "Шўробсой сув омбори",
    dehqonobod: "Деҳқонобод сув омбори",
    sentabsoy: "Сентобсой сув омбори",
    koksaroy: "Кўксарой сув омбори",
    xojamushkent: "Хўжамушкент сув омбори",
    oqchobsoy: "Оқчобсой сув омбори",
    shorsuv: "Шўр сув сел омбори",
    oqbuloq: "Оқбулоқ сув омбори",
    qizilsuv: "Қизилсув сув омбори",
    asaka: "Aсака адир сув омбори",
    qoramurut: "Қорамурт сув омбори",
    chimqurgon: "Чимқоргон сув омбори ",
    surxon: "Жанубий-Сурхон сув омбори ",
    arnasoy: "Aрнасой сув омбори",
    varziq: "Варзиқ сув омбори ",
    shorobsoy: "Шўробсой сув омбори"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DAMB_CODE_TO_TITLE);


/***/ }),

/***/ "./your-extensions/widgets/bar-chart/src/runtime/utils.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/bar-chart/src/runtime/utils.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchAllRecords: () => (/* binding */ fetchAllRecords)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchAllRecords(ds_1, where_1) {
    return __awaiter(this, arguments, void 0, function* (ds, where, outFields = ["*"], batchSize = 4000) {
        let offset = 0;
        let allRecords = [];
        while (true) {
            const result = yield ds.query({
                where,
                outFields,
                returnGeometry: false,
                resultOffset: offset,
                resultRecordCount: batchSize,
            });
            allRecords = allRecords.concat(result.records || []);
            if (!result.records || result.records.length < batchSize)
                break;
            offset += batchSize;
        }
        return allRecords;
    });
}


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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/bar-chart/src/runtime/widget.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ BarChartWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/bar-chart/src/runtime/utils.ts");
/* harmony import */ var _DamCodeDictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DamCodeDictionary */ "./your-extensions/widgets/bar-chart/src/runtime/DamCodeDictionary.ts");




// Импортируем buildDambFilter из line-chart
// Копируем getFullDambName из line-chart
const DAMB_NAMES = [
    "Arnasoy suv ombori", "Asaka adir suv ombori", "Chimqo'rg'on suv ombori", "Chortoq suv ombori", "Chorvoq suv ombori", "Degrez suv ombori", "Dehqonobod suv ombori", "Ertikon suv ombori", "Eski yer suv ombori", "Girvonsoy suv ombori", "Hisorak suv ombori", "Janubiy-Surhon suv ombori", "Jiydalisoy suv ombori", "Jizzax suv ombori", "Kamashi suv ombori", "Kamongaron suv ombori", "Karkidon suv ombori", "Kattaqo'rg'on suv ombori", "Kengko'l suv ombori", "ko'ksaroy suv ombori", "koksereksoy suv ombori(Koksereksoy suv ombori)", "Langar suv ombori", "Markaziy Fargona suv ombori", "Nugayli suv ombori", "Ohangaron suv ombori", "Omondora suv ombori", "Oqbilol suv ombori", "Oqbuloq suv omvori", "Oqchobsoy suv ombori", "Oqdaryo suv ombori", "Oqtepa suv ombori", "Pachkamar suv ombori", "Qalqama sel ombori", "Qizilsuv suv ombori", "Qorabog' suv ombori", "Qoramurut sel ombori", "Qorasuv suv ombori", "Qorasuv suv ombori (Namangan)", "Qoratepa suv ombori", "Qorovultepa suv ombori", "Qurgontepa suv ombori", "Quyimozor suv ombori", "Rezaksoy suv ombori", "Sentobsoy suv ombori", "Sho'rko'l suv ombori", "sho'robsoy sov ombori", "Sobirsoy suv ombori", "Talimarjon suv ombori", "To'dako'l suv ombori", "To'palang suv ombori", "Toshkent suv ombori", "Tusunsoy suv ombori", "Uchqizil suv ombori", "Varzik suv ombori", "Xo'jamushkent suv ombori", "Yangi Qo'rg'on suv ombori", "Zomin suv ombori"
];
function normalizeName(str) {
    return str.toLowerCase().replace(/['''`]/g, "").replace(/\s+/g, "").replace(/[\(\)]/g, "");
}
const dambShortToFull = {};
DAMB_NAMES.forEach(fullName => {
    const normFull = normalizeName(fullName);
    let short = normFull.replace(/suvombori.*$/g, "").replace(/selombori.*$/g, "").replace(/sovombori.*$/g, "");
    if (short.endsWith("ko"))
        short = short + "l";
    dambShortToFull[short] = fullName;
    dambShortToFull[normFull] = fullName;
});
function getFullDambName(input) {
    if (!input)
        return null;
    const normInput = normalizeName(input);
    if (dambShortToFull[normInput])
        return dambShortToFull[normInput];
    const found = Object.keys(dambShortToFull).find(key => normInput === key || normInput.startsWith(key));
    if (found)
        return dambShortToFull[found];
    const found2 = DAMB_NAMES.find(full => normalizeName(full).includes(normInput) || normInput.includes(normalizeName(full)));
    if (found2)
        return found2;
    return input;
}
const DEFAULT_LOCALE = "uz";
// Utility: get bars array robustly from config 
function getBars(config) {
    if (!config)
        return [];
    const bars = config.bars;
    if (Array.isArray(bars)) {
        return bars.filter(bar => bar && typeof bar.field === 'string' && bar.field.length > 0);
    }
    return [];
}
// Универсальная функция для получения значения поля из записи ArcGIS Record
function getFieldValue(rec, field) {
    var _a, _b;
    return (_b = (_a = rec === null || rec === void 0 ? void 0 : rec.feature) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b[field];
}
function getTitleAlignStyle(position) {
    if (position === 'left')
        return { textAlign: 'left' };
    if (position === 'right')
        return { textAlign: 'right' };
    return { textAlign: 'center' };
}
// Utility to darken a hex color
function darkenColor(hex, amount = 0.15) {
    if (!hex)
        return hex;
    let c = hex.replace('#', '');
    if (c.length === 3)
        c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    const num = parseInt(c, 16);
    let r = Math.max(0, (num >> 16) - 255 * amount);
    let g = Math.max(0, ((num >> 8) & 0x00FF) - 255 * amount);
    let b = Math.max(0, (num & 0x0000FF) - 255 * amount);
    return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
}
// Компонент для отображения состояния "нет данных"
const NoDataState = ({ themed }) => {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const styleId = 'no-data-animation-styles';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
        @keyframes barPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.4); }
          50% { opacity: 0.7; transform: scaleY(0.8); }
        }
        
        @keyframes barWave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(0.7); }
        }
        
        @keyframes emptyFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 0.8; }
        }
        
        @keyframes barSlideIn {
          0% { 
            transform: scaleY(0) scaleX(0.8);
            opacity: 0;
          }
          100% { 
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
        }
        
        @keyframes barGrow {
          0% { 
            transform: scaleX(0);
            transform-origin: left center;
          }
          100% { 
            transform: scaleX(1);
            transform-origin: left center;
          }
        }
        
        @keyframes barHoverPulse {
          0%, 100% { 
            box-shadow: 0 4px 16px 0 rgba(44,100,255,0.18);
          }
          50% { 
            box-shadow: 0 8px 24px 0 rgba(44,100,255,0.35);
          }
        }
        
        @keyframes barHoverGlow {
          0%, 100% { 
            filter: brightness(1);
          }
          50% { 
            filter: brightness(1.15);
          }
        }
        
        @keyframes legendHover {
          0%, 100% { 
            transform: scale(1);
          }
          50% { 
            transform: scale(1.1);
          }
        }
        
        @keyframes barShine {
          0% { 
            background-position: -200% center;
          }
          100% { 
            background-position: 200% center;
          }
        }
      `;
            document.head.appendChild(style);
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '90px',
            width: '100%',
            opacity: 0.6
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
                gap: '8px',
                height: '60px',
                marginBottom: '20px'
            } }, [35, 50, 25, 45, 30].map((height, i) => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: i, style: {
                width: '12px',
                height: `${height}px`,
                backgroundColor: themed.titleColor || '#ccc',
                borderRadius: '6px',
                opacity: 0.3,
                animation: `barWave 2s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
            } }))))));
};
function BarChartWidget(props) {
    var _a, _b;
    const { config, useDataSources, id } = props;
    // Locale subscribe
    const [locale, setLocale] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("custom_locale") || DEFAULT_LOCALE);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handler = (e) => setLocale(e.detail);
        window.addEventListener("custom-locale-changed", handler);
        return () => window.removeEventListener("custom-locale-changed", handler);
    }, []);
    // Theme subscribe
    const [customTheme, setCustomTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("customTheme") || "light");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handler = () => setCustomTheme(localStorage.getItem("customTheme") || "light");
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, []);
    const isDark = customTheme === "dark";
    const themed = {
        bgColor: isDark ? config.bgColorDark || config.bgColor || "#232324" : config.bgColor || "#fff",
        titleColor: isDark ? config.titleColorDark || config.titleColor || "#fff" : config.titleColor || "#444",
        legendColor: isDark ? config.legendColorDark || config.legendColor || "#eee" : config.legendColor || "#333",
        percentTextColor: isDark ? config.percentTextColorDark || config.percentTextColor || "#fff" : config.percentTextColor || "#333",
        barLabelTextColor: isDark ? config.barLabelTextColorDark || config.barLabelTextColor || "#fff" : config.barLabelTextColor || "#333",
        barBorderColor: isDark ? config.barBorderColorDark || config.barBorderColor || "#232324" : config.barBorderColor || "#fff",
    };
    // DataSource connection
    const [records, setRecords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [ds, setDs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const bars = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getBars(config), [config]);
    const [hoveredBar, setHoveredBar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    // Get selected dam value from localStorage or props
    const [selectedDamCode, setSelectedDamCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((props.selectedDam || localStorage.getItem('selected_dam') || '').trim());
    // Enhanced useEffect to monitor dam selection changes with polling and custom events
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Storage event listener for cross-tab changes
        function handleStorage(e) {
            if (e.key === 'selected_dam') {
                setSelectedDamCode((props.selectedDam || e.newValue || '').trim());
            }
        }
        // Custom event listener for same-tab changes
        function handleCustomDamChange() {
            const currentDam = localStorage.getItem('selected_dam') || '';
            setSelectedDamCode((props.selectedDam || currentDam || '').trim());
        }
        // Polling for immediate updates in the same tab
        let lastDamCode = localStorage.getItem('selected_dam') || '';
        const interval = setInterval(() => {
            const currentDamCode = localStorage.getItem('selected_dam') || '';
            if (currentDamCode !== lastDamCode) {
                lastDamCode = currentDamCode;
                setSelectedDamCode((props.selectedDam || currentDamCode || '').trim());
            }
        }, 100); // Check every 100ms
        // Add event listeners
        window.addEventListener('storage', handleStorage);
        window.addEventListener('dam_name_changed', handleCustomDamChange);
        window.addEventListener('selected_dam_changed', handleCustomDamChange);
        window.addEventListener('dam_selected', handleCustomDamChange);
        return () => {
            window.removeEventListener('storage', handleStorage);
            window.removeEventListener('dam_name_changed', handleCustomDamChange);
            window.removeEventListener('selected_dam_changed', handleCustomDamChange);
            window.removeEventListener('dam_selected', handleCustomDamChange);
            clearInterval(interval);
        };
    }, [props.selectedDam]);
    // Also watch for props.selectedDam changes (if it changes from outside)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setSelectedDamCode((props.selectedDam || localStorage.getItem('selected_dam') || '').trim());
    }, [props.selectedDam]);
    const dambTitle = _DamCodeDictionary__WEBPACK_IMPORTED_MODULE_3__["default"][selectedDamCode] || selectedDamCode;
    const damField = config.damFilterField || 'Nomi'; // по умолчанию 'Nomi', если не указано другое поле
    const filterValue = dambTitle;
    const damFilter = (selectedDamCode && filterValue) ? `${damField} = '${filterValue}'` : '1=1';
    // DataSource инициализация
    const handleDataSourceCreated = (createdDs) => setDs(createdDs);
    // Fetch all data for all bar fields, filtered by selected_dam
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!ds || bars.length === 0 || !selectedDamCode)
            return;
        if (!damFilter || damFilter === '1=1')
            return;
        const outFields = Array.from(new Set([
            ...bars.map(bar => bar.field),
            ...bars.map(bar => bar.attributeField).filter(Boolean),
            config.titleAttribute,
        ].filter(Boolean)));
        const t0 = performance.now();
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fetchAllRecords)(ds, damFilter, outFields).then((recs) => {
            const t1 = performance.now();
            setRecords(recs);
            if (!recs || recs.length === 0) {
                console.warn('[BAR-CHART] No records found for filter:', damFilter);
            }
        });
    }, [ds, bars, selectedDamCode, config.titleAttribute, damFilter]);
    // Временно, для диагностики:
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!ds)
            return;
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.fetchAllRecords)(ds, '1=1', [damField]).then((recs) => {
        });
    }, [ds, damField]);
    // Calculate sums for each bar
    const { barSums, sumTotal } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const sums = bars.map(bar => {
            var _a;
            let sum = 0;
            for (const rec of records) {
                sum += Number((_a = getFieldValue(rec, bar.field)) !== null && _a !== void 0 ? _a : 0);
            }
            return sum;
        });
        const total = sums.reduce((a, b) => a + b, 0);
        return { barSums: sums, sumTotal: total };
    }, [records, bars]);
    // Calculate percentages for each bar
    const barPercents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (!sumTotal)
            return bars.map(() => 0);
        return barSums.map(sum => Math.round((sum / sumTotal) * 100));
    }, [barSums, sumTotal, bars]);
    // If no dam is selected, make widget invisible
    if (!selectedDamCode) {
        return null;
    }
    function formatNumber(num) {
        var _a;
        return (_a = num === null || num === void 0 ? void 0 : num.toLocaleString("ru-RU").replace(/,/g, " ")) !== null && _a !== void 0 ? _a : "—";
    }
    // Helper function to get the correct unit based on locale
    function getVolumeUnit() {
        if (locale === 'uz')
            return 'm³';
        if (locale === 'uzcryl')
            return 'м³';
        return 'м³'; // Default for 'ru' and others
    }
    // Helper function to generate border radius string for individual bars
    function getBarBorderRadius(bar) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const topLeft = (_b = (_a = bar.borderRadiusTopLeft) !== null && _a !== void 0 ? _a : config.barBorderRadius) !== null && _b !== void 0 ? _b : 18;
        const topRight = (_d = (_c = bar.borderRadiusTopRight) !== null && _c !== void 0 ? _c : config.barBorderRadius) !== null && _d !== void 0 ? _d : 18;
        const bottomRight = (_f = (_e = bar.borderRadiusBottomRight) !== null && _e !== void 0 ? _e : config.barBorderRadius) !== null && _f !== void 0 ? _f : 18;
        const bottomLeft = (_h = (_g = bar.borderRadiusBottomLeft) !== null && _g !== void 0 ? _g : config.barBorderRadius) !== null && _h !== void 0 ? _h : 18;
        // If all corners are the same, return a single value
        if (topLeft === topRight && topRight === bottomRight && bottomRight === bottomLeft) {
            return `${topLeft}px`;
        }
        // Otherwise return the full border radius string
        return `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
    }
    // Title and style
    const title = config[`title_${locale}`] || "";
    // Get value for title attribute (from first record)
    let titleAttrValue = '';
    if (config.titleAttribute && records.length > 0) {
        const val = getFieldValue(records[0], config.titleAttribute);
        titleAttrValue = val !== undefined && val !== null ? String(val) : '';
    }
    const titleStyle = Object.assign(Object.assign({ fontSize: config.titleFontSize || 17, fontWeight: 600, color: themed.titleColor, fontFamily: config.titleFontFamily || 'inherit' }, getTitleAlignStyle(config.titlePosition || 'center')), { marginBottom: 8, marginTop: 10, animation: records.length > 0 ? `barSlideIn 0.6s ease-out both` : 'none' });
    // Bar colors and labels
    function getBarColor(bar, i) {
        return bar.color || ["#299AFF", "#FFD247", "#FF6B6B", "#6BCB77", "#4D96FF"][i % 5];
    }
    function getBarLabel(bar) {
        return bar[`label_${locale}`] || bar.label_ru || bar.label_uz || bar.label_uzcryl || bar.field;
    }
    // For legend: get value for a bar's attributeField (from first record)
    function getBarAttributeValue(bar) {
        if (bar.attributeField && records.length > 0) {
            const val = getFieldValue(records[0], bar.attributeField);
            return val !== undefined && val !== null ? String(val) : '';
        }
        return '';
    }
    // Bar chart rendering
    return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
            width: "100%",
            height: "100%",
            background: themed.bgColor,
            borderRadius: (_a = config.borderRadius) !== null && _a !== void 0 ? _a : 16,
            padding: "8px 18px 0px 18px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        } },
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0], widgetId: id, onDataSourceCreated: handleDataSourceCreated }),
        react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: titleStyle },
            title,
            titleAttrValue && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: { fontWeight: 700, marginLeft: 7 } },
                isFinite(Number(titleAttrValue)) ? formatNumber(Number(titleAttrValue)) : titleAttrValue,
                getVolumeUnit()))),
        records.length === 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: { animation: `barSlideIn 0.8s ease-out 0.3s both` } },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(NoDataState, { themed: themed }))),
        records.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                width: "100%",
                minHeight: 40,
                background: themed.bgColor,
                borderRadius: `${(_b = config.barBorderRadius) !== null && _b !== void 0 ? _b : 18}px`,
                overflow: "visible",
                marginBottom: 10,
                display: "flex",
                alignItems: "flex-end",
                position: "relative",
                flex: 1,
                maxHeight: '100%',
                animation: `barSlideIn 0.8s ease-out 0.2s both`,
            } }, bars.map((bar, i) => {
            var _a;
            const isHovered = hoveredBar === i;
            return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: i, style: {
                    height: "100%",
                    width: `${barPercents[i]}%`,
                    background: isHovered
                        ? `linear-gradient(90deg, 
                        ${darkenColor(getBarColor(bar, i), 0.12)} 0%, 
                        ${getBarColor(bar, i)} 50%, 
                        ${darkenColor(getBarColor(bar, i), 0.12)} 100%),
                        linear-gradient(45deg, 
                        transparent 40%, 
                        rgba(255,255,255,0.2) 50%, 
                        transparent 60%)`
                        : getBarColor(bar, i),
                    backgroundSize: isHovered ? '200% 100%, 200% 100%' : '100% 100%',
                    borderRadius: getBarBorderRadius(bar),
                    marginLeft: i === 0 ? 0 : ((_a = config.barMargin) !== null && _a !== void 0 ? _a : 10),
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: `barGrow 1.2s ease-out ${i * 0.15}s both${isHovered ? ', barHoverGlow 1s ease-in-out infinite' : ''}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: themed.percentTextColor,
                    fontWeight: 600,
                    fontSize: 17,
                    border: `${config.barBorderWidth || 0}px solid ${themed.barBorderColor}`,
                    position: "relative",
                    zIndex: isHovered ? 10000 : 9999,
                    minWidth: 0,
                    maxWidth: "100%",
                    boxShadow: isHovered
                        ? "0 8px 32px 0 rgba(44,100,255,0.3), 0 0 20px 0 rgba(44,100,255,0.2)"
                        : "0 2px 12px 0 rgba(44,100,255,0.10)",
                    transform: isHovered ? "scale(1.05) translateY(-2px)" : "scale(1)",
                    cursor: "pointer",
                    overflow: "hidden",
                }, onMouseEnter: () => setHoveredBar(i), onMouseLeave: () => setHoveredBar(null) },
                isHovered && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                        backgroundSize: '200% 200%',
                        animation: 'barShine 1.5s ease-in-out infinite',
                        borderRadius: getBarBorderRadius(bar),
                        pointerEvents: 'none',
                    } })),
                barPercents[i] > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: {
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        textShadow: isHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                        zIndex: 1,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    } }, barPercents[i] >= 5 ? `${barPercents[i]}%` : ''))));
        }))),
        records.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 15,
                marginBottom: 10,
                flexWrap: "wrap",
                gap: 4,
                color: themed.barLabelTextColor,
                animation: `barSlideIn 0.8s ease-out 0.6s both`,
            } }, bars.map((bar, i) => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { key: i, style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                animation: `barSlideIn 0.6s ease-out ${0.8 + i * 0.1}s both`,
            } },
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: {
                    width: 13,
                    height: 13,
                    marginBottom: 2,
                    borderRadius: "50%",
                    background: hoveredBar === i
                        ? `radial-gradient(circle, ${getBarColor(bar, i)}, ${darkenColor(getBarColor(bar, i), 0.2)})`
                        : getBarColor(bar, i),
                    display: "inline-block",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: hoveredBar === i ? "scale(1.3)" : "scale(1)",
                    boxShadow: hoveredBar === i
                        ? `0 0 15px ${getBarColor(bar, i)}40, 0 0 30px ${getBarColor(bar, i)}20`
                        : "none",
                    animation: hoveredBar === i ? 'legendHover 0.6s ease-in-out infinite' : 'none',
                }, onMouseEnter: () => setHoveredBar(i), onMouseLeave: () => setHoveredBar(null) }),
            react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: {
                    color: themed.barLabelTextColor,
                    transition: 'all 0.3s ease',
                    transform: hoveredBar === i ? 'translateX(4px)' : 'translateX(0)',
                    fontWeight: hoveredBar === i ? 700 : 400,
                } },
                getBarLabel(bar),
                getBarAttributeValue(bar) && (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: { fontWeight: 700, marginLeft: 4 } }, getBarAttributeValue(bar))),
                react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: {
                        fontWeight: 700,
                        marginLeft: 4,
                        color: hoveredBar === i ? getBarColor(bar, i) : themed.barLabelTextColor,
                        transition: 'color 0.3s ease',
                    } },
                    formatNumber(barSums[i]),
                    getVolumeUnit(),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", { style: { fontWeight: 400, marginLeft: 4 } },
                        "(",
                        barPercents[i],
                        "%)"))))))))));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9iYXItY2hhcnQvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQXNFO0FBQ3RFLE1BQU0sa0JBQWtCLEdBQUc7SUFDekIsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLHNCQUFzQjtJQUNoQyxRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxPQUFPLEVBQUUscUJBQXFCO0lBQzlCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsV0FBVyxFQUFFLHlCQUF5QjtJQUN0QyxNQUFNLEVBQUUsbUJBQW1CO0lBQzNCLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDLFFBQVEsRUFBRSxzQkFBc0I7SUFDaEMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixTQUFTLEVBQUUsdUJBQXVCO0lBQ2xDLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixPQUFPLEVBQUUsK0JBQStCO0lBQ3hDLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLE1BQU0sRUFBRSxtQkFBbUI7SUFDM0IsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixVQUFVLEVBQUUsdUJBQXVCO0lBQ25DLFNBQVMsRUFBRSxzQkFBc0I7SUFDakMsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLE1BQU0sRUFBRSxtQkFBbUI7SUFDM0IsT0FBTyxFQUFFLDZCQUE2QjtJQUN0QyxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxLQUFLO0lBQ3JDLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQyxTQUFTLEVBQUUsc0JBQXNCO0lBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7SUFDL0IsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxVQUFVLEVBQUUsdUJBQXVCO0lBQ25DLE1BQU0sRUFBRSw0QkFBNEI7SUFDcEMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLFNBQVMsRUFBRSxxQkFBcUI7Q0FDakMsQ0FBQztBQUVGLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakUzQixTQUFlLGVBQWU7eURBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsSUFBSTtRQUNsRixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNaLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsS0FBSztnQkFDTCxTQUFTO2dCQUNULGNBQWMsRUFBRSxLQUFLO2dCQUNyQixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsaUJBQWlCLEVBQUUsU0FBUzthQUM3QixDQUFDLENBQUM7WUFDSCxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVM7Z0JBQUUsTUFBTTtZQUNoRSxNQUFNLElBQUksU0FBUyxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBQUE7Ozs7Ozs7Ozs7OztBQ2hCRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05TO0FBQ1o7QUFDTjtBQUNXO0FBRXJELDRDQUE0QztBQUM1Qyx5Q0FBeUM7QUFDekMsTUFBTSxVQUFVLEdBQUc7SUFDakIsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsMkJBQTJCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsMEJBQTBCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsZ0RBQWdELEVBQUUsbUJBQW1CLEVBQUUsNkJBQTZCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUUsK0JBQStCLEVBQUUscUJBQXFCLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCLEVBQUUsa0JBQWtCO0NBQ3gyQyxDQUFDO0FBQ0YsU0FBUyxhQUFhLENBQUMsR0FBRztJQUN4QixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RixDQUFDO0FBQ0QsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDNUIsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDOUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNsQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsU0FBUyxlQUFlLENBQUMsS0FBSztJQUM1QixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFBRSxPQUFPLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLElBQUksS0FBSztRQUFFLE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzSCxJQUFJLE1BQU07UUFBRSxPQUFPLE1BQU0sQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFFNUIsZ0RBQWdEO0FBQ2hELFNBQVMsT0FBTyxDQUFDLE1BQU07SUFDckIsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN2QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFFRCw0RUFBNEU7QUFDNUUsU0FBUyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUs7O0lBQy9CLE9BQU8sZUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE9BQU8sMENBQUUsVUFBVSwwQ0FBRyxLQUFLLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxRQUFRO0lBQ2xDLElBQUksUUFBUSxLQUFLLE1BQU07UUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQTBDLEVBQUUsQ0FBQztJQUMxRixJQUFJLFFBQVEsS0FBSyxPQUFPO1FBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUEyQyxFQUFFLENBQUM7SUFDNUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUE0QyxFQUFFLENBQUM7QUFDckUsQ0FBQztBQUVELGdDQUFnQztBQUNoQyxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUk7SUFDckMsSUFBSSxDQUFDLEdBQUc7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDckQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ2hILENBQUM7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LENBQ1AsQ0FBQztBQUNKLENBQUM7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9iYXItY2hhcnQvc3JjL3J1bnRpbWUvRGFtQ29kZURpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2Jhci1jaGFydC9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9iYXItY2hhcnQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQodC70L7QstCw0YDRjCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lkg0LrQvtGA0L7RgtC60LjRhSDQutC+0LTQvtCyINC4INC/0L7Qu9C90YvRhSDQvdCw0LfQstCw0L3QuNC5INC00LDQvNCxICh1emNyeWwpXG5jb25zdCBEQU1CX0NPREVfVE9fVElUTEUgPSB7XG4gIHRvZGFrb2w6IFwi0KLRntC00LDQutGe0Lsg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBjaG9ydG9xOiBcItCn0L7RgNGC0L7SmyDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICB0b3BhbGFuZzogXCLQotGe0L/QsNC70LDQvdCzINGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgdG9zaW5zb3k6IFwi0KLRntGB0LjQvdGB0L7QuSDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICB0b3Noa2VudDogXCLQotC+0YjQutC10L3RgiDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICB0YWxpbWFyam9uOiBcItCi0LDQu9C40LzQsNGA0LbQvtC9INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAga2F0dGFrb3Jnb246IFwi0JrQsNGC0YLQsNKb0Z7RgNKT0L7QvSDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHphcmtlbnQ6IFwi0JfQsNGA0LrQtdC90YIg0YHRg9CyINC+0LzQsdC+0YDQuCBcIixcbiAgem9taW46IFwi0JfQvtC80LjQvSDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICBxb3JvdnVsdGVwYTogXCLSmtC+0YDQvtCy0YPQu9GC0LXQv9CwINGB0YPQsiDQvtC80LHQvtGA0LggXCIsXG4gIG9rdGVwYTogXCLQntKb0YLQtdC/0LAg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBqaXlkYWxpc295OiBcItCW0LjQudC00LDQu9C40YHQvtC5INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgb2hhbmdhcm9uOiBcItCe0rPQsNC90LPQsNGA0L7QvSDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICBwYWNoa2FtYXI6IFwi0J/QsNGH0LrQsNC80LDRgCDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICBrYXJraWRvbjogXCLQmtCw0YDQutC40LTQvtC9INGB0YPQsiDQvtC80LHQvtGA0LggXCIsXG4gIGppenpha2g6IFwi0JbQuNC30LfQsNGFINGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgaGlzb3JhazogXCLQpdC40YHQvtGA0LDQuiDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHFvcmdvbnRlcGE6IFwi0prRntGA0pPQvtC90YLQtdC/0LAg0YHRg9CyINC+0LzQsdC+0YDQuCBcIixcbiAgY2hvcnZvcTogXCLQp9C+0YDQstC+0psg0YHRg9CyINC+0LzQsdC+0YDQuCBcIixcbiAgcXV5dW1vem9yOiBcItKa0YPQudC40LzQvtC30L7RgCDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICBvcWRhcnlvOiBcItCe0psg0LTQsNGA0ZEg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBzaHVya3VsOiBcItCo0Z7RgNC60Z7QuyDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHFvcmFzdXY6IFwi0prQvtGA0LDRgdGD0LIg0YHRg9CyINC+0LzQsdC+0YDQuCAo0J3QsNC80LDQvdCz0LDQvSlcIixcbiAgdWNocWl6aWw6IFwi0KPRh9Kb0LjQt9C40Lsg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBxb3JhYm9nOiBcItKa0L7RgNCw0LHQvtKTINGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgbnVnYXlsaTogXCLQndGD0pPQsNC50LvQuCDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHlhbmdpa3VyZ2FuOiBcItCv0L3Qs9C4INKa0Z7RgNKT0L7QvSDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHFhbWFzaGk6IFwi0prQsNC80LDRiNC4INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgc29iaXJzb3k6IFwi0KHQvtCx0LjRgNGB0L7QuSDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGRlZ3JlejogXCLQlNC10LPRgNC10Lcg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBlc2tpeWVyOiBcItCt0YHQutC40LXRgCDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGdpcnZhbnNveTogXCLSktC40YDQstC+0L3RgdC+0Lkg0YHQtdC7INC+0LzQsdC+0YDQuFwiLFxuICBvcWJpbG9sOiBcItCe0pvQsdC40LvQvtC7INGB0LXQuyDQvtC80LHQvtGA0LhcIixcbiAga2VuZ2tvbDogXCLQmtC10L3Qs9C60Z7QuyDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIG9tb25kYXJhOiBcItCe0LzQvtC90LTQsNGA0LAg0YHQtdC7INC+0LzQsdC+0YDQuFwiLFxuICByZXpha3NveTogXCLQoNC10LfQsNC60YHQvtC5INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgcW9yYXRlcGE6IFwi0prQvtGA0LDRgtC10L/QsCDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGthbW9uZ2Fyb246IFwi0JrQsNC80L7QvdCz0LDRgNC+0L0g0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBtb21pbm9ib2Q6IFwi0JzRntC80LjQvdC+0LHQvtC0INGB0LXQuyDQvtC80LHQvtGA0LhcIixcbiAga29rc2VyYXNrb3k6IFwi0JrRntC60YHQtdGA0LDQutGB0L7QuSDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGVydGlrb246IFwi0JXRgNGC0LjQutC+0L0g0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBsYW5nYXI6IFwi0JvQsNC90LPQsNGAINGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgZmFyZ29uYTogXCLQnNCw0YDQutCw0LfQuNC5INCk0LDRgNKT0L7QvdCwINGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgcWFyYXN1djogXCLSmtC+0YDQsNGB0YPQsiDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHFhbHFhbWE6IFwi0prQsNC70pvQsNC80LAg0YHRg9CyICDQvtC80LHQvtGA0LhcIiwgLy8rKytcbiAgc2hvcmFic295OiBcItCo0Z7RgNC+0LHRgdC+0Lkg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBkZWhxb25vYm9kOiBcItCU0LXSs9Kb0L7QvdC+0LHQvtC0INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgc2VudGFic295OiBcItCh0LXQvdGC0L7QsdGB0L7QuSDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGtva3Nhcm95OiBcItCa0Z7QutGB0LDRgNC+0Lkg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICB4b2phbXVzaGtlbnQ6IFwi0KXRntC20LDQvNGD0YjQutC10L3RgiDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIG9xY2hvYnNveTogXCLQntKb0YfQvtCx0YHQvtC5INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgc2hvcnN1djogXCLQqNGe0YAg0YHRg9CyINGB0LXQuyDQvtC80LHQvtGA0LhcIixcbiAgb3FidWxvcTogXCLQntKb0LHRg9C70L7SmyDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIHFpemlsc3V2OiBcItKa0LjQt9C40LvRgdGD0LIg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBhc2FrYTogXCJB0YHQsNC60LAg0LDQtNC40YAg0YHRg9CyINC+0LzQsdC+0YDQuFwiLFxuICBxb3JhbXVydXQ6IFwi0prQvtGA0LDQvNGD0YDRgiDRgdGD0LIg0L7QvNCx0L7RgNC4XCIsXG4gIGNoaW1xdXJnb246IFwi0KfQuNC80pvQvtGA0LPQvtC9INGB0YPQsiDQvtC80LHQvtGA0LggXCIsXG4gIHN1cnhvbjogXCLQltCw0L3Rg9Cx0LjQuS3QodGD0YDRhdC+0L0g0YHRg9CyINC+0LzQsdC+0YDQuCBcIixcbiAgYXJuYXNveTogXCJB0YDQvdCw0YHQvtC5INGB0YPQsiDQvtC80LHQvtGA0LhcIixcbiAgdmFyemlxOiBcItCS0LDRgNC30LjSmyDRgdGD0LIg0L7QvNCx0L7RgNC4IFwiLFxuICBzaG9yb2Jzb3k6IFwi0KjRntGA0L7QsdGB0L7QuSDRgdGD0LIg0L7QvNCx0L7RgNC4XCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERBTUJfQ09ERV9UT19USVRMRTsgIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQWxsUmVjb3Jkcyhkcywgd2hlcmUsIG91dEZpZWxkcyA9IFtcIipcIl0sIGJhdGNoU2l6ZSA9IDQwMDApIHtcbiAgbGV0IG9mZnNldCA9IDA7XG4gIGxldCBhbGxSZWNvcmRzID0gW107XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHMucXVlcnkoe1xuICAgICAgd2hlcmUsXG4gICAgICBvdXRGaWVsZHMsXG4gICAgICByZXR1cm5HZW9tZXRyeTogZmFsc2UsXG4gICAgICByZXN1bHRPZmZzZXQ6IG9mZnNldCxcbiAgICAgIHJlc3VsdFJlY29yZENvdW50OiBiYXRjaFNpemUsXG4gICAgfSk7XG4gICAgYWxsUmVjb3JkcyA9IGFsbFJlY29yZHMuY29uY2F0KHJlc3VsdC5yZWNvcmRzIHx8IFtdKTtcbiAgICBpZiAoIXJlc3VsdC5yZWNvcmRzIHx8IHJlc3VsdC5yZWNvcmRzLmxlbmd0aCA8IGJhdGNoU2l6ZSkgYnJlYWs7XG4gICAgb2Zmc2V0ICs9IGJhdGNoU2l6ZTtcbiAgfVxuICByZXR1cm4gYWxsUmVjb3Jkcztcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEYXRhU291cmNlQ29tcG9uZW50IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgZmV0Y2hBbGxSZWNvcmRzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgREFNQl9DT0RFX1RPX1RJVExFIGZyb20gJy4vRGFtQ29kZURpY3Rpb25hcnknO1xuXG4vLyDQmNC80L/QvtGA0YLQuNGA0YPQtdC8IGJ1aWxkRGFtYkZpbHRlciDQuNC3IGxpbmUtY2hhcnRcbi8vINCa0L7Qv9C40YDRg9C10LwgZ2V0RnVsbERhbWJOYW1lINC40LcgbGluZS1jaGFydFxuY29uc3QgREFNQl9OQU1FUyA9IFtcbiAgXCJBcm5hc295IHN1diBvbWJvcmlcIiwgXCJBc2FrYSBhZGlyIHN1diBvbWJvcmlcIiwgXCJDaGltcW8ncmcnb24gc3V2IG9tYm9yaVwiLCBcIkNob3J0b3Egc3V2IG9tYm9yaVwiLCBcIkNob3J2b3Egc3V2IG9tYm9yaVwiLCBcIkRlZ3JleiBzdXYgb21ib3JpXCIsIFwiRGVocW9ub2JvZCBzdXYgb21ib3JpXCIsIFwiRXJ0aWtvbiBzdXYgb21ib3JpXCIsIFwiRXNraSB5ZXIgc3V2IG9tYm9yaVwiLCBcIkdpcnZvbnNveSBzdXYgb21ib3JpXCIsIFwiSGlzb3JhayBzdXYgb21ib3JpXCIsIFwiSmFudWJpeS1TdXJob24gc3V2IG9tYm9yaVwiLCBcIkppeWRhbGlzb3kgc3V2IG9tYm9yaVwiLCBcIkppenpheCBzdXYgb21ib3JpXCIsIFwiS2FtYXNoaSBzdXYgb21ib3JpXCIsIFwiS2Ftb25nYXJvbiBzdXYgb21ib3JpXCIsIFwiS2Fya2lkb24gc3V2IG9tYm9yaVwiLCBcIkthdHRhcW8ncmcnb24gc3V2IG9tYm9yaVwiLCBcIktlbmdrbydsIHN1diBvbWJvcmlcIiwgXCJrbydrc2Fyb3kgc3V2IG9tYm9yaVwiLCBcImtva3NlcmVrc295IHN1diBvbWJvcmkoS29rc2VyZWtzb3kgc3V2IG9tYm9yaSlcIiwgXCJMYW5nYXIgc3V2IG9tYm9yaVwiLCBcIk1hcmtheml5IEZhcmdvbmEgc3V2IG9tYm9yaVwiLCBcIk51Z2F5bGkgc3V2IG9tYm9yaVwiLCBcIk9oYW5nYXJvbiBzdXYgb21ib3JpXCIsIFwiT21vbmRvcmEgc3V2IG9tYm9yaVwiLCBcIk9xYmlsb2wgc3V2IG9tYm9yaVwiLCBcIk9xYnVsb3Egc3V2IG9tdm9yaVwiLCBcIk9xY2hvYnNveSBzdXYgb21ib3JpXCIsIFwiT3FkYXJ5byBzdXYgb21ib3JpXCIsIFwiT3F0ZXBhIHN1diBvbWJvcmlcIiwgXCJQYWNoa2FtYXIgc3V2IG9tYm9yaVwiLCBcIlFhbHFhbWEgc2VsIG9tYm9yaVwiLCBcIlFpemlsc3V2IHN1diBvbWJvcmlcIiwgXCJRb3JhYm9nJyBzdXYgb21ib3JpXCIsIFwiUW9yYW11cnV0IHNlbCBvbWJvcmlcIiwgXCJRb3Jhc3V2IHN1diBvbWJvcmlcIiwgXCJRb3Jhc3V2IHN1diBvbWJvcmkgKE5hbWFuZ2FuKVwiLCBcIlFvcmF0ZXBhIHN1diBvbWJvcmlcIiwgXCJRb3JvdnVsdGVwYSBzdXYgb21ib3JpXCIsIFwiUXVyZ29udGVwYSBzdXYgb21ib3JpXCIsIFwiUXV5aW1vem9yIHN1diBvbWJvcmlcIiwgXCJSZXpha3NveSBzdXYgb21ib3JpXCIsIFwiU2VudG9ic295IHN1diBvbWJvcmlcIiwgXCJTaG8ncmtvJ2wgc3V2IG9tYm9yaVwiLCBcInNobydyb2Jzb3kgc292IG9tYm9yaVwiLCBcIlNvYmlyc295IHN1diBvbWJvcmlcIiwgXCJUYWxpbWFyam9uIHN1diBvbWJvcmlcIiwgXCJUbydkYWtvJ2wgc3V2IG9tYm9yaVwiLCBcIlRvJ3BhbGFuZyBzdXYgb21ib3JpXCIsIFwiVG9zaGtlbnQgc3V2IG9tYm9yaVwiLCBcIlR1c3Vuc295IHN1diBvbWJvcmlcIiwgXCJVY2hxaXppbCBzdXYgb21ib3JpXCIsIFwiVmFyemlrIHN1diBvbWJvcmlcIiwgXCJYbydqYW11c2hrZW50IHN1diBvbWJvcmlcIiwgXCJZYW5naSBRbydyZydvbiBzdXYgb21ib3JpXCIsIFwiWm9taW4gc3V2IG9tYm9yaVwiXG5dO1xuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShzdHIpIHtcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1snJydgXS9nLCBcIlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpLnJlcGxhY2UoL1tcXChcXCldL2csIFwiXCIpO1xufVxuY29uc3QgZGFtYlNob3J0VG9GdWxsID0ge307XG5EQU1CX05BTUVTLmZvckVhY2goZnVsbE5hbWUgPT4ge1xuICBjb25zdCBub3JtRnVsbCA9IG5vcm1hbGl6ZU5hbWUoZnVsbE5hbWUpO1xuICBsZXQgc2hvcnQgPSBub3JtRnVsbC5yZXBsYWNlKC9zdXZvbWJvcmkuKiQvZywgXCJcIikucmVwbGFjZSgvc2Vsb21ib3JpLiokL2csIFwiXCIpLnJlcGxhY2UoL3Nvdm9tYm9yaS4qJC9nLCBcIlwiKTtcbiAgaWYgKHNob3J0LmVuZHNXaXRoKFwia29cIikpIHNob3J0ID0gc2hvcnQgKyBcImxcIjtcbiAgZGFtYlNob3J0VG9GdWxsW3Nob3J0XSA9IGZ1bGxOYW1lO1xuICBkYW1iU2hvcnRUb0Z1bGxbbm9ybUZ1bGxdID0gZnVsbE5hbWU7XG59KTtcbmZ1bmN0aW9uIGdldEZ1bGxEYW1iTmFtZShpbnB1dCkge1xuICBpZiAoIWlucHV0KSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgbm9ybUlucHV0ID0gbm9ybWFsaXplTmFtZShpbnB1dCk7XG4gIGlmIChkYW1iU2hvcnRUb0Z1bGxbbm9ybUlucHV0XSkgcmV0dXJuIGRhbWJTaG9ydFRvRnVsbFtub3JtSW5wdXRdO1xuICBjb25zdCBmb3VuZCA9IE9iamVjdC5rZXlzKGRhbWJTaG9ydFRvRnVsbCkuZmluZChrZXkgPT4gbm9ybUlucHV0ID09PSBrZXkgfHwgbm9ybUlucHV0LnN0YXJ0c1dpdGgoa2V5KSk7XG4gIGlmIChmb3VuZCkgcmV0dXJuIGRhbWJTaG9ydFRvRnVsbFtmb3VuZF07XG4gIGNvbnN0IGZvdW5kMiA9IERBTUJfTkFNRVMuZmluZChmdWxsID0+IG5vcm1hbGl6ZU5hbWUoZnVsbCkuaW5jbHVkZXMobm9ybUlucHV0KSB8fCBub3JtSW5wdXQuaW5jbHVkZXMobm9ybWFsaXplTmFtZShmdWxsKSkpO1xuICBpZiAoZm91bmQyKSByZXR1cm4gZm91bmQyO1xuICByZXR1cm4gaW5wdXQ7XG59XG5cbmNvbnN0IERFRkFVTFRfTE9DQUxFID0gXCJ1elwiO1xuXG4vLyBVdGlsaXR5OiBnZXQgYmFycyBhcnJheSByb2J1c3RseSBmcm9tIGNvbmZpZyBcbmZ1bmN0aW9uIGdldEJhcnMoY29uZmlnKSB7XG4gIGlmICghY29uZmlnKSByZXR1cm4gW107XG4gIGNvbnN0IGJhcnMgPSBjb25maWcuYmFycztcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmFycykpIHtcbiAgICByZXR1cm4gYmFycy5maWx0ZXIoYmFyID0+IGJhciAmJiB0eXBlb2YgYmFyLmZpZWxkID09PSAnc3RyaW5nJyAmJiBiYXIuZmllbGQubGVuZ3RoID4gMCk7XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuXG4vLyDQo9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC30L3QsNGH0LXQvdC40Y8g0L/QvtC70Y8g0LjQtyDQt9Cw0L/QuNGB0LggQXJjR0lTIFJlY29yZFxuZnVuY3Rpb24gZ2V0RmllbGRWYWx1ZShyZWMsIGZpZWxkKSB7XG4gIHJldHVybiByZWM/LmZlYXR1cmU/LmF0dHJpYnV0ZXM/LltmaWVsZF07XG59XG5cbmZ1bmN0aW9uIGdldFRpdGxlQWxpZ25TdHlsZShwb3NpdGlvbikge1xuICBpZiAocG9zaXRpb24gPT09ICdsZWZ0JykgcmV0dXJuIHsgdGV4dEFsaWduOiAnbGVmdCcgYXMgUmVhY3QuQ1NTUHJvcGVydGllc1sndGV4dEFsaWduJ10gfTtcbiAgaWYgKHBvc2l0aW9uID09PSAncmlnaHQnKSByZXR1cm4geyB0ZXh0QWxpZ246ICdyaWdodCcgYXMgUmVhY3QuQ1NTUHJvcGVydGllc1sndGV4dEFsaWduJ10gfTtcbiAgcmV0dXJuIHsgdGV4dEFsaWduOiAnY2VudGVyJyBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzWyd0ZXh0QWxpZ24nXSB9O1xufVxuXG4vLyBVdGlsaXR5IHRvIGRhcmtlbiBhIGhleCBjb2xvclxuZnVuY3Rpb24gZGFya2VuQ29sb3IoaGV4LCBhbW91bnQgPSAwLjE1KSB7XG4gIGlmICghaGV4KSByZXR1cm4gaGV4O1xuICBsZXQgYyA9IGhleC5yZXBsYWNlKCcjJywgJycpO1xuICBpZiAoYy5sZW5ndGggPT09IDMpIGMgPSBjWzBdK2NbMF0rY1sxXStjWzFdK2NbMl0rY1syXTtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQoYywgMTYpO1xuICBsZXQgciA9IE1hdGgubWF4KDAsIChudW0gPj4gMTYpIC0gMjU1ICogYW1vdW50KTtcbiAgbGV0IGcgPSBNYXRoLm1heCgwLCAoKG51bSA+PiA4KSAmIDB4MDBGRikgLSAyNTUgKiBhbW91bnQpO1xuICBsZXQgYiA9IE1hdGgubWF4KDAsIChudW0gJiAweDAwMDBGRikgLSAyNTUgKiBhbW91bnQpO1xuICByZXR1cm4gYCMkeygoMSA8PCAyNCkgKyAoTWF0aC5yb3VuZChyKSA8PCAxNikgKyAoTWF0aC5yb3VuZChnKSA8PCA4KSArIE1hdGgucm91bmQoYikpLnRvU3RyaW5nKDE2KS5zbGljZSgxKX1gO1xufVxuXG4vLyDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNGPIFwi0L3QtdGCINC00LDQvdC90YvRhVwiXG5jb25zdCBOb0RhdGFTdGF0ZSA9ICh7IHRoZW1lZCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVJZCA9ICduby1kYXRhLWFuaW1hdGlvbi1zdHlsZXMnO1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICBAa2V5ZnJhbWVzIGJhclB1bHNlIHtcbiAgICAgICAgICAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMzsgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTsgfVxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuNzsgdHJhbnNmb3JtOiBzY2FsZVkoMC44KTsgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGJhcldhdmUge1xuICAgICAgICAgIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZVkoMC4zKTsgfVxuICAgICAgICAgIDUwJSB7IHRyYW5zZm9ybTogc2NhbGVZKDAuNyk7IH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBlbXB0eUZsb2F0IHtcbiAgICAgICAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyBvcGFjaXR5OiAwLjU7IH1cbiAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7IG9wYWNpdHk6IDAuODsgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGJhclNsaWRlSW4ge1xuICAgICAgICAgIDAlIHsgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKSBzY2FsZVgoMC44KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUgeyBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpIHNjYWxlWCgxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGJhckdyb3cge1xuICAgICAgICAgIDAlIHsgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHsgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBiYXJIb3ZlclB1bHNlIHtcbiAgICAgICAgICAwJSwgMTAwJSB7IFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoNDQsMTAwLDI1NSwwLjE4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgNTAlIHsgXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IDAgcmdiYSg0NCwxMDAsMjU1LDAuMzUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBiYXJIb3Zlckdsb3cge1xuICAgICAgICAgIDAlLCAxMDAlIHsgXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7IFxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBsZWdlbmRIb3ZlciB7XG4gICAgICAgICAgMCUsIDEwMCUgeyBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDUwJSB7IFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGtleWZyYW1lcyBiYXJTaGluZSB7XG4gICAgICAgICAgMCUgeyBcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7IFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLCBcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAnOTBweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgb3BhY2l0eTogMC42XG4gICAgfX0+XG4gICAgICB7Lyog0J/Rg9GB0YLRi9C1INCx0LDRgNGLICovfVxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdlbmQnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGdhcDogJzhweCcsXG4gICAgICAgIGhlaWdodDogJzYwcHgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4J1xuICAgICAgfX0+XG4gICAgICAgIHtbMzUsIDUwLCAyNSwgNDUsIDMwXS5tYXAoKGhlaWdodCwgaSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTJweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZWQudGl0bGVDb2xvciB8fCAnI2NjYycsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBgYmFyV2F2ZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZWAsXG4gICAgICAgICAgICAgIGFuaW1hdGlvbkRlbGF5OiBgJHtpICogMC4yfXNgXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJDaGFydFdpZGdldChwcm9wcykge1xuICBjb25zdCB7IGNvbmZpZywgdXNlRGF0YVNvdXJjZXMsIGlkIH0gPSBwcm9wcztcblxuICAvLyBMb2NhbGUgc3Vic2NyaWJlXG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZShcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbV9sb2NhbGVcIikgfHwgREVGQVVMVF9MT0NBTEVcbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGUpID0+IHNldExvY2FsZShlLmRldGFpbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjdXN0b20tbG9jYWxlLWNoYW5nZWRcIiwgaGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY3VzdG9tLWxvY2FsZS1jaGFuZ2VkXCIsIGhhbmRsZXIpO1xuICB9LCBbXSk7XG5cbiAgLy8gVGhlbWUgc3Vic2NyaWJlXG4gIGNvbnN0IFtjdXN0b21UaGVtZSwgc2V0Q3VzdG9tVGhlbWVdID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXN0b21UaGVtZVwiKSB8fCBcImxpZ2h0XCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRDdXN0b21UaGVtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbVRoZW1lXCIpIHx8IFwibGlnaHRcIik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgaGFuZGxlcik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc0RhcmsgPSBjdXN0b21UaGVtZSA9PT0gXCJkYXJrXCI7XG4gIGNvbnN0IHRoZW1lZCA9IHtcbiAgICBiZ0NvbG9yOiBpc0RhcmsgPyBjb25maWcuYmdDb2xvckRhcmsgfHwgY29uZmlnLmJnQ29sb3IgfHwgXCIjMjMyMzI0XCIgOiBjb25maWcuYmdDb2xvciB8fCBcIiNmZmZcIixcbiAgICB0aXRsZUNvbG9yOiBpc0RhcmsgPyBjb25maWcudGl0bGVDb2xvckRhcmsgfHwgY29uZmlnLnRpdGxlQ29sb3IgfHwgXCIjZmZmXCIgOiBjb25maWcudGl0bGVDb2xvciB8fCBcIiM0NDRcIixcbiAgICBsZWdlbmRDb2xvcjogaXNEYXJrID8gY29uZmlnLmxlZ2VuZENvbG9yRGFyayB8fCBjb25maWcubGVnZW5kQ29sb3IgfHwgXCIjZWVlXCIgOiBjb25maWcubGVnZW5kQ29sb3IgfHwgXCIjMzMzXCIsXG4gICAgcGVyY2VudFRleHRDb2xvcjogaXNEYXJrID8gY29uZmlnLnBlcmNlbnRUZXh0Q29sb3JEYXJrIHx8IGNvbmZpZy5wZXJjZW50VGV4dENvbG9yIHx8IFwiI2ZmZlwiIDogY29uZmlnLnBlcmNlbnRUZXh0Q29sb3IgfHwgXCIjMzMzXCIsXG4gICAgYmFyTGFiZWxUZXh0Q29sb3I6IGlzRGFyayA/IGNvbmZpZy5iYXJMYWJlbFRleHRDb2xvckRhcmsgfHwgY29uZmlnLmJhckxhYmVsVGV4dENvbG9yIHx8IFwiI2ZmZlwiIDogY29uZmlnLmJhckxhYmVsVGV4dENvbG9yIHx8IFwiIzMzM1wiLFxuICAgIGJhckJvcmRlckNvbG9yOiBpc0RhcmsgPyBjb25maWcuYmFyQm9yZGVyQ29sb3JEYXJrIHx8IGNvbmZpZy5iYXJCb3JkZXJDb2xvciB8fCBcIiMyMzIzMjRcIiA6IGNvbmZpZy5iYXJCb3JkZXJDb2xvciB8fCBcIiNmZmZcIixcbiAgfTtcblxuICAvLyBEYXRhU291cmNlIGNvbm5lY3Rpb25cbiAgY29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZHMsIHNldERzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBiYXJzID0gdXNlTWVtbygoKSA9PiBnZXRCYXJzKGNvbmZpZyksIFtjb25maWddKTtcbiAgY29uc3QgW2hvdmVyZWRCYXIsIHNldEhvdmVyZWRCYXJdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gR2V0IHNlbGVjdGVkIGRhbSB2YWx1ZSBmcm9tIGxvY2FsU3RvcmFnZSBvciBwcm9wc1xuICBjb25zdCBbc2VsZWN0ZWREYW1Db2RlLCBzZXRTZWxlY3RlZERhbUNvZGVdID0gdXNlU3RhdGUoKHByb3BzLnNlbGVjdGVkRGFtIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZF9kYW0nKSB8fCAnJykudHJpbSgpKTtcbiAgXG4gIC8vIEVuaGFuY2VkIHVzZUVmZmVjdCB0byBtb25pdG9yIGRhbSBzZWxlY3Rpb24gY2hhbmdlcyB3aXRoIHBvbGxpbmcgYW5kIGN1c3RvbSBldmVudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTdG9yYWdlIGV2ZW50IGxpc3RlbmVyIGZvciBjcm9zcy10YWIgY2hhbmdlc1xuICAgIGZ1bmN0aW9uIGhhbmRsZVN0b3JhZ2UoZSkge1xuICAgICAgaWYgKGUua2V5ID09PSAnc2VsZWN0ZWRfZGFtJykge1xuICAgICAgICBzZXRTZWxlY3RlZERhbUNvZGUoKHByb3BzLnNlbGVjdGVkRGFtIHx8IGUubmV3VmFsdWUgfHwgJycpLnRyaW0oKSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEN1c3RvbSBldmVudCBsaXN0ZW5lciBmb3Igc2FtZS10YWIgY2hhbmdlc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUN1c3RvbURhbUNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRfZGFtJykgfHwgJyc7XG4gICAgICBzZXRTZWxlY3RlZERhbUNvZGUoKHByb3BzLnNlbGVjdGVkRGFtIHx8IGN1cnJlbnREYW0gfHwgJycpLnRyaW0oKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFBvbGxpbmcgZm9yIGltbWVkaWF0ZSB1cGRhdGVzIGluIHRoZSBzYW1lIHRhYlxuICAgIGxldCBsYXN0RGFtQ29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZF9kYW0nKSB8fCAnJztcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYW1Db2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkX2RhbScpIHx8ICcnO1xuICAgICAgaWYgKGN1cnJlbnREYW1Db2RlICE9PSBsYXN0RGFtQ29kZSkge1xuICAgICAgICBsYXN0RGFtQ29kZSA9IGN1cnJlbnREYW1Db2RlO1xuICAgICAgICBzZXRTZWxlY3RlZERhbUNvZGUoKHByb3BzLnNlbGVjdGVkRGFtIHx8IGN1cnJlbnREYW1Db2RlIHx8ICcnKS50cmltKCkpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7IC8vIENoZWNrIGV2ZXJ5IDEwMG1zXG4gICAgXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RhbV9uYW1lX2NoYW5nZWQnLCBoYW5kbGVDdXN0b21EYW1DaGFuZ2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RlZF9kYW1fY2hhbmdlZCcsIGhhbmRsZUN1c3RvbURhbUNoYW5nZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RhbV9zZWxlY3RlZCcsIGhhbmRsZUN1c3RvbURhbUNoYW5nZSk7XG4gICAgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgaGFuZGxlU3RvcmFnZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZGFtX25hbWVfY2hhbmdlZCcsIGhhbmRsZUN1c3RvbURhbUNoYW5nZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2VsZWN0ZWRfZGFtX2NoYW5nZWQnLCBoYW5kbGVDdXN0b21EYW1DaGFuZ2UpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RhbV9zZWxlY3RlZCcsIGhhbmRsZUN1c3RvbURhbUNoYW5nZSk7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbcHJvcHMuc2VsZWN0ZWREYW1dKTtcbiAgXG4gIC8vIEFsc28gd2F0Y2ggZm9yIHByb3BzLnNlbGVjdGVkRGFtIGNoYW5nZXMgKGlmIGl0IGNoYW5nZXMgZnJvbSBvdXRzaWRlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkRGFtQ29kZSgocHJvcHMuc2VsZWN0ZWREYW0gfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkX2RhbScpIHx8ICcnKS50cmltKCkpO1xuICB9LCBbcHJvcHMuc2VsZWN0ZWREYW1dKTtcblxuICBjb25zdCBkYW1iVGl0bGUgPSBEQU1CX0NPREVfVE9fVElUTEVbc2VsZWN0ZWREYW1Db2RlXSB8fCBzZWxlY3RlZERhbUNvZGU7XG4gIGNvbnN0IGRhbUZpZWxkID0gY29uZmlnLmRhbUZpbHRlckZpZWxkIHx8ICdOb21pJzsgLy8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gJ05vbWknLCDQtdGB0LvQuCDQvdC1INGD0LrQsNC30LDQvdC+INC00YDRg9Cz0L7QtSDQv9C+0LvQtVxuICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGRhbWJUaXRsZTtcbiAgY29uc3QgZGFtRmlsdGVyID0gKHNlbGVjdGVkRGFtQ29kZSAmJiBmaWx0ZXJWYWx1ZSkgPyBgJHtkYW1GaWVsZH0gPSAnJHtmaWx0ZXJWYWx1ZX0nYCA6ICcxPTEnO1xuXG4gIC8vIERhdGFTb3VyY2Ug0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cbiAgY29uc3QgaGFuZGxlRGF0YVNvdXJjZUNyZWF0ZWQgPSAoY3JlYXRlZERzKSA9PiBzZXREcyhjcmVhdGVkRHMpO1xuXG4gIC8vIEZldGNoIGFsbCBkYXRhIGZvciBhbGwgYmFyIGZpZWxkcywgZmlsdGVyZWQgYnkgc2VsZWN0ZWRfZGFtXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkcyB8fCBiYXJzLmxlbmd0aCA9PT0gMCB8fCAhc2VsZWN0ZWREYW1Db2RlKSByZXR1cm47XG4gICAgaWYgKCFkYW1GaWx0ZXIgfHwgZGFtRmlsdGVyID09PSAnMT0xJykgcmV0dXJuO1xuICAgIGNvbnN0IG91dEZpZWxkcyA9IEFycmF5LmZyb20obmV3IFNldChbXG4gICAgICAuLi5iYXJzLm1hcChiYXIgPT4gYmFyLmZpZWxkKSxcbiAgICAgIC4uLmJhcnMubWFwKGJhciA9PiBiYXIuYXR0cmlidXRlRmllbGQpLmZpbHRlcihCb29sZWFuKSxcbiAgICAgIGNvbmZpZy50aXRsZUF0dHJpYnV0ZSxcbiAgICBdLmZpbHRlcihCb29sZWFuKSkpO1xuICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgZmV0Y2hBbGxSZWNvcmRzKGRzLCBkYW1GaWx0ZXIsIG91dEZpZWxkcykudGhlbigocmVjcykgPT4ge1xuICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIHNldFJlY29yZHMocmVjcyk7XG4gICAgICBpZiAoIXJlY3MgfHwgcmVjcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbQkFSLUNIQVJUXSBObyByZWNvcmRzIGZvdW5kIGZvciBmaWx0ZXI6JywgZGFtRmlsdGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2RzLCBiYXJzLCBzZWxlY3RlZERhbUNvZGUsIGNvbmZpZy50aXRsZUF0dHJpYnV0ZSwgZGFtRmlsdGVyXSk7XG5cbiAgLy8g0JLRgNC10LzQtdC90L3Qviwg0LTQu9GPINC00LjQsNCz0L3QvtGB0YLQuNC60Lg6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFkcykgcmV0dXJuO1xuICAgIGZldGNoQWxsUmVjb3JkcyhkcywgJzE9MScsIFtkYW1GaWVsZF0pLnRoZW4oKHJlY3MpID0+IHtcbiAgICB9KTtcbiAgfSwgW2RzLCBkYW1GaWVsZF0pO1xuXG4gIC8vIENhbGN1bGF0ZSBzdW1zIGZvciBlYWNoIGJhclxuICBjb25zdCB7IGJhclN1bXMsIHN1bVRvdGFsIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdW1zID0gYmFycy5tYXAoYmFyID0+IHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgZm9yIChjb25zdCByZWMgb2YgcmVjb3Jkcykge1xuICAgICAgICBzdW0gKz0gTnVtYmVyKGdldEZpZWxkVmFsdWUocmVjLCBiYXIuZmllbGQpID8/IDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9KTtcbiAgICBjb25zdCB0b3RhbCA9IHN1bXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgcmV0dXJuIHsgYmFyU3Vtczogc3Vtcywgc3VtVG90YWw6IHRvdGFsIH07XG4gIH0sIFtyZWNvcmRzLCBiYXJzXSk7XG5cbiAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2VzIGZvciBlYWNoIGJhclxuICBjb25zdCBiYXJQZXJjZW50cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc3VtVG90YWwpIHJldHVybiBiYXJzLm1hcCgoKSA9PiAwKTtcbiAgICByZXR1cm4gYmFyU3Vtcy5tYXAoc3VtID0+IE1hdGgucm91bmQoKHN1bSAvIHN1bVRvdGFsKSAqIDEwMCkpO1xuICB9LCBbYmFyU3Vtcywgc3VtVG90YWwsIGJhcnNdKTtcblxuICAvLyBJZiBubyBkYW0gaXMgc2VsZWN0ZWQsIG1ha2Ugd2lkZ2V0IGludmlzaWJsZVxuICBpZiAoIXNlbGVjdGVkRGFtQ29kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xuICAgIHJldHVybiBudW0/LnRvTG9jYWxlU3RyaW5nKFwicnUtUlVcIikucmVwbGFjZSgvLC9nLCBcIiBcIikgPz8gXCLigJRcIjtcbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIGNvcnJlY3QgdW5pdCBiYXNlZCBvbiBsb2NhbGVcbiAgZnVuY3Rpb24gZ2V0Vm9sdW1lVW5pdCgpIHtcbiAgICBpZiAobG9jYWxlID09PSAndXonKSByZXR1cm4gJ23Csyc7XG4gICAgaWYgKGxvY2FsZSA9PT0gJ3V6Y3J5bCcpIHJldHVybiAn0LzCsyc7XG4gICAgcmV0dXJuICfQvMKzJzsgLy8gRGVmYXVsdCBmb3IgJ3J1JyBhbmQgb3RoZXJzXG4gIH1cblxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYm9yZGVyIHJhZGl1cyBzdHJpbmcgZm9yIGluZGl2aWR1YWwgYmFyc1xuICBmdW5jdGlvbiBnZXRCYXJCb3JkZXJSYWRpdXMoYmFyKSB7XG4gICAgY29uc3QgdG9wTGVmdCA9IGJhci5ib3JkZXJSYWRpdXNUb3BMZWZ0ID8/IGNvbmZpZy5iYXJCb3JkZXJSYWRpdXMgPz8gMTg7XG4gICAgY29uc3QgdG9wUmlnaHQgPSBiYXIuYm9yZGVyUmFkaXVzVG9wUmlnaHQgPz8gY29uZmlnLmJhckJvcmRlclJhZGl1cyA/PyAxODtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IGJhci5ib3JkZXJSYWRpdXNCb3R0b21SaWdodCA/PyBjb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4O1xuICAgIGNvbnN0IGJvdHRvbUxlZnQgPSBiYXIuYm9yZGVyUmFkaXVzQm90dG9tTGVmdCA/PyBjb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4O1xuICAgIFxuICAgIC8vIElmIGFsbCBjb3JuZXJzIGFyZSB0aGUgc2FtZSwgcmV0dXJuIGEgc2luZ2xlIHZhbHVlXG4gICAgaWYgKHRvcExlZnQgPT09IHRvcFJpZ2h0ICYmIHRvcFJpZ2h0ID09PSBib3R0b21SaWdodCAmJiBib3R0b21SaWdodCA9PT0gYm90dG9tTGVmdCkge1xuICAgICAgcmV0dXJuIGAke3RvcExlZnR9cHhgO1xuICAgIH1cbiAgICBcbiAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBmdWxsIGJvcmRlciByYWRpdXMgc3RyaW5nXG4gICAgcmV0dXJuIGAke3RvcExlZnR9cHggJHt0b3BSaWdodH1weCAke2JvdHRvbVJpZ2h0fXB4ICR7Ym90dG9tTGVmdH1weGA7XG4gIH1cblxuICAvLyBUaXRsZSBhbmQgc3R5bGVcbiAgY29uc3QgdGl0bGUgPSBjb25maWdbYHRpdGxlXyR7bG9jYWxlfWBdIHx8IFwiXCI7XG4gIC8vIEdldCB2YWx1ZSBmb3IgdGl0bGUgYXR0cmlidXRlIChmcm9tIGZpcnN0IHJlY29yZClcbiAgbGV0IHRpdGxlQXR0clZhbHVlID0gJyc7XG4gIGlmIChjb25maWcudGl0bGVBdHRyaWJ1dGUgJiYgcmVjb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgdmFsID0gZ2V0RmllbGRWYWx1ZShyZWNvcmRzWzBdLCBjb25maWcudGl0bGVBdHRyaWJ1dGUpO1xuICAgIHRpdGxlQXR0clZhbHVlID0gdmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsID8gU3RyaW5nKHZhbCkgOiAnJztcbiAgfVxuICBjb25zdCB0aXRsZVN0eWxlID0ge1xuICAgIGZvbnRTaXplOiBjb25maWcudGl0bGVGb250U2l6ZSB8fCAxNyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgY29sb3I6IHRoZW1lZC50aXRsZUNvbG9yLFxuICAgIGZvbnRGYW1pbHk6IGNvbmZpZy50aXRsZUZvbnRGYW1pbHkgfHwgJ2luaGVyaXQnLFxuICAgIC4uLmdldFRpdGxlQWxpZ25TdHlsZShjb25maWcudGl0bGVQb3NpdGlvbiB8fCAnY2VudGVyJyksXG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgYW5pbWF0aW9uOiByZWNvcmRzLmxlbmd0aCA+IDAgPyBgYmFyU2xpZGVJbiAwLjZzIGVhc2Utb3V0IGJvdGhgIDogJ25vbmUnLFxuICB9O1xuXG4gIC8vIEJhciBjb2xvcnMgYW5kIGxhYmVsc1xuICBmdW5jdGlvbiBnZXRCYXJDb2xvcihiYXIsIGkpIHtcbiAgICByZXR1cm4gYmFyLmNvbG9yIHx8IFtcIiMyOTlBRkZcIiwgXCIjRkZEMjQ3XCIsIFwiI0ZGNkI2QlwiLCBcIiM2QkNCNzdcIiwgXCIjNEQ5NkZGXCJdW2kgJSA1XTtcbiAgfVxuICBmdW5jdGlvbiBnZXRCYXJMYWJlbChiYXIpIHtcbiAgICByZXR1cm4gYmFyW2BsYWJlbF8ke2xvY2FsZX1gXSB8fCBiYXIubGFiZWxfcnUgfHwgYmFyLmxhYmVsX3V6IHx8IGJhci5sYWJlbF91emNyeWwgfHwgYmFyLmZpZWxkO1xuICB9XG5cbiAgLy8gRm9yIGxlZ2VuZDogZ2V0IHZhbHVlIGZvciBhIGJhcidzIGF0dHJpYnV0ZUZpZWxkIChmcm9tIGZpcnN0IHJlY29yZClcbiAgZnVuY3Rpb24gZ2V0QmFyQXR0cmlidXRlVmFsdWUoYmFyKSB7XG4gICAgaWYgKGJhci5hdHRyaWJ1dGVGaWVsZCAmJiByZWNvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbCA9IGdldEZpZWxkVmFsdWUocmVjb3Jkc1swXSwgYmFyLmF0dHJpYnV0ZUZpZWxkKTtcbiAgICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgPyBTdHJpbmcodmFsKSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBCYXIgY2hhcnQgcmVuZGVyaW5nXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZWQuYmdDb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBjb25maWcuYm9yZGVyUmFkaXVzID8/IDE2LFxuICAgICAgICBwYWRkaW5nOiBcIjhweCAxOHB4IDBweCAxOHB4XCIsXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICB1c2VEYXRhU291cmNlPXt1c2VEYXRhU291cmNlcz8uWzBdfVxuICAgICAgICB3aWRnZXRJZD17aWR9XG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e2hhbmRsZURhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgLz5cbiAgICAgIHsvKiDQl9Cw0LPQvtC70L7QstC+0LogKi99XG4gICAgICA8ZGl2IHN0eWxlPXt0aXRsZVN0eWxlfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgICB7dGl0bGVBdHRyVmFsdWUgJiYgKFxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luTGVmdDogNyB9fT5cbiAgICAgICAgICAgIHtpc0Zpbml0ZShOdW1iZXIodGl0bGVBdHRyVmFsdWUpKSA/IGZvcm1hdE51bWJlcihOdW1iZXIodGl0bGVBdHRyVmFsdWUpKSA6IHRpdGxlQXR0clZhbHVlfXtnZXRWb2x1bWVVbml0KCl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHsvKiDQldGB0LvQuCDQvdC10YIg0LTQsNC90L3Ri9GFIOKAlCDQv9C+0LrQsNC30LDRgtGMINC60YDQsNGB0LjQstC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1ICovfVxuICAgICAge3JlY29yZHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBhbmltYXRpb246IGBiYXJTbGlkZUluIDAuOHMgZWFzZS1vdXQgMC4zcyBib3RoYCB9fT5cbiAgICAgICAgICA8Tm9EYXRhU3RhdGUgdGhlbWVkPXt0aGVtZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qINCR0LDRgC3Rh9Cw0YDRgiAqL31cbiAgICAgIHtyZWNvcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIG1pbkhlaWdodDogNDAsXG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWVkLmJnQ29sb3IsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtjb25maWcuYmFyQm9yZGVyUmFkaXVzID8/IDE4fXB4YCxcbiAgICAgICAgICBvdmVyZmxvdzogXCJ2aXNpYmxlXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIGFuaW1hdGlvbjogYGJhclNsaWRlSW4gMC44cyBlYXNlLW91dCAwLjJzIGJvdGhgLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7YmFycy5tYXAoKGJhciwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaG92ZXJlZEJhciA9PT0gaTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7YmFyUGVyY2VudHNbaV19JWAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpc0hvdmVyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZGFya2VuQ29sb3IoZ2V0QmFyQ29sb3IoYmFyLCBpKSwgMC4xMil9IDAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Z2V0QmFyQ29sb3IoYmFyLCBpKX0gNTAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZGFya2VuQ29sb3IoZ2V0QmFyQ29sb3IoYmFyLCBpKSwgMC4xMil9IDEwMCUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50IDQwJSwgXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDAuMikgNTAlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50IDYwJSlgXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0QmFyQ29sb3IoYmFyLCBpKSxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBpc0hvdmVyZWQgPyAnMjAwJSAxMDAlLCAyMDAlIDEwMCUnIDogJzEwMCUgMTAwJScsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IGdldEJhckJvcmRlclJhZGl1cyhiYXIpLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogaSA9PT0gMCA/IDAgOiAoY29uZmlnLmJhck1hcmdpbiA/PyAxMCksXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYGJhckdyb3cgMS4ycyBlYXNlLW91dCAke2kgKiAwLjE1fXMgYm90aCR7aXNIb3ZlcmVkID8gJywgYmFySG92ZXJHbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlJyA6ICcnfWAsXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZWQucGVyY2VudFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogYCR7Y29uZmlnLmJhckJvcmRlcldpZHRoIHx8IDB9cHggc29saWQgJHt0aGVtZWQuYmFyQm9yZGVyQ29sb3J9YCxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICB6SW5kZXg6IGlzSG92ZXJlZCA/IDEwMDAwIDogOTk5OSxcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBpc0hvdmVyZWRcbiAgICAgICAgICAgICAgICAgICAgPyBcIjAgOHB4IDMycHggMCByZ2JhKDQ0LDEwMCwyNTUsMC4zKSwgMCAwIDIwcHggMCByZ2JhKDQ0LDEwMCwyNTUsMC4yKVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCIwIDJweCAxMnB4IDAgcmdiYSg0NCwxMDAsMjU1LDAuMTApXCIsXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGlzSG92ZXJlZCA/IFwic2NhbGUoMS4wNSkgdHJhbnNsYXRlWSgtMnB4KVwiIDogXCJzY2FsZSgxKVwiLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkQmFyKGkpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZEJhcihudWxsKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsvKiBTaGluZSBlZmZlY3Qgb3ZlcmxheSAqL31cbiAgICAgICAgICAgICAgICB7aXNIb3ZlcmVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgMzAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuMykgNTAlLCB0cmFuc3BhcmVudCA3MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDIwMCUnLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246ICdiYXJTaGluZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBnZXRCYXJCb3JkZXJSYWRpdXMoYmFyKSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtiYXJQZXJjZW50c1tpXSA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogaXNIb3ZlcmVkID8gJ3NjYWxlKDEuMSknIDogJ3NjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYWRvdzogaXNIb3ZlcmVkID8gJzAgMCAxMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KScgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICB7YmFyUGVyY2VudHNbaV0gPj0gNSA/IGAke2JhclBlcmNlbnRzW2ldfSVgIDogJyd9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiDQm9C10LPQtdC90LTQsCAqL31cbiAgICAgIHtyZWNvcmRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgICAgICBnYXA6IDQsXG4gICAgICAgICAgY29sb3I6IHRoZW1lZC5iYXJMYWJlbFRleHRDb2xvcixcbiAgICAgICAgICBhbmltYXRpb246IGBiYXJTbGlkZUluIDAuOHMgZWFzZS1vdXQgMC42cyBib3RoYCxcbiAgICAgICAgfX0+XG4gICAgICAgICAge2JhcnMubWFwKChiYXIsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBzdHlsZT17eyBcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsIFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBcbiAgICAgICAgICAgICAgZ2FwOiA0LFxuICAgICAgICAgICAgICBhbmltYXRpb246IGBiYXJTbGlkZUluIDAuNnMgZWFzZS1vdXQgJHswLjggKyBpICogMC4xfXMgYm90aGAsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMyxcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGhvdmVyZWRCYXIgPT09IGkgXG4gICAgICAgICAgICAgICAgICAgID8gYHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICR7Z2V0QmFyQ29sb3IoYmFyLCBpKX0sICR7ZGFya2VuQ29sb3IoZ2V0QmFyQ29sb3IoYmFyLCBpKSwgMC4yKX0pYFxuICAgICAgICAgICAgICAgICAgICA6IGdldEJhckNvbG9yKGJhciwgaSksXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBob3ZlcmVkQmFyID09PSBpID8gXCJzY2FsZSgxLjMpXCIgOiBcInNjYWxlKDEpXCIsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IGhvdmVyZWRCYXIgPT09IGkgXG4gICAgICAgICAgICAgICAgICAgID8gYDAgMCAxNXB4ICR7Z2V0QmFyQ29sb3IoYmFyLCBpKX00MCwgMCAwIDMwcHggJHtnZXRCYXJDb2xvcihiYXIsIGkpfTIwYFxuICAgICAgICAgICAgICAgICAgICA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBob3ZlcmVkQmFyID09PSBpID8gJ2xlZ2VuZEhvdmVyIDAuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkQmFyKGkpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZEJhcihudWxsKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoZW1lZC5iYXJMYWJlbFRleHRDb2xvcixcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBob3ZlcmVkQmFyID09PSBpID8gJ3RyYW5zbGF0ZVgoNHB4KScgOiAndHJhbnNsYXRlWCgwKScsXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogaG92ZXJlZEJhciA9PT0gaSA/IDcwMCA6IDQwMCxcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge2dldEJhckxhYmVsKGJhcil9XG4gICAgICAgICAgICAgICAge2dldEJhckF0dHJpYnV0ZVZhbHVlKGJhcikgJiYgKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBtYXJnaW5MZWZ0OiA0IH19PntnZXRCYXJBdHRyaWJ1dGVWYWx1ZShiYXIpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLCBcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDQsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaG92ZXJlZEJhciA9PT0gaSA/IGdldEJhckNvbG9yKGJhciwgaSkgOiB0aGVtZWQuYmFyTGFiZWxUZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4zcyBlYXNlJyxcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgIHtmb3JtYXROdW1iZXIoYmFyU3Vtc1tpXSl9e2dldFZvbHVtZVVuaXQoKX0gPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA0IH19Pih7YmFyUGVyY2VudHNbaV19JSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==