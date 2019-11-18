//Added jquery document.ready wrapper around script 
//Ensures script is run after full page is loaded and variables can be found
//Changed reference from .text to h1 because id=text is not unique
//Under the assumption that the HTML is not to be changed
//Referring to the h1 tag is the most direct approach to changing the content
//Ideally replace id for h1 to a unique reference incase additonal h1 tags are added
//Also enables direct reference by ID in this JS file too

$(document).ready(() =>{
  $("form").submit(event => {
    event.preventDefault();
    // needed to change the post for a get to your random quotes route.
    axios.post("").then(response => {
      quote = response.data;
      $("h1").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("h1").html(quote);
    });
  });
});

