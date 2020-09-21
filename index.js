"use strict";

function handleDogImg(responseJson) {
    let randomDogImg = responseJson.message;
    $(".results-img").replaceWith(`<img src="${randomDogImg}" alt="Picture of dog" class="results-img">`);
    $(".results").removeClass("hidden");
}

function getDogImages(userInput) {
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
        .then(response => response.ok ? response.json() : Promise.reject({err : response.status}))
        .then(responseJson => handleDogImg(responseJson))
        .catch(error => alert("No matching dog breed found.", error));
}

function handleSubmitClicked() {
    $("form").submit(event => {
        event.preventDefault();
        let userInput = $("input").val()
        getDogImages(userInput);
    });
}

$(function() {
    console.log("Application Loaded, Now Ready for Submit!");
    handleSubmitClicked();
});