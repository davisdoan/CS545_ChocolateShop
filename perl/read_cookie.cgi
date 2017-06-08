#!/usr/bin/perl  
use CGI;
use DBI;
use CGI::Cookie

$q = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn012";
my $username = "jadrn012";
my $password = "telephone";
my $database_source = "dbi:mysql:$database:$host:$port";

my $dbh = DBI->connect($database_source, $username, $password);

#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn012',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Berthas Deluxe Chocolates</title>
    <meta http-equiv="content-type"content="text/html;charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="/~jadrn012/proj4/css/mycssfile.css" />
    <link href="https://fonts.googleapis.com/css?family=Josefin+Slab|Lato" rel="stylesheet"> 
</head>

<body class="about-body">
    <nav>
            <a href="/~jadrn012/proj4/index.html">Home</a>
            <a href="/~jadrn012/proj4/products.html">Products</a>
            <a href="/~jadrn012/proj4/about.html">About Us</a>
            <a href="/~jadrn012/proj4/contact.html">Contact</a>
    </nav>

    <section class="congrats"> 
    </section>

    <section class="sub2-section">
    <h1>Thank You For Your Order!</h1>
END_CONTENT

my %cookies = $ENV{COOKIE};

for( keys %cookies) {
#print "The value of the cookie is: $cookies{$_}\n";
}

my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
    #print "$cookies{$_}\n";
    }
    
my $v = $q->cookie('jadrn012');
 
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    #print "$sku = $qty<br />";
    my $sql = "INSERT INTO orders (sku, quantity, OrderDate) VALUES('$sku', '$qty', default);";
} 

$fname = $q->param('fname_billing');
$creditcard = $q->param('creditcard');
$creditcard = "XXXX-XXXX-XXXX-" . substr($creditcard, -4);     
$ordertotal = $q->param('total');

$address = $q->param('address_shipping');
$city  = $q->param('city_shipping');
$state  = $q->param('state_shipping');
$zip  = $q->param('zipcode_shipping');

$shipping = $q->param('shipping');
$tax = $q->param('tax');
$pretotal = $q->param('pretotal');

print "<h1>$fname , Your Card: $creditcard will be charged</h1>\n";
print "<h2>Subtotal: $pretotal</h2>";
print "<h2>Tax: $tax</h2>";
print "<h2>Shipping: $shipping</h2>";
print "<h2>Order Total: $ordertotal</h2>";

print"<h1> We will ship your order to $address, $city, $state, $zip </h1>\n";

print "<h2>Enjoy your chocolates!</h2>";
print "</section>\n";

print "<footer>";
print "<p>2016 Bertha's Deluxe Chocolates </p>";
print "<p class='copyright'>Copyright 2016</p>";
print "</footer>";
print "</body>\n";
print "</html>\n";

