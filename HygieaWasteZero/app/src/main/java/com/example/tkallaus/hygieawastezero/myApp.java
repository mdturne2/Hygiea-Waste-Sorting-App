package com.example.tkallaus.hygieawastezero;

import android.app.Application;
import android.content.Context;

public class myApp extends Application {
    private static Context context;

    public void onCreate() {
        super.onCreate();
        myApp.context = getApplicationContext();
    }

    public static Context getAppContext() {
        return myApp.context;
    }
}
