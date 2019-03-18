$('#getBtn').click(function() {
    var url = 'https://api.edamam.com/search?app_id=c20d3309&app_key=e105529efc9a3fd59b07ac45f1d49889&q=' + $('#recipeInput').val();
    let term = "";
    let params = "";
    $('#getBtn').click(function(){
        $('#resultContent').html('');
        params = "";
        term = $('#searchTerm').val();
        params = "&from=" + $('#form').val();
        params = "&to=" + $('#to').val();
        if ($('#healthOptions').val() == "soy-free") {
            params += "&health=soy-free";
        } else if ($('#healthOptions').val() == "dairy-free") {
            params += "&health=dairy-free";
        } else if ($('#healthOptions').val() == "kosher") {
            params += "&health=kosher";
        } else if ($('#healthOptions').val() == "low-sugar") {
            params += "&health=low-sugar"
        }
        /*$(label).click(function(){
            if($('checkbox').val() == "balanced"){
                params += "&diet=balanced";
            }
            else if($('checkbox').val() == "high-protein"){
                params += "&diet=high-protein";
            }
            else if($('checkbox').val() == "high-fiber"){
                params += "&diet=high-fiber";
            }
            else if($('checkbox').val() == "low-fat"){
                params += "&diet=low-fat"
            }
            else if($('checkbox').val() == "low-carb"){
                params += "&diet=low-carb"
            }
            else if($('checkbox').val() == "low-sodium"){
                params += "&diet=low-sodium"
            }

        });*/
        $.getJSON(url + term + params, (data) => {
            data.hits.forEach((r, i) => {
                let recipeItems = "";
                data.hits[i].recipe.ingredients.forEach((recipeItem) => {
                    recipeItems += '<li>' + recipeItem.text + '</li>';
                });
                //console.log(recipeItems);
                $('#recipeContent').append('<div class="recipeTitle">' + r.recipe.label + '</div><img src=" ' + r.recipe.image + ' " alt="" class="recipeImage"><div class="yeild"></div> Serves ' + r.recipe.yield + ' people <ul>' + recipeItems + '</ul></div>');
            });
        });
    });
});