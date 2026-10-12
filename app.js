(() => {
  "use strict";

  const data = window.auditData;
  if (!data) return;

  const fmt = new Intl.NumberFormat("en-US");

  // Comparable-country bars
  const barRoot = document.getElementById("country-bars");
  if (barRoot) {
    barRoot.innerHTML = "";
    const max = Math.max(...data.comparableCountries.map(d => d.projects));

    data.comparableCountries.forEach(d => {
      const row = document.createElement("div");
      row.className = `country-row ${d.tone || ""}`;

      const name = document.createElement("div");
      name.className = "country-name";
      name.innerHTML = `<strong>${d.country}</strong><span>${d.status}</span>`;

      const track = document.createElement("div");
      track.className = "bar-track";

      const fill = document.createElement("div");
      fill.className = "bar-fill";
      fill.style.width = `${Math.max(2.5, (d.projects / max) * 100)}%`;
      track.appendChild(fill);

      const value = document.createElement("div");
      value.className = "bar-value";
      value.textContent = fmt.format(d.projects);

      row.append(name, track, value);
      barRoot.appendChild(row);
    });
  }

  // Annual SVG chart
  const svg = document.getElementById("annual-chart");
  const slider = document.getElementById("year-slider");
  const readout = document.getElementById("year-readout");

  if (svg && slider && readout) {
    svg.innerHTML = "";

    const NS = "http://www.w3.org/2000/svg";
    const W = 980, H = 410;
    const pad = { left: 70, right: 30, top: 28, bottom: 58 };
    const innerW = W - pad.left - pad.right;
    const innerH = H - pad.top - pad.bottom;
    const maxY = 350;

    const x = i => pad.left + (i / (data.annualCounts.length - 1)) * innerW;
    const y = v => pad.top + innerH - (v / maxY) * innerH;
    const make = (tag, attrs = {}) => {
      const e = document.createElementNS(NS, tag);
      Object.entries(attrs).forEach(([k,v]) => e.setAttribute(k, String(v)));
      return e;
    };

    [0,100,200,300].forEach(v => {
      svg.appendChild(make("line", {
        x1: pad.left, x2: W - pad.right,
        y1: y(v), y2: y(v),
        stroke: "#d8e0e7", "stroke-width": 1
      }));
      const t = make("text", {
        x: pad.left - 12, y: y(v) + 4,
        "text-anchor": "end", fill: "#707b85", "font-size": 11
      });
      t.textContent = v;
      svg.appendChild(t);
    });

    data.annualCounts.forEach((d,i) => {
      if (i % 2 === 0 || i === data.annualCounts.length - 1) {
        const t = make("text", {
          x: x(i), y: H - 24,
          "text-anchor": "middle", fill: "#707b85", "font-size": 11
        });
        t.textContent = d.year;
        svg.appendChild(t);
      }
    });

    const pathD = key => data.annualCounts.map((d,i) =>
      `${i === 0 ? "M" : "L"} ${x(i)} ${y(d[key])}`
    ).join(" ");

    svg.appendChild(make("path", {
      d: pathD("israel"), fill: "none", stroke: "#004494",
      "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round"
    }));

    svg.appendChild(make("path", {
      d: pathD("ukraine"), fill: "none", stroke: "#F2B134",
      "stroke-width": 4, "stroke-linecap": "round", "stroke-linejoin": "round",
      "stroke-dasharray": "8 6"
    }));

    data.annualCounts.forEach((d,i) => {
      [["israel","#004494"],["ukraine","#F2B134"]].forEach(([key,color]) => {
        const c = make("circle", {
          cx:x(i), cy:y(d[key]), r:5, fill:color, stroke:"#fff", "stroke-width":2
        });
        const title = make("title");
        title.textContent = `${d.year}: ${key === "israel" ? "Israel" : "Ukraine"} ${d[key]}`;
        c.appendChild(title);
        svg.appendChild(c);
      });
    });

    const focus = make("line", {
      y1: pad.top, y2: H - pad.bottom,
      stroke: "#DA2131", "stroke-width": 2, "stroke-dasharray": "5 5"
    });
    const dotA = make("circle", {r:9,fill:"#004494",stroke:"#fff","stroke-width":3});
    const dotB = make("circle", {r:9,fill:"#F2B134",stroke:"#fff","stroke-width":3});
    svg.append(focus,dotA,dotB);

    function update(iRaw){
      const i = Math.max(0, Math.min(data.annualCounts.length - 1, Number(iRaw)));
      const d = data.annualCounts[i];
      const px = x(i);

      focus.setAttribute("x1", px);
      focus.setAttribute("x2", px);
      dotA.setAttribute("cx", px);
      dotA.setAttribute("cy", y(d.israel));
      dotB.setAttribute("cx", px);
      dotB.setAttribute("cy", y(d.ukraine));
      readout.textContent = `${d.year} — Israel ${d.israel} · Ukraine ${d.ukraine}`;
    }

    slider.addEventListener("input", e => update(e.target.value));
    update(slider.value);
  }

  // Semantic tabs
  const tabs = [...document.querySelectorAll("[data-semantic]")];
  const refs = {
    label: document.getElementById("semantic-label"),
    description: document.getElementById("semantic-description"),
    aName: document.getElementById("semantic-a-name"),
    bName: document.getElementById("semantic-b-name"),
    aValue: document.getElementById("semantic-a-value"),
    bValue: document.getElementById("semantic-b-value"),
    aBar: document.getElementById("semantic-a-bar"),
    bBar: document.getElementById("semantic-b-bar"),
    delta: document.getElementById("semantic-delta")
  };

  function showSemantic(key){
    const d = data.semantic[key];
    if (!d) return;
    tabs.forEach(t => t.classList.toggle("active", t.dataset.semantic === key));
    refs.label.textContent = d.label;
    refs.description.textContent = d.description;
    refs.aName.textContent = d.aName;
    refs.bName.textContent = d.bName;
    refs.aValue.textContent = d.a.toFixed(3);
    refs.bValue.textContent = d.b.toFixed(3);
    refs.aBar.style.width = `${d.a * 100}%`;
    refs.bBar.style.width = `${d.b * 100}%`;
    refs.delta.textContent = `Δ ${d.delta.toFixed(3)}`;
  }

  tabs.forEach(t => t.addEventListener("click", () => showSemantic(t.dataset.semantic)));
  if (tabs.length) showSemantic("all");

  // Ownership nodes
  const nodeDetail = document.getElementById("node-detail");
  const nodes = [...document.querySelectorAll("[data-node]")];

  function showNode(key){
    if (!nodeDetail || !data.nodeDetails[key]) return;
    nodeDetail.textContent = data.nodeDetails[key];
    nodes.forEach(n => n.setAttribute("aria-pressed", String(n.dataset.node === key)));
  }

  nodes.forEach(n => n.addEventListener("click", () => showNode(n.dataset.node)));
  if (nodes.length) showNode("intracom");
})();