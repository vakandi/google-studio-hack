(function () {
  let e = null;
  const t = HTMLInputElement.prototype.click;
  HTMLInputElement.prototype.click = function (...n) {
    if (this.type !== "file" || document.documentElement.getAttribute("data-veo-active") !== "true") {
      return t.apply(this, n);
    }
    e = this;
  };
  document.addEventListener("VEO_UPLOAD_FILE_DATA", t => {
    const n = t.detail;
    if (n && e) {
      try {
        const {
          base64: t,
          filename: l,
          mimeType: i
        } = n;
        let c = t || "";
        if (c.includes(",")) {
          c = c.split(",")[1];
        }
        const a = atob(c);
        const o = new Array(a.length);
        for (let e = 0; e < a.length; e++) {
          o[e] = a.charCodeAt(e);
        }
        const s = new Uint8Array(o);
        const r = new Blob([s], {
          type: i
        });
        const p = new File([r], l, {
          type: i
        });
        const u = new DataTransfer();
        u.items.add(p);
        e.files = u.files;
        e.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      } catch (l) {} finally {
        e = null;
      }
    }
  });
})();