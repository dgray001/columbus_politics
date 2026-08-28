const PALETTES = [
  { id: 'a', label: 'Slate & Sage' },
  { id: 'b', label: 'Forest & Stone' },
  { id: 'c', label: 'Moss & Graphite' },
];

export function renderKitchenSink(container: HTMLElement): void {
  container.innerHTML = `
    <div class="palette-switcher">
      ${PALETTES.map((p) => `<button class="palette-btn" data-palette="${p.id}">${p.label}</button>`).join('')}
    </div>

    <h1>Franklin County Board of Commissioners</h1>
    <p>
      The board consists of three members elected countywide to staggered four-year terms. It sets the county
      budget and oversees departments including human services, sanitary engineering, and economic development.
    </p>
    <h2>Row officers</h2>
    <p>
      Eight additional officials are elected separately: auditor, treasurer, recorder, sheriff, prosecutor,
      clerk of courts, engineer, and coroner.
    </p>

    <blockquote class="citation">
      "The board of county commissioners shall hold regular sessions at the county seat."
      <cite><a href="#">Ohio Revised Code &sect; 305.05</a></cite>
    </blockquote>

    <p>
      See also the <a href="#">Ohio</a> page for how counties fit into the state constitution, or an
      <a href="#">external source</a> for the current budget document.
    </p>

    <div class="button-row">
      <button class="btn btn-primary">View current commissioners</button>
      <button class="btn btn-secondary">Meeting minutes</button>
    </div>

    <div class="badge-row">
      <span class="badge">Elected</span>
      <span class="badge">Appointed</span>
      <span class="badge badge-muted">Nonpartisan</span>
    </div>

    <div class="card">
      <h3>Franklin County Probate Court</h3>
      <p class="card-meta">Judicial branch &middot; one elected judge, six-year term</p>
      <p>
        Handles wills, estates, guardianships, and adoptions. Also appoints the Board of Park Commissioners
        that governs Franklin County Metro Parks.
      </p>
    </div>

    <table class="data-table">
      <thead>
        <tr><th>Office</th><th>Selection</th><th>Term</th></tr>
      </thead>
      <tbody>
        <tr><td>Commissioner</td><td>Elected, countywide</td><td>4 years</td></tr>
        <tr><td>Auditor</td><td>Elected, countywide</td><td>4 years</td></tr>
        <tr><td>Probate Judge</td><td>Elected, countywide</td><td>6 years</td></tr>
        <tr><td>Metro Parks Commissioner</td><td>Appointed by probate judge</td><td>3 years</td></tr>
      </tbody>
    </table>

    <ul class="plain-list">
      <li>Board of Elections</li>
      <li>Common Pleas Court (General, Domestic Relations, Probate, Juvenile)</li>
      <li>Municipal Court</li>
    </ul>

    <hr>
    <p class="footnote">Sources are cited inline throughout; see each page's references section for full citations.</p>
  `;

  for (const button of container.querySelectorAll<HTMLButtonElement>('.palette-btn')) {
    button.addEventListener('click', () => {
      document.documentElement.dataset.palette = button.dataset.palette;
    });
  }
}
