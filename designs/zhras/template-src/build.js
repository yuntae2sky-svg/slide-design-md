// ZHRAS slide template — built from designs/zhras/DESIGN.md
const pptxgen = require("pptxgenjs");
// applyTheme: scripts/apply_theme.js from the Claude pptx skill (writes theme colors/fonts into the saved deck).
// Set PPTX_SKILL_DIR to that skill directory, and run with NODE_PATH pointing at node_modules containing pptxgenjs.
const SK = process.env.PPTX_SKILL_DIR;
const { applyTheme } = require(SK + "/scripts/apply_theme.js");
const LOGO = __dirname + "/../../../assets/zhras-brand/final";
const HEXIMG = __dirname + "/hexagon-outline.png";
const OUT = process.argv[2];

const THEME = {
  name: "ZHRAS",
  headFontFace: "Inter",
  bodyFontFace: "Inter",
  colors: {
    dk1: "1E3A47", lt1: "FFFFFF", dk2: "0B3F57", lt2: "F2FAFC",
    accent1: "2A93AE", accent2: "136F8A", accent3: "8FE3F0",
    accent4: "17703F", accent5: "A85A00", accent6: "C62828",
    hlink: "136F8A", folHlink: "4B6B79",
  },
};

const pres = new pptxgen();
pres.defineLayout({ name: "ZHRAS_WIDE", width: 13.333, height: 7.5 });
pres.layout = "ZHRAS_WIDE";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.title = "ZHRAS slide template";
pres.author = "ZHRAS";
pres.company = "ZHRAS";
const C = pres.SchemeColor;
const W = 13.333;
const MONO = "Share Tech Mono";
const MUTED = "4B6B79", BORDER = "D5E2E7", TINT = "E8F4F8", FOAM = "F2FAFC";

// logo aspect ratios (viewBox): horizontal 260.06x68.32 (emblem raised 7.5% / shifted right 3%), vertical 194.8x136.2, emblem 1:1
const hH = (w) => (w * 68.32) / 260.06;
const vH = (w) => (w * 136.2) / 194.8;

// ---------------------------------------------------------------- layouts
pres.defineSlideMaster({
  title: "ZHRAS Cover",
  background: { color: C.accent1 },
  objects: [
    { image: { path: HEXIMG, x: 8.5, y: 3.5, w: 7.2, h: 7.2, transparency: 90, altText: "Decorative hexagon outline" } },
    { image: { path: LOGO + "/base-reverse/lockup-horizontal.png", x: 0.7, y: 0.65, w: 4.5, h: hH(4.5), altText: "ZHRAS — Smart RAS Equipment Expert" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.7, y: 2.9, w: 8.4, h: 2.1, fontFace: "Michroma", fontSize: 40, color: C.background1, margin: 0, align: "left", valign: "top" }, text: "DECK TITLE" } },
    { placeholder: { options: { name: "subtitle", type: "body", x: 0.7, y: 5.2, w: 9.0, h: 0.7, fontSize: 18, color: C.background1, margin: 0, valign: "top" }, text: "Subtitle" } },
    { placeholder: { options: { name: "meta", type: "body", x: 0.7, y: 6.55, w: 6.0, h: 0.4, fontFace: MONO, fontSize: 12, color: C.background1, margin: 0, valign: "top" }, text: "YYYY.MM  |  Author" } },
  ],
});

pres.defineSlideMaster({
  title: "ZHRAS Section",
  background: { color: C.text2 },
  objects: [
    { placeholder: { options: { name: "number", type: "body", x: 0.7, y: 1.7, w: 6.0, h: 1.7, fontFace: MONO, fontSize: 96, color: C.accent3, margin: 0, valign: "top" }, text: "01" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.7, y: 3.55, w: 11.5, h: 1.0, fontSize: 36, bold: true, color: C.background1, margin: 0, align: "left", valign: "top" }, text: "Section title" } },
    { placeholder: { options: { name: "desc", type: "body", x: 0.7, y: 4.75, w: 10.5, h: 0.6, fontSize: 16, color: C.background1, margin: 0, valign: "top" }, text: "One-line description" } },
    { image: { path: LOGO + "/base-reverse/emblem.png", x: 0.7, y: 6.5, w: 0.5, h: 0.5, altText: "ZHRAS emblem" } },
  ],
});

