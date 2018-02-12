console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', handleButtonClick);
    getJokes();
}
//add post

function getJokes(){
    $.ajax({
        type: 'GET',
        url: '/jokes',
        success: function(result){
            console.log('success on getJokes GET', result);
            displayResults(result):  
        },
        error: function(){
            console.error('failure on the getJokes GET');
        },
    })

//add display results

}