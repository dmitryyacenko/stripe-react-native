package com.reactnativestripesdk

import com.google.gson.GsonBuilder
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

const val backendUrl = "https://api.tokentransit.com/user/"

class BackendApiFactory {

  fun create(): BackendApi {
    // Set your desired log level. Use Level.BODY for debugging errors.
    // Adding Rx so the calls can be Observable, and adding a Gson converter with
    // leniency to make parsing the results simple.
    val logging = HttpLoggingInterceptor()
      .setLevel(HttpLoggingInterceptor.Level.BODY)

    val httpClient = OkHttpClient.Builder()
      .connectTimeout(TIMEOUT_SECONDS, TimeUnit.SECONDS)
      .readTimeout(TIMEOUT_SECONDS, TimeUnit.SECONDS)
      .addInterceptor(logging)
      .build()

    val gson = GsonBuilder()
      .setLenient()
      .create()

    return Retrofit.Builder()
      .addConverterFactory(GsonConverterFactory.create(gson))
      .baseUrl(backendUrl)
      .client(httpClient)
      .build()
      .create(BackendApi::class.java)
  }

  private companion object {
    private const val TIMEOUT_SECONDS = 15L
  }
}
