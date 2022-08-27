function processInput() {
    let linkInput = document.getElementsByClassName("txtinput")
    var data = JSON.stringify({
        "messages": [
          {
            "payload": {
              "content": "",
              "contentType": "text/plain"
            },
            "from": {
              "name": "John",
              "userId": "john@example.com"
            }
          }
        ]
      });

      let content = (linkInput)

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("POST", "https://api.symbl.ai/v1/process/text");
      xhr.setRequestHeader("x-api-key", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA");
      xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.send(data);
}