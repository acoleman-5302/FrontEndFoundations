var app = {
    // Application Constructor
    initialize: function(){
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },
    takephoto: function() {
        let opts = {
            quality:80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
         };
        navigator.camera.getPicture(app.ftw, app.wtf, opts);
        app.obtainLocation();   // This calls the obtain location function below
    },
    ftw: function(imgURI) {
        let pic = document.getElementById('photo');
        pic.src = 'data:image/jpeg;base64,' + imgURI;
    },
    wtf: function(msg) {
        document.getElementById('msg').textContent = msg;
    },
    obtainLocation: function() {
        navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
    },

    onSuccess: function(position) {
        var element = document.getElementById('msg');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    },

    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
};

app.initialize();