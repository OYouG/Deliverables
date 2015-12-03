if (typeof Datasource == "undefined") {
    Datasource = {};
}

Datasource = function() {
    this.init();
};


Datasource.prototype = {
    init: function() {

    },
    
    
    getWebsiteVisitData : function (start, end, onYas) {
        var dummyData = [{
            date: "2015-11-1",
            visits: 2782
        }, {
            date: "2015-11-2",
            visits: 2967
        }, {
            date: "2015-11-3",
            visits: 3781
        }, {
            date: "2015-11-4",
            visits: 3283
        }, {
            date: "2015-11-5",
            visits: 3488
        }, {
            date: "2015-11-6",
            visits: 2915
        }, {
            date: "2015-11-7",
            visits: 3000
        }, {
            date: "2015-11-8",
            visits: 3138
        }, {
            date: "2015-11-9",
            visits: 3753
        }, {
            date: "2015-11-10",
            visits: 3223
        }, {
            date: "2015-11-11",
            visits: 3459
        }, {
            date: "2015-11-12",
            visits: 3236
        }, {
            date: "2015-11-13",
            visits: 2599
        }, {
            date: "2015-11-14",
            visits: 2676
        }, {
            date: "2015-11-15",
            visits: 2430
        }, {
            date: "2015-11-16",
            visits: 2397
        }, {
            date: "2015-11-17",
            visits: 2626
        }, {
            date: "2015-11-18",
            visits: 2559
        }, {
            date: "2015-11-19",
            visits: 2770
        }, {
            date: "2015-11-20",
            visits: 2378
        }, {
            date: "2015-11-21",
            visits: 2153
        }, {
            date: "2015-11-22",
            visits: 2265
        }, {
            date: "2015-11-23",
            visits: 2200
        }, {
            date: "2015-11-24",
            visits: 2004
        }];
        
        return onYas(dummyData);
    },
    
    getTicketSalesData : function(start, end, ifGood) {
        var dummyData = [{
            date: "2015-11-1",
            sales: 11
        }, {
            date: "2015-11-2",
            sales: 8
        }, {
            date: "2015-11-3",
            sales: 5
        }, {
            date: "2015-11-4",
            sales: 6
        }, {
            date: "2015-11-5",
            sales: 6
        }, {
            date: "2015-11-6",
            sales: 19
        }, {
            date: "2015-11-7",
            sales: 4
        }, {
            date: "2015-11-8",
            sales: 2
        }, {
            date: "2015-11-9",
            sales: 17
        }, {
            date: "2015-11-10",
            sales: 7
        }, {
            date: "2015-11-11",
            sales: 16
        }, {
            date: "2015-11-12",
            sales: 23
        }, {
            date: "2015-11-13",
            sales: 7
        }, {
            date: "2015-11-14",
            sales: 2
        }, {
            date: "2015-11-15",
            sales: 13
        }, 
        {
            date: "2015-11-16",
            sales: 21
        }, 
        {
            date: "2015-11-17",
            sales: 6
        }, 
        {
            date: "2015-11-18",
            sales: 11
        }, 
        {
            date: "2015-11-19",
            sales: 9
        }, 
        {
            date: "2015-11-20",
            sales: 9
        }, 
        {
            date: "2015-11-21",
            sales: 11
        }, 
        {
            date: "2015-11-22",
            sales: 6
        }, 
        {
            date: "2015-11-23",
            sales: 7
        }, 
        {
            date: "2015-11-24",
            sales: 6
        }
        ];
        
        return ifGood(dummyData);
    },
    
    getSentimentData : function(start, end, onGo){
        var dummyData = [{
            label: "Positive",
            value: 60
        }, {
            label: "Negative",
            value: 7
        }, {
            label: "Neutral",
            value: 33
        }];
        
        onGo(dummyData);
    },
    
    getMentionsData : function(start, end, onSuccess){
        var dummyData = [{
            mentionSource: "Tumblr",
            Total: 25711,
            Positive: 17143,
            negative: 1019
        }, {
            mentionSource: "Twitter",
            Total: 16752,
            Positive: 5683,
            negative: 461
        }, {
            mentionSource: "News Sources",
            Total: 4326,
            Positive: 3198,
            negative: 571
        }, {
            mentionSource: "Instagram",
            Total: 2609,
            Positive: 1111,
            negative: 184
        }, {
            mentionSource: "Wordpress",
            Total: 1921,
            Positive: 1532,
            negative: 165
        }, {
            mentionSource: "Facebook",
            Total: 1813,
            Positive: 1249,
            negative: 144
        }, {
            mentionSource: "YouTube",
            Total: 390,
            Positive: 80,
            negative: 10
        }, {
            mentionSource: "Blog",
            Total: 156,
            Positive: 100,
            negative: 22
        }, {
            mentionSource: "Google+",
            Total: 148,
            Positive: 97,
            negative: 9
        }, {
            mentionSource: "Reddit",
            Total: 57,
            Positive: 36,
            negative: 7
        }];
        
        onSuccess(dummyData);
    },

    getGrossTicketSales : function(start, end, onReady) {
        //$TODO$ to be replaced by an ajax call to the server
        var dummyData = [{
            name: "Aladdin",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1320261

        }, {
            name: "The Book of Mormon",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1540949

        },{
            name: "Wicked",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1818766

        },{
            name: "The Lion King",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1824626

        },{
            name: "An American in Paris",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        },{
            name: "Aladdin",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1445641

        },{
            name: "The Book of Mormon",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1547574

        },{
            name: "Wicked",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1855247

        },{
            name: "The Lion King",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1901829

        },{
            name: "An American in Paris",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 737241

        },{
            name: "Aladdin",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1569812

        },{
            name: "The Book of Mormon",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1529584

        },{
            name: "Wicked",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1872149

        },{
            name: "The Lion King",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 2064202

        },{
            name: "An American in Paris",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 859761

        },{
            name: "Aladdin",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2024667

        },{
            name: "The Book of Mormon",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 1517640

        },{
            name: "Wicked",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2358372

        },{
            name: "The Lion King",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2633531

        },{
            name: "An American in Paris",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 967150

        },{
            name: "Aladdin",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 1768354

        },{
            name: "The Book of Mormon",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 1517969

        },{
            name: "Wicked",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 2181861

        },{
            name: "The Lion King",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 2293061

        },{
            name: "An American in Paris",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 967150

        },{
            name: "Aladdin",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1534573

        },{
            name: "The Book of Mormon",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1467289

        },{
            name: "Wicked",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1655748

        },{
            name: "The Lion King",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1843463

        },{
            name: "An American in Paris",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1149324

        },{
            name: "Aladdin",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1492453

        },{
            name: "The Book of Mormon",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1469646

        },{
            name: "Wicked",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1741459

        },{
            name: "The Lion King",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1972747

        },{
            name: "An American in Paris",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1235247

        },{
            name: "Aladdin",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1408343

        },{
            name: "The Book of Mormon",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1407987

        },{
            name: "Wicked",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1387456

        },{
            name: "The Lion King",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1908299

        },{
            name: "An American in Paris",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1220230

        },{
            name: "Aladdin",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1422347

        },{
            name: "The Book of Mormon",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1446130

        },{
            name: "Wicked",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1469322

        },{
            name: "The Lion King",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1701798

        },{
            name: "An American in Paris",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1280110

        },
        
        
        // LAUREN STARTED HERE
        {
            name: "An American in Paris",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1467289

        },{
            name: "Aladdin",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1467089

        },{
            name: "The Book of Mormon",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1534408

        },{
            name: "The Lion King",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1966567

        },{
            name: "Wicked",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1601725

        }];

        onReady(dummyData);
    }
};