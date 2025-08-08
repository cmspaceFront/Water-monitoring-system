export interface BarConfig {
  field: string;
  label?: string;
  color?: string;
  show?: boolean;
  barWidth?: number;
  fontFamily?: string;
  fontSize?: number;
  label_ru?: string;
  label_uz?: string;
  label_uzcryl?: string;
}

export interface IMConfig {
  // Основные поля
  chartTitle?: string;
  chartTitleFontFamily?: string;
  chartTitleFontSize?: number;
  chartTitleAlign?: 'left' | 'center' | 'right';
  textColor?: string;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  height?: string;

  // Данные
  useDataSources?: any[];
  bars?: BarConfig[];
  xAxisField?: string;
  yAxisField?: string;

  // Легенда
  showLegend?: boolean;
  legendTextColor?: string;
  legendFontFamily?: string;
  legendFontSize?: number;

  // Tooltip
  showTooltip?: boolean;
  tooltipBg?: string;
  tooltipTextColor?: string;
  tooltipFontFamily?: string;
  tooltipFontSize?: number;

  // Темная тема
  enableDarkTheme?: boolean;
  darkThemeBgColor?: string;
  darkThemeTextColor?: string;
  darkThemeBorderColor?: string;
  darkThemeLegendTextColor?: string;
  darkThemeTooltipBg?: string;
  darkThemeTooltipTextColor?: string;

  // Прочее
  animation?: boolean;
  barBorderWidth?: string;
  barBorderColor?: string;
}

export const defaultConfig: IMConfig = {
  chartTitle: 'Bar Chart',
  chartTitleFontFamily: 'inherit',
  chartTitleFontSize: 22,
  chartTitleAlign: 'center',
  textColor: '#222',
  bgColor: '#fff',
  borderRadius: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e5e7eb',
  padding: '18px',
  fontSize: '16px',
  width: '100%',
  height: '340px',
  showLegend: true,
  legendTextColor: '#222',
  legendFontFamily: 'inherit',
  legendFontSize: 16,
  showTooltip: true,
  tooltipBg: '#fff',
  tooltipTextColor: '#222',
  tooltipFontFamily: 'inherit',
  tooltipFontSize: 15,
  enableDarkTheme: false,
  darkThemeBgColor: '#1a1a1a',
  darkThemeTextColor: '#fff',
  darkThemeBorderColor: '#333',
  darkThemeLegendTextColor: '#fff',
  darkThemeTooltipBg: '#222',
  darkThemeTooltipTextColor: '#fff',
  barBorderWidth: '1px',
  barBorderColor: '#fff',
  animation: true,
  bars: [
    { field: 'batim', label: 'Батиметрический объем', color: '#297AFF', show: true },
    { field: 'silt', label: 'Заиленность', color: '#F7C443', show: true }
  ],
  xAxisField: 'damName',
  yAxisField: 'volume',
  useDataSources: []
};
  