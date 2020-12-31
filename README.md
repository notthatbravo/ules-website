### Was bored so I decided to hop on this

### Couldn't find designs for mobile screens, pardon the responsiveness...

### All designs are owned by [Alaba Arts][alabaarts]

### While you're here, follow me on [Twitter][twitter]

### I'm not much of a celeb sooooooooo here's my [Whatsapp][whatsapp] contact too. (I'm not allergic to gigs, projects and/or internships)

### Do star the repo.... heard it's a fun thing to do on github xD

To Javascript gurus out there, I have an issue with the nav on mobile screens.

Default css says the toggle buttons (hamburger and close icons) are display:none;

With media query, only the hamburger icon is shown (display:block)

With js, onclick, the hamburger icon is hidden(style.display = "none") and the close icon is shown (style.display = "block")

If the "x" icon is clicked, the reverse is the case

Problem: The clicking leaves the "x" icon with an inline styling of (display:block) or the hamburger icon, which inherently displaces the initial styling of display: none;

If I was to view this on a pc, it'll leave the toggle-buttons still showing even when I'm in desktop mode

Please view it on a pc, enter Responsive mode (Ctrl + Shift + M), click the buttons to toggle the nav-menu, then exit responsive mode (You'd see either of the two buttons still shown on the navbar for desktops)

The files to look into are:

--script.js

--sass/layouts/_header.scss_

[alabaarts]: https://dribbble.com/alaba_arts
[twitter]: https://twitter.com/cruise_n_codes
[whatsapp]: https://wa.me/2347088148692