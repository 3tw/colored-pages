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

/* Initialize functions on page load */
// Find active color theme and index items accordingly

initColorTheme()
indexColorThemeInidicators(colorThemes, 'clp-current-theme')

/* Toggle color dots box-shadow */

document.querySelectorAll('.clp-indicator').forEach(function (indicator) {
  indicator.onmouseenter = function () {
    if (!this.classList.contains('clp-current-theme')) {
      document.querySelectorAll('.clp-current-theme').forEach(function (dot) {
        dot.classList.add('clp-disable')
      })
    }
    this.classList.add('active-theme')
  }
  indicator.onmouseleave = function () {
    this.classList.remove('active-theme')
    document.querySelectorAll('.clp-current-theme').forEach(function (dot) {
      dot.classList.remove('clp-disable')
    })
  }
  indicator.onclick = function () {
    document.querySelectorAll('.clp-current-theme').forEach(function (dot) {
      dot.classList.remove('clp-current-theme')
      dot.classList.remove('clp-disable')
    })

    // Set and save color theme
    const newTheme = this.getAttribute('clp-select')
    setColorTheme(colorThemes, newTheme)
    saveColorTheme(newTheme)

    // Add "clp-current-theme" class to appropriate colored dots
    indexColorThemeInidicators(colorThemes, 'clp-current-theme')
  }
})

/* Color theme data  */

// List all color themes and relevant items to be indexed
const colorThemes = [
  { theme: 'theme-01', indicator: 'clp-indicator-01' },
  { theme: 'theme-02', indicator: 'clp-indicator-02' },
  { theme: 'theme-03', indicator: 'clp-indicator-03' },
  { theme: 'theme-04', indicator: 'clp-indicator-04' },
  { theme: 'theme-05', indicator: 'clp-indicator-05' },
  { theme: 'theme-06', indicator: 'clp-indicator-06' }
]

// const colorThemes = [
//   'theme-01',
//   'theme-02',
//   'theme-03',
//   'theme-04',
//   'theme-05',
//   'theme-06'
// ]
