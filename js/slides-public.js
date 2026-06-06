/* ============================================================================
   Slide content — bilingual (EN/ID). Each slide = { title:{en,id}, html }.
   Inline bilingual text uses t(en,id) -> <span class=en>..</span><span class=id>..</span>
   CSS shows the active language only ([data-lang] rules in style.css).
   ============================================================================ */
const t = (en, id) => `<span class="en">${en}</span><span class="id">${id}</span>`;

const SLIDES = [
/* 1 — TITLE ---------------------------------------------------------------- */

{
  title:{en:"Title",id:"Judul"},
  cls:"s-title",
  html:`
    <img src="assets/logo-jejakin.png" class="logo-big" alt="Jejakin">
    <div class="kicker">Ocean Week Brunei 2026</div>
    <h1>${t("Mangroves: The Gateway to","Mangrove: Gerbang Menuju")} <span class="grad-text">${t("Blue Carbon","Blue Carbon")}</span> ${t("and","dan")} <span class="leaf-text">${t("Smarter Seas","Laut yang Lebih Cerdas")}</span></h1>
    <p class="sub">${t(
      "Turning coastal ecosystems into measurable carbon, transparent markets, and smarter ocean policy — with data and AI.",
      "Mengubah ekosistem pesisir menjadi karbon yang terukur, pasar yang transparan, dan kebijakan laut yang lebih cerdas — dengan data dan AI.")}</p>
    <div class="meta">
      <span class="chip"><b>${t("Speaker","Pembicara")}:</b> Hendri Karisma · VP of Engineering, Jejakin</span>
      <span class="chip"><b>${t("Theme","Tema")}:</b> ${t("Blue-Carbon Economy for a Sustainable Future","Ekonomi Blue Carbon untuk Masa Depan Berkelanjutan")}</span>
    </div>
    <div class="cta-pdf"><button id="pdf-btn-hero">⬇ ${t("Export this deck to PDF","Ekspor deck ini ke PDF")}</button></div>
  `
},

/* 2 — SPEAKER -------------------------------------------------------------- */

{
  title:{en:"Speaker",id:"Pembicara"},
  cls:"s-speaker",
  html:`
    <div class="kicker">${t("About the speaker","Tentang pembicara")}</div>
    <div class="split">
      <div class="visual"><div class="photo-frame"><img src="assets/hendri.jpg" alt="Hendri Karisma"></div></div>
      <div>
        <h2>Hendri Karisma</h2>
        <h3 class="ocean-text">VP of Engineering @ Jejakin</h3>
        <ul class="bio-list">
          <li><span class="em">🌱</span><span>${t("Lead of Engineering and AI for Jejakin's climate-tech platform: carbon accounting, environmental MRV, and a blue-economy marketplace.","Lead of Engineering and AI untuk platform climate-tech Jejakin: penghitungan karbon, MRV lingkungan, dan marketplace ekonomi biru.")}</span></li>
          <li><span class="em">📚</span><span>${t("Lecturer of Informatics @ <b>STMIK Tazkia</b> — bridging CS theory and production systems.","Dosen Teknik Informatika @ <b>STMIK Tazkia</b> — menjembatani teori CS dan sistem production.")}</span></li>
          <li><span class="em">⚙️</span><span>${t("Focus: <b>sustainable secure computation</b> — distributed systems, machine learning, and applied AI.","Fokus: <b>sustainable secure computation</b> — sistem terdistribusi, machine learning, dan AI terapan.")}</span></li>
        </ul>
      </div>
    </div>
  `
},

/* 2b — WHAT IS JEJAKIN (start with who we are) ---------------------------- */

{
  title:{en:"What is Jejakin",id:"Apa itu Jejakin"},
  html:`
    <div class="kicker">${t("First — who we are","Pertama — siapa kami")}</div>
    <h2>${t("Jejakin is an Indonesian","Jejakin adalah perusahaan")} <span class="leaf-text">${t("climate-tech company","climate-tech Indonesia")}</span> — ${t("measuring, restoring & financing nature, in production today.","mengukur, memulihkan & mendanai alam, sudah berjalan hari ini.")}</h2>
    <p class="lead" style="margin:16px 0 10px;max-width:78ch">${t(
      "We help organizations and institutions understand their emissions, carbon footprint and ESG status, run real restoration on the ground, and open it up so anyone can take part. Three products do this — and all three are live, not slideware.",
      "Kami membantu organisasi & institusi memahami emisi, jejak karbon & status ESG mereka, menjalankan restorasi nyata di lapangan, dan membukanya agar siapa pun bisa ikut serta. Tiga produk melakukan ini — dan ketiganya sudah live, bukan sekadar slide.")}</p>
    <div class="grid g3" style="margin-top:26px">
      <div class="card prodcard"><div class="phead"><img src="assets/product-logos/logo-CarbonIQ_jejakin.svg" class="plogo" alt="Carbon IQ"><span class="prole">${t("Measure","Ukur")}</span></div><p>${t("Measures a company's emissions and writes the report.","Mengukur emisi perusahaan dan menyusun laporannya.")}</p><ul class="mini"><li>${t("Scope 1/2/3 carbon accounting","Carbon accounting Scope 1/2/3")}</li><li>${t("AI-drafted ESG reports","Laporan ESG oleh AI")}</li><li>${t("Carbon-project documentation","Dokumentasi carbon project")}</li></ul></div>
      <div class="card prodcard"><div class="phead"><img src="assets/product-logos/logo-CarbonAtlas_jejakin.svg" class="plogo" alt="Carbon Atlas"><span class="prole">${t("Implement & monitor","Implementasi & monitor")}</span></div><p>${t("Runs the restoration on the ground and proves it.","Menjalankan restorasi di lapangan dan membuktikannya.")}</p><ul class="mini"><li>${t("Satellite + drone + field sensors","Satelit + drone + sensor lapangan")}</li><li>${t("Field app + IoT sensors","App lapangan + sensor IoT")}</li><li>${t("MRV + biodiversity AI","MRV + AI biodiversitas")}</li></ul></div>
      <div class="card prodcard"><div class="phead"><img src="assets/product-logos/logo-CarbonSpace_jejakin.svg" class="plogo" alt="Carbon Space"><span class="prole">${t("Finance & retail","Danai & ritel")}</span></div><p>${t("Turns verified impact into credits anyone can buy.","Mengubah dampak terverifikasi jadi kredit yang bisa dibeli siapa pun.")}</p><ul class="mini"><li>${t("Carbon-credit marketplace (B2B2C)","Marketplace kredit karbon (B2B2C)")}</li><li>${t("Embeddable calculator API","API kalkulator tersemat")}</li><li>${t("Registry-grade credits (SRN/Verra)","Kredit kelas registri (SRN/Verra)")}</li></ul></div>
    </div>
    <p class="lead" style="margin-top:24px">${t(
      "<b>Carbon IQ</b> measures, <b>Carbon Atlas</b> executes & monitors, <b>Carbon Space</b> finances it — one integrated platform. Today it runs real programmes; this talk shows how it works and how it maps to <b>blue carbon</b>.",
      "<b>Carbon IQ</b> mengukur, <b>Carbon Atlas</b> mengeksekusi & memantau, <b>Carbon Space</b> mendanai — satu platform terintegrasi. Hari ini menjalankan program nyata; presentasi ini menunjukkan cara kerjanya dan pemetaannya ke <b>blue carbon</b>.")}</p>
    <div style="margin-top:24px">
      <div style="font-size:12px;color:var(--ink-faint);font-family:var(--display);letter-spacing:.04em;margin-bottom:11px">${t("ALREADY POWERING REAL PROGRAMMES WITH","SUDAH MENGGERAKKAN PROGRAM NYATA BERSAMA")}</div>
      <div class="pills">
        <span class="pill on">Pertamina</span><span class="pill on">Meratus</span><span class="pill on">Gojek</span>
        <span class="pill on">Blibli</span><span class="pill on">Tiket.com</span><span class="pill on">GoGreener</span>
        <span class="pill on">Bank Aladin</span><span class="pill on">Mandiri</span>
      </div>
    </div>
  `
},

/* 3 — WHY THE COAST -------------------------------------------------------- */

{
  title:{en:"Why the coast",id:"Kenapa pesisir"},
  html:`
    <div class="kicker">${t("The big idea","Gagasan utama")}</div>
    <h2>${t("The gateway to the ocean isn't offshore. It's the","Gerbang menuju laut bukan di lepas pantai. Ada di")} <span class="leaf-text">${t("coastline","garis pantai")}</span>.</h2>
    <p class="lead">${t(
      "Mangroves and seagrass are the planet's most efficient carbon sinks — and the first wall of coastal defence. Protecting them is where ocean tech delivers the fastest, most measurable impact.",
      "Mangrove dan lamun adalah penyerap karbon paling efisien di bumi — sekaligus benteng pertama pertahanan pesisir. Menjaganya adalah tempat teknologi laut memberi dampak tercepat dan paling terukur.")}</p>
    <div class="grid g3" style="margin-top:26px">
      <div class="card"><span class="ico">🌿</span><h3>${t("Up to 5× the carbon","Hingga 5× karbon")}</h3><p>${t("Per hectare, mangroves can store several times more carbon than tropical rainforest — most of it locked in the soil for centuries.","Per hektar, mangrove dapat menyimpan karbon beberapa kali lipat hutan hujan tropis — sebagian besar terkunci di tanah selama berabad-abad.")}</p><span class="tag">Blue carbon</span></div>
      <div class="card"><span class="ico">🛡️</span><h3>${t("Living coastal defence","Benteng pesisir hidup")}</h3><p>${t("They absorb wave energy, reduce erosion and storm surge, and shelter fisheries that feed coastal communities.","Meredam energi gelombang, mengurangi erosi dan badai, serta melindungi perikanan yang menghidupi masyarakat pesisir.")}</p><span class="tag blue">${t("Resilience","Ketahanan")}</span></div>
      <div class="card"><span class="ico">🦜</span><h3>${t("Biodiversity returns","Biodiversitas kembali")}</h3><p>${t("As mangroves and seagrass recover, fish, birds and fauna come back — measurable by bioacoustic AI. That biodiversity data can become a future <b>biodiversity credit</b>, beyond carbon.","Saat mangrove & lamun pulih, ikan, burung & fauna kembali — terukur lewat AI bioakustik. Data biodiversitas itu dapat menjadi <b>biodiversity credit</b> di masa depan, melampaui karbon.")}</p><span class="tag">${t("Biodiversity credit · next","Kredit biodiversitas · mendatang")}</span></div>
    </div>
  `
},

/* 4 — THE PROBLEM ---------------------------------------------------------- */

{
  title:{en:"The real problem",id:"Masalah nyata"},
  html:`
    <div class="kicker">${t("The field reality","Realita lapangan")}</div>
    <h2>${t("The science is clear. The","Sainsnya jelas. Yang")} <span class="ocean-text">${t("plumbing","tersumbat")}</span> ${t("is broken.","adalah salurannya.")}</h2>
    <div class="grid g3" style="margin-top:22px">
      <div class="card"><span class="ico">💧</span><h3>${t("Fragile funding","Pendanaan rapuh")}</h3><p>${t("Conservation stalls without sustainable finance. How do you get industry to fund the ocean — transparently and at scale?","Konservasi mandek tanpa pendanaan berkelanjutan. Bagaimana membuat industri mendanai laut — transparan dan dalam skala?")}</p></div>
      <div class="card"><span class="ico">🧩</span><h3>${t("Fragmented data","Data terfragmentasi")}</h3><p>${t("Satellite imagery, water-quality sensors, and manual agency reports rarely connect. Researchers and regulators stitch them by hand.","Citra satelit, sensor kualitas air, dan laporan manual instansi jarang terhubung. Peneliti dan regulator merangkainya manual.")}</p></div>
      <div class="card"><span class="ico">📑</span><h3>${t("Slow ESG &amp; carbon reports","Laporan ESG &amp; karbon lambat")}</h3><p>${t("ESG reports and carbon-project documentation take months of expert effort to draft by hand.","Laporan ESG &amp; dokumentasi carbon project butuh berbulan-bulan kerja ahli untuk disusun manual.")}</p></div>
    </div>
    <div class="band"><p>${t(
      "Three gaps — measurement, paperwork, and money — keep good intentions from becoming protected coastline. Jejakin closes each one with a deployed product.",
      "Tiga celah — pengukuran, dokumen, dan pendanaan — membuat niat baik tak menjadi pesisir yang terlindungi. Jejakin menutup ketiganya dengan produk yang sudah berjalan.")}</p></div>
  `
},

/* 5a — END-TO-END ANIMATED WORKFLOW --------------------------------------- */

{
  title:{en:"End-to-end, how it works",id:"End-to-end, cara kerjanya"},
  html:`
    <div class="kicker">${t("Before the product visuals · the whole loop","Sebelum visual produk · seluruh alurnya")}</div>
    <h2>${t("From a company's emissions to a","Dari emisi sebuah perusahaan ke")} <span class="leaf-text">${t("coastline brought back","pesisir yang dipulihkan")}</span> — ${t("one connected flow","satu alur terhubung")}</h2>
    <div class="flow">
      <div class="flow-rail">
        <div class="fnode" style="--i:0"><div class="role">${t("Step 1","Langkah 1")}</div><span class="ic">🏭</span><h4>${t("A company","Sebuah perusahaan")}</h4><p>${t("Its production generates Scope 1/2/3 emissions.","Produksinya menghasilkan emisi Scope 1/2/3.")}</p></div>
        <div class="farrow" style="--i:1"><span>${t("measure","ukur")}</span>→</div>
        <div class="fnode green" style="--i:2"><div class="role">Carbon IQ</div><span class="ic">🧠</span><h4>${t("Measure & report","Ukur & laporkan")}</h4><p>${t("Carbon accounting + ESG; AI analyses the data and drafts the report companies publish.","Carbon accounting + ESG; AI menganalisis data & menyusun laporan yang dipublikasikan perusahaan.")}</p></div>
        <div class="farrow" style="--i:3"><span>${t("reduce → join","kurangi → ikut")}</span>→</div>
        <div class="fnode" style="--i:4"><div class="role">Carbon Atlas</div><span class="ic">🌱</span><h4>${t("Execute & monitor","Eksekusi & pantau")}</h4><p>${t("The company funds an ESG / carbon project. Partner NGOs run it; paid care takers — local farmers — plant & nurture.","Perusahaan mendanai proyek ESG / karbon. NGO mitra menjalankan; care taker dibayar — petani lokal — menanam & merawat.")}</p></div>
        <div class="farrow" style="--i:5"><span>${t("verified","terverifikasi")}</span>→</div>
        <div class="fnode sand" style="--i:6"><div class="role">Carbon Space</div><span class="ic">🌊</span><h4>${t("Open it up","Buka untuk semua")}</h4><p>${t("Verified impact becomes a retail, traceable asset — B2B2C: Jejakin → client → client's users.","Dampak terverifikasi jadi aset ritel terlacak — B2B2C: Jejakin → klien → pengguna klien.")}</p></div>
        <div class="farrow" style="--i:7"><span>${t("drives","menggerakkan")}</span>→</div>
        <div class="fnode green" style="--i:8"><div class="role">${t("Outcome","Hasil")}</div><span class="ic">🐟</span><h4>${t("Blue-carbon economy","Ekonomi blue carbon")}</h4><p>${t("A market anyone can join — mangrove today, every blue-carbon ecosystem next.","Pasar yang bisa diikuti siapa pun — mangrove hari ini, setiap ekosistem blue carbon berikutnya.")}</p></div>
      </div>
      <div class="fbranch" style="--i:10">
        <div class="bcard"><span class="h">🌳 ${t("Plant-a-tree route","Jalur tanam pohon")}</span>${t("An app user estimates their footprint, then <b>contributes by planting trees</b> in a Jejakin-funded or company-tagged project — inside Gojek GoGreener &amp; Mandiri Livin' Planet.","Pengguna aplikasi mengestimasi jejak karbonnya, lalu <b>berkontribusi menanam pohon</b> di proyek yang didanai Jejakin atau di-tag perusahaan — di Gojek GoGreener &amp; Mandiri Livin' Planet.")}</div>
        <div class="bcard"><span class="h">🏛️ ${t("Registry &amp; exchange route","Jalur registri &amp; bursa")}</span>${t("The project registers on <b>SRN (Sistem Registri Nasional)</b> and lists on <b>IDX Carbon</b>. Via Carbon Space, end users buy <b>SPE-GRK</b> certificates <b>retail</b> — buying direct from the exchange would be B2B only.","Proyek terdaftar di <b>SRN (Sistem Registri Nasional)</b> &amp; tercatat di <b>IDX Carbon</b>. Lewat Carbon Space, pengguna membeli sertifikat <b>SPE-GRK</b> secara <b>ritel</b> — membeli langsung dari bursa hanya B2B.")}</div>
      </div>
      <div class="fnote" style="--i:11">
        <span class="soc">👫 ${t("Social impact: care takers earn a real wage — green jobs for coastal communities","Dampak sosial: care taker memperoleh upah nyata — lapangan kerja hijau bagi warga pesisir")}</span>
        <span>${t("Already proven on Jejakin's <b>mangrove</b> projects — and not limited to mangroves.","Sudah terbukti di proyek <b>mangrove</b> Jejakin — dan tak terbatas pada mangrove.")}</span>
      </div>
    </div>
  `
},

/* 5c — COMMUNITY / USER CONTRIBUTION --------------------------------------- */

{
  title:{en:"A community act",id:"Aksi bersama warga"},
  html:`
    <div class="kicker">${t("People at the centre","Manusia di pusatnya")}</div>
    <h2>${t("Restoration is a","Restorasi adalah")} <span class="leaf-text">${t("community act","aksi bersama warga")}</span> — ${t("everyone has a hand in it","setiap orang ikut ambil bagian")}</h2>
    <div class="grid" style="grid-template-columns:repeat(4,1fr);margin-top:18px">
      <div class="card"><span class="ico">👐</span><h3>${t("Local communities","Warga lokal")}</h3><p>${t("Coastal villagers plant and care for the trees as paid planters & caretakers — restoration becomes a green livelihood.","Warga pesisir menanam & merawat pohon sebagai planter & caretaker berbayar — restorasi jadi mata pencaharian hijau.")}</p><span class="tag">${t("Livelihoods","Mata pencaharian")}</span></div>
      <div class="card"><span class="ico">📱</span><h3>${t("Citizens as sensors","Warga sebagai sensor")}</h3><p>${t("Field photos, GPS and monitoring via the Jejakin field app feed the MRV — local hands, verifiable data.","Foto lapangan, GPS & monitoring lewat aplikasi lapangan Jejakin memberi data MRV — tangan lokal, data terverifikasi.")}</p><span class="tag blue">${t("Field data","Data lapangan")}</span></div>
      <div class="card"><span class="ico">🌳</span><h3>${t("Individuals & consumers","Individu & konsumen")}</h3><p>${t("Adopt or plant a tree, or offset at checkout inside everyday apps — \"Misi Tanam Pohon\" with Gojek, Blibli & Tiket.com.","Adopsi atau tanam pohon, atau tebus saat checkout di aplikasi sehari-hari — \"Misi Tanam Pohon\" bersama Gojek, Blibli & Tiket.com.")}</p><span class="tag">${t("Public action","Aksi publik")}</span></div>
      <div class="card"><span class="ico">🎓</span><h3>${t("Youth & academia","Pemuda & akademisi")}</h3><p>${t("Students and researchers (UBD, Ocean Youth Grant) become the next generation of coastal stewards.","Mahasiswa & peneliti (UBD, Ocean Youth Grant) menjadi generasi penjaga pesisir berikutnya.")}</p><span class="tag roadmap">${t("Next stewards","Penjaga berikutnya")}</span></div>
    </div>
    <div class="band"><p>${t(
      "Technology doesn't replace the community — it gives every planted seedling a name, a guardian, and a story that anyone, anywhere, can join and verify.",
      "Teknologi tidak menggantikan masyarakat — ia memberi setiap bibit sebuah nama, penjaga, dan cerita yang bisa diikuti & diverifikasi siapa pun, di mana pun.")}</p></div>
  `
},

/* 5d — REAL PROOF · WE PLANT MANGROVES ------------------------------------ */

{
  title:{en:"This is real",id:"Ini nyata"},
  html:`
    <div class="kicker">${t("Not a slide — the ground truth","Bukan sekadar slide — kondisi nyata")}</div>
    <h2>${t("Before the software, there's","Sebelum perangkat lunak, ada")} <span class="leaf-text">${t("mud on our boots","lumpur di sepatu kami")}</span></h2>
    <div class="proof">
      <div class="pimg hero"><img src="assets/mangrove/hero.jpg" alt="Hendri and Jejakin team planting mangroves"><div class="cap">${t("Hendri &amp; the Jejakin team carrying mangrove seedlings — a real planting day on the Indonesian coast.","Hendri &amp; tim Jejakin membawa bibit mangrove — hari penanaman nyata di pesisir Indonesia.")}</div></div>
      <div class="pimg"><img src="assets/mangrove/m4.jpg" alt="Planting mangrove by hand" style="object-position:left bottom"><div class="cap"><b>${t("By hand","Dengan tangan")}</b> — ${t("each seedling, GPS-tagged in the field app","tiap bibit, ber-GPS di aplikasi lapangan")}</div></div>
      <div class="pimg"><img src="assets/mangrove/m2.jpg" alt="Restored mangrove coastline"><div class="cap"><b>${t("The coastline","Pesisir")}</b> — ${t("a living wall, returning","benteng hidup, kembali pulih")}</div></div>
      <div class="pimg" style="grid-column:span 2"><img src="assets/mangrove/m5.jpg" alt="Community and Jejakin on site" style="object-position:center bottom"><div class="cap">${t("Coastal communities and Jejakin, side by side — restoration as a shared, paid, social act, not just an environmental one.","Warga pesisir &amp; Jejakin, berdampingan — restorasi sebagai aksi sosial bersama yang berbayar, bukan sekadar urusan lingkungan.")}</div></div>
    </div>
  `
},

/* 6 — CARBON ATLAS --------------------------------------------------------- */

{
  title:{en:"Carbon Atlas",id:"Carbon Atlas"},
  html:`
    <div class="kicker">${t("Pillar 1 · The digital eyes","Pilar 1 · Mata digital")}</div>
    <img src="assets/product-logos/logo-CarbonAtlas_jejakin.svg" class="plogo" alt="Carbon Atlas" style="margin-bottom:10px;height:46px">
    <h2>${t("Monitoring & verification for the coast","Pemantauan & verifikasi untuk pesisir")}</h2>
    <div class="split" style="margin-top:6px">
      <ul class="bul">
        <li><b>${t("See it from space & the ground","Lihat dari langit & lapangan")}</b><span class="sub">${t("Satellite, drone and on-the-ground monitoring track mangrove growth, carbon, and coastline change over time.","Pemantauan satelit, drone & lapangan melacak pertumbuhan mangrove, karbon & perubahan garis pantai dari waktu ke waktu.")}</span></li>
        <li><b>${t("AI that sees and hears","AI yang melihat & mendengar")}</b><span class="sub">${t("AI verifies what's planted and even recognises returning wildlife — proof the ecosystem is genuinely recovering.","AI memverifikasi yang ditanam & bahkan mengenali satwa yang kembali — bukti ekosistem benar-benar pulih.")}</span></li>
        <li><b>${t("Integrity & people","Integritas & manusia")}</b><span class="sub">${t("Independent checks flag anomalies; local communities — the care takers — are paid to plant and monitor.","Pengecekan independen menandai anomali; warga lokal — para care taker — dibayar untuk menanam & memantau.")}</span></li>
      </ul>
      <div>
        <div class="prodshot"><img src="assets/jejakin-web/atlas-hero.avif" alt="Carbon Atlas dashboard — projects, carbon stock, biodiversity & map of Indonesia"></div>
        <div class="webcap">${t("Live Carbon Atlas dashboard — projects, carbon stock, biodiversity & map","Dashboard Carbon Atlas — proyek, stok karbon, biodiversitas & peta")} · <span class="src">jejakin.com</span></div>
      </div>
    </div>
  `
},

/* 6v4 — FIELD GPS ACCURACY (client trust) --------------------------------- */

{
  title:{en:"Accuracy you can trust",id:"Akurasi yang bisa dipercaya"},
  html:`
    <div class="kicker">${t("Carbon Atlas · field accuracy & standards","Carbon Atlas · akurasi lapangan & standar")}</div>
    <h2>${t("Trust starts with","Kepercayaan dimulai dari")} <span class="leaf-text">${t("accurate GPS","GPS yang akurat")}</span></h2>
    <p class="lead" style="margin:-2px 0 6px;max-width:84ch">${t(
      "Our engineering &amp; QA team field-test the app's GPS so every geotag meets survey-grade tolerance to standard — because a carbon claim is only as credible as the coordinate behind it. This is what makes the data <b>client-grade</b>.",
      "Tim engineering &amp; QA kami menguji GPS aplikasi di lapangan agar tiap geotag memenuhi toleransi survey-grade sesuai standar — karena klaim karbon hanya sekredibel koordinat di baliknya. Inilah yang membuat datanya <b>layak untuk klien</b>.")}</p>
    <div class="proof">
      <div class="pimg hero"><img src="assets/gps/qa-set.jpg" alt="QA engineer calibrating GPS"><div class="cap">${t("Our QA engineer calibrating GPS accuracy on a live mangrove site.","QA engineer kami mengkalibrasi akurasi GPS di lokasi mangrove langsung.")}</div></div>
      <div class="pimg"><img src="assets/gps/m1.jpg" alt="Geotag with coordinate and accuracy"><div class="cap"><b>${t("Stamped","Tercap")}</b> — ${t("coordinates + accuracy (±m) on every point","koordinat + akurasi (±m) tiap titik")}</div></div>
      <div class="pimg"><img src="assets/gps/m2.jpg" alt="Accuracy checked to standard"><div class="cap"><b>${t("To standard","Sesuai standar")}</b> — ${t("checked against survey-grade tolerance","diuji ke toleransi survey-grade")}</div></div>
      <div class="pimg" style="grid-column:span 2"><img src="assets/gps/team.jpg" alt="Jejakin engineering and product team field testing"><div class="cap">${t("Engineering + product team field-testing together — accuracy is a team discipline, not an afterthought.","Tim engineering + product menguji bersama di lapangan — akurasi adalah disiplin tim, bukan pelengkap.")}</div></div>
    </div>
  `
},

/* 8 — CARBON IQ ------------------------------------------------------------ */

{
  title:{en:"Carbon IQ",id:"Carbon IQ"},
  html:`
    <div class="kicker">${t("Pillar 2 · The data & policy brain","Pilar 2 · Otak data & kebijakan")}</div>
    <img src="assets/product-logos/logo-CarbonIQ_jejakin.svg" class="plogo" alt="Carbon IQ" style="margin-bottom:10px;height:46px">
    <h2>${t("Emissions accounting + AI compliance","Penghitungan emisi + AI kepatuhan")}</h2>
    <div class="band" style="margin-top:6px;border-left-color:var(--sand)"><p>${t(
      "<b>Policy is the tailwind.</b> In Indonesia, <b>OJK requires the finance & banking industry to measure emissions and publish ESG reports</b> (POJK 51). Carbon IQ is built for exactly that mandate — turning a regulatory obligation into a one-click report.",
      "<b>Kebijakan adalah pendorongnya.</b> Di Indonesia, <b>OJK mewajibkan industri keuangan & perbankan mengukur emisi dan menerbitkan laporan ESG</b> (POJK 51). Carbon IQ dibangun tepat untuk mandat itu — mengubah kewajiban regulasi menjadi laporan satu-klik.")}</p></div>
    <div class="split" style="margin-top:10px">
      <ul class="bul">
        <li><b>${t("Measure Scope 1 / 2 / 3","Ukur Scope 1 / 2 / 3")}</b><span class="sub">${t("Turn your operations data into an audited carbon footprint.","Ubah data operasional Anda menjadi jejak karbon teraudit.")}</span></li>
        <li><b>${t("AI-drafted ESG reports","Laporan ESG oleh AI")}</b><span class="sub">${t("AI drafts your ESG &amp; carbon-project reports in about a minute — to the standards investors expect.","AI menyusun laporan ESG &amp; carbon project Anda dalam ~1 menit — sesuai standar yang diharapkan investor.")}</span></li>
        <li><b>${t("A compliance assistant","Asisten kepatuhan")}</b><span class="sub">${t("Ask a regulation question and get a clear, cited answer — and see where to cut emissions.","Tanya soal regulasi & dapat jawaban jelas bersitasi — sekaligus lihat di mana memangkas emisi.")}</span></li>
      </ul>
      <div>
        <div class="prodshot"><img src="assets/jejakin-web/iq-hero.avif" alt="Carbon IQ dashboard — company emissions by Scope 1/2/3, with monthly tracking"></div>
        <div class="webcap">${t("Live Carbon IQ dashboard — company emissions, Scope 1 / 2 / 3","Dashboard Carbon IQ — emisi perusahaan, Scope 1 / 2 / 3")} · <span class="src">jejakin.com</span></div>
      </div>
    </div>
  `
},

/* 9b — STANDARDS & COMPLIANCE ---------------------------------------------- */

{
  title:{en:"Standards & compliance",id:"Standar & kepatuhan"},
  html:`
    <div class="kicker">${t("Built-in, not bolted-on","Tertanam, bukan tempelan")}</div>
    <h2>${t("The platform speaks the language of","Platform berbicara bahasa")} <span class="ocean-text">${t("regulators","regulator")}</span></h2>
    <div class="std">
      <div class="box"><h4>📐 ${t("Carbon accounting","Penghitungan karbon")}</h4><p class="boxnote">${t("How emissions are counted — to the global rulebooks everyone trusts.","Cara emisi dihitung — sesuai standar global yang dipercaya semua pihak.")}</p><ul><li><b>GHG Protocol</b></li><li>ISO 14064</li><li>IPCC</li><li>US EPA</li><li>DEFRA</li></ul></div>
      <div class="box"><h4>🌍 ${t("ESG & disclosure","ESG & pelaporan")}</h4><p class="boxnote">${t("The report formats regulators & investors ask for (incl. Indonesia's OJK).","Format laporan yang diminta regulator & investor (termasuk OJK Indonesia).")}</p><ul><li><b>GRI</b></li><li>TCFD</li><li>CDP</li><li>SASB</li><li>UN SDGs</li><li><b>POJK 51</b></li></ul></div>
      <div class="box"><h4>🏷️ ${t("Registries & credits","Registri & kredit")}</h4><p class="boxnote">${t("So a credit officially counts — national & international registries.","Agar kredit diakui resmi — registri nasional & internasional.")}</p><ul><li><b>SRN / SPE-GRK</b></li><li><b>Verra</b></li><li>Gold Standard</li><li>${t("retirement certs","sertifikat retirement")}</li></ul></div>
      <div class="box"><h4>🔒 ${t("Data & sovereignty","Data & kedaulatan")}</h4><p class="boxnote">${t("Your sensitive data stays in-house — run on your own servers.","Data sensitif tetap di internal — jalan di server Anda sendiri.")}</p><ul><li>${t("on-prem deploy","deploy on-prem")}</li><li>ISO 27001</li><li>${t("encrypted PII","PII terenkripsi")}</li></ul></div>
    </div>
    <div class="band"><p>${t(
      "For a regulator this means standards are built in: it speaks GHG Protocol and your national registry out of the box, and the compliance AI is grounded in 600+ indexed GRI & SASB documents — answers come with citations.",
      "Bagi regulator, standar sudah tertanam: berbicara GHG Protocol & registri nasional Anda sejak awal, dan AI kepatuhan berbasis 600+ dokumen GRI & SASB terindeks — jawaban disertai sitasi.")}</p></div>
  `
},

/* 10 — CARBON SPACE -------------------------------------------------------- */

{
  title:{en:"Carbon Space",id:"Carbon Space"},
  html:`
    <div class="kicker">${t("Pillar 3 · The blue economy","Pilar 3 · Ekonomi biru")}</div>
    <img src="assets/product-logos/logo-CarbonSpace_jejakin.svg" class="plogo" alt="Carbon Space" style="margin-bottom:10px;height:46px">
    <h3 style="color:var(--ink-dim);margin-bottom:14px">${t("Jejakin's flagship — finance that keeps the planting going","Produk flagship Jejakin — pendanaan agar penanaman terus jalan")}</h3>
    <div class="split">
      <ul class="bul">
        <li class="ico-li"><span class="bico">🛒</span><b>${t("Carbon-credit marketplace (B2B2C)","Marketplace kredit karbon (B2B2C)")}</b><span class="sub">${t("Corporate offsetting: connects buyers directly to real mangrove-planting and conservation programmes.","Corporate offsetting: menghubungkan pembeli langsung ke program penanaman mangrove & konservasi nyata.")}</span></li>
        <li class="ico-li"><span class="bico">🔌</span><b>${t("Embeddable carbon calculator (API)","Kalkulator karbon tersemat (API)")}</b><span class="sub">${t("Drop the API into a travel or logistics app; it computes voyage emissions automatically. Checkout via Midtrans / Stripe.","Tanam API-nya di aplikasi travel atau logistik; emisi perjalanan terhitung otomatis. Checkout via Midtrans / Stripe.")}</span></li>
        <li class="ico-li"><span class="bico">⛓️</span><b>${t("Registry-grade carbon credits","Kredit karbon kelas registri")}</b><span class="sub">${t("Issue → transfer → retire, with retirement certificates to Verra, Gold Standard & SRN (national) — audit-ready, anti-double-counting.","Issue → transfer → retire, dengan sertifikat retirement ke Verra, Gold Standard & SRN (registri nasional) — siap audit, anti double-counting.")}</span></li>
        <li class="ico-li"><span class="bico">🌳</span><b>${t("Tree-to-certificate traceability","Keterlacakan pohon-ke-sertifikat")}</b><span class="sub">${t("Every funded tree is inventoried and traceable back to its satellite-monitored plot in Atlas.","Setiap pohon yang didanai terinventaris & terlacak ke plot yang dipantau satelit di Atlas.")}</span></li>
      </ul>
      <div>
        <div class="prodshot"><img src="assets/jejakin-web/space-stepper.avif" alt="Carbon Space 'Spacebuilder' — the embeddable carbon-offset widget partners drop into their own apps"></div>
        <div class="webcap">${t("Carbon Space 'Spacebuilder' — the embeddable offset widget for partner apps","Carbon Space 'Spacebuilder' — widget offset tersemat untuk aplikasi mitra")} · <span class="src">jejakin.com</span></div>
      </div>
    </div>
  `
},

/* 10b — CARBON SPACE IN PRODUCTION (jejakin.com screens) ------------------- */

{
  title:{en:"Carbon Space in production",id:"Carbon Space di production"},
  html:`
    <div class="kicker">${t("Carbon Space · already in production","Carbon Space · sudah berjalan")}</div>
    <h2>${t("From measurement to","Dari pengukuran ke")} <span style="color:var(--sand)">${t("real contribution","kontribusi nyata")}</span></h2>
    <p class="lead" style="margin:2px 0 6px;max-width:84ch">${t(
      "Carbon Space isn't a Jejakin app users download — it's <b>embedded inside partner consumer apps</b>. (Different from <b>PIJAK</b>, which is Jejakin's <i>own</i> field app for care takers, shown earlier.) Two live examples, two real end-user reports:",
      "Carbon Space bukan aplikasi Jejakin yang diunduh user — ia <b>tertanam di dalam aplikasi konsumen mitra</b>. (Berbeda dari <b>PIJAK</b>, aplikasi lapangan <i>milik</i> Jejakin untuk care taker, di slide sebelumnya.) Dua contoh live, dua report end-user nyata:")}</p>
    <div class="apps-legend">
      <span class="app jj">📲 <b>PIJAK</b> · ${t("Jejakin's field app (care takers)","app lapangan Jejakin (care taker)")}</span>
      <span class="app pt">🏦 <b>Mandiri Livin'</b> · ${t("bank app","aplikasi bank")}</span>
      <span class="app pt">🛵 <b>Gojek GoGreener</b> · ${t("online-transport app","aplikasi transportasi online")}</span>
    </div>
    <div class="phones" style="margin-top:6px">
      <div class="phone"><span class="ptag livin">Mandiri Livin'</span><img src="assets/carbon-space-demo/livin-spegrk.jpg" alt="Livin' SPE-GRK certificate purchase"><div class="cap"><b>${t("Report 1 · buy SPE-GRK","Report 1 · beli SPE-GRK")}</b> — ${t("Estimate footprint → buy a <b>verified reverse SPE-GRK</b> certificate, retail.","Estimasi jejak → beli sertifikat <b>verified reverse SPE-GRK</b>, ritel.")}</div></div>
      <div class="phone"><span class="ptag livin">Mandiri Livin'</span><img src="assets/carbon-space-demo/livin-mandatory2.jpg" alt="Livin' mandatory SPE-GRK report"><div class="cap"><b>${t("Your certificates","Sertifikat Anda")}</b> — ${t("<b>verified SPE-GRK</b> &amp; IDX Carbon holdings — Indonesia's official carbon credit.","<b>SPE-GRK terverifikasi</b> &amp; kepemilikan IDX Carbon — carbon credit resmi Indonesia.")}</div></div>
      <div class="phone"><span class="ptag livin">Mandiri Livin'</span><img src="assets/carbon-space-demo/livin-area.jpg" alt="Livin' satellite-monitored plot"><div class="cap"><b>${t("Satellite-backed","Didukung satelit")}</b> — ${t("the certificate is tied to a real monitored plot: area, tCO₂, species.","sertifikat terikat ke plot termonitor nyata: area, tCO₂, spesies.")}</div></div>    </div>
  `
},

/* 10c — CARBON SPACE · MORE SCREENSHOTS (Livin' + GoGreener) --------------- */

{
  title:{en:"Inside the apps",id:"Di dalam aplikasi"},
  html:`
    <div class="kicker">${t("Carbon Space · embedded in everyday apps","Carbon Space · tertanam di aplikasi sehari-hari")}</div>
    <h2>${t("More from","Lebih banyak dari")} <span class="ptag livin" style="position:static;font-size:.7em;vertical-align:middle">Mandiri Livin'</span> ${t("and","dan")} <span class="ptag gojek" style="position:static;font-size:.7em;vertical-align:middle">Gojek GoGreener</span></h2>
    <p class="lead" style="margin:0 0 2px">${t("Tap any screen to enlarge.","Ketuk layar mana pun untuk memperbesar.")}</p>
    <div class="phones">
      <div class="phone"><span class="ptag gojek">GoGreener</span><img src="assets/carbon-space-demo/gg-trip.jpg" alt="GoGreener contribute at ride booking"><div class="cap">${t("Contribute a tree right at <b>ride checkout</b> (Pohon Kolektif GoGreener).","Kontribusi pohon langsung saat <b>checkout perjalanan</b> (Pohon Kolektif GoGreener).")}</div></div>
      <div class="phone"><span class="ptag gojek">Gojek GoGreener</span><img src="assets/carbon-space-demo/gg-program.jpg" alt="GoGreener tree-planting report"><div class="cap"><b>${t("Report 2 · tree planting","Report 2 · tanam pohon")}</b> — ${t("an end user <b>contributes tree planting</b>; program, SDG impact & monitoring reported back.","end user <b>berkontribusi menanam pohon</b>; program, dampak SDG & monitoring dilaporkan.")}</div></div>
      <div class="phone"><span class="ptag gojek">GoGreener</span><img src="assets/carbon-space-demo/gg-map.jpg" alt="GoGreener monitored trees on map"><div class="cap">${t("Every planted tree <b>geotagged & monitored</b> on satellite.","Tiap pohon tertanam <b>ber-geotag & dipantau</b> via satelit.")}</div></div>
    </div>
  `
},

/* 11 — SPACE FOR THE OCEAN (Brunei blue carbon market) --------------------- */

{
  title:{en:"Carbon project → market",id:"Carbon project → pasar"},
  html:`
    <div class="kicker">${t("Carbon Space · the regulated path to market","Carbon Space · alur regulasi ke pasar")}</div>
    <h2>${t("How a carbon project","Bagaimana carbon project")} <span style="color:var(--sand)">${t("reaches the market","sampai ke pasar")}</span></h2>
    <div class="band" style="margin-top:6px"><p>${t(
      "For any blue-carbon programme, the recurring concern is <b>transparency & credible measurement</b>. Here is the full lifecycle a carbon project follows to reach the market — shown end-to-end with the registry (<b>SRN</b>) and exchange (<b>IDX Carbon</b>) that Jejakin works with in Indonesia today. Each jurisdiction uses its own registry &amp; exchange; the platform, the standards, and the steps stay the same.",
      "Untuk program blue carbon mana pun, kekhawatiran utamanya <b>transparansi & pengukuran kredibel</b>. Berikut daur hidup lengkap sebuah carbon project hingga sampai ke pasar — ditampilkan end-to-end dengan registry (<b>SRN</b>) &amp; bursa (<b>IDX Carbon</b>) yang Jejakin gunakan di Indonesia saat ini. Tiap yurisdiksi memakai registry &amp; bursa-nya sendiri; platform, standar, dan langkahnya tetap sama.")}</p></div>
    <div class="lc-label">🔄 ${t("The carbon-project lifecycle · live in Indonesia today","Daur hidup carbon project · berjalan di Indonesia saat ini")}</div>
    <div class="flow lc lc2" style="margin-top:6px">
      <div class="flow-rail">
        <div class="fnode" style="--i:0"><div class="role">1 · ${t("Feasibility","Kelayakan")}</div><span class="ic">🔍</span><h4>${t("Feasibility","Kelayakan")}</h4><p>${t("Check viability to <b>Verra &amp; Gold Standard</b> first.","Cek kelayakan ke <b>Verra &amp; Gold Standard</b> dulu.")}</p></div>
        <div class="farrow" style="--i:1">→</div>
        <div class="fnode green" style="--i:2"><div class="role">2 · ${t("Implement","Implementasi")}</div><span class="ic">🌱</span><h4>${t("Plant","Tanam")}</h4><p>${t("If feasible, plant &amp; run the project on the ground.","Jika layak, tanam &amp; jalankan proyek di lapangan.")}</p></div>
        <div class="farrow" style="--i:3">→</div>
        <div class="fnode" style="--i:4"><div class="role">3 · ${t("Monitor","Monitor")}</div><span class="ic">🔁</span><h4>${t("Monitor 3×","Monitor 3×")}</h4><p>${t("Field + satellite monitoring, ~3 cycles.","Monitoring lapangan + satelit, ~3 siklus.")}</p></div>
        <div class="farrow" style="--i:5">→</div>
        <div class="fnode green" style="--i:6"><div class="role">4 · ${t("Verify","Verifikasi")}</div><span class="ic">✅</span><h4>MRV</h4><p>${t("Measurement, Reporting &amp; Verification — independently validated.","Measurement, Reporting &amp; Verification — divalidasi independen.")}</p></div>
      </div>
      <div class="turn" style="--i:7">↓</div>
      <div class="flow-rail rev">
        <div class="fnode" style="--i:8"><div class="role">5 · ${t("Register","Daftar")}</div><span class="ic">🏛️</span><h4>SRN</h4><p>${t("Register on <b>Sistem Registri Nasional</b> (Indonesia).","Daftar di <b>Sistem Registri Nasional</b> (Indonesia).")}</p></div>
        <div class="farrow" style="--i:9">←</div>
        <div class="fnode" style="--i:10"><div class="role">6 · ${t("List","Catatkan")}</div><span class="ic">📈</span><h4>IDX Carbon</h4><p>${t("Listed &amp; sold openly — <b>B2B</b>.","Tercatat &amp; dijual terbuka — <b>B2B</b>.")}</p></div>
        <div class="farrow" style="--i:11">←</div>
        <div class="fnode sand" style="--i:12"><div class="role">7 · ${t("Retail","Ritel")}</div><span class="ic">🌊</span><h4>Jejakin · Carbon Space</h4><p>${t("Retails IDX Carbon <b>B2B2C</b> — end users buy &amp; contribute (e.g. Mandiri Livin').","Meritelkan IDX Carbon <b>B2B2C</b> — end user beli &amp; kontribusi (mis. Mandiri Livin').")}</p></div>
      </div>
      <div class="fnote" style="--i:14">
        <span class="soc">📄 ${t("SRN registration needs: DRAM (design) · independent validation · LCAM (achievement report) · verification","Registrasi SRN butuh: DRAM (rancangan) · validasi independen · LCAM (laporan capaian) · verifikasi")}</span>
        <span>${t("Direct IDX Carbon = B2B; <b>Jejakin makes it retail (B2B2C)</b> so anyone can take part.","Langsung IDX Carbon = B2B; <b>Jejakin membuatnya ritel (B2B2C)</b> agar siapa pun bisa ikut.")}</span>
      </div>
    </div>
  `
},

/* 11b — THE SOCIAL DIVIDEND (high-integrity & biodiversity credits) ------- */

{
  title:{en:"More than carbon",id:"Lebih dari karbon"},
  html:`
    <div class="kicker">${t("The message worth remembering","Pesan yang layak diingat")}</div>
    <h2>${t("High-integrity credits price in","Kredit berintegritas tinggi menghargai")} <span class="leaf-text">${t("people","manusia")}</span>${t(", not just carbon",", bukan hanya karbon")}</h2>
    <p class="lead" style="margin:2px 0 4px;max-width:80ch">${t(
      "Modern carbon — and the emerging <b>biodiversity credit</b> — are graded on their <b>socio-economic co-benefits</b>. Restoration's social dividend is now a market requirement, not a nice-to-have.",
      "Karbon modern — dan <b>biodiversity credit</b> yang sedang tumbuh — dinilai dari <b>socio-economic co-benefits</b>-nya. Dividen sosial dari restorasi kini syarat pasar, bukan sekadar pelengkap.")}</p>
    <div class="grid g2" style="margin-top:12px">
      <div class="card"><span class="ico">💼</span><h3>${t("Green jobs → resilience","Pekerjaan hijau → ketahanan")}</h3><p>${t("Care takers, nurseries & ecotourism create stable income — diversifying local economies against climate & market shocks.","Care taker, pembibitan & ekowisata menciptakan pendapatan stabil — mendiversifikasi ekonomi lokal dari guncangan iklim & pasar.")}</p><span class="tag">${t("Economic co-benefit","Co-benefit ekonomi")}</span></div>
      <div class="card"><span class="ico">🎓</span><h3>${t("Income → education","Pendapatan → pendidikan")}</h3><p>${t("Higher family income keeps kids in school; revenue-sharing from credit sales funds schools and scholarships.","Pendapatan keluarga naik menahan anak putus sekolah; bagi-hasil penjualan kredit mendanai sekolah & beasiswa.")}</p><span class="tag blue">${t("Education co-benefit","Co-benefit pendidikan")}</span></div>
      <div class="card"><span class="ico">⚖️</span><h3>${t("Governance & equity","Tata kelola & kesetaraan")}</h3><p>${t("Clearer land tenure and stronger community governance reduce conflict; gender equality is measured in decisions & income.","Hak atas tanah lebih jelas & tata kelola desa menguat menekan konflik; kesetaraan gender diukur di keputusan & pendapatan.")}</p><span class="tag roadmap">${t("Social co-benefit","Co-benefit sosial")}</span></div>
      <div class="card"><span class="ico">🩺</span><h3>${t("Health, food & culture","Kesehatan, pangan & budaya")}</h3><p>${t("Clean water & air, pollinators that lift yields & food security, and recognition of sacred landscapes and traditional knowledge.","Air & udara bersih, penyerbuk yang menaikkan panen & ketahanan pangan, serta pengakuan lanskap sakral & pengetahuan tradisional.")}</p><span class="tag">${t("Well-being co-benefit","Co-benefit kesejahteraan")}</span></div>
    </div>
    <div class="band" style="margin-top:12px"><p>${t(
      "Graded by global standards — <b>WEF</b> biodiversity-credit principles (equity &amp; fairness for people), <b>Verra CCB</b> + <b>FPIC</b>, the <b>Kunming-Montreal</b> Target 19, and the <b>Biodiversity Credit Alliance</b> (UNEP-WCMC/UNDP). Jejakin's bioacoustic &amp; biodiversity data make the biodiversity credit measurable — and paid care-taker wages make the social dividend auditable.",
      "Dinilai standar global — prinsip biodiversity-credit <b>WEF</b> (keadilan &amp; kesetaraan bagi manusia), <b>Verra CCB</b> + <b>FPIC</b>, Target 19 <b>Kunming-Montreal</b>, &amp; <b>Biodiversity Credit Alliance</b> (UNEP-WCMC/UNDP). Data bioakustik &amp; biodiversitas Jejakin membuat biodiversity credit terukur — &amp; upah care taker membuat dividen sosial dapat diaudit.")}</p></div>
  `
},

/* 15b — THE TAKEAWAY (benefits, mapped to blue carbon) -------------------- */

{
  title:{en:"The takeaway",id:"Intinya"},
  html:`
    <div class="kicker">${t("Why it matters for Brunei's blue carbon","Kenapa penting untuk blue carbon Brunei")}</div>
    <h2>${t("One integrated platform —","Satu platform terintegrasi —")} <span class="leaf-text">${t("measure, restore, finance","ukur, pulihkan, danai")}</span></h2>
    <div class="grid g2">
      <div class="card"><span class="ico">🔍</span><h3>${t("Credible by design","Kredibel by design")}</h3><p>${t("Carbon IQ measures, Carbon Atlas verifies with satellite + field MRV + a tamper-evident ledger — audit-ready blue carbon, not estimates.","Carbon IQ mengukur, Carbon Atlas memverifikasi dengan satelit + MRV lapangan + ledger anti-utak-atik — blue carbon siap audit, bukan perkiraan.")}</p><span class="tag blue">${t("Transparency","Transparansi")}</span></div>
      <div class="card"><span class="ico">🔗</span><h3>${t("Integrated, end-to-end","Terintegrasi, end-to-end")}</h3><p>${t("Measure → implement &amp; monitor → register (SRN) → list (IDX Carbon) → retail (Carbon Space). One flow, integrable into your own systems &amp; apps.","Ukur → implementasi &amp; monitor → daftar (SRN) → catatkan (IDX Carbon) → ritel (Carbon Space). Satu alur, bisa diintegrasikan ke sistem &amp; aplikasi Anda.")}</p><span class="tag">${t("Integration","Integrasi")}</span></div>
      <div class="card"><span class="ico">💼</span><h3>${t("Real economic benefit","Manfaat ekonomi nyata")}</h3><p>${t("Paid care takers, retail access (B2B2C), and registry-grade credits — the socio-economic co-benefits high-integrity markets now require.","Care taker dibayar, akses ritel (B2B2C), &amp; kredit kelas registri — socio-economic co-benefit yang kini disyaratkan pasar berintegritas tinggi.")}</p><span class="tag roadmap">${t("Benefit","Manfaat")}</span></div>
      <div class="card"><span class="ico">🌊</span><h3>${t("Proven, and ocean-ready","Terbukti, &amp; siap laut")}</h3><p>${t("Live today on mangroves in Indonesia; the same architecture maps to seagrass &amp; the open sea — adopt on-prem and link to your own registry/exchange.","Live hari ini di mangrove Indonesia; arsitektur yang sama memetakan ke lamun &amp; laut lepas — adopsi on-prem &amp; hubungkan ke registry/bursa Anda.")}</p><span class="tag blue">${t("Blue carbon &amp; beyond","Blue carbon &amp; seterusnya")}</span></div>
    </div>
  `
},

/* 15 — COLLABORATE --------------------------------------------------------- */

{
  title:{en:"Let's collaborate",id:"Mari berkolaborasi"},
  html:`
    <div class="kicker">${t("An invitation to Brunei · the hexa-helix","Undangan untuk Brunei · hexa-helix")}</div>
    <h2>${t("It takes","Butuh")} <span class="leaf-text">${t("all six of us","kita berenam")}</span> — ${t("a hexa-helix","sebuah hexa-helix")}</h2>
    <div class="hexa">
      <svg class="hex-lines" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,6 88,24 88,56 50,74 12,56 12,24"></polygon>
        <line x1="50" y1="40" x2="50" y2="6"></line><line x1="50" y1="40" x2="88" y2="24"></line>
        <line x1="50" y1="40" x2="88" y2="56"></line><line x1="50" y1="40" x2="50" y2="74"></line>
        <line x1="50" y1="40" x2="12" y2="56"></line><line x1="50" y1="40" x2="12" y2="24"></line>
      </svg>
      <div class="hex-core"><span class="e">🌊</span><b>${t("Blue carbon &amp; biodiversity","Blue carbon &amp; biodiversitas")}</b></div>
      <div class="hex-node n1"><span class="ic">🏛️</span><h4>${t("Government","Pemerintah")}</h4><p>${t("Standards & registry; on-prem MRV","Standar & registri; MRV on-prem")}</p></div>
      <div class="hex-node n2"><span class="ic">🎓</span><h4>${t("Academia · UBD","Akademisi · UBD")}</h4><p>${t("Science & sensors","Sains & sensor")}</p></div>
      <div class="hex-node n3"><span class="ic">🏭</span><h4>${t("Industry","Industri")}</h4><p>${t("Funding & demand","Pendanaan & permintaan")}</p></div>
      <div class="hex-node n4"><span class="ic">👫</span><h4>${t("Community","Komunitas")}</h4><p>${t("Hands & livelihoods","Tangan & penghidupan")}</p></div>
      <div class="hex-node n5"><span class="ic">📣</span><h4>${t("Media","Media")}</h4><p>${t("Trust & reach","Kepercayaan & jangkauan")}</p></div>
      <div class="hex-node n6"><span class="ic">💻</span><h4>${t("Technology · Jejakin","Teknologi · Jejakin")}</h4><p>${t("The connecting rail","Rel penghubung")}</p></div>
    </div>
    <div class="band"><p>${t(
      "This is where we synergize to build the solution together — much like <b>PONI</b>, connecting partners across the region. With that synergy, biodiversity recovers faster and more effectively — so that <b>turtles and dugong can return to Brunei's waters</b>.",
      "Di sinilah kita bersinergi membangun solusi bersama — seperti <b>PONI</b>, yang menghubungkan para mitra di kawasan. Dengan sinergi itu, biodiversitas pulih lebih cepat &amp; efektif — agar <b>penyu dan dugong dapat kembali ke perairan Brunei</b>.")}</p></div>
  `
},

/* 16 — THANK YOU ----------------------------------------------------------- */

{
  title:{en:"Thank you",id:"Terima kasih"},
  cls:"s-close",
  html:`
    <img src="assets/logo-jejakin.png" class="logo-big" alt="Jejakin">
    <h1 class="grad-text">${t("Terima kasih · Thank you","Terima kasih · Thank you")}</h1>
    <p class="lead" style="margin:14px auto 0;text-align:center">${t(
      "Mangroves are the gateway. Data and AI are the key. Let's open the door to smarter, blue-carbon seas — together.",
      "Mangrove adalah gerbangnya. Data & AI adalah kuncinya. Mari buka pintu menuju laut yang lebih cerdas & kaya blue carbon — bersama.")}</p>
    <div class="contact">
      <span>Hendri Karisma · VP of Engineering</span>
      <a href="mailto:hendri.karisma@jejakin.com">hendri.karisma@jejakin.com</a>
      <a href="https://jejakin.com">jejakin.com</a>
      <a href="https://github.com/situkangsayur">github.com/situkangsayur</a>
    </div>
  `
}
];
