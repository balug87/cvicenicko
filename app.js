/* Cvičeníčko - vykreslení obsahu z content.js */
(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* Notifikace */
  if (SITE.notice && SITE.notice.show) {
    $(".notice").innerHTML = '<div class="notice-box">' + esc(SITE.notice.text) + "</div>";
  } else {
    $(".notice").remove();
  }

  /* Hero slideshow */
  const slides = SITE.hero.images
    .map((src, i) => `<img src="${src}" alt="Cvičeníčko ${i + 1}" ${i === 0 ? 'class="active"' : ""} fetchpriority="${i === 0 ? "high" : "low"}">`)
    .join("");
  $(".hero-slides").innerHTML = slides;
  $("#hero-title").textContent = SITE.hero.title;
  $("#hero-sub").textContent = SITE.hero.subtitle;
  document.querySelectorAll("[data-booking]").forEach((a) => (a.href = SITE.bookingUrl));

  const slideEls = Array.from(document.querySelectorAll(".hero-slides img"));
  let current = 0;
  const dots = $(".hero-dots");
  dots.innerHTML = slideEls.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join("");
  const dotEls = Array.from(dots.children);
  function show(i) {
    slideEls[current].classList.remove("active");
    dotEls[current].classList.remove("active");
    current = i % slideEls.length;
    slideEls[current].classList.add("active");
    dotEls[current].classList.add("active");
  }
  dotEls[0].classList.add("active");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) setInterval(() => show(current + 1), 5000);
  dotEls.forEach((d, i) => d.addEventListener("click", () => show(i)));

  /* Intro */
  $("#intro-text").textContent = SITE.intro.text;
  $("#intro-img").src = SITE.intro.image;
  $("#intro-img").alt = "Cvičeníčko";

  /* Programy */
  $(".programs-grid").innerHTML = SITE.programs
    .map(
      (p) => `
    <article class="program-card">
      <img src="${p.image}" alt="${esc(p.title)}" loading="lazy">
      <div class="program-body">
        <h3>${esc(p.title)}</h3>
        <div class="program-tags"><span class="tag tag-teal">${esc(p.age)}</span><span class="tag tag-yellow">${esc(p.place)}</span></div>
        <p>${esc(p.text)}</p>
      </div>
    </article>`
    )
    .join("");

  /* Ceník */
  $(".price-grid").innerHTML = SITE.prices
    .map(
      (c) => `
    <div class="price-card">
      <h3>${esc(c.title)}</h3>
      <div class="place">${esc(c.place)}</div>
      <p class="price-system">${esc(c.system)}</p>
      ${c.items
        .map(
          (it) => `
        <div class="price-row">
          <span class="label">${esc(it.label)}${it.note ? `<br><span class="price-note">${esc(it.note)}</span>` : ""}</span>
          <span class="amount">${esc(it.price)}</span>
        </div>`
        )
        .join("")}
      <p class="price-rules">${esc(c.rules)}</p>
    </div>`
    )
    .join("");

  /* Rozvrh */
  $(".schedule-notice").textContent = SITE.schedule.notice;
  $("#sessions").innerHTML = SITE.schedule.sessions
    .map(
      (s) => `
    <div class="session">
      <span class="day">${esc(s.day)}</span>
      <span class="time">${esc(s.time)}</span>
      <span class="meta">${esc(s.place)}<br>${esc(s.group)}</span>
      <a class="btn btn-sm" data-booking href="${SITE.bookingUrl}">Přihlásit se</a>
    </div>`
    )
    .join("");
  $(".schedule-links").innerHTML = SITE.schedule.links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join("");
  $("#waitlist").innerHTML = SITE.schedule.waitlist.replace(
    "nemkyova@cvicenicko.cz",
    '<a href="mailto:nemkyova@cvicenicko.cz">nemkyova@cvicenicko.cz</a>'
  );

  /* Lektoři */
  $("#lecturers").innerHTML = SITE.lecturers
    .map(
      (l) => `
    <div class="lecturer">
      <img src="${l.image}" alt="${esc(l.name)}" loading="lazy">
      <div><h3>${esc(l.name)}</h3><p>${esc(l.role)}</p></div>
    </div>`
    )
    .join("");

  /* Galerie + lightbox */
  const galleryEl = $("#galerie-alba");
  galleryEl.innerHTML = SITE.gallery
    .map(
      (a) => `
    <div class="album">
      <h3>${esc(a.title)}</h3>
      <div class="album-grid">
        ${a.images.map((src, i) => `<img src="${src}" alt="${esc(a.title)} foto ${i + 1}" loading="lazy" data-lb="${a.id}" data-idx="${i}">`).join("")}
      </div>
    </div>`
    )
    .join("");

  const lb = $("#lightbox");
  const lbImg = lb.querySelector("img");
  let lbList = [], lbIdx = 0;
  function openLb(albumId, idx) {
    const album = SITE.gallery.find((g) => g.id === albumId);
    lbList = album.images; lbIdx = idx;
    lbImg.src = lbList[lbIdx];
    lbImg.alt = album.title;
    lb.classList.add("open");
  }
  function closeLb() { lb.classList.remove("open"); }
  function stepLb(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbImg.src = lbList[lbIdx]; }
  galleryEl.addEventListener("click", (e) => {
    if (e.target.dataset.lb) openLb(e.target.dataset.lb, +e.target.dataset.idx);
  });
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lb-close")) closeLb();
    else if (e.target.closest(".lb-prev")) stepLb(-1);
    else if (e.target.closest(".lb-next")) stepLb(1);
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
  });

  /* Kde cvičíme */
  $("#places").innerHTML = SITE.places
    .map(
      (p) => `
    <div class="place-card">
      <img src="${p.image}" alt="${esc(p.name)}" loading="lazy">
      <div class="place-body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.address)}</p>
        <a href="${p.map}" target="_blank" rel="noopener">Zobrazit na mapě →</a>
      </div>
    </div>`
    )
    .join("");

  /* Kontakt */
  const c = SITE.contact;
  $("#contact-list").innerHTML = `
    <li><span class="k">Kdo</span><span>${esc(c.person)}</span></li>
    <li><span class="k">E-mail</span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
    <li><span class="k">Telefon</span><a href="tel:${esc(c.phoneHref)}">${esc(c.phone)}</a></li>
    <li><span class="k">Adresa</span><span>${esc(c.address)}</span></li>`;
  $("#contact-legal").textContent = c.legal;
  $("#socials").innerHTML = `
    <a href="${c.facebook}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
    <a href="${c.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>`;
  $("#map-frame").src =
    "https://www.google.com/maps?q=" + encodeURIComponent("Lidická 81, Brno") + "&output=embed";

  /* Mobilní menu */
  const toggle = $(".nav-toggle"), links = $(".nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
})();
