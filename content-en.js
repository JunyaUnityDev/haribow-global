/* ============================================================
   "Go Beyond" — shared content, ENGLISH edition (global.haribow.com)
   構造は go-beyond の content.js と同一API（HARIBOW.render）。
   ★翻訳元の正典は go-beyond の content.js。JP側で演目・実績・日程を
     変えたら、このファイルも必ず追従させること（二重管理の自覚を持つ）。
   画像は go-beyond のアセットを絶対URL参照（複製しない）。
   ============================================================ */
(function () {

  var SHOW = {
    dateShort: "2026.9.29", dow: "(Tue)",
    dateLong: "September 29, 2026 (Tue)",
    open: "6:30 PM (TBC)", start: "7:30 PM JST",
    venue: "Meguro Persimmon Hall", hall: "Main Hall, Tokyo",
    showType: "Multi-act showcase", showSub: "10 acts + collaboration, with intermission",
    datetime: "2026-09-29T19:30:00+09:00"
  };

  /* 英語ページの購入導線は配信チケット（決定No.25：二重価格を同一画面に並べない） */
  var PURCHASE_URL = "tickets.html";
  var A = "https://go-beyond.haribow.com/assets/lineup/";

  var LINEUP = [
    { tags: [{ t: "WORLD CHAMPIONS", c: "gold" }], title: "YOUNG BLOOD", img: A + "young-blood.jpg",
      desc: "Champions of DOUBLE DUTCH CONTEST WORLD 2026. The next generation, performing from the top of the world." },
    { tags: [{ t: "WORLD CHAMPIONS", c: "gold" }], title: "2025 IJRU World Championship — Winning Performance", img: A + "ijru-2025.jpg",
      desc: "The routine that beat teams from 30+ countries and took the world title." },
    { tags: [{ t: "ONE-NIGHT COLLABORATION", c: "red" }], title: "Special Guest Collaboration", img: null,
      desc: 'A one-night-only collaboration with a special guest. <span style="color:var(--teal)">To be announced.</span>' },
    { tags: [{ t: "REVIVAL" }, { t: "ALL-NEW" }], title: "Roar", img: A + "roar.jpg",
      desc: "3rd in the world at the National Double Dutch League 2021, held at the Apollo Theater, New York. The legendary team “Roar” returns — with an entirely new performance." },
    { tags: [{ t: "AUDITION PIECE" }], title: "Cirque du Soleil Audition Performance", img: A + "cirque-du-soleil.jpg", bg: "bg-cirque",
      desc: "The piece performed at the audition for Cirque du Soleil — ultimate speed, and a new language of double dutch." },
    { tags: [{ t: "THE ORIGIN" }], title: "DOUBLE DUTCH CONTEST JAPAN 2023", img: A + "ddc-japan-2023.jpg", bg: "bg-ddc",
      desc: "Japan’s biggest double dutch contest — the origin, where HARIBOW’s first generation announced itself to the scene." }
  ];

  var LINEUP_HL = '2025 IJRU World Champions (HARIBOW) and DOUBLE DUTCH CONTEST WORLD 2026 champions (YOUNG BLOOD) — <b>two world-champion performances, on one stage.</b>';

  var STATS = [
    { t: "World No.1", lb: "2025 IJRU<br>World Championship" },
    { t: "First ever", lb: "Audience Golden Buzzer<br>Britain’s Got Talent" },
    { n: 4, lb: "countries’<br>TV shows" },
    { n: 20000, comma: true, lb: "-seat arena<br>(NBA halftime)" }
  ];

  var TIMELINE = [
    { k: "World talent shows", h: "Britain’s Got Talent — the first-ever “audience Golden Buzzer”, straight to the finals", b: "Also featured on talent shows in Italy, Spain and France" },
    { k: "The great circus & varieté stages", h: "Cirque du Soleil Award / Ringling Award / Monte-Carlo Award", b: "Moulin Rouge, Cirque Phénix — the world’s largest big top — and Europa-Park among others" },
    { k: "German arena tour", h: "Feuerwerk der Turnkunst “VIVA” — 30+ shows in 10,000+ seat arenas", b: "Europe’s most successful gymnastics entertainment tour — 200,000+ spectators a year", big: true },
    { k: "World-class events", h: "NBA Abu Dhabi — halftime in a 20,000-seat arena" },
    { k: "Seven stages at once (2025)", h: "Seven European venues, performing simultaneously", b: "35 HARIBOW members deployed across Europe" },
    { k: "The top of double dutch", h: "2025 IJRU World Championship — Champions", b: "Against 30+ countries, team HARIBOW took the world title" }
  ];

  /* 先頭＝配信（海外の主導線）。来場券は参考価格として英訳掲載 */
  var TICKETS = [
    { name: "International Stream Ticket", tag: "worldwide", sub: "live + 30-day archive ・ in English", price: "$17 (¥2,500)" },
    { name: "Reserved S", tag: "thanks video", sub: "rows 3–12 center", pre: "¥4,500", reg: "¥5,000" },
    { name: "Reserved A", sub: "front sides ・ rows 14–18 center", pre: "¥3,500", reg: "¥4,000" },
    { name: "University student", pre: "¥2,500", reg: "¥3,000" },
    { name: "University group", sub: "5 or more", price: "¥2,000" },
    { name: "Community group", sub: "5 or more", price: "¥3,000" },
    { name: "High school & kids", price: "General price" },
    { name: "Supporter seat", sub: "row 2 center ・ 12 seats ・ with perks", price: "¥15,000" },
    { name: "Preschoolers", sub: "free on a guardian’s lap (a seat requires a kids ticket)", price: "Free" }
  ];

  /* ---------- 描画ヘルパ（JP版と同一） ---------- */
  function q(sel) { return document.querySelector(sel); }
  function lineupCard(c) {
    var tags = c.tags.map(function (t) { return '<span class="ptag' + (t.c ? " " + t.c : "") + '">' + t.t + "</span>"; }).join("");
    var hasImg = !!c.img;
    var bg = hasImg ? '<div class="bg' + (c.bg ? " " + c.bg : "") + '" style="background-image:url(' + c.img + ')"></div>' : "";
    return '<div class="pcard' + (hasImg ? " ph" : "") + '">' + bg + '<div class="ptags">' + tags + "</div><h3>" + c.title + "</h3><p>" + c.desc + "</p></div>";
  }
  function statCell(s) {
    var num = ("n" in s)
      ? '<div class="num" data-to="' + s.n + '"' + (s.comma ? ' data-comma="1"' : "") + ">" + (s.comma ? "0" : "1") + "</div>"
      : '<div class="num-t">' + s.t + "</div>";
    return '<div class="stat">' + num + '<div class="lb">' + s.lb + "</div></div>";
  }
  function tlRow(t) {
    return '<div class="tl' + (t.big ? " tl-big" : "") + '"><div class="tl-k">' + t.k + '</div><div class="tl-h">' + t.h + "</div>" + (t.b ? '<div class="tl-b">' + t.b + "</div>" : "") + "</div>";
  }
  function ticketRow(t) {
    var name = '<td class="name">' + t.name + (t.tag ? '<span class="tag">' + t.tag + "</span>" : "") + (t.sub ? '<span class="sub">' + t.sub + "</span>" : "") + "</td>";
    var price = ("price" in t)
      ? '<td class="p" colspan="2">' + t.price + "</td>"
      : '<td class="p">' + t.pre + '</td><td class="p">' + t.reg + "</td>";
    return "<tr>" + name + price + "</tr>";
  }

  window.HARIBOW = {
    purchaseURL: PURCHASE_URL,
    show: SHOW,
    render: function () {
      var el;
      if ((el = q("#climaxSub"))) el.innerHTML = SHOW.dateShort + " — From the park to the world, and beyond.";
      if ((el = q("#lineupGrid"))) el.innerHTML = LINEUP.map(lineupCard).join("");
      if ((el = q("#lineupHl"))) el.innerHTML = LINEUP_HL;
      if ((el = q("#statsRow"))) el.innerHTML = STATS.map(statCell).join("");
      if ((el = q("#timelineBox"))) el.innerHTML = TIMELINE.map(tlRow).join("");
      if ((el = q("#heroMeta"))) el.innerHTML =
        "<span><b>" + SHOW.dateShort + "</b> " + SHOW.dow + '</span><span class="dot"></span>' +
        "<span>Show <b>" + SHOW.start + '</b></span><span class="dot"></span>' +
        "<span>" + SHOW.venue + " ・ streamed worldwide</span>";
      if ((el = q("#infoGrid"))) el.innerHTML =
        '<div class="cell"><div class="k">Date</div><div class="v">' + SHOW.dateShort + " " + SHOW.dow + '</div><div class="s">Doors ' + SHOW.open + " ・ Show " + SHOW.start + "</div></div>" +
        '<div class="cell"><div class="k">Venue</div><div class="v">' + SHOW.venue + '</div><div class="s">' + SHOW.hall + "</div></div>" +
        '<div class="cell"><div class="k">Show</div><div class="v">' + SHOW.showType + '</div><div class="s">' + SHOW.showSub + "</div></div>";
      if ((el = q("#footMeta"))) el.innerHTML =
        'HARIBOW First Solo Show “GO BEYOND”<br>' + SHOW.dateLong + " ・ Show " + SHOW.start + '<br class="br-sp">' + SHOW.venue + ", " + SHOW.hall;
      if ((el = q("#ticketBody"))) el.innerHTML = TICKETS.map(ticketRow).join("");
      var a = document.querySelectorAll("[data-buy]");
      for (var i = 0; i < a.length; i++) a[i].setAttribute("href", PURCHASE_URL);
    }
  };
})();
