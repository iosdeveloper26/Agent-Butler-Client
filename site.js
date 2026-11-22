(function () {
  var hero = document.querySelector(".hero");
  var shot = document.querySelector(".product-shot");
  if (!hero || !shot || document.querySelector(".bg-type")) return;

  var words = [
    "Agent Butler",
    "Ask & Do",
    "Code & Write",
    "Multi-agent",
    "MCP",
    "harness",
    "calendar",
    "plugins",
    "workflow",
    "macOS",
    "files",
    "chat"
  ];
  var icons = {
    "Agent Butler": "<svg viewBox='0 0 16 16' aria-hidden='true'><circle cx='8' cy='8' r='5' fill='none' stroke='currentColor' stroke-width='1.4'/><circle cx='8' cy='8' r='1.7' fill='currentColor'/></svg>",
    "Ask & Do": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 3.5h10v7H8.2L5 13V10.5H3z' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linejoin='round'/></svg>",
    "Code & Write": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4 2.8 8 6 12M10 4l3.2 4L10 12' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>",
    "Multi-agent": "<svg viewBox='0 0 16 16' aria-hidden='true'><circle cx='5.2' cy='6' r='2' fill='none' stroke='currentColor' stroke-width='1.3'/><circle cx='10.8' cy='6' r='2' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M2.4 12.2c.5-1.6 1.6-2.4 2.8-2.4s2.3.8 2.8 2.4M8 12.2c.5-1.6 1.6-2.4 2.8-2.4s2.3.8 2.8 2.4' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linecap='round'/></svg>",
    "MCP": "<svg viewBox='0 0 16 16' aria-hidden='true'><circle cx='4' cy='8' r='1.7' fill='currentColor'/><circle cx='12' cy='4.2' r='1.7' fill='currentColor'/><circle cx='12' cy='11.8' r='1.7' fill='currentColor'/><path d='M5.6 8H8.2M9.4 6.2 10.4 5M9.4 9.8l1 1.2' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linecap='round'/></svg>",
    "harness": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 5.2 8 2.8l5 2.4-5 2.4zM3 8.4l5 2.4 5-2.4M3 11.2l5 2.4 5-2.4' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linejoin='round'/></svg>",
    "calendar": "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='2.5' y='3.2' width='11' height='10' rx='1.2' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M2.5 6.4h11M5.2 2.4v2M10.8 2.4v2' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linecap='round'/></svg>",
    "plugins": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 2.6h4V5h2.2v4H10v4.4H6V9H3.8V5H6z' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linejoin='round'/></svg>",
    "workflow": "<svg viewBox='0 0 16 16' aria-hidden='true'><circle cx='3.4' cy='4' r='1.5' fill='currentColor'/><circle cx='12.6' cy='8' r='1.5' fill='currentColor'/><circle cx='5.2' cy='12.2' r='1.5' fill='currentColor'/><path d='M4.8 4.6 11 7.4M11.4 9 6.4 11.4' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linecap='round'/></svg>",
    "macOS": "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='2.2' y='3' width='11.6' height='8.2' rx='1.2' fill='none' stroke='currentColor' stroke-width='1.3'/><path d='M6 13.2h4' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linecap='round'/></svg>",
    "files": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.4 4.2h4l1.2 1.4h5.8v6.6H2.4z' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linejoin='round'/></svg>",
    "chat": "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.6 3.2h10.8v7.2H6.4L3.6 12.6V10.4H2.6z' fill='none' stroke='currentColor' stroke-width='1.3' stroke-linejoin='round'/></svg>"
  };
  var colors = ["#d7b48a", "#c49662", "#e4cba6", "#b58356"];

  function sequence(offset) {
    var seq = document.createElement("div");
    seq.className = "bg-type-seq";
    for (var pass = 0; pass < 3; pass++) {
      words.forEach(function (word, index) {
        var item = document.createElement("span");
        item.style.color = colors[(index + offset + pass) % colors.length];
        item.innerHTML = icons[word] + "<b>" + word + "</b>";
        seq.appendChild(item);
      });
    }
    return seq;
  }

  var root = document.createElement("div");
  root.className = "bg-type";
  root.setAttribute("aria-hidden", "true");

  for (var rowIndex = 0; rowIndex < 11; rowIndex++) {
    var row = document.createElement("div");
    row.className = "bg-type-row";
    row.dataset.dir = rowIndex % 2 ? "back" : "forward";
    var track = document.createElement("div");
    track.className = "bg-type-track";
    track.style.setProperty("--dur", (40 + rowIndex * 6) + "s");
    var line = sequence(rowIndex * 2);
    track.appendChild(line);
    track.appendChild(line.cloneNode(true));
    row.appendChild(track);
    root.appendChild(row);
  }

  var wash = document.createElement("div");
  wash.className = "bg-wash";
  wash.setAttribute("aria-hidden", "true");
  var tail = document.createElement("div");
  tail.className = "bg-type-tail";
  tail.setAttribute("aria-hidden", "true");
  for (var tailIndex = 0; tailIndex < 4; tailIndex++) {
    var tailRow = document.createElement("div");
    tailRow.className = "bg-type-row";
    tailRow.dataset.dir = tailIndex % 2 ? "forward" : "back";
    var tailTrack = document.createElement("div");
    tailTrack.className = "bg-type-track";
    tailTrack.style.setProperty("--dur", (46 + tailIndex * 8) + "s");
    var tailLine = sequence(5 + tailIndex * 3);
    tailTrack.appendChild(tailLine);
    tailTrack.appendChild(tailLine.cloneNode(true));
    tailRow.appendChild(tailTrack);
    tail.appendChild(tailRow);
  }
  var rail = document.querySelector(".page-rail");
  if (shot.parentElement === hero) {
    hero.insertBefore(wash, shot);
    hero.insertBefore(root, shot);
    hero.insertBefore(tail, shot);
  } else {
    hero.appendChild(wash);
    hero.appendChild(root);
    hero.appendChild(tail);
  }

  function place() {
    var actions = hero.querySelector(".actions");
    var heroTop = hero.getBoundingClientRect().top;
    var actionsBottom = actions.getBoundingClientRect().bottom - heroTop;
    root.style.height = Math.max(180, actionsBottom) + "px";
    var tailTop = actionsBottom + 4;
    tail.style.top = tailTop + "px";
    tail.style.height = "auto";
    if (rail) {
      var heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
      var tailBottom = hero.getBoundingClientRect().top + window.scrollY + tailTop + tail.offsetHeight;
      var desiredTop = tailBottom + 12 + 14 * 3;
      rail.style.marginTop = Math.max(0, Math.round(desiredTop - heroBottom)) + "px";
    }
    var edge = (rail || shot).getBoundingClientRect().top - heroTop;
    wash.style.height = Math.max(0, edge) + "px";
  }

  place();
  window.addEventListener("resize", place);
})();

(function () {
  var rail = document.querySelector(".page-rail");
  if (!rail || document.querySelector(".rail-side")) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gap = 14;
  var sides = ["left", "right"].map(function (name) {
    var el = document.createElement("div");
    el.className = "rail-side rail-side-" + name;
    el.setAttribute("aria-hidden", "true");
    var canvas = document.createElement("canvas");
    el.appendChild(canvas);
    rail.appendChild(el);
    return {
      el: el,
      canvas: canvas,
      ctx: canvas.getContext("2d"),
      pointer: null,
      pull: 0,
      w: 0,
      h: 0
    };
  });

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    sides.forEach(function (side) {
      var w = side.el.clientWidth;
      var h = side.el.clientHeight;
      side.w = w;
      side.h = h;
      side.canvas.width = Math.max(1, Math.round(w * dpr));
      side.canvas.height = Math.max(1, Math.round(h * dpr));
      side.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
  }

  var time = 0;
  var running = true;
  var last = 0;
  var fields = ["left", "right"].map(function (name) {
    var el = document.createElement("div");
    el.className = "edge-field edge-field-" + name;
    el.setAttribute("aria-hidden", "true");
    var canvas = document.createElement("canvas");
    el.appendChild(canvas);
    document.body.appendChild(el);
    return { el: el, canvas: canvas, ctx: canvas.getContext("2d"), w: 0, h: 0 };
  });
  var laneEl = document.createElement("div");
  laneEl.className = "edge-lane";
  laneEl.setAttribute("aria-hidden", "true");
  var laneCanvas = document.createElement("canvas");
  laneEl.appendChild(laneCanvas);
  document.body.appendChild(laneEl);
  var lane = {
    el: laneEl,
    canvas: laneCanvas,
    ctx: laneCanvas.getContext("2d"),
    w: 0,
    h: 0
  };

  function shapeRadius(angle) {
    var sector = (Math.PI * 2) / 3;
    var wrapped = ((angle % sector) + sector) % sector;
    var alpha = Math.abs(wrapped - sector / 2);
    return Math.cos(Math.PI / 3) / Math.cos(alpha);
  }

  function drawTriangle(ctx, x, y, size, rotation) {
    ctx.beginPath();
    for (var i = 0; i <= 3; i++) {
      var a = rotation + (i / 3) * Math.PI * 2 - Math.PI / 2;
      var r = size * shapeRadius(a - rotation + Math.PI / 2);
      var px = x + Math.cos(a) * r;
      var py = y + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.fill();
  }

  function placeFields() {
    var leftBorder = document.querySelector(".rail-side-left");
    var rightBorder = document.querySelector(".rail-side-right");
    var tail = document.querySelector(".bg-type-tail");
    if (!leftBorder || !rightBorder) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var railTop = rail.getBoundingClientRect().top + window.scrollY;
    var railHeight = rail.offsetHeight;
    var leftEdge = leftBorder.getBoundingClientRect().left;
    var rightEdge = rightBorder.getBoundingClientRect().right;
    var hero = document.querySelector(".hero");
    var actions = hero && hero.querySelector(".actions");
    var actionsBottom = actions
      ? actions.getBoundingClientRect().bottom + window.scrollY
      : (tail ? tail.getBoundingClientRect().top + window.scrollY : railTop - 80);
    var tailBottom = tail && tail.offsetHeight
      ? tail.getBoundingClientRect().bottom + window.scrollY
      : actionsBottom + 58;
    var bandTop = Math.min(tailBottom + 12, railTop - 16);
    var bandHeight = Math.max(16, railTop - bandTop);
    var fieldHeight = railTop + railHeight - bandTop;
    var boxes = [
      { field: fields[0], left: 0, width: Math.max(0, leftEdge) },
      { field: fields[1], left: rightEdge, width: Math.max(0, window.innerWidth - rightEdge) }
    ];
    boxes.forEach(function (box) {
      var field = box.field;
      field.el.style.top = bandTop + "px";
      field.el.style.left = box.left + "px";
      field.el.style.width = box.width + "px";
      field.el.style.height = fieldHeight + "px";
      field.w = box.width;
      field.h = fieldHeight;
      field.canvas.width = Math.max(1, Math.round(box.width * dpr));
      field.canvas.height = Math.max(1, Math.round(fieldHeight * dpr));
      field.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });
    var host = hero || rail;
    if (lane.el.parentElement !== host) host.appendChild(lane.el);
    var originTop = host.getBoundingClientRect().top + window.scrollY;
    var originLeft = host.getBoundingClientRect().left;
    var laneWidth = Math.max(0, rightEdge - leftEdge);
    lane.el.style.top = (bandTop - originTop) + "px";
    lane.el.style.left = (leftEdge - originLeft) + "px";
    lane.el.style.width = laneWidth + "px";
    lane.el.style.height = bandHeight + "px";
    lane.w = laneWidth;
    lane.h = bandHeight;
    lane.canvas.width = Math.max(1, Math.round(laneWidth * dpr));
    lane.canvas.height = Math.max(1, Math.round(bandHeight * dpr));
    lane.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawDot(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 1.15, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawFields() {
    var drift = reduce ? 0 : (time * 5) % gap;
    var rotation = reduce ? -Math.PI / 2 : -Math.PI / 2 + time * 0.35;
    fields.forEach(function (field) {
      var w = field.w;
      var h = field.h;
      if (w < 8 || !h) return;
      var ctx = field.ctx;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(176, 184, 196, 0.72)";
      for (var py = h - drift; py > -gap; py -= gap) {
        for (var px = gap * 0.5; px < w; px += gap) {
          drawTriangle(ctx, px, py, 1.7, rotation);
        }
      }
    });

    var w = lane.w;
    var h = lane.h;
    if (w < 20 || h < 8) return;
    var ctx = lane.ctx;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(176, 184, 196, 0.72)";
    for (var row = gap * 0.5; row < h; row += gap) {
      for (var px = -drift; px < w + gap; px += gap) drawDot(ctx, px, row);
    }
  }

  function draw() {
    var drift = reduce ? 0 : (time * 5) % gap;
    sides.forEach(function (side) {
      var ctx = side.ctx;
      var w = side.w;
      var h = side.h;
      if (!w || !h) return;
      var target = side.pointer ? 1 : 0;
      side.pull += (target - side.pull) * 0.08;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(176, 184, 196, 0.62)";
      for (var py = -gap + drift; py < h + gap; py += gap) {
        for (var px = gap * 0.5; px < w; px += gap) {
          var x = px;
          var y = py;
          if (side.pull > 0.004 && side.pointer) {
            var dx = side.pointer.x - x;
            var dy = side.pointer.y - y;
            var dist = Math.hypot(dx, dy) || 1;
            var strength = Math.max(0, 1 - dist / 110);
            strength = strength * strength * side.pull * 16;
            x += (dx / dist) * strength;
            y += (dy / dist) * strength;
          }
          ctx.beginPath();
          ctx.arc(x, y, 1.15, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    });
    drawFields();
  }

  function loop(now) {
    if (!running) return;
    if (!last) last = now;
    time += Math.min(0.05, (now - last) / 1000);
    last = now;
    draw();
    window.requestAnimationFrame(loop);
  }

  sides.forEach(function (side) {
    side.el.addEventListener("pointermove", function (event) {
      var rect = side.el.getBoundingClientRect();
      side.pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    });
    side.el.addEventListener("pointerleave", function () {
      side.pointer = null;
    });
  });

  resize();
  placeFields();
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(resize);
    observer.observe(rail);
  }
  window.addEventListener("resize", function () {
    resize();
    placeFields();
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      running = false;
      last = 0;
    } else if (!running) {
      running = true;
      window.requestAnimationFrame(loop);
    }
  });
  window.requestAnimationFrame(loop);
})();
