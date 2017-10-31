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
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.ViewFlipper;


import com.ecoachmanager.parentapp.R;
import com.google.firebase.messaging.FirebaseMessagingService;

import java.util.ArrayList;

/**
 * Created by user on 2/8/2017.
 */

public class NotifyAlertDialog extends Activity {

  private static String TAG = "NotifyAlertDialog";
  private ArrayList<NotifyModel> notifyModel;

  LinearLayout layoutDialog;
  TextView txtTime,txtUser,txtRoute,txtLocation,txtAlight,txtNote;
  ImageButton btnNavLeft,btnNavRight;
  Button btnOk;

  ViewFlipper viewFlipper;
  Animation in;
  Animation out;
  private float initialX;
  RelativeLayout layoutContent;
  private static View viewContentLoader;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    setFinishOnTouchOutside(false);
    setContentView(R.layout.custom_dialog);


    layoutDialog = (LinearLayout)findViewById(R.id.layoutDialog);
    layoutDialog.setBackgroundColor(Color.TRANSPARENT);

    notifyModel = new ArrayList<NotifyModel>();

    initView();

    btnOk.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {

        NotifyListManager.getInstance().remove();
        FCMService fcmService = new FCMService();
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

    NotifyListManager dao = NotifyListManager.getInstance();

    // loop for creating View's
    viewFlipper.removeAllViews();
    for (int i = 0; i < dao.getSize(); i++) {


      LayoutInflater inflater = (LayoutInflater) getSystemService(this.LAYOUT_INFLATER_SERVICE);
      viewContentLoader = (View)inflater.inflate(R.layout.custom_msg_children_item, null);

      txtTime = (TextView)viewContentLoader.findViewById(R.id.txtTime);
      txtUser = (TextView)viewContentLoader.findViewById(R.id.txtUser);
      txtRoute = (TextView)viewContentLoader.findViewById(R.id.txtRoute);
      txtLocation = (TextView)viewContentLoader.findViewById(R.id.txtLocation);
      txtAlight = (TextView)viewContentLoader.findViewById(R.id.txtAlight);
      txtNote = (TextView)viewContentLoader.findViewById(R.id.txtNote);

      txtTime.setText(dao.getDao(i).getTime());
      txtUser.setText(dao.getDao(i).getName());
      txtRoute.setText(dao.getDao(i).getRoute());
      txtLocation.setText(dao.getDao(i).getPlace());
      //textAlight
      txtNote.setText("" + i + "=" + dao.getDao(i).getName());
      viewFlipper.addView(viewContentLoader, i);

      //i = dao.getSize(); // for test once data

    }

    // hide button nav
    if(viewFlipper.getChildCount() <= 1){
      btnNavRight.setVisibility(View.GONE);
      btnNavLeft.setVisibility(View.GONE);
    } else {
      btnNavRight.setVisibility(View.VISIBLE);
      btnNavLeft.setVisibility(View.VISIBLE);
    }
  }
  @Override
  public boolean onTouchEvent(MotionEvent event) {

    if(viewFlipper.getChildCount() > 1) {

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

    viewFlipper = (ViewFlipper)findViewById(R.id.viewFlipper);
    viewFlipper.setAutoStart(false);
    // set the animation type to ViewFlipper
    viewFlipper.setFlipInterval(3000);


    btnNavLeft = (ImageButton)findViewById(R.id.btnNavLeft);
    btnNavRight = (ImageButton)findViewById(R.id.btnNavRight);
    btnOk = (Button)findViewById(R.id.btnOk);
  }

}
