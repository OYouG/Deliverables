<!DOCTYPE html>
<html lang="en">

<?php
$dbhost = '50.62.209.119';
$dbuser = 'aaipdashadmin';
$dbpass = 'UCIAAIP2016';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT weekendDate, weekGross, playname
        FROM IBDB_Data';
		
$sql2 = 'SELECT eventTime, eventDate, toDateSold, netCap 
        FROM TicketMasterSales
        WHERE dateToday = \'2/27/16\'';
        
$sql3 = 'SELECT salesChannel, totalFace, endDate 
        FROM TicketMasterSalesChannels';
		
$sql4 = 'SELECT * FROM TicketMasterPriceLevels
         WHERE dateToday = \'2/27/16\'';
mysql_select_db('db_aaip_dash');
$retval = mysql_query( $sql, $conn );
$retval2 = mysql_query( $sql2, $conn );
$retval3 = mysql_query( $sql3, $conn );
$retval4 = mysql_query( $sql4, $conn );
$ticketSalesArray = array();
$ticketsPerShowArray = array();
$salesChannelArray = array();
$priceLevelArray = array();
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval)){
   $ticketSalesArray[] = $row;
}    
while($row = mysql_fetch_assoc($retval2)){
   $ticketsPerShowArray[] = $row;
} 
while($row = mysql_fetch_assoc($retval3)){
   $salesChannelArray[] = $row;
} 
while($row = mysql_fetch_assoc($retval4)){
   $priceLevelArray[] = $row;
} 
mysql_close($conn);

?>


<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>AAIP Dashboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- DatePicker CSS -->
    <link rel="stylesheet" href="../dist/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="../dist/css/datepicker.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <!-- Morris controller.js -->
    <script src="../datasource/rest.js" type="text/javascript"></script>
    <script src="../controller/controller.js" type="text/javascript"></script>
    <!-- controller.js -->
    <script src="../datasource/rest.js" type="text/javascript"></script>
    <script src="../controller/controller(FlotCharts).js" type="text/javascript"></script>

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <img src="../img/aaip_icon.jpg" align="left">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">An American in Paris Dashboard</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="index.php">Main Dashboard</a>
                        </li>
                        <li>
                        		<li>
                                    <a href="ticket-sales.php">Ticket Sales Dashboard</a>
                                </li>
                                <li>
									<a href="adspend.php">Ad Spending Statistics Dashboard</a>
								</li>
                                <li>
                                    <a href="website.php">Web Statistics Dashboard</a>
                                </li>
                                <li>
                                    <a href="social-media.php">Social Media Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-users fa-fw"></i> Social Media Sub Dashboards<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="facebook.php"><i class="fa fa-facebook fa-fw"></i> Facebook Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="instagram.php"><i class="fa fa-instagram fa-fw"></i> Instagram Dashboard</a>
                                    </li>

                                    <li>
                                        <a href="twitter.php"><i class="fa fa-twitter fa-fw"></i> Twitter Dashboard</a>
                                    </li>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Ticket Sales Dashboard</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <!--TICKET SALES CHART-->
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-line-chart fa-fw"></i> Weekly Grosses
                            <div class="pull-right">                                
                               <form id="salesForm">
                               <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="startDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="endDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                    <!--<input type="submit"><button type="button" class="btn btn-success btn-xs" id="salesButton">Update</button>-->
                                </div>
                                </form>
                                
                            </div>
                        </div>
                         <!--/.panel-heading -->
                        <div class="panel-body">
                            <div id="morris-line-chart"></div>
                        </div>
                         <!--/.panel-body -->
                    </div>
                </div>
                
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-line-chart fa-fw"></i> Weekly Grosses (AAIP Only)
                            <div class="pull-right">                                
                               <form id="AAIPsalesForm">
                               <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="AAIPstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="AAIPendDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                    <!--<input type="submit"><button type="button" class="btn btn-success btn-xs" id="salesButton">Update</button>-->
                                </div>
                                </form>
                                
                            </div>
                        </div>
                         <!--/.panel-heading -->
                        <div class="panel-body">
                            <div id="AAIP-line-chart"></div>
                        </div>
                         <!--/.panel-body -->
                    </div>
                </div>
                <!-- Tickets Sold per Show -->
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        Tickets Sold Per Show
                        <div class="pull-right">
                                <form id="TicketForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="ticketStartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="ticketEndDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="sold-per-show">
                                    <div id="flotcontainerShows" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>--> 
                
            <!-- Seating-->    
            <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        Seating
                        <div class="pull-right">
                                <form id="SeatForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="seatStartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="seatEndDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>	
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="seating">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
				
			                <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        ORCH1
                            <div class="pull-right">
                                <form id="Orch1Form">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="orch1StartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="orch1EndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->   
                
                
                <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        ORCH2
                            <div class="pull-right">
                                <form id="Orch2Form">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="orch2StartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="orch2EndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie2-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->  
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        ORCH3
                            <div class="pull-right">
                                <form id="Orch3Form">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="orch3StartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="orch3EndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie3-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        4PMEZZ
                            <div class="pull-right">
                                <form id="4PMEZZForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="4PMEZZStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="4PMEZZEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie4-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        5FMEZZ
                            <div class="pull-right">
                                <form id="5FMEZZForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="5FMEZZStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="5FMEZZEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie5-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
            
            
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        6MZBOX
                            <div class="pull-right">
                                <form id="6MZBOXForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="6MZBOXStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="6MZBOXEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie6-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        7FMH
                            <div class="pull-right">
                                <form id="7FMHForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="7FMHStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="7FMHEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie7-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        8RMK-P
                            <div class="pull-right">
                                <form id="8RMKPForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="8RMKPStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="8RMKPEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie8-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        9J-O
                            <div class="pull-right">
                                <form id="9JOForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="9JOStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="9JOEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie9-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        10BALC
                            <div class="pull-right">
                                <form id="10BALCForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="10BALCStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="10BALCEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie10-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        11BLBX
                            <div class="pull-right">
                                <form id="11BLBXForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="11BLBXStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="11BLBXEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie11-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
                
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        12SRO-O
                            <div class="pull-right">
                                <form id="12SROOForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="12SROOStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="12SROOEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie12-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
				
			            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        13SRO-M
                            <div class="pull-right">
                                <form id="13SROMForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="13SROMStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="13SROMEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie13-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
                
            
            <!-- Pie Chart -->
                <div class="col-lg-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        14SRO-B
                            <div class="pull-right">
                                <form id="14SROBForm">
                                <div class="btn-group">
                                    <div id="flot-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="14SROBStartDate" style="width:70px;"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="14SROBEndDate" style="width:70px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="flot-pie14-chart">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>-->
				
             
			<!-- Sales Channel -->
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        Sales Channels
                        <div class="pull-right">
                                <form id="ChannelForm">
                                <div class="btn-group">
                                    <div id="channels-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="channelStartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="channelEndDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="sales-channel">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!--</div>--> 
                
			<div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Demographics: Location
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Location</th>
                                            <th>Tickets Sold</th>
                                            <th>Date Range</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT state, SUM(totalTickets) AS totalTickets, startDate, endDate FROM TicketMasterSalesLocation
                                                GROUP BY state, endDate";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
                                            echo "<tr><td>" . $row["state"]. "</td><td>" . $row["totalTickets"] . "</td><td>" . $row["startDate"] . " to " . $row["endDate"] . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Demographics: Gender
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Female</th>
                                            <th>Male</th>
                                            <th>Date Range</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT startDate, endDate, percentMale, percentFemale FROM TicketMasterDemographics";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
                                            echo "<tr><td>" . $row["percentFemale"] . "%</td><td>" . $row["percentMale"] . "%</td><td>" . $row["startDate"] . " to " . $row["endDate"] . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>	
				
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
    

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../bower_components/raphael/raphael-min.js"></script>
    <script src="../bower_components/morrisjs/morris.min.js"></script>
    <script src="../js/morris-data.js"></script>
    
    
    <script type="text/javascript">
        setTimeout(function(){
        //$TODO$ nasty hack
            $(document).ready(function() {
	            var ticketSalesData = <?php echo json_encode($ticketSalesArray); ?>;
				var ticketsPerShowData = <?php echo json_encode($ticketsPerShowArray); ?>;
	            var salesChannelData = <?php echo json_encode($salesChannelArray); ?>;
	            var priceLevelData = <?php echo json_encode($priceLevelArray); ?>;
                var controller = new Controller();
                controller2 = new flotController();
                controller.renderTicketSaleGraph("12/27/2015","2/21/2016", ticketSalesData);
                controller.renderAAIPSaleGraph("12/27/2015","2/21/2016", ticketSalesData);
                controller2.renderTPSGraph("2/21/16", "2/28/16", ticketsPerShowData);
                controller2.renderChannelGraph("1/16/16", "2/27/16", salesChannelData);
                controller2.renderSeatingGraph("2/21/16", "2/28/16", priceLevelData);
				controller2.renderOrch1Graph("2/20/16", "2/27/16", priceLevelData);
                controller2.renderOrch2Graph("2/20/16", "2/27/16", priceLevelData);
                controller2.renderOrch3Graph("2/20/16", "2/27/16", priceLevelData);
                controller2.render4PMEZZGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render5FMEZZGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render6MZBOXGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render7FMHGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render8RMKPGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render9JOGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render10BALCGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render11BLBXGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render12SROOGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render13SROMGraph("2/20/16", "2/27/16", priceLevelData);
                controller2.render14SROBGraph("2/20/16", "2/27/16", priceLevelData);
				
            });
        }, 0);
    </script>

    <!-- Flot Charts JavaScript -->

    <script src="../bower_components/flot/jquery.flot.js"></script>
    <script src="../bower_components/flot/jquery.flot.pie.js"></script>
    <script src="../bower_components/flot/jquery.flot.resize.js"></script>
    <script src="../bower_components/flot/jquery.flot.time.js"></script>
    <script src="../bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
	<script src="../bower_components/flot/jquery.flot.stack.js"></script>
	<script src="../bower_components/flot-axislabels/jquery.flot.axislabels.js"></script>

    <!--DATEPICKER JS -->
    <script src="../js/bootstrap-datepicker.js"></script>
    
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#sandbox-container .input-daterange').datepicker({
                    daysOfWeekDisabled: "1,2,3,4,5,6",
                    daysOfWeekHighlighted: "0",
                    startDate: "-03/15/2011"
                });
            });
    </script>
    
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#flot-container .input-daterange').datepicker({
                    // daysOfWeekDisabled: "1,2,3,4,5,6",
                    // daysOfWeekHighlighted: "0",
                    startDate: "-03/15/2011"
                });
            });
    </script>
    
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#channels-container .input-daterange').datepicker({
                    daysOfWeekDisabled: "0,1,2,3,4,5",
                    daysOfWeekHighlighted: "6",
                    startDate: "-03/15/2011"
                });
            });
    </script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>
