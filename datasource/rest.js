if (typeof Datasource == "undefined") {
    Datasource = {};
}

Datasource = function() {
    this.init();
};


Datasource.prototype = {
    init: function() {

    },

    getGrossTicketSales : function(start, end, onSuccess) {
        //$TODO$ to be replaced by an ajax call to the server
        var dummyData = [{
            name: "Aladdin",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        }, {
            name: "BoM",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        },{
            name: "Wicked",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        },{
            name: "LK",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        },{
            name: "AAIP",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        }];

        onSuccess(dummyData);
    }
};