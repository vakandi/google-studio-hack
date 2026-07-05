function t(t, n) {
  return t.version.split(",").map(t => t.trim()).filter(Boolean).includes(n.trim());
}
let n = null;
async function e(t) {
  const n = await fetch(`${t}/config/flow-automation`, {
    method: "GET",
    headers: {
      "X-Client-Secret": "YES_THAT_IS_VERY_EASY_RIGHT_?!$"
    }
  });
  if (!n.ok) {
    throw new Error(`HTTP ${n.status}`);
  }
  const e = await n.json();
  if (!e?.selectors) {
    throw new Error("Invalid config shape");
  }
  return e;
}
async function r() {
  if (n) {
    return n;
  }
  try {
    n = await e("https://configs.kylenguyen.me");
    return n;
  } catch (t) {}
  try {
    n = await e("https://extension-config.onegreen.workers.dev");
    return n;
  } catch (t) {
    return null;
  }
}
export { r as g, t as i };