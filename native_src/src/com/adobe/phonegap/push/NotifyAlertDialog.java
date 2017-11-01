package com.adobe.phonegap.push;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.animation.Animation;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.ViewFlipper;


import com.ecoachmanager.parentapp.R;

import java.util.ArrayList;

/**
 * Created by user on 2/8/2017.
 */

public class NotifyAlertDialog extends Activity {

  private static String TAG = "NotifyAlertDialog";
  private ArrayList<NotifyModel> notifyModel;

  LinearLayout layoutDialog;
  RelativeLayout layoutMain;
  TextView txtTime, txtUser, txtRoute, txtLocation, txtAlight, txtNote, txtAdminMsg;
  ImageButton btnNavLeft, btnNavRight;
  Button btnOk;
  ImageView imgViewLogoDialog;

  ViewFlipper viewFlipper;
  Animation in;
  Animation out;
  private float initialX;
  RelativeLayout layoutContent;
  private static View viewContentLoader;

  private FCMService fcmService = new FCMService();
  public static boolean active = false;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setFinishOnTouchOutside(false);
    setContentView(R.layout.custom_dialog);

    //layoutDialog = (LinearLayout)findViewById(R.id.layoutDialog);
    //layoutDialog.setBackgroundColor(Color.TRANSPARENT);

    notifyModel = new ArrayList<NotifyModel>();

    initView();

    btnOk.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        NotifyListManager.getInstance().remove();
        fcmService.clearNotification();

        finish();

        Log.v(TAG, " btnOK Click!");
      }
    });

    btnNavLeft.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        viewFlipper.setInAnimation(NotifyAlertDialog.this, R.anim.in_left);
        viewFlipper.setOutAnimation(NotifyAlertDialog.this, R.anim.out_right);
        viewFlipper.showPrevious();
        Log.v(TAG, " viewFlipper Previous");
      }
    });

    btnNavRight.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        viewFlipper.setInAnimation(NotifyAlertDialog.this, R.anim.in_right);
        viewFlipper.setOutAnimation(NotifyAlertDialog.this, R.anim.out_left);
        viewFlipper.showNext();
        Log.v(TAG, " viewFlipper Next");
      }
    });


  }

  private void fecthDataToFlipper() {
    NotifyListManager dao = NotifyListManager.getInstance();

    viewFlipper.removeAllViews(); // clear empty view is first.
    // loop for creating View's

    // image
    imgViewLogoDialog.setBackground(null);
    if(dao.getDao(0).getLogoBitmap() != null){
      imgViewLogoDialog.setImageBitmap(dao.getDao(0).getLogoBitmap());
    } else {
      imgViewLogoDialog.setBackgroundResource(R.drawable.logo_dialog_default);
    }

    for (int i = 0; i < dao.getSize(); i++) {

      LayoutInflater inflater = (LayoutInflater) getSystemService(this.LAYOUT_INFLATER_SERVICE);


      // admin message
      if(dao.getDao(i).getFrom() != null) {
        if (dao.getDao(i).getFrom().equals("admin")) {
          if (i == 0) {
            layoutMain.setBackgroundColor(Color.parseColor("#f7931e"));
          }
          viewContentLoader = (View) inflater.inflate(R.layout.custom_msg_admin_item, null);
          txtAdminMsg = (TextView) viewContentLoader.findViewById(R.id.txtAdminMsg);
          txtAdminMsg.setText(dao.getDao(i).getMessage());
        }
      } else {
        if (i == 0) {
          layoutMain.setBackgroundColor(Color.parseColor("#342B6A"));
        }
        viewContentLoader = (View) inflater.inflate(R.layout.custom_msg_children_item, null);

        txtTime = (TextView) viewContentLoader.findViewById(R.id.txtTime);
        txtUser = (TextView) viewContentLoader.findViewById(R.id.txtUser);
        txtRoute = (TextView) viewContentLoader.findViewById(R.id.txtRoute);
        txtLocation = (TextView) viewContentLoader.findViewById(R.id.txtLocation);
        txtAlight = (TextView) viewContentLoader.findViewById(R.id.txtAlight);
        txtNote = (TextView) viewContentLoader.findViewById(R.id.txtNote);

        txtTime.setText(dao.getDao(i).getTime());
        txtUser.setText(dao.getDao(i).getName());
        txtRoute.setText(dao.getDao(i).getRoute());
        txtLocation.setText(dao.getDao(i).getPlace());
        //textAlight
        txtNote.setText("" + i + "=" + dao.getDao(i).getName());
      }
      viewFlipper.addView(viewContentLoader, i); // add view into flipper
      //i = dao.getSize(); // for test once data

      // move to last data
      if((dao.getSize() > 1)){
        viewFlipper.setInAnimation(NotifyAlertDialog.this, R.anim.in_right);
        viewFlipper.setOutAnimation(NotifyAlertDialog.this, R.anim.out_left);
        viewFlipper.setDisplayedChild(dao.getSize() - 1);
      }
    }

    // hide button nav
    if (viewFlipper.getChildCount() <= 1) {
      btnNavRight.setVisibility(View.GONE);
      btnNavLeft.setVisibility(View.GONE);
    } else {
      btnNavRight.setVisibility(View.VISIBLE);
      btnNavLeft.setVisibility(View.VISIBLE);
    }
  }

  @Override
  public boolean onTouchEvent(MotionEvent event) {

    if (viewFlipper.getChildCount() > 1) {

      switch (event.getAction()) {
        case MotionEvent.ACTION_DOWN:
          initialX = event.getX();
          break;
        case MotionEvent.ACTION_UP:
          float finalX = event.getX();
          if (initialX > finalX) {
            if (viewFlipper.getDisplayedChild() == 1)
              break;

            viewFlipper.setInAnimation(this, R.anim.in_right);
            viewFlipper.setOutAnimation(this, R.anim.out_left);

            viewFlipper.showNext();
          } else {
            if (viewFlipper.getDisplayedChild() == 0)
              break;

            viewFlipper.setInAnimation(this, R.anim.in_left);
            viewFlipper.setOutAnimation(this, R.anim.out_right);

            viewFlipper.showPrevious();
          }
          break;
      }
    }

    return false;
  }

  private void initView() {

    layoutMain = (RelativeLayout) findViewById(R.id.layoutMain);
    imgViewLogoDialog = (ImageView)findViewById(R.id.logoDialog);

    viewFlipper = (ViewFlipper) findViewById(R.id.viewFlipper);
    viewFlipper.setAutoStart(false);
    // set the animation type to ViewFlipper
    viewFlipper.setFlipInterval(3000);


    btnNavLeft = (ImageButton) findViewById(R.id.btnNavLeft);
    btnNavRight = (ImageButton) findViewById(R.id.btnNavRight);
    btnOk = (Button) findViewById(R.id.btnOk);
  }

  @Override
  protected void onResume() {
    super.onResume();
    fecthDataToFlipper();

  }

  @Override
  protected void onStart() {
    super.onStart();

  }


  @Override
  protected void onDestroy() {
    NotifyListManager.getInstance().remove();
    fcmService.clearNotification();
    viewFlipper.removeAllViews();
    super.onDestroy();
  }
}
