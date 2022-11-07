const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
}
});

function buttonClicked(){
  //const cityForm  = document.querySelector("#foodForm")
  //const getWeatherConditions = async(city) => {
  country=document.getElementById("country").value
  variety=document.getElementById("variety").value

  fetch (`http://universities.hipolabs.com/search?name=${variety}&country=${country}`)
      .then (response => response.json())
      .then (data =>{
          var info = data
             console.log(info)

      var total = data.length 
              var random = [];``
              for(var i = 0;i<total ; i++){
                  var temp = Math.floor(Math.random()*total);
                  if(random.indexOf(temp) == -1){
                      random.push(temp);
                  }
                  else
                  i--;
              }
       var uni0 = data[random[0]].name;
       var uni1 = data[random[1]].name;
       var uni2 = data[random[2]].name;
       var uni3 = data[random[3]].name;
       var uni4 = data[random[4]].name;

       var linkweb0 = data[random[0]].web_pages[0];
       var linkweb1 = data[random[1]].web_pages[0];
       var linkweb2 = data[random[2]].web_pages[0];
       var linkweb3 = data[random[3]].web_pages[0];
       var linkweb4 = data[random[4]].web_pages[0];
      
      document.querySelector(".uni0").innerText = uni0;
      document.querySelector(".uni1").innerText = uni1;
      document.querySelector(".uni2").innerText = uni2;
      document.querySelector(".uni3").innerText = uni3;
      document.querySelector(".uni4").innerText = uni4;

      document.querySelector(".linkweb0").innerText = linkweb0;
      document.querySelector(".linkweb1").innerText = linkweb1;
      document.querySelector(".linkweb2").innerText = linkweb2;
      document.querySelector(".linkweb3").innerText = linkweb3;
      document.querySelector(".linkweb4").innerText = linkweb4;
    
});
}