

// app and BrowserWindow are two Electron modules. App controls each event lifecycle of this app and BrowserWindow manages this app's windows
const { app, BrowserWindow } = require('electron')



//createWindow() loads the webpage into a new BrowserWindow, under the name 'win'
const createWindow = () => {
    const win = new BrowserWindow ({
        width: 800,
        height: 600,
    })
    
    win.loadFile('index.html')
}


//calls createWindow() when the app is ready using more electron-native packages
app.whenReady().then(() => {
    createWindow()
})