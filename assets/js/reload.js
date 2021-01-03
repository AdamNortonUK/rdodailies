document.addEventListener('DOMContentLoaded', function () {
   var input = document.getElementById('DailyChallengesGoldMultipler');
   if (localStorage['DailyChallengesGoldMultipler']) { // if job is set
       input.value = localStorage['DailyChallengesGoldMultipler']; // set the value
   }
   input.onchange = function () {
        localStorage['DailyChallengesGoldMultipler'] = this.value; // change localStorage on change
    }
});

    var previous = null;
    var current = null;
    setInterval(function() {
        $.getJSON("https://rdocdn.xyz/api/dailies.php", function(json) {
            current = JSON.stringify(json);            
            if (previous && current && previous !== current) {
                console.log('refresh');
                location.reload();
            }
            previous = current;
        });                       
    }, 2000); 
