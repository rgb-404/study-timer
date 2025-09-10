// app and BrowserWindow are two Electron modules. App controls each event lifecycle of this app and BrowserWindow manages this app's windows
// this desktop application's instance is henceforth 'app' as you can see in code
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
//create's a window if when activated, there are no windows
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow
    })
})


//'darwin' is the apple code for if an application is running, this quits it without manually going to terminal
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
}) 