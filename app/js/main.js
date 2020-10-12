/* Initialize functions on page load */
// Find active color theme and index items accordingly

initColorTheme()
indexColorThemeInidicators(colorThemes, 'clp-current-theme')

/* Toggle color dots box-shadow */
document.querySelectorAll('.clp-index').forEach(function (indicator) {
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
    const newTheme = this.getAttribute('data-clp-select')
    setColorTheme(colorThemes, newTheme)
    saveColorTheme(newTheme)

    // Add "clp-current-theme" class to appropriate colored dots
    indexColorThemeInidicators(colorThemes, 'clp-current-theme')
  }
})
