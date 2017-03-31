# nodebb-plugin-reproduce-redirection-issue

Install the plugin on your nodeBB and active it.

Go to the categories page of nodeBB instance: http://localhost:4567/categories

Click on any category.

  - On Chrome and Firefox you will be redirected to http://localhost:4567/success
  
  - On IE 11 or Microsoft Edge you will get an error page, so look on the developers console to see the error message:
  
    SCRIPT7002: XMLHttpRequest: Network Error 0x800c0008, The download of the specified resource has failed.
  
  
To see the same error with jQuery only: https://github.com/marcelo-lopes/jquery-ajax-302-issue