pres.defineSlideMaster({
  title: "ZHRAS Content",
  background: { color: C.background1 },
  objects: [
    { rect: { x: 0, y: 0, w: W, h: 0.07, fill: { color: C.accent1 }, line: { type: "none" } } },
    { placeholder: { options: { name: "label", type: "body", x: 0.7, y: 0.42, w: 8.0, h: 0.28, fontFace: MONO, fontSize: 11, color: C.accent2, margin: 0, valign: "top" }, text: "SECTION LABEL" } },
    { placeholder: { options: { name: "title", type: "title", x: 0.7, y: 0.74, w: 11.93, h: 0.9, fontSize: 28, bold: true, color: C.text2, margin: 0, align: "left", valign: "top" }, text: "Slide title states the finding" } },
    { image: { path: LOGO + "/two-tone/emblem.png", x: 0.7, y: 6.95, w: 0.32, h: 0.32, altText: "ZHRAS emblem" } },
  ],
  slideNumber: { x: 11.63, y: 6.98, w: 1.0, h: 0.3, fontFace: MONO, fontSize: 10, color: MUTED, align: "right" },
});

pres.defineSlideMaster({
  title: "ZHRAS Closing",
  background: { color: C.accent1 },
  objects: [
    { image: { path: LOGO + "/base-reverse/lockup-vertical.png", x: (W - 4.4) / 2, y: 0.85, w: 4.4, h: vH(4.4), altText: "ZHRAS — Smart RAS Equipment Expert — Sustainable Aquaculture Solution" } },
    { placeholder: { options: { name: "contact", type: "body", x: 2.17, y: 5.55, w: 9.0, h: 1.1, fontSize: 18, bold: true, color: C.background1, margin: 0, align: "center", valign: "top" }, text: "contact@example.com" } },
  ],
});

// ---------------------------------------------------------------- slides
pres.addSection({ title: "Brand" });
let s = pres.addSlide({ masterName: "ZHRAS Cover", sectionTitle: "Brand" });
s.addText("RAS SYSTEM\nOVERVIEW", { placeholder: "title" });
s.addText("Recirculating aquaculture equipment — technical proposal", { placeholder: "subtitle" });
s.addText("2026.11  |  ZHRAS", { placeholder: "meta" });
s.addNotes("COVER — Aqua background with the white reverse logo (>= 4.0in wide). Title: Michroma, Latin caps only; for Korean or Chinese titles use Inter / Noto Sans KR Bold 40pt instead. The hexagon outline (white 10%) is the only decoration; keep it on the cover only.");

s = pres.addSlide({ masterName: "ZHRAS Section", sectionTitle: "Brand" });
s.addText("02", { placeholder: "number" });
s.addText("Biofiltration & water quality", { placeholder: "title" });
s.addText("Nitrification, oxygenation and CO₂ control", { placeholder: "desc" });
s.addNotes("SECTION DIVIDER — Deep Ocean background. Section number in Share Tech Mono (Ice), title 36pt white. No hexagon watermark here.");

pres.addSection({ title: "Content" });
s = pres.addSlide({ masterName: "ZHRAS Content", sectionTitle: "Content" });
s.addText("BIOFILTRATION", { placeholder: "label" });
s.addText("Nitrification stays stable at design stocking density", { placeholder: "title" });
s.addText("Key points", { x: 0.7, y: 1.95, w: 4.6, h: 0.4, fontSize: 16, bold: true, color: C.text2, margin: 0, valign: "top", isTextBox: true, objectName: "Heading" });
s.addText(
  [
    { text: "Moving-bed biofilter, 3-stage", options: { bullet: true, breakLine: true } },
    { text: "Ammonia kept below the alarm threshold", options: { bullet: true, breakLine: true } },
    { text: "Alkalinity dosing automated", options: { bullet: true, breakLine: true } },
    { text: "Sample layout only — replace this text", options: { bullet: true } },
  ],
  { x: 0.7, y: 2.45, w: 4.6, h: 2.2, fontSize: 14, color: C.text1, margin: 0, valign: "top", paraSpaceAfter: 6, isTextBox: true, objectName: "Body" }
);
s.addShape(pres.ShapeType.rect, { x: 0.7, y: 5.8, w: 4.6, h: 0.85, fill: { color: TINT }, line: { type: "none" }, objectName: "Callout background" });
s.addShape(pres.ShapeType.rect, { x: 0.7, y: 5.8, w: 0.05, h: 0.85, fill: { color: C.accent1 }, line: { type: "none" }, objectName: "Callout rule" });
s.addText("Callout — one per slide, Aqua Tint with a left rule", { x: 0.95, y: 5.8, w: 4.25, h: 0.85, fontSize: 14, color: C.text2, margin: 0, valign: "middle", isTextBox: true, objectName: "Callout text" });
s.addShape(pres.ShapeType.roundRect, { x: 5.75, y: 1.95, w: 6.88, h: 4.7, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: BORDER, width: 1 }, objectName: "Chart card" });
s.addText("Total ammonia (mg/L) — sample data", { x: 6.0, y: 2.1, w: 6.3, h: 0.35, fontSize: 14, bold: true, color: C.text2, margin: 0, valign: "top", isTextBox: true, objectName: "Chart title" });
const labels = ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"];
s.addChart(
  pres.charts.LINE,
  [
    { name: "Inlet", labels, values: [0.50, 0.51, 0.47, 0.53, 0.50, 0.54, 0.52, 0.53] },
    { name: "Outlet", labels, values: [0.18, 0.22, 0.28, 0.31, 0.37, 0.39, 0.42, 0.45] },
  ],
  {
    x: 5.95, y: 2.55, w: 6.45, h: 3.95,
    chartColors: ["2A93AE", "0B3F57"], lineSize: 3, lineDataSymbol: "none",
    showLegend: true, legendPos: "t", legendFontSize: 11, legendColor: MUTED, legendFontFace: "+mn-lt",
    catAxisLabelColor: MUTED, valAxisLabelColor: MUTED, catAxisLabelFontSize: 10, valAxisLabelFontSize: 10,
    catAxisLabelFontFace: "+mn-lt", valAxisLabelFontFace: "+mn-lt",
    valGridLine: { color: BORDER, size: 0.75 }, catGridLine: { style: "none" },
    valAxisMinVal: 0, valAxisMaxVal: 1, valAxisMajorUnit: 0.25,
    valAxisLabelFormatCode: "0.00",
    showTitle: false, objectName: "Ammonia line chart",
  }
);
s.addNotes("CONTENT — white background, Aqua top bar and footer emblem come from the layout. Replace the sample bullets and chart data. Title states the finding, not the topic. One callout per slide.");

