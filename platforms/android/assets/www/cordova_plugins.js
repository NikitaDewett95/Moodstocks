cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.moodstocks.phonegap/www/MS4Plugin.js",
        "id": "com.moodstocks.phonegap.MS4Plugin",
        "clobbers": [
            "MS4Plugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.moodstocks.phonegap": "1.1.0",
    "cordova-plugin-device": "1.1.2-dev",
    "cordova-plugin-camera": "2.1.1-dev"
}
// BOTTOM OF METADATA
});