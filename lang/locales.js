window.WMSkyLocaleData = window.WMSkyLocaleData || {
  order: [],
  locales: {}
};

window.WMSkyRegisterLocale = function registerLocale(code, data) {
  if (!code || !data) return;
  window.WMSkyLocaleData.locales[code] = data;
  if (!window.WMSkyLocaleData.order.includes(code)) {
    window.WMSkyLocaleData.order.push(code);
  }
};
