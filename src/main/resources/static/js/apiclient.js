apiclient = (function() {

    return {
        getBlueprintsByAuthor: function(author, callback) {
            $.getJSON("http://localhost:8080/blueprints/"+author,function(data){
            callback(data);
        },null);
        },
        getBlueprintsByNameAndAuthor: function( name, author, callback) {
            $.getJSON("http://localhost:8080/blueprints/"+author+"/"+name,function(data){
                callback(data);
            },null);
        }
    };
})();