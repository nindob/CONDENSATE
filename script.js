
function processInput() {
    let linkInput = document.getElementsByClassName("txtinput")
    var settings = {
        "url": "https://api.symbl.ai/v1/process/text",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "x-api-key": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA",
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA",
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "messages": [
            {
              "payload": {
                "content": "Peel Regional Police have a tractor trailer driver in custody after a multi-vehicle collision in Brampton killed one woman and left 15 others injured. Police said 10 cars and a tractor trailer were involved in the collision shortly after midnight on Saturday morning near the intersection of Queen Street and The Gore Road. As a result, multiple people were trapped beneath vehicles. Paramedics said a woman was pronounced dead at the scene, while 13 people were taken to local hospitals and two men were taken to trauma centres in Toronto. The woman was a passenger. The driver is expected to face numerous charges, including dangerous driving causing death and dangerous driving causing bodily harm, according to Const. Sarah Patten. The investigation continues and police are asking people to avoid the area.",
                "contentType": "text/plain"
              },
              "from": {
                "name": "John",
                "userId": "john@example.com"
              }
            }
          ]
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}