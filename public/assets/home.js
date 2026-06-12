(function () {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const glyphs = "!<>-_\\/[]{}=+*^?#·:";
  const heroWords = ["around", "on your computer", "side by side", "in one workspace", "within reach", "running"];

  function inViewport(el, ratio) {
    const rect = el.getBoundingClientRect();
    const height = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < height * ratio && rect.bottom > -40;
  }

  function revealWhenVisible(el, callback, ratio) {
    let done = false;
    let timer = null;
    const check = () => {
      if (done || !el.isConnected) return;
      if (!inViewport(el, ratio || 0.94)) return;
      done = true;
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      if (timer) window.clearInterval(timer);
      callback();
    };
    check();
    if (!done) {
      timer = window.setInterval(check, 200);
      window.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check);
    }
  }

  function scramble(el) {
    const text = el.dataset.scramble || el.textContent;
    if (reduceMotion) {
      el.textContent = text;
      return;
    }
    let frame = 0;
    const max = 12;
    const tick = () => {
      const revealed = Math.floor((frame / max) * text.length);
      let output = "";
      for (let i = 0; i < text.length; i += 1) {
        output += i < revealed || text[i] === " " ? text[i] : glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = output;
      if (frame < max) {
        frame += 1;
        window.setTimeout(tick, 34);
      } else {
        el.textContent = text;
      }
    };
    tick();
  }

  function countUp(el) {
    const target = Number(el.dataset.count || el.textContent || 0);
    if (reduceMotion || !Number.isFinite(target)) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const duration = 950;
    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 2);
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }

  function parseVersionText(raw) {
    const trimmed = String(raw || "").trim();
    if (!trimmed) return null;

    let normalized = trimmed;
    let prefix = "";
    if (/^v/i.test(normalized)) {
      prefix = "v";
      normalized = normalized.slice(1);
    }

    const segmentTexts = normalized.split(".");
    if (!segmentTexts.length || segmentTexts.some((item) => !/^\d+$/.test(item))) return null;

    const segmentValues = segmentTexts.map((item) => Number(item));
    const segmentWidths = segmentTexts.map((item) => item.length);
    const segmentFactors = [];

    let factor = 1;
    let target = 0;
    for (let i = segmentTexts.length - 1; i >= 0; i -= 1) {
      const width = segmentWidths[i];
      const value = segmentValues[i];
      segmentFactors[i] = factor;
      target += value * factor;
      factor *= 10 ** width;
    }

    return { prefix, segmentWidths, segmentFactors, target };
  }

  function countUpVersion(el) {
    const parsed = parseVersionText(el.dataset.countVersion);
    if (!parsed || reduceMotion) {
      el.textContent = (el.dataset.countVersion || el.textContent || "").trim();
      return;
    }

    const { prefix, segmentWidths, segmentFactors, target } = parsed;
    const duration = 1050;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 2);
      const value = Math.floor(eased * target);

      let rendered = prefix;
      for (let i = 0; i < segmentWidths.length; i += 1) {
        const width = segmentWidths[i];
        const base = segmentFactors[i];
        const currentPart = Math.floor(value / base) % (10 ** width);
        rendered += `${String(currentPart).padStart(width, "0")}${i === segmentWidths.length - 1 ? "" : "."}`;
      }

      el.textContent = rendered;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = (el.dataset.countVersion || "").trim();
      }
    };

    window.requestAnimationFrame(step);
  }

  function glitchTo(el, word) {
    if (reduceMotion) {
      el.textContent = word;
      return;
    }
    let frame = 0;
    const max = 15;
    const tick = () => {
      const revealed = Math.floor((frame / max) * word.length);
      let output = "";
      for (let i = 0; i < word.length; i += 1) {
        output += i < revealed || word[i] === " " ? word[i] : glyphs[(Math.random() * glyphs.length) | 0];
      }
      el.textContent = output;
      if (frame < max) {
        frame += 1;
        window.setTimeout(tick, 38);
      } else {
        el.textContent = word;
      }
    };
    tick();
  }

  function parseRotatorWords(el) {
    const source = (el.dataset.rotatorWords || "").trim();
    if (!source) return heroWords.slice();
    const words = source
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);
    return words.length ? words : heroWords.slice();
  }

  function setupRotator() {
    const els = Array.from(document.querySelectorAll("[data-rotator]"));
    if (!els.length) return;
    els.forEach((el) => {
      const words = parseRotatorWords(el);
      if (reduceMotion) {
        el.textContent = words[0] || "";
        return;
      }
      let index = 0;
      const delay = Number(el.dataset.rotatorDelay);
      const cycle = () => {
        const word = words[index];
        glitchTo(el, word);
        index = (index + 1) % words.length;
        const baseDelay = Number.isFinite(delay) ? delay : 2100;
        const aroundPause = word === "around" ? 2800 : baseDelay;
        window.setTimeout(cycle, aroundPause);
      };
      cycle();
    });
  }

  function setupTitleFit() {
    const titles = Array.from(document.querySelectorAll(".title-nowrap"));
    if (!titles.length) return;

    const fit = () => {
      titles.forEach((title) => {
        const rotators = Array.from(title.querySelectorAll("[data-rotator]"));
        const saved = rotators.map((el) => el.textContent);
        rotators.forEach((el) => {
          const words = parseRotatorWords(el);
          el.textContent = words.reduce((a, b) => (b.length > a.length ? b : a), "");
        });
        title.style.fontSize = "";
        const available = title.clientWidth;
        const needed = title.scrollWidth;
        if (needed > available && available > 0) {
          const base = parseFloat(window.getComputedStyle(title).fontSize);
          title.style.fontSize = `${Math.max(13, Math.floor((base * available) / needed))}px`;
        }
        rotators.forEach((el, i) => {
          el.textContent = saved[i];
        });
      });
    };

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  }

  function setupMarquee() {
    const marquees = Array.from(document.querySelectorAll("[data-marquee]"));
    if (!marquees.length || reduceMotion) return;

    marquees.forEach((marquee) => {
      const track = marquee.querySelector(".marquee-track");
      const group = marquee.querySelector(".marquee-group");
      if (!track || !group) return;

      const apply = () => {
        const gap = parseFloat(window.getComputedStyle(track).columnGap) || 8;
        const shift = group.scrollWidth + gap;
        const needed = marquee.clientWidth + shift;
        while (track.scrollWidth < needed) {
          const clone = group.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          track.appendChild(clone);
        }
        track.style.setProperty("--marquee-shift", `-${shift}px`);
        track.style.setProperty("--marquee-duration", `${Math.max(18, Math.round(shift / 32))}s`);
      };

      apply();
      window.addEventListener("resize", apply);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(apply);
    });
  }

  function setupFaq() {
    const items = Array.from(document.querySelectorAll(".faq-item-inner"));
    items.forEach((item, index) => {
      const button = item.querySelector(".faq-q");
      const panel = item.querySelector(".faq-a");
      if (!button || !panel) return;
      const setOpen = (open) => {
        item.dataset.open = open ? "1" : "0";
        button.setAttribute("aria-expanded", open ? "true" : "false");
        panel.style.maxHeight = open ? `${panel.scrollHeight}px` : "0px";
      };
      setOpen(index === 0);
      button.addEventListener("click", () => {
        const next = item.dataset.open !== "1";
        items.forEach((other) => {
          const otherButton = other.querySelector(".faq-q");
          const otherPanel = other.querySelector(".faq-a");
          other.dataset.open = "0";
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.style.maxHeight = "0px";
        });
        setOpen(next);
      });
    });
  }

  function setupNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const onScroll = () => {
      nav.dataset.scrolled = window.scrollY > 8 ? "1" : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupReveal() {
    document.querySelectorAll(".reveal").forEach((el) => {
      revealWhenVisible(el, () => {
        el.classList.add("in");
        window.setTimeout(() => {
          el.style.transition = "none";
          el.style.opacity = "1";
          el.style.transform = "none";
        }, 850);
      });
    });
  }

  function setupGithubStars() {
    const els = Array.from(document.querySelectorAll("[data-count]"));
    if (!els.length) return;

    const apply = (count) => {
      els.forEach((el) => {
        el.dataset.count = String(count);
        el.textContent = String(count);
      });
    };

    try {
      const cachedRaw = window.sessionStorage.getItem("va-gh-stars");
      const cached = cachedRaw && cachedRaw.startsWith("{") ? JSON.parse(cachedRaw).count : Number(cachedRaw);
      if (Number.isFinite(cached) && cached > 0) apply(cached);
    } catch {
      window.sessionStorage.removeItem("va-gh-stars");
    }

    window
      .fetch("https://api.github.com/repos/jazzenchen/VibeAround", {
        cache: "no-store",
        headers: { Accept: "application/vnd.github+json" }
      })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const count = data && Number(data.stargazers_count);
        if (!Number.isFinite(count) || count <= 0) return;
        window.sessionStorage.setItem("va-gh-stars", JSON.stringify({ count, updatedAt: Date.now() }));
        apply(count);
      })
      .catch(() => {});
  }

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  function init() {
    setupNav();
    setupRotator();
    setupTitleFit();
    setupMarquee();
    setupFaq();
    setupReveal();
    document.querySelectorAll("[data-count]").forEach((el) => revealWhenVisible(el, () => countUp(el), 0.92));
    setupGithubStars();
    document.querySelectorAll("[data-count-version]").forEach((el) => revealWhenVisible(el, () => countUpVersion(el), 0.92));
    document.querySelectorAll("[data-scramble]").forEach((el) => revealWhenVisible(el, () => scramble(el), 0.92));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
