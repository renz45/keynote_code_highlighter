# Keynote code highlighter
This is a simple app for osx that creates html that can pasted into keynote
to create code highlighted text. This is similar to rendering code from textmate
in the browser and copying and pasting it, but this runs on the desktop and doesn't
require textmate.

[You can download the osx app here](http://s3.amazonaws.com/courseware.codeschool.com/keynote_code_highlighter.zip)

This is super bare bones, it doesn't even have proper chrome like a close button.
To quit the app just right click it in your doc and close it.

I've recently added support for choosing a font and a font size. You have to type the name of
the font into the field, since searching the available fonts on a system seems to be more
work then its worth. As usual, it saves your settings when opening or closing, so you should
only have to set them once.


##Packaging instructions(OSX)
This is mostly for my reference.

run: `zip -r ../${PWD##*/}.nw *`

This creates a .nw file outside of your project directory. Take this resulting file and
paste it into the resource folder of a copy of the node-webkit.app file.
Rename this .nw file to `app.nw`, that's it for OSX.