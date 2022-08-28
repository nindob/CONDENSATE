function netScrape() {
    async function getText() {
        let response = await 
        Content-Type: "https://www.nationalgeographic.com/environment/article/big-changes-are-coming-for-the-colorado-river-soonand-they-could-get-messy"
        fetch(
          "https://api.apify.com/v2/acts/apify~web-scraper/runs?token=apify_api_3aiAUEfeDgIUZkfDMiodUa0eT7kop50nreKB"
        );
        let data = await response.json();
        return data;
      }
      getText().then(data => console.log(data));
}

function createArticleID() {
    var articleText = 'A man rescued a dying bunny that was drowning in his pool after spotting a strange reflection out of the corner of his eye. The Arizona resident noticed the rabbit while walking back inside from his backyard. He found the bunny just as it had stopped moving, clearly exhausted, and began dropping its head underwater. The 35-year-old frantically scrambled to find his pool scooper and get the bunny to safety. The man, who makes YouTube videos, then grabbed his camera and began filming the situation. Initially, the bunny was too tired and far too weak to even move—occasionally it would try to raise its head but even that was too strenuous. The content creator from Lake Havasu City, moved the rabbit into the sunlight and fed it vegetables, sitting with the animal for several hours hoping it would begin to warm up and get some strength. “I sat the entire time so no predators could get it whilst it was still vulnerable. “I didn’t touch it with my hands. The closest we got was when it sat in between my feet for a while. Slowly, it started moving more and then it eventually just hopped away. A few days later he saw it again and absolutely knew it recognized him. The bunny came over really close to him and looked at him for a while before hopping off—which he sees as a sign that the animal knew just who he was and was grateful.'
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
                "content": articleText,
                "contentType": "text/plain"
              },
              "from": {
                "name": "User",
                "userId": "UserId"
              }
            }
          ]
        }),
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        ID = Object.values(response);
        console.log(ID[0])
        const myTimeout = setTimeout(createSummary, 2000);
      });
}

function createSummary() {
    var urlID = "https://api-labs.symbl.ai/v1/conversations/"
    console.log(ID[0])
    urlID += ID[0]
    urlID += "/summary?eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjA5ODE1LCJleHAiOjE2NjE2OTYyMTUsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.XGtaIRNTHPNV_t_aaZJVia7vND423Y-8EQOPt3Rc_Q7DmL29j_k9kPYf-OVHRXmRwuyD8OFXcA_BavutAuJv1IFE8iwJER4myLM9ZElEcYRUiWO1t5NZNUrIVSa4lx7Jh0bK5Gfga-trumPBd1MTZGpyP27IHGs2xUNubLRALTAdx-WmdM4kIHrZpAe8fUwCWIbXSvoHztCuz-q9BEnhPvIl91Tl7jsmdELRzQaT65AWI-Dppth_z5_Ljeptj_suUZDPeymzGqlpK-P364qyPXhBopgKI_9M5PqoNRaZ6jDqNg4g0Dmi80lgh2t744uEJ_S0l6sKUiGI9q4pzPf3ww"
    var settings = {
      "url": urlID,
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjQ4Nzk1MTA0ODMyMzg5MTIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiY0hXT1ZsOXNJSlp0d29mREZuVlY5SlBYb3VhMG1ObHZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjYxNjE1NDUxLCJleHAiOjE2NjE3MDE4NTEsImF6cCI6ImNIV09WbDlzSUpadHdvZkRGblZWOUpQWG91YTBtTmx2IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.MsprMhEh5-Sv3pGv6meuQB-M2CXfkcaD8G9RRTAUkLigmpRZcZOHlv39_74eu4d6o8cjadflfffn-40vO9f4edz_7WAqVVixjVwfSkC9OiJXanDBavDbTOkKKoO0nHir5E0LG8cqM6Mhmh3SQIvADZMp-ftY0MMO2Na5l45LiNY6nEE9U3RZG7K8Y9V0O2danBk2wz2D5HpqNY2ZA7fH83DxFdmIvmQVyUd6YPOA8iElUC5feu30DyFNebANwi2WrZ6K509ITFd6zhqflYgBjnomx0ZdtRfsYnAwdwJelQ0yDguiZu4mnclXw8b6LEnfofs0WQ1JZ1GcZFRyOqWwGA"
      },
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response)
      summary = (JSON.stringify(response))
      nukedtext = summary.split('"',12)
      printEndResult()
    });
}

function printEndResult() {
  let endResult = nukedtext[9]
  document.getElementById('endresult').innerText = endResult;
}
