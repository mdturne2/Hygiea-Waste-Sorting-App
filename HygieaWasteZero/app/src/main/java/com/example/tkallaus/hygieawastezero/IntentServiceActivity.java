package com.example.tkallaus.hygieawastezero;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.protocol.BasicHttpContext;
import org.apache.http.protocol.HttpContext;
import org.apache.http.util.EntityUtils;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;


public class IntentServiceActivity extends AppCompatActivity {
    private TextView result;
    private Bitmap bitmap;
    private File context;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        result = (TextView) findViewById(R.id.resultText);

    }

    @Override
    protected void onStop() {
        super.onStop();
    }

    public void postRequest(Bitmap bmp, File con) {
        this.bitmap = bmp;
        this.context = con;
        new UploadImageTask().execute();
    }


    private class UploadImageTask extends AsyncTask<String, Integer, String> {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            //Toast.makeText(IntentServiceActivity.this, "Uploading Image", Toast.LENGTH_LONG).show();
        }

        @Override
        protected String doInBackground(String... params) {
            try {
                HttpClient httpClient = new DefaultHttpClient();
                HttpContext localContext = new BasicHttpContext();
                HttpPost httpPost = new HttpPost("http://10.156.95.185:8000/trash/");

                File f = new File(context, "temp.bmp");
                f.createNewFile();

                //Convert bitmap to byte array
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.PNG, 0 /*ignored for PNG*/, bos);
                byte[] bitmapdata = bos.toByteArray();

                //write the bytes in file
                FileOutputStream fos = new FileOutputStream(f);
                fos.write(bitmapdata);
                fos.flush();
                fos.close();

                MultipartEntity entity = new MultipartEntity(HttpMultipartMode.BROWSER_COMPATIBLE);

                entity.addPart("image", new FileBody(f));

                httpPost.setEntity(entity);

                HttpResponse response = httpClient.execute(httpPost, localContext);
                String responseTxt = EntityUtils.toString(response.getEntity());

                return responseTxt;
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
        }

        @Override
        protected void onPostExecute(String resultTxt) {
            super.onPostExecute(resultTxt);
            //Toast.makeText(IntentServiceActivity.this, "Image Uploaded", Toast.LENGTH_LONG).show();
            if (result != null){
                Log.d("response", resultTxt);
                result.setText(resultTxt);
                Log.d("Debug", "the end!");
            }
        }
    }
}