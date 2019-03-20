#import <Capacitor/Capacitor.h>

CAP_PLUGIN(MyPlugin, "MyPlugin",
           CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
           )
