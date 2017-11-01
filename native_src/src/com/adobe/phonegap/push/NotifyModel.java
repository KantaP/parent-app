package com.adobe.phonegap.push;

import android.graphics.Bitmap;

/**
 * Created by John on 10/30/2017.
 */

public class NotifyModel {

  private String title;

  private String message;

  private  String from;

  private  String wrongPoint;

  private String time;

  private String name;

  private String route;

  private String place;

  private String status;

  private String note;

  private String channel;

  private String logoName;

  private Bitmap logoBitmap;



  public Bitmap getLogoBitmap() {
    return logoBitmap;
  }

  public void setLogoBitmap(Bitmap logoBitmap) {
    this.logoBitmap = logoBitmap;
  }


  public String getLogoName() {
    return logoName;
  }

  public void setLogoName(String logoName) {
    this.logoName = logoName;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getFrom() {
    return from;
  }

  public void setFrom(String from) {
    this.from = from;
  }

  public String getWrongPoint() {
    return wrongPoint;
  }

  public void setWrongPoint(String wrongPoint) {
    this.wrongPoint = wrongPoint;
  }

  public String getTime() {
    return time;
  }

  public void setTime(String time) {
    this.time = time;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getRoute() {
    return route;
  }

  public void setRoute(String route) {
    this.route = route;
  }

  public String getPlace() {
    return place;
  }

  public void setPlace(String place) {
    this.place = place;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getNote() {
    return note;
  }

  public void setNote(String note) {
    this.note = note;
  }

  public String getChannel() {
    return channel;
  }

  public void setChannel(String channel) {
    this.channel = channel;
  }

  public NotifyModel(){

  }

  public NotifyModel(String title, String message, String from, String wrongPoint, String time, String name, String route, String place, String status, String note, String channel, String logoName, Bitmap logoBitmap) {
    this.title = title;
    this.message = message;
    this.from = from;
    this.wrongPoint = wrongPoint;
    this.time = time;
    this.name = name;
    this.route = route;
    this.place = place;
    this.status = status;
    this.note = note;
    this.channel = channel;
    this.logoName = logoName;
    this.logoBitmap = logoBitmap;
  }

}
