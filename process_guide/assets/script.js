const claims = [
  {
    id: "volume-drop",
    title: "Volume Drop",
    description: "Minimum documentation for volume drop claims.",
    items: [
      "Volume Drop template",
      "Nominated volume (eNa/amendment) -15% flex",
      "VE alignment (amortization / fixed costs >10%)",
      "Finance VD calculation and cost amortization (<10%)",
      "CBD (R&D & Capex)",
      "Previous VD claims paid?",
      "Is this supplier only affecting my COM?",
      "If not, add mega supplier overview",
      "Capa adjustment",
      "Add previous claims paid",
      "Nomination letter"
    ]
  },
  {
    id: "price-increase",
    title: "Price Increase",
    description: "Minimum documentation for price increase topics.",
    items: [
      "Sustainable effects template",
      "Sustainable Overview per COM",
      "VE validation",
      "List of parts affected and delta",
      "Cost walk",
      "Previous increases paid?",
      "Is this supplier only affecting my COM?",
      "If not, add mega supplier overview"
    ]
  },
  {
    id: "id4-cancellation",
    title: "ID.4 Cancellation",
    description: "Documentation needed for ID.4 cancellation related claims.",
    items: [
      "Complete ID.4 overview (Volume drop, cancellation, obsoletes, etc.)",
      "Volume Drop template",
      "Nominated volume (eNa/amendment) -15% flex",
      "VE alignment",
      "Fixed cost amortization (<10%)",
      "CBD (R&D & Capex)",
      "Previous VD claims paid?",
      "Previous renegotiation of capacity?",
      "Is this supplier only affecting my COM?",
      "If not, add mega supplier overview",
      "Nomination letter"
    ]
  },
  {
    id: "atlas-nf-cop",
    title: "Atlas NF COP",
    description: "Documentation for Atlas NF COP claims. Accepted concepts include labor, material, energy and amortization.",
    items: [
      "Sustainable effects template",
      "Atlas NF COP Overview",
      "Under VE validation (2 weeks before)",
      "Nomination year before 2023",
      "In Atlas NF COP Risks file",
      "List of parts affected and delta",
      "Cost walk",
      "Is this supplier only affecting my COM?",
      "If not, add mega supplier overview",
      "Market price benchmark",
      "New business for NF?",
      "Start point for calculation: new SOP to EOP (2026 - 2034)"
    ]
  }
];

const tabs = document.querySelectorAll(".tab-button");
const views = document.querySelectorAll(".view");
const tabTargets = document.querySelectorAll("[data-tab-target]");
const claimsGrid = document.getElementById("claimsGrid");
const claimsHome = document.getElementById("claims-home");
const claimDetail = document.getElementById("claimDetail");

function showTab(tabId) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  views.forEach(view => view.classList.toggle("active", view.id === tabId));
  if (tabId === "claims") showClaimsHome();
  document.querySelector(".main-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

tabs.forEach(tab => tab.addEventListener("click", () => showTab(tab.dataset.tab)));
tabTargets.forEach(item => item.addEventListener("click", () => showTab(item.dataset.tabTarget)));

function renderClaims() {
  claimsGrid.innerHTML = claims.map(claim => `
    <button class="claim-card" data-claim-id="${claim.id}">
      <div>
        <div class="claim-count">${claim.items.length} items</div>
        <h3>${claim.title}</h3>
        <p>${claim.description}</p>
      </div>
      <strong style="color: var(--dark-green); margin-top: 20px;">View requirements →</strong>
    </button>
  `).join("");

  document.querySelectorAll("[data-claim-id]").forEach(card => {
    card.addEventListener("click", () => showClaim(card.dataset.claimId));
  });
}

function showClaim(claimId) {
  const claim = claims.find(item => item.id === claimId);
  if (!claim) return;

  claimsHome.style.display = "none";
  claimDetail.classList.add("active");
  claimDetail.innerHTML = `
    <div class="detail-layout">
      <aside class="detail-summary">
        <button class="back-button" id="backToClaims">← Back to claims</button>
        <h3>${claim.title}</h3>
        <p>${claim.description}</p>
        <div class="deadline-chip" style="background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.16);">
          <strong>${claim.items.length} checklist items</strong>
          Minimum supportive documentation currently listed for this claim.
        </div>
      </aside>
      <div>
        <ul class="detail-list">
          ${claim.items.map(item => `<li><span class="box" aria-hidden="true"></span><span>${item}</span></li>`).join("")}
        </ul>
        <div class="note"><strong>Tip:</strong> This checklist is designed to help buyers prepare documentation before submission. Add template links later as each official file becomes available.</div>
      </div>
    </div>
  `;

  document.getElementById("backToClaims").addEventListener("click", showClaimsHome);
  claimDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showClaimsHome() {
  claimsHome.style.display = "block";
  claimDetail.classList.remove("active");
  claimDetail.innerHTML = "";
}

renderClaims();
