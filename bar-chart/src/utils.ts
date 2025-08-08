import { BarConfig } from './config';

const DEFAULT_BARS: BarConfig[] = [
  { field: "batim", label: "Батиметрический объём (НПУ)", color: "#297AFF" },
  { field: "silt", label: "Заиленность", color: "#F7C443" }
];

export function getBars(bars: any): BarConfig[] {
  let arr: any = [];
  if (Array.isArray(bars)) {
    arr = bars;
  } else if (!bars) {
    arr = [];
  } else if (typeof bars.asMutable === 'function') {
    arr = bars.asMutable({ deep: true });
  } else if (typeof bars.toArray === 'function') {
    arr = bars.toArray();
  } else if (typeof bars === 'object' && bars !== null) {
    arr = Object.values(bars);
  }
  // Гарантируем, что arr — массив
  arr = Array.isArray(arr) ? arr : [];
  // Фильтруем только объекты с полем field (BarConfig)
  const filtered = arr.filter(
    (v) => v && typeof v === 'object' && typeof v.field === 'string'
  ).map((bar) => ({
    ...bar,
    label_ru: typeof bar.label_ru === 'string' ? bar.label_ru : (bar.label_ru ? String(bar.label_ru) : ''),
    label_uz: typeof bar.label_uz === 'string' ? bar.label_uz : (bar.label_uz ? String(bar.label_uz) : ''),
    label_uzcryl: typeof bar.label_uzcryl === 'string' ? bar.label_uzcryl : (bar.label_uzcryl ? String(bar.label_uzcryl) : ''),
  }));
  return filtered.length > 0 ? filtered : DEFAULT_BARS;
} 