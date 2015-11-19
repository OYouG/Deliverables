/**
 * Created by GessicaTan-Torres on 11/18/15.
 */
if (typeof Controller == "undefined") {
    Controller = {};
}

Controller = function() {
    this.init();
};


Controller.prototype = {
    init: function() {

    },

    renderTicketSaleGraph : function() {
        var datasource = new Datasource();
//$TODO$ need to pass valid start and end date when we have server code ready
        datasource.getGrossTicketSales(null, null, this.successCallback);
    },

    successCallback : function(grossDataByPlay) {
        //$TODO$ validate grossDataByPlay
        var currentWeek = {};

        for (var i = 0; i < grossDataByPlay.length; i++) {
            var item = grossDataByPlay[i];
            if (!currentWeek[item.date]) {
                currentWeek[item.date] = {
                    period: item.date
                };
            }
            var thisDate = currentWeek[item.date];
            thisDate[item.name] = item.gross;
        }
        
        var processedData = [];
        
        for (var date in currentWeek){
            if (currentWeek.hasOwnProperty(date)){
                processedData.push(currentWeek[date]);
            }
        }
        
        console.log(currentWeek);
        console.log(processedData)
    }
};

setTimeout(function(){
//$TODO$ nasty hack
    $(document).ready(function() {
        var controller = new Controller();
        controller.renderTicketSaleGraph();
    });

}, 3000);



