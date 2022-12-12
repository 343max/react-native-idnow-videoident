package expo.modules.tokenstreetreactnativeidnowvideoident

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.ArrayList
import java.util.Collections
import java.util.List

class ReactNativeIdnowVideoidentPackage : ReactPackage {
    @NonNull
    @Override
    fun createNativeModules(@NonNull reactContext: ReactApplicationContext?): List<NativeModule> {
        val modules: List<NativeModule> = ArrayList()
        modules.add(ReactNativeIdnowVideoidentModule(reactContext))
        return modules
    }

    @NonNull
    @Override
    fun createViewManagers(@NonNull reactContext: ReactApplicationContext?): List<ViewManager> {
        return Collections.emptyList()
    }
}
