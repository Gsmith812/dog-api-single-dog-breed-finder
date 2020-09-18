"use strict";

function handleDogImg(responseJson) {
    let randomDogImg = responseJson.message;
    $(".results").append(`<div class="dog-img"><img src="${randomDogImg}" alt="Picture of dog"></div>`);
}

function getDogImages(userInput) {
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => handleDogImg(responseJson))
        .catch(error => alert("Dog Breed could not be found."));
}

function handleSubmitClicked() {
    $("form").submit(event => {
        event.preventDefault();
        let userInput = $("input").val()
        if (userInput === "") {
            alert("Please enter a dog breed.");
        }
        else {
            $(".results").empty();            
            $(".results").append("<h2>Here is a random picture of a fur baby you asked for!</h2>")
            getDogImages(userInput);
            console.log(userInput);
        }
    });
}

$(function() {
    console.log("Application Loaded, Now Ready for Submit!");
    handleSubmitClicked();
});