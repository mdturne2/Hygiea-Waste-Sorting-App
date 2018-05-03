package com.example.tkallaus.hygieawastezero;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.koushikdutta.ion.ProgressCallback;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;


public class MainActivity extends AppCompatActivity {
    static final int REQUEST_IMAGE_CAPTURE =1;
    //final IntentServiceActivity intentPost = new IntentServiceActivity();
    private TextView resultTV;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final Button captureButton = findViewById(R.id.CaptureButton);
        this.resultTV = findViewById(R.id.resultText);
        captureButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dispatchTakePictureIntent();
            }
        });

    }
    private void dispatchTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
        }
    }



    protected  void  onActivityResult(int requestCode, int resultCode, Intent data){
        if (requestCode == REQUEST_IMAGE_CAPTURE && resultCode == RESULT_OK) {
            Bundle extras = data.getExtras();
            Bitmap bitmap = (Bitmap) extras.get("data");
            File filesDir = getApplicationContext().getFilesDir();

            File f = new File(filesDir, "temp.bmp");
            try {
                f.createNewFile();
                //Convert bitmap to byte array
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.PNG, 0 , bos);
                byte[] bitmapdata = bos.toByteArray();

                //write the bytes in file
                FileOutputStream fos = new FileOutputStream(f);
                fos.write(bitmapdata);
                fos.flush();
                fos.close();
            } catch (IOException e) {
                Log.e("HYWZ:ERROR:",Log.getStackTraceString(e));
            }
            try{
                Ion.with(MainActivity.this)
                        .load("POST","http://192.168.0.19:8000/trash/")
                        .uploadProgressHandler(new ProgressCallback() {
                            @Override
                            public void onProgress(long downloaded, long total) {

                            }
                        })
                        .setMultipartFile("image","image/jpeg",f)
                        .asString()
                        .setCallback(this.uploadCallback);
            }catch(Exception e){
                Log.e("HYWZ:ERROR:",Log.getStackTraceString(e));
            }


            //IntentServiceActivity intentPost = new IntentServiceActivity();
            //intentPost.postRequest(imageBitmap, filesDir);
        }
    }


    private FutureCallback<String> uploadCallback = new FutureCallback<String>() {
        @Override
        public void onCompleted(Exception e, String res) {
            if(res != null){
                resultTV.setText(res);
            }
            else{
                resultTV.setText("Upload Failed");
            }
        }
    };
}
