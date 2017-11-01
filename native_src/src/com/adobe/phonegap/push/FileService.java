package com.adobe.phonegap.push;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Environment;
import android.util.Log;

import com.ecoachmanager.parentapp.MainActivity;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;


public class FileService  {

  private static String TAG = "FileService";
  //private final String fileName = "jj test acc Tracking_school.jpg";

  public Bitmap getFile(String name) {

    Bitmap bitmap;

    File extStore = Environment.getExternalStorageDirectory();
    String path = extStore.getAbsolutePath() + "/Android/data/com.ecoachmanager.parentapp/files/" + name;
    Log.i(TAG, "Read file: " + path);

    String s = "";
    String fileContent = "";

    try {
      File myFile = new File(path);
      FileInputStream streamIn  = new FileInputStream(myFile);

      BitmapFactory.Options options = new BitmapFactory.Options();
      options.inPreferredConfig = Bitmap.Config.ARGB_8888;

      bitmap = BitmapFactory.decodeStream(streamIn);
      streamIn.close();

    } catch (IOException e) {
      e.printStackTrace();
      return null;
    }

    return bitmap;
  }
}
