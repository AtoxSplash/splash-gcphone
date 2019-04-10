This is my own version of https://github.com/N3MTV/gcphone
GCPhone is a vue.js android styled phone for FiveM

## Notes
+ ESX is required

## Changes from gcphone
+ Improved design
+ Added Twitter
+ Added command /deletetweet (Identifier or Twitter handle)
+ Added Inventory
+ Changed icons to fit google style android apps
+ Iphone x phone case now features a notch and added a Oneplus 5T
+ Fixed some translations and set default language to english
+ Removed stock market
+ Removed bottom all apps menu

## Upcoming features / updates
- Mouse navigation instead of arrows keys etc
- Adding weapons to inventory
- Youtube, Vehicle app, ESX invoices app (Not sure yet)

## Screenshots
<div>
  <img src="https://i.imgur.com/y0pgu7C.png" height="500"/>
  <img src="https://i.imgur.com/5wGwzLr.png" height="500"/>
  <img src="https://i.imgur.com/roPMssO.png" height="500"/>
  <img src="https://i.imgur.com/akSlMXW.png" height="500"/>
  <img src="https://i.imgur.com/Eb2XT1h.png" height="500"/>
</div>

## Installation (Resource only)
1. Download the newest version from https://github.com/AtoxSplash/splash-gcphone/releases
2. Open the zip file a navigate to splash-gcphone-x.xx/
3. Import all .sql files to your database
4. Open resources folder and drag both gcphone and esx_addons_gcphone to your servers resource folder
5. Add both resources to your server like so

start esx_addons_gcphone
start gcphone


## Installation and building (For development)
1. Download the newest version from https://github.com/AtoxSplash/splash-gcphone/releases
2. Open the zip file a navigate to splash-gcphone-x.xx/
3. Import all .sql files
4. Drag both folders to the appropriate locations to match the resources folder
5. Start both resources in your server.cfg

-- Building and developing
Open a cmd inside the "src_htmlPhone" folder
Run "npm i"
You can build the project to the gcphone resource with "npm run build"
While developing you should use "npm run dev"

## Ingame introduction
Default keybind is Z
You can navigate with the arrow buttons
Enter to confirm and return to go back

## License
[GNU v3](https://opensource.org/licenses/gpl-3.0.html)

Jonathan (Gannon) D
