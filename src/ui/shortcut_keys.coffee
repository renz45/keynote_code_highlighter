exports.init = ->
  $('html').on 'keydown.meta_shift_c', (evt)->
    nwWindow.showDevTools()

  $('html').on 'keydown.meta_r', (evt)->
    nwWindow.reloadDev()