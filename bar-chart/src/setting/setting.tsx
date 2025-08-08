/** @jsx jsx */
import {
  React,
  jsx,
  Immutable,
  DataSourceTypes,
  DataSourceManager,
  UseDataSource,
} from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import { DataSourceSelector } from "jimu-ui/advanced/data-source-selector";
import { NumericInput, Select, TextInput, Button } from "jimu-ui";
import { ColorPicker } from "jimu-ui/basic/color-picker";

const sectionStyle: React.CSSProperties = {
  background: "#28292d",
  borderRadius: 12,
  padding: 18,
  marginBottom: 22,
  boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
  border: "1px solid #23262f22",
};
const rowStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 14,
};
const labelStyle: React.CSSProperties = {
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

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, { availableFields: { name: string; alias?: string }[] }> {
  supportedTypes = Immutable([DataSourceTypes.FeatureLayer]);

  constructor(props) {
    super(props);
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
  updateAvailableFields = () => {
    const mainDs = this.props.useDataSources?.[0];
    if (!mainDs) {
      this.setState({ availableFields: [] });
      return;
    }
    const realDs = DataSourceManager.getInstance().getDataSource(mainDs.dataSourceId);
    const schema = realDs?.getSchema();
    const fields = schema?.fields
      ? Object.values(schema.fields).map((f: any) => ({
          name: f.jimuName || f.name,
          alias: f.alias || f.jimuName || f.name,
        }))
      : [];
    this.setState({ availableFields: fields });
  };
  updateProp = (field: string, value: any) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: {
        ...this.props.config,
        [field]: value,
      },
    });
  };
  onDataSourceChange = (useDataSources: UseDataSource[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources,
    });
    setTimeout(this.updateAvailableFields, 200);
  };

  // === БАРЫ ===
  addBar = () => {
    const { availableFields } = this.state;
    const newBar = {
      field: availableFields[0]?.name || "",
      color: "#299AFF",
      label_ru: "",
      label_uz: "",
      label_uzcryl: "",
      borderRadiusTopLeft: this.props.config.barBorderRadius ?? 18,
      borderRadiusTopRight: this.props.config.barBorderRadius ?? 18,
      borderRadiusBottomRight: this.props.config.barBorderRadius ?? 18,
      borderRadiusBottomLeft: this.props.config.barBorderRadius ?? 18,
    };
    const bars = Array.isArray(this.props.config.bars)
      ? [...this.props.config.bars, newBar]
      : [newBar];
    this.updateProp("bars", bars);
  };
  updateBar = (i: number, key: string, value: any) => {
    const bars = Array.isArray(this.props.config.bars)
      ? [...this.props.config.bars]
      : [];
    bars[i] = { ...bars[i], [key]: value };
    this.updateProp("bars", bars);
  };
  removeBar = (i: number) => {
    const bars = Array.isArray(this.props.config.bars)
      ? [...this.props.config.bars]
      : [];
    bars.splice(i, 1);
    this.updateProp("bars", bars);
  };

  render() {
    const { config, useDataSources } = this.props;
    const { availableFields } = this.state;
    const bars = Array.isArray(config.bars) ? config.bars : [];

    return (
      <div style={{ fontSize: 14, color: "#fff", background: "#212126" }}>
        {/* 1. Источник данных */}
        <div style={sectionStyle}>
          <div style={rowStyle}>
            <span style={labelStyle}>Источник данных</span>
            <DataSourceSelector
              mustUseDataSource
              types={this.supportedTypes}
              useDataSources={useDataSources}
              onChange={this.onDataSourceChange}
              widgetId={this.props.id}
            />
          </div>
        </div>

        {/* 0. Поле для фильтра дамбы */}
        <div style={sectionStyle}>
          <div style={rowStyle}>
            <span style={labelStyle}>Поле для фильтра дамбы</span>
            <Select
              value={config.damFilterField || (availableFields.find(f => f.name === 'title') ? 'title' : availableFields[0]?.name || '')}
              onChange={e => this.updateProp('damFilterField', e.target.value)}
            >
              {availableFields.map(f => (
                <option key={f.name} value={f.name}>{f.alias}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* 2. Бары */}
        {availableFields.length > 0 && (
          <div style={sectionStyle}>
            <div style={{ ...labelStyle, fontSize: 16, marginBottom: 8 }}>
              Бары диаграммы
            </div>
            {bars.map((bar, i) => (
              <div
                key={i}
                style={{
                  ...rowStyle,
                  border: "1px solid #292929",
                  borderRadius: 8,
                  marginBottom: 10,
                  padding: 10,
                  background: "#262729",
                }}
              >
                <span style={{ ...labelStyle, fontSize: 14, marginBottom: 4 }}>
                  Бар {i + 1}
                </span>
                <div style={rowStyle}>
                  <span style={labelStyle}>Поле данных</span>
                  <Select
                    value={bar.field}
                    onChange={e => this.updateBar(i, "field", e.target.value)}
                  >
                    {availableFields.map(f => (
                      <option key={f.name} value={f.name}>
                        {f.alias}
                      </option>
                    ))}
                  </Select>
                </div>
                <div style={rowStyle}>
                  <span style={labelStyle}>Цвет бара</span>
                  <ColorPicker
                    color={bar.color || "#299AFF"}
                    onChange={color => this.updateBar(i, "color", color)}
                  />
                </div>
                <div style={rowStyle}>
                  <span style={labelStyle}>Лейбл (RU)</span>
                  <TextInput
                    value={bar.label_ru || ""}
                    onChange={e => this.updateBar(i, "label_ru", e.target.value)}
                  />
                  <span style={labelStyle}>Лейбл (UZ)</span>
                  <TextInput
                    value={bar.label_uz || ""}
                    onChange={e => this.updateBar(i, "label_uz", e.target.value)}
                  />
                  <span style={labelStyle}>Лейбл (UZCRYL)</span>
                  <TextInput
                    value={bar.label_uzcryl || ""}
                    onChange={e => this.updateBar(i, "label_uzcryl", e.target.value)}
                  />
                  <span style={labelStyle}>Атрибут для лейбла</span>
                  <Select
                    value={bar.attributeField || ""}
                    onChange={e => this.updateBar(i, "attributeField", e.target.value)}
                  >
                    <option value="">—</option>
                    {availableFields.map(f => (
                      <option key={f.name} value={f.name}>{f.alias}</option>
                    ))}
                  </Select>
                </div>
                <div style={rowStyle}>
                  <span style={labelStyle}>Скругление углов бара</span>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <span style={{ fontSize: 12, color: '#ccc' }}>Верхний левый</span>
                      <NumericInput
                        value={bar.borderRadiusTopLeft ?? config.barBorderRadius ?? 18}
                        min={0}
                        max={64}
                        onChange={val => this.updateBar(i, "borderRadiusTopLeft", val)}
                        style={{ width: 60 }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <span style={{ fontSize: 12, color: '#ccc' }}>Верхний правый</span>
                      <NumericInput
                        value={bar.borderRadiusTopRight ?? config.barBorderRadius ?? 18}
                        min={0}
                        max={64}
                        onChange={val => this.updateBar(i, "borderRadiusTopRight", val)}
                        style={{ width: 60 }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <span style={{ fontSize: 12, color: '#ccc' }}>Нижний правый</span>
                      <NumericInput
                        value={bar.borderRadiusBottomRight ?? config.barBorderRadius ?? 18}
                        min={0}
                        max={64}
                        onChange={val => this.updateBar(i, "borderRadiusBottomRight", val)}
                        style={{ width: 60 }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <span style={{ fontSize: 12, color: '#ccc' }}>Нижний левый</span>
                      <NumericInput
                        value={bar.borderRadiusBottomLeft ?? config.barBorderRadius ?? 18}
                        min={0}
                        max={64}
                        onChange={val => this.updateBar(i, "borderRadiusBottomLeft", val)}
                        style={{ width: 60 }}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  type="tertiary"
                  style={{ marginTop: 8, background: "#c33", color: "#fff" }}
                  onClick={() => this.removeBar(i)}
                >
                  Удалить бар
                </Button>
              </div>
            ))}
            <Button
              onClick={this.addBar}
              style={{ width: "100%", marginTop: 10 }}
              size="sm"
            >
              + Добавить бар
            </Button>
          </div>
        )}

        {/* 3. Заголовок и стили (можно добавить по аналогии с pie-chart) */}
        <div style={sectionStyle}>
          <div style={rowStyle}>
            <span style={labelStyle}>Заголовок (RU)</span>
            <TextInput
              value={config.title_ru || ""}
              onChange={e => this.updateProp("title_ru", e.target.value)}
            />
            <span style={labelStyle}>Заголовок (UZ)</span>
            <TextInput
              value={config.title_uz || ""}
              onChange={e => this.updateProp("title_uz", e.target.value)}
            />
            <span style={labelStyle}>Заголовок (UZCRYL)</span>
            <TextInput
              value={config.title_uzcryl || ""}
              onChange={e => this.updateProp("title_uzcryl", e.target.value)}
            />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Атрибут для заголовка</span>
            <Select
              value={config.titleAttribute || ""}
              onChange={e => this.updateProp("titleAttribute", e.target.value)}
            >
              <option value="">—</option>
              {availableFields.map(f => (
                <option key={f.name} value={f.name}>{f.alias}</option>
              ))}
            </Select>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Размер заголовка</span>
            <NumericInput
              value={config.titleFontSize || 17}
              min={10}
              max={36}
              onChange={val => this.updateProp("titleFontSize", val)}
            />
          </div>
        </div>

        {/* 4. Цвета текста */}
        <div style={sectionStyle}>
          <div style={{ ...labelStyle, fontSize: 16, marginBottom: 8 }}>
            Цвета текста
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Цвет процентов (светлая тема)</span>
            <ColorPicker
              color={config.percentTextColor || "#333"}
              onChange={color => this.updateProp("percentTextColor", color)}
            />
            <span style={labelStyle}>Цвет процентов (тёмная тема)</span>
            <ColorPicker
              color={config.percentTextColorDark || "#fff"}
              onChange={color => this.updateProp("percentTextColorDark", color)}
            />
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Цвет подписей баров (светлая тема)</span>
            <ColorPicker
              color={config.barLabelTextColor || "#333"}
              onChange={color => this.updateProp("barLabelTextColor", color)}
            />
            <span style={labelStyle}>Цвет подписей баров (тёмная тема)</span>
            <ColorPicker
              color={config.barLabelTextColorDark || "#fff"}
              onChange={color => this.updateProp("barLabelTextColorDark", color)}
            />
          </div>
        </div>

        {/* 5. Цвет фона */}
        <div style={sectionStyle}>
          <div style={{ ...labelStyle, fontSize: 16, marginBottom: 8 }}>
            Цвет фона
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Фон (светлая тема)</span>
            <ColorPicker
              color={config.bgColor || "#fff"}
              onChange={color => this.updateProp("bgColor", color)}
            />
            <span style={labelStyle}>Фон (тёмная тема)</span>
            <ColorPicker
              color={config.bgColorDark || "#232324"}
              onChange={color => this.updateProp("bgColorDark", color)}
            />
          </div>
        </div>

        {/* 6. Скругление углов */}
        <div style={sectionStyle}>
          <div style={{ ...labelStyle, fontSize: 16, marginBottom: 8 }}>
            Скругление углов
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Контейнер (px)</span>
            <NumericInput
              value={config.borderRadius ?? 16}
              min={0}
              max={64}
              onChange={val => this.updateProp("borderRadius", val)}
            />
            <span style={labelStyle}>Бары (px)</span>
            <NumericInput
              value={config.barBorderRadius ?? 18}
              min={0}
              max={64}
              onChange={val => this.updateProp("barBorderRadius", val)}
            />
            <span style={labelStyle}>Бары бордер (px)</span>
            <NumericInput
              value={config.barBorderWidth ?? '0px'}
              min={0}
              max={64}
              onChange={val => this.updateProp("barBorderWidth", val)}
            />
            <span style={labelStyle}>Бары бордер цвет</span>
            <ColorPicker
              color={config.barBorderColor ?? "#fff"}
              onChange={color => this.updateProp("barBorderColor", color)}
            />
          </div>
        </div>

        {/* 7. Анимация и отступы */}
        <div style={sectionStyle}>
          <div style={{ ...labelStyle, fontSize: 16, marginBottom: 8 }}>
            Анимация и отступы
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Отступ между барами (px)</span>
            <NumericInput
              value={config.barMargin ?? 10}
              min={0}
              max={40}
              onChange={val => this.updateProp("barMargin", val)}
            />
            <span style={labelStyle}>Анимация при наведении</span>
            <Select
              value={config.enableBarAnimation === false ? "off" : "on"}
              onChange={e => this.updateProp("enableBarAnimation", e.target.value === "on")}
            >
              <option value="on">Включена</option>
              <option value="off">Отключена</option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
