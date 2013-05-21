# Keynote code highlighter
This is a simple app for osx that creates html that can pasted into keynote
to create code highlighted text. This is similar to rendering code from textmate
in the browser and copying and pasting it, but this runs on the desktop and doesn't
require textmate.

This is super bare bones, it doesn't even have proper chrome like a close button.
To quit the app just right click it in your doc and close it.

##Packaging instructions(OSX)
This is mostly for my reference.

run: `zip -r ../${PWD##*/}.nw *`

This creates a .nw file outside of your project directory. Take this resulting file and
paste it into the resource folder of a copy of the node-webkit.app file.
Rename this .nw file to `app.nw`, that's it for OSX.