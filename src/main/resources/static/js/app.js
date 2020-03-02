var Module=(function (){
    var _author;
    function _map(list){
        return  mapList = list.map(function(blueprint){
            return {bpname:blueprint.name, numberPoints:blueprint.points.length};
        })
    }

    var _numberPoints = function(blueprints) {
        var total = blueprints.reduce(function(total, value) { return total + value.numberPoints; }, 0);
        $("#sumBlueprint > h3").text("Total user points: " + total);
    };

    var _graficar = function (blueprints) {
        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.beginPath();
        var first = blueprints.points[0];
        ctx.moveTo(first.x,first.y);
        blueprints.points.map(function(punto){
            ctx.lineTo(punto.x,punto.y);
        })
        ctx.stroke();
    }

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
                "</td> " +
                "<td><form><button type='button' onclick='Module.getBlueprintsAuthorAndName( \"" +
                _author +
                '" , "' +
                blueprint.bpname +
                "\")' >Open</button></form></td>" +
                "</tr>"
            );
        });
    };

    var setAuthorName = function(author) {
        _author = author;
    };

    var getBlueprintsAuthor = function(author) {
        setAuthorName(author);
        if (author == "" || author == null) {
            alert("Ingrese un valor correcto de nombre");
        } else {
            $("#blueprintAuthor > h2").text(author + "'s blueprints: ");
            apimock.getBlueprintsByAuthor(author, _table);
        }
    };

    var getBlueprintsAuthorAndName = function (author,name) {
        setAuthorName(author);

        apimock.getBlueprintsByNameAndAuthor(name,author,_graficar);
    };

    return {
        getBlueprintsAuthor: getBlueprintsAuthor,
        getBlueprintsAuthorAndName: getBlueprintsAuthorAndName,
    };
})();
