import {app, BrowserWindow, ipcMain} from 'electron'
import * as path from 'path';

require('electron-reload')(__dirname, {
    electron: path.join(process.cwd(), 'node_modules', '.bin', 'electron.cmd')
});

app.on('ready', ()=>{
    const win = new BrowserWindow({
        width: 400, maxWidth: 800,
        height: 600, maxHeight: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    })
    console.log(__dirname)
    win.removeMenu()
    win.loadFile('./src/public/index.html')
    //win.webContents.openDevTools()
})

app.on('window-all-closed', ()=>{app.quit})


