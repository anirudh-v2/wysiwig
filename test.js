function response(err,data) {
  if(err){
    console.error(err);
  }
  else{
    console.log(data);
  }
}

ajax("http://some.url.1",response);