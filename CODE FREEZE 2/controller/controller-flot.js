if (typeof Controller == "undefined") {
    Controller = {};
}

Controller = function() {
    this.init();
};


Controller.prototype = {
    init: function() {

    },
    
    renderTestGraph : function() {
    var tickSold = [
        [date(2015,12,6), 1445], [date(2015,12,8), 784], [date(2015,12,9), 821],
        [date(2015,12,9), 608], [date(2015,12,10), 931], [date(2015,12,11), 902],
        [date(2015,12,12), 905], [date(2015,12,12), 1078], [date(2015,12,13), 759],
        [date(2015,12,13), 759], [date(2015,12,15), 582], [date(2015,12,16), 486],
        [date(2015,12,16), 431], [date(2015,12,17), 571], [date(2015,12,18), 629],
        [date(2015,12,19), 671], [date(2015,12,19), 771], [date(2015,12,20), 751],
        [date(2015,12,22), 872], [date(2015,12,23), 371], [date(2015,12,23), 585],
        [date(2015,12,24), 430], [date(2015,12,26), 657], [date(2015,12,26), 573],
        [date(2015,12,27), 645], [date(2015,12,27), 503]
        ];
 
    var netCap = [
        [date(2015,12,6), 1695], [date(2015,12,8), 1695], [date(2015,12,9), 1695],
        [date(2015,12,9), 1695], [date(2015,12,10), 1695], [date(2015,12,11), 1695],
        [date(2015,12,12), 1695], [date(2015,12,12), 1695], [date(2015,12,13), 1695],
        [date(2015,12,13), 1695], [date(2015,12,15), 1695], [date(2015,12,16), 1695],
        [date(2015,12,16), 1695], [date(2015,12,17), 1695], [date(2015,12,18), 1695],
        [date(2015,12,19), 1695], [date(2015,12,19), 1695], [date(2015,12,20), 1695],
        [date(2015,12,22), 1695], [date(2015,12,23), 1695], [date(2015,12,23), 1695],
        [date(2015,12,24), 1695], [date(2015,12,26), 1695], [date(2015,12,26), 1695],
        [date(2015,12,27), 1695], [date(2015,12,27), 1695]
        ];
    
    
    function date(year, month, day) {
        var date = new Date(year, month - 1, day);
        return date.getTime();
    }
 
    var data = [{
        label: "Net Capacity",
        data: netCap,
        bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
        }
    },{
        label: "Tickets Sold",
        data: tickSold,
        bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
        }
    }];
 
    var options = {
            xaxis: {
                mode:"time",
                alignTicksWithAxis: 1
                
            },
            yaxis: {
                alignTicksWithAxis: 1
            },
            grid:{
                backgroundColor: { colors: ["#969696", "#5C5C5C"] }
            }
    };
 
    var plot = $.plot($("#example-section25 #flotcontainer"), data, options);  
        
    }
    
};


setTimeout(function(){
//$TODO$ nasty hack
    $(document).ready(function() {
        var controller = new Controller();
        controller.renderTestGraph();
    });

}, 3000);


