path = require('path')
oldRequire = window.require

# Shim require to always resolve an absolute path to files starting with '/' or './'
window.require = (filePath)->
  if filePath[0] == '/' || filePath.slice(0,2) == "./"
    filePath = arguments[0]
    arguments[0] = path.resolve(filePath)
  oldRequire.apply(this, arguments)

# Used to set objects as global. We need to set them on the window object
# and on the global node object since we are working within 2 different
# contexts depending on how files are loaded. The contexts can be treated
# as the same context in node-webkit since there is no concept of server
# or client side.
global.setAsGlobal = window.setAsGlobal = (varName, value)->
  global[varName] = value
  window[varName] = value
