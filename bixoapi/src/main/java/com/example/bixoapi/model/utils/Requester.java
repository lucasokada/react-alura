package com.example.bixoapi.model.utils;

import com.example.bixoapi.model.exceptions.BadRequestException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class Requester {
  private final URL url;
  private HttpURLConnection connection;

  public Requester(java.net.URL url) {
    this.url = url;
  }

  public Requester()  {
    try {
      this.url = new URL("https://www.eojogodobicho.com/deu-no-poste.html");
    } catch (MalformedURLException e) {
      throw new RuntimeException(e);
    }
  }

  private void openConnection() {
    try {
      connection = (HttpURLConnection) url.openConnection();
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  private String getRequestResponse() {
    try {
      BufferedReader responseBodyReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      String response = "";
      String lineContent;
      while((lineContent = responseBodyReader.readLine()) != null && lineContent.length() > 0) {
        response = response.concat(lineContent);
      }
      return response;
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  public String makeRequest() {
    try {
      openConnection();
      connection.setRequestMethod("GET");
      final int responseCode = connection.getResponseCode();
      if(responseCode == HttpURLConnection.HTTP_OK) {
        return getRequestResponse();
      } else {
        throw new BadRequestException("BadRequestException occurred. Response code: " + responseCode);
      }
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }
}
