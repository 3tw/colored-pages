/* Check if color theme is set in local storage on page load and set page-color attribute to body */

function initColorTheme (defaultTheme = 'theme-01') {
  const currentTheme =
    window.localStorage.getItem('color-theme') !== null ? window.localStorage.getItem('color-theme') : defaultTheme
  document.body.setAttribute('clp-theme', currentTheme)
}

/* Save selected color theme to local storage */

function saveColorTheme (theme) {
  window.localStorage.setItem('color-theme', theme)
}

/* Change clp-theme attribute on body element */

function setColorTheme (colorThemes, newTheme) {
  document.body.setAttribute('clp-theme', '')

  for (let i = 0; i < colorThemes.length; i++) {
    const theme = colorThemes[i]
    if (theme.theme.includes(newTheme)) {
      document.body.setAttribute('clp-theme', newTheme)
      break
    }
  }
}

/* Get  */
/* Index appropriate elements according to active color theme */

function indexColorThemeInidicators (colorThemes, addedClass) {
  const currentTheme =
    window.localStorage.getItem('color-theme') !== null
      ? window.localStorage.getItem('color-theme')
      : 'theme is not set'

  for (let i = 0; i < colorThemes.length; i++) {
    const theme = colorThemes[i]

    if (theme === currentTheme) {
      document.querySelectorAll(theme.indicator).forEach((item) => item.classList.add(addedClass))
      break
    }
  }
}
