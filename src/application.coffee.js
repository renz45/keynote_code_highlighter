
############################ Vendor ##################################
# this needs to always be required first in order to auto compile coffeescript files
require('coffee-script')
global.window = window
setAsGlobal("_", require('underscore'))
# jquery is loaded in the app.html files so reloading the page works
# this could be changed if we used the node module after it is updated
setAsGlobal('$', $)
setAsGlobal('jQuery', jQuery)
setAsGlobal('backbone', require('backbone'))
setAsGlobal('Config', require('./package.json'))


########################## jQuery Plugins ############################
# jquery plugins have to go after setting the global jquery vars
require './src/vendor/jquery.hotkeys.js'

########################## Misc globals ##############################
setAsGlobal("nwGui", require('nw.gui'))
setAsGlobal('nwWindow', nwGui.Window.get())

############################## UI ####################################
require('./src/ui/ui')

######################### Initial settings ###########################
# toggling this makes the window appear on top but not forced to stay there
nwWindow.setAlwaysOnTop(true)
nwWindow.setAlwaysOnTop(false)