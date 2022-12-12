package expo.modules.tokenstreetreactnativeidnowvideoident

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.module.annotations.ReactModule
import de.idnow.sdk.IDnowSDK

@ReactModule(name = ReactNativeIdnowVideoidentModule.name)
class ReactNativeIdnowVideoidentModule(@NonNull reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private val reactContext: ReactApplicationContext
    private var globalErrorCallback: Callback? = null
    private var globalSuccessCallback: Callback? = null

    init {
        reactContext.addActivityEventListener(
            object : BaseActivityEventListener() {
                @Override
                fun onActivityResult(
                    @Nullable activity: Activity?,
                    requestCode: Int,
                    resultCode: Int,
                    @Nullable data: Intent?
                ) {
                    if (requestCode == IDnowSDK.REQUEST_ID_NOW_SDK) {
                        resultCallback(resultCode, null)
                    }
                }
            }
        )
        this.reactContext = reactContext
    }

    private fun resultCallback(resultCode: Int, @Nullable e: Exception?) {
        val params: WritableMap = Arguments.createMap()
        val resultCodeKey = "resultCode"
        val errorMessageKey = "errorMessage"
        when (resultCode) {
            IDnowSDK.RESULT_CODE_FAILED -> {
                params.putString(resultCodeKey, "FAILED")
                if (e != null) params.putString(errorMessageKey, e.getMessage())
                globalErrorCallback.invoke(params)
            }
            IDnowSDK.RESULT_CODE_SUCCESS -> {
                params.putString(resultCodeKey, "SUCCESS")
                globalSuccessCallback.invoke(params)
            }
            IDnowSDK.RESULT_CODE_CANCEL -> {
                params.putString(resultCodeKey, "CANCEL")
                if (e != null) params.putString(errorMessageKey, e.getMessage())
                globalErrorCallback.invoke(params)
            }
            IDnowSDK.RESULT_CODE_WRONG_IDENT, IDnowSDK.RESULT_CODE_FALLBACK_VID, 11, IDnowSDK.RESULT_CODE_INTERNAL -> {
                params.putString(resultCodeKey, "INTERNAL_ERROR")
                if (e != null) params.putString(errorMessageKey, e.getMessage())
                globalErrorCallback.invoke(params)
            }
            else -> {
                params.putString(resultCodeKey, "INTERNAL_ERROR")
                if (e != null) params.putString(errorMessageKey, e.getMessage())
                globalErrorCallback.invoke(params)
            }
        }
    }

    @ReactMethod
    fun startVideoIdent(
        @NonNull settings: ReadableMap?,
        @NonNull successCallback: Callback?,
        @NonNull errorCallback: Callback?
    ) {
        globalErrorCallback = errorCallback
        globalSuccessCallback = successCallback
        val currentActivity: Activity = getCurrentActivity()
        try {
            val instance: IDnowSDK =
                ReactNativeIdnowSDK.initializeWithSettings(currentActivity, settings, reactContext)
            instance.start(IDnowSDK.getTransactionToken())
        } catch (e: Exception) {
            resultCallback(IDnowSDK.RESULT_CODE_INTERNAL, e)
        }
    }

    companion object {
        @get:NonNull
        @get:Override
        val name = "ReactNativeIdnowVideoident"
            get() = Companion.field
    }
}
