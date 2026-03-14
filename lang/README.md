Add a new language by creating a file like `lang/es.js` and loading it in `index.html`
before `app.js`.

Expected shape:

```js
window.WMSkyRegisterLocale('es', {
  meta: {
    code: 'es',
    label: 'Spanish',
    nativeLabel: 'Espanol',
    shortLabel: 'ES',
    flagPath: 'assets/flags/es.svg'
  },
  messages: {
    heroTitle: '...',
    selectLanguage: '...'
  },
  missionTypes: {
    0: '...'
  },
  missionSubtypes: {
    3: { 0: '...' }
  },
  rewardTypes: {
    0: '...'
  }
});
```

The picker reads every registered locale automatically.
