import React, { useEffect, useState, useMemo } from "react";
import { DataSourceComponent } from "jimu-core";
import { fetchAllRecords } from './utils';
import DAMB_CODE_TO_TITLE from './DamCodeDictionary';

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
  if (short.endsWith("ko")) short = short + "l";
  dambShortToFull[short] = fullName;
  dambShortToFull[normFull] = fullName;
});
function getFullDambName(input) {
  if (!input) return null;
  const normInput = normalizeName(input);
  if (dambShortToFull[normInput]) return dambShortToFull[normInput];
  const found = Object.keys(dambShortToFull).find(key => normInput === key || normInput.startsWith(key));
  if (found) return dambShortToFull[found];
  const found2 = DAMB_NAMES.find(full => normalizeName(full).includes(normInput) || normInput.includes(normalizeName(full)));
  if (found2) return found2;
  return input;
}

const DEFAULT_LOCALE = "uz";

// Utility: get bars array robustly from config 
function getBars(config) {
  if (!config) return [];
  const bars = config.bars;
  if (Array.isArray(bars)) {
    return bars.filter(bar => bar && typeof bar.field === 'string' && bar.field.length > 0);
  }
  return [];
}

// Универсальная функция для получения значения поля из записи ArcGIS Record
function getFieldValue(rec, field) {
  return rec?.feature?.attributes?.[field];
}

function getTitleAlignStyle(position) {
  if (position === 'left') return { textAlign: 'left' as React.CSSProperties['textAlign'] };
  if (position === 'right') return { textAlign: 'right' as React.CSSProperties['textAlign'] };
  return { textAlign: 'center' as React.CSSProperties['textAlign'] };
}

// Utility to darken a hex color
function darkenColor(hex, amount = 0.15) {
  if (!hex) return hex;
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  const num = parseInt(c, 16);
  let r = Math.max(0, (num >> 16) - 255 * amount);
  let g = Math.max(0, ((num >> 8) & 0x00FF) - 255 * amount);
  let b = Math.max(0, (num & 0x0000FF) - 255 * amount);
  return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
}

// Компонент для отображения состояния "нет данных"
const NoDataState = ({ themed }) => {
  useEffect(() => {
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

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      height: '90px',
      width: '100%',
      opacity: 0.6
    }}>
      {/* Пустые бары */}
      <div style={{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        gap: '8px',
        height: '60px',
        marginBottom: '20px'
      }}>
        {[35, 50, 25, 45, 30].map((height, i) => (
          <div
            key={i}
            style={{
              width: '12px',
              height: `${height}px`,
              backgroundColor: themed.titleColor || '#ccc',
              borderRadius: '6px',
              opacity: 0.3,
              animation: `barWave 2s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default function BarChartWidget(props) {
  const { config, useDataSources, id } = props;

  // Locale subscribe
  const [locale, setLocale] = useState(
    localStorage.getItem("custom_locale") || DEFAULT_LOCALE
  );
  useEffect(() => {
    const handler = (e) => setLocale(e.detail);
    window.addEventListener("custom-locale-changed", handler);
    return () => window.removeEventListener("custom-locale-changed", handler);
  }, []);

  // Theme subscribe
  const [customTheme, setCustomTheme] = useState(localStorage.getItem("customTheme") || "light");
  useEffect(() => {
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
  const [records, setRecords] = useState([]);
  const [ds, setDs] = useState(null);
  const bars = useMemo(() => getBars(config), [config]);
  const [hoveredBar, setHoveredBar] = useState(null);

  // Get selected dam value from localStorage or props
  const [selectedDamCode, setSelectedDamCode] = useState((props.selectedDam || localStorage.getItem('selected_dam') || '').trim());
  
  // Enhanced useEffect to monitor dam selection changes with polling and custom events
  useEffect(() => {
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
  useEffect(() => {
    setSelectedDamCode((props.selectedDam || localStorage.getItem('selected_dam') || '').trim());
  }, [props.selectedDam]);
  const dambTitle = DAMB_CODE_TO_TITLE[selectedDamCode] || selectedDamCode;
  const damField = config.damFilterField || 'Nomi'; // по умолчанию 'Nomi', если не указано другое поле
  const filterValue = dambTitle;
  const damFilter = (selectedDamCode && filterValue) ? `${damField} = '${filterValue}'` : '1=1';

  // DataSource инициализация
  const handleDataSourceCreated = (createdDs) => setDs(createdDs);

  // Fetch all data for all bar fields, filtered by selected_dam
  useEffect(() => {
    if (!ds || bars.length === 0 || !selectedDamCode) return;
    if (!damFilter || damFilter === '1=1') return;
    const outFields = Array.from(new Set([
      ...bars.map(bar => bar.field),
      ...bars.map(bar => bar.attributeField).filter(Boolean),
      config.titleAttribute,
    ].filter(Boolean)));
    const t0 = performance.now();
    fetchAllRecords(ds, damFilter, outFields).then((recs) => {
      const t1 = performance.now();
      setRecords(recs);
      if (!recs || recs.length === 0) {
        console.warn('[BAR-CHART] No records found for filter:', damFilter);
      }
    });
  }, [ds, bars, selectedDamCode, config.titleAttribute, damFilter]);

  // Временно, для диагностики:
  useEffect(() => {
    if (!ds) return;
    fetchAllRecords(ds, '1=1', [damField]).then((recs) => {
    });
  }, [ds, damField]);

  // Calculate sums for each bar
  const { barSums, sumTotal } = useMemo(() => {
    const sums = bars.map(bar => {
      let sum = 0;
      for (const rec of records) {
        sum += Number(getFieldValue(rec, bar.field) ?? 0);
      }
      return sum;
    });
    const total = sums.reduce((a, b) => a + b, 0);
    return { barSums: sums, sumTotal: total };
  }, [records, bars]);

  // Calculate percentages for each bar
  const barPercents = useMemo(() => {
    if (!sumTotal) return bars.map(() => 0);
    return barSums.map(sum => Math.round((sum / sumTotal) * 100));
  }, [barSums, sumTotal, bars]);

  function formatNumber(num) {
    return num?.toLocaleString("ru-RU").replace(/,/g, " ") ?? "—";
  }

  // Helper function to get the correct unit based on locale
  function getVolumeUnit() {
    if (locale === 'uz') return 'm³';
    if (locale === 'uzcryl') return 'м³';
    return 'м³'; // Default for 'ru' and others
  }

  // Helper function to generate border radius string for individual bars
  function getBarBorderRadius(bar) {
    const topLeft = bar.borderRadiusTopLeft ?? config.barBorderRadius ?? 18;
    const topRight = bar.borderRadiusTopRight ?? config.barBorderRadius ?? 18;
    const bottomRight = bar.borderRadiusBottomRight ?? config.barBorderRadius ?? 18;
    const bottomLeft = bar.borderRadiusBottomLeft ?? config.barBorderRadius ?? 18;
    
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
  const titleStyle = {
    fontSize: config.titleFontSize || 17,
    fontWeight: 600,
    color: themed.titleColor,
    fontFamily: config.titleFontFamily || 'inherit',
    ...getTitleAlignStyle(config.titlePosition || 'center'),
    marginBottom: 8,
    marginTop: 10,
    animation: records.length > 0 ? `barSlideIn 0.6s ease-out both` : 'none',
  };

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
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: themed.bgColor,
        borderRadius: config.borderRadius ?? 16,
        padding: "8px 18px 0px 18px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <DataSourceComponent
        useDataSource={useDataSources?.[0]}
        widgetId={id}
        onDataSourceCreated={handleDataSourceCreated}
      />
      {/* Заголовок */}
      <div style={titleStyle}>
        {title}
        {titleAttrValue && (
          <span style={{ fontWeight: 700, marginLeft: 7 }}>
            {isFinite(Number(titleAttrValue)) ? formatNumber(Number(titleAttrValue)) : titleAttrValue}{getVolumeUnit()}
          </span>
        )}
      </div>
      
      {/* Если нет данных — показать красивое состояние */}
      {records.length === 0 && (
        <div style={{ animation: `barSlideIn 0.8s ease-out 0.3s both` }}>
          <NoDataState themed={themed} />
        </div>
      )}

      {/* Бар-чарт */}
      {records.length > 0 && (
        <div style={{
          width: "100%",
          minHeight: 40,
          background: themed.bgColor,
          borderRadius: `${config.barBorderRadius ?? 18}px`,
          overflow: "visible",
          marginBottom: 10,
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          flex: 1,
          maxHeight: '100%',
          animation: `barSlideIn 0.8s ease-out 0.2s both`,
        }}>
          {bars.map((bar, i) => {
            const isHovered = hoveredBar === i;
            return (
              <div
                key={i}
                style={{
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
                  marginLeft: i === 0 ? 0 : (config.barMargin ?? 10),
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  animation: `barGrow 1.2s ease-out ${i * 0.15}s both${isHovered ? ', barHoverGlow 1s ease-in-out infinite' : ''}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: barPercents[i] > 10 ? "center" : i === 0 ? "flex-end" : "flex-start",
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
                }}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                {/* Shine effect overlay */}
                {isHovered && (
                  <div style={{
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
                  }} />
                )}
                {barPercents[i] > 5 && (
                  <span style={{
                    transition: 'all 0.3s ease',
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    textShadow: isHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
                    zIndex: 1,
                    position: 'relative',
                  }}>
                    {`${barPercents[i]}%`}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Легенда */}
      {records.length > 0 && (
        <div style={{
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
        }}>
          {bars.map((bar, i) => (
            <div key={i} style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 4,
              animation: `barSlideIn 0.6s ease-out ${0.8 + i * 0.1}s both`,
            }}>
              <span
                style={{
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
                }}
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              <span style={{ 
                color: themed.barLabelTextColor,
                transition: 'all 0.3s ease',
                transform: hoveredBar === i ? 'translateX(4px)' : 'translateX(0)',
                fontWeight: hoveredBar === i ? 700 : 400,
              }}>
                {getBarLabel(bar)}
                {getBarAttributeValue(bar) && (
                  <span style={{ fontWeight: 700, marginLeft: 4 }}>{getBarAttributeValue(bar)}</span>
                )}
                <span style={{ 
                  fontWeight: 700, 
                  marginLeft: 4,
                  color: hoveredBar === i ? getBarColor(bar, i) : themed.barLabelTextColor,
                  transition: 'color 0.3s ease',
                }}>
                  {formatNumber(barSums[i])}{getVolumeUnit()} <span style={{ fontWeight: 400, marginLeft: 4 }}>({barPercents[i]}%)</span>
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