pres.addSection({ title: "Data" });
s = pres.addSlide({ masterName: "ZHRAS Content", sectionTitle: "Data" });
s.addText("WATER QUALITY", { placeholder: "label" });
s.addText("Ammonia is on watch while other parameters stay in range", { placeholder: "title" });
const kpis = [
  ["Dissolved O₂", "8.2", "mg/L", "+0.3 vs. 24h", C.accent4],
  ["pH", "7.4", "", "±0.0 vs. 24h", C.accent4],
  ["NH₃-N", "0.31", "mg/L", "+0.12 vs. 24h", C.accent5],
  ["Temperature", "15.0", "°C", "−0.2 vs. 24h", C.accent4],
];
kpis.forEach((k, i) => {
  const KW = 2.795, x = 0.7 + i * (KW + 0.25);
  s.addShape(pres.ShapeType.roundRect, { x, y: 1.85, w: KW, h: 1.7, rectRadius: 0.08, fill: { color: C.background1 }, line: { color: BORDER, width: 1 }, objectName: `KPI card ${i + 1}` });
  s.addShape(pres.ShapeType.rect, { x: x + 0.06, y: 1.86, w: KW - 0.12, h: 0.05, fill: { color: C.accent1 }, line: { type: "none" }, objectName: `KPI rule ${i + 1}` });
  s.addText(k[0], { x: x + 0.25, y: 2.05, w: KW - 0.45, h: 0.3, fontSize: 12, color: MUTED, margin: 0, valign: "top", isTextBox: true, objectName: `KPI label ${i + 1}` });
  s.addText(
    [{ text: k[1], options: { fontSize: 44, color: C.text2 } }, { text: k[2] ? " " + k[2] : "", options: { fontSize: 14, color: MUTED } }],
    { x: x + 0.25, y: 2.35, w: KW - 0.4, h: 0.8, fontFace: MONO, margin: 0, valign: "middle", isTextBox: true, objectName: `KPI value ${i + 1}` }
  );
  s.addText(k[3], { x: x + 0.25, y: 3.15, w: KW - 0.45, h: 0.3, fontFace: MONO, fontSize: 12, color: k[4], margin: 0, valign: "top", isTextBox: true, objectName: `KPI delta ${i + 1}` });
});
const hd = (t, al) => ({ text: t, options: { bold: true, color: "FFFFFF", fill: { color: "0B3F57" }, fontSize: 12, align: al || "left", valign: "middle" } });
const bd = { type: "solid", pt: 1, color: BORDER }, nb = { type: "none" };
const cell = (t, i, o) => ({ text: t, options: Object.assign({ fontSize: 12, color: "1E3A47", fill: { color: i % 2 ? FOAM : "FFFFFF" }, valign: "middle", border: [nb, nb, bd, nb] }, o || {}) });
const st = { NORMAL: ["17703F", "E6F4EC"], WATCH: ["A85A00", "FFF4E6"], ALARM: ["C62828", "FDECEC"] };
const rows = [
  ["Dissolved oxygen", "8.2", "≥ 6.0", "NORMAL"],
  ["NH₃-N", "0.31", "≤ 0.50", "WATCH"],
  ["Nitrite", "0.04", "≤ 0.10", "NORMAL"],
  ["CO₂", "21", "≤ 15", "ALARM"],
];
const tbl = [[hd("Parameter"), hd("Value", "right"), hd("Limit", "right"), hd("Status")]].concat(
  rows.map((r, i) => [
    cell(r[0], i),
    cell(r[1], i, { align: "right", fontFace: MONO, fontSize: 14 }),
    cell(r[2], i, { align: "right", fontFace: MONO, fontSize: 14 }),
    cell(r[3], i, { fontFace: MONO, fontSize: 12, bold: true, color: st[r[3]][0], fill: { color: st[r[3]][1] } }),
  ])
);
s.addTable(tbl, { x: 0.7, y: 3.95, w: 11.93, colW: [5.0, 2.2, 2.2, 2.53], rowH: [0.42, 0.45, 0.45, 0.45, 0.45], margin: [0, 0.14, 0, 0.14], objectName: "Status table" });
s.addText("Sample data — layout demonstration only", { x: 0.7, y: 6.45, w: 6.0, h: 0.3, fontSize: 10, color: MUTED, margin: 0, valign: "top", isTextBox: true, objectName: "Footnote" });
s.addNotes("KPI / DATA — up to 4 KPI cards, then a table. Numbers use Share Tech Mono and are right-aligned. Status colors are always paired with a text label (NORMAL / WATCH / ALARM). Values here are placeholders.");

pres.addSection({ title: "Closing" });
s = pres.addSlide({ masterName: "ZHRAS Closing", sectionTitle: "Closing" });
s.addText("contact@example.com  ·  +82 00 0000 0000", { placeholder: "contact" });
s.addNotes("CLOSING — Aqua background, white reverse vertical logo (>= 3.5in wide, here 4.4in). Contact line is 18pt bold white (large-text rule for white on Aqua).");

(async () => {
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("written", OUT);
})();
