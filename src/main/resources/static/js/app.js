var Module=(function (){
    function _map(list){
        return  mapList = list.map(function(blueprint){
            return {bpname:blueprint.name, numberPoints:blueprint.points.length};
        })
    }

    var _numberPoints = function(blueprints) {
        var total = blueprints.reduce(function(total, value) { return total + value.numberPoints; }, 0);
        $("#sumBlueprint > h3").text("Total user points: " + total);
    };

    var _table = function(blueprints) {
        blueprints = _map(blueprints);
        _numberPoints(blueprints);
        $("#tableBlueprints > tbody").empty();
        blueprints.map(function(blueprint) {
            $("#tableBlueprints > tbody").append(
                "<tr> <td>" +
                blueprint.bpname +
                "</td>" +
                "<td>" +
                blueprint.numberPoints +
                "</td> </tr>"
            );
        });
    };

    var getBlueprintsAuthor = function(author) {
        if (author == "" || author == null) {
            alert("Ingrese un valor correcto de nombre");
        } else {
            $("#blueprintAuthor > h2").text(author + "'s blueprints: ");
            apimock.getBlueprintsByAuthor(author, _table);
        }
    };

    return {
        getBlueprintsAuthor: getBlueprintsAuthor,
    };
})();
