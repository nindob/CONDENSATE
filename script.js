
function createArticleID() {
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
                "content": (RAWTEXT),
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

function createSummary() {
    var settings = {
        "url": "https://api-labs.symbl.ai/v1/conversations/(ID)/summary?eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjA5ODE1LCJleHAiOjE2NjE2OTYyMTUsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.XGtaIRNTHPNV_t_aaZJVia7vND423Y-8EQOPt3Rc_Q7DmL29j_k9kPYf-OVHRXmRwuyD8OFXcA_BavutAuJv1IFE8iwJER4myLM9ZElEcYRUiWO1t5NZNUrIVSa4lx7Jh0bK5Gfga-trumPBd1MTZGpyP27IHGs2xUNubLRALTAdx-WmdM4kIHrZpAe8fUwCWIbXSvoHztCuz-q9BEnhPvIl91Tl7jsmdELRzQaT65AWI-Dppth_z5_Ljeptj_suUZDPeymzGqlpK-P364qyPXhBopgKI_9M5PqoNRaZ6jDqNg4g0Dmi80lgh2t744uEJ_S0l6sKUiGI9q4pzPf3ww",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

function printEndResult() {
  document.getElementById('endresult').innerText = "test";
}