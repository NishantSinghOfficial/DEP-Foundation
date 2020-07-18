function output()
	{
		var trx=document.getElementById('input').value;
		
		var total;
		var bonus;
		if (trx >= 0 && trx < 2500) {
			total=trx*100;
			bonus=0;
		}
		else if (trx >= 2500 && trx < 10000){ total=trx*120; bonus=20;
			
		}
		else if (trx >= 10000 && trx < 25000) {
			total=trx*130;bonus=30;
		}
		else if (trx >= 25000 && trx < 50000) {
			total=trx*140;bonus=40;
		}
		else if (trx >= 50000 && trx < 100000) {
			total=trx*150;bonus=50;
		}
			else if (trx >= 100000 && trx < 250000) {
			total=trx*155;bonus=55;
			}
		else if (trx >= 250000) {
			total=trx*160;bonus=60;
		}
		
		document.getElementById('out').value=total;
		document.getElementById('bonus').value=bonus;
		
	}

function copyaddress() {
  /* Get the text field */
 var copyText = document.getElementById("address");
   // var copyText = "TLoDSz1QpKK6eS6nb3PYjRtYssw9bxKnXQ";

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("alert-adrs").innerHTML= "Address copied to clipboard";

}

function value_list(){
    var sel = document.getElementById("listalt");
var value = sel.options[sel.selectedIndex].value; // or just sel.value
var text = sel.options[sel.selectedIndex].text;
    
var cmc = document.getElementsByClassName("coinmarketcap-currency-widget");
cmc[0].setAttribute("data-currencyid", "52"); 
    
    document.getElementById("coin-name").innerHTML = 'Send '+  text+ ' here';
    
    
    if(value == 1){
    
    document.getElementById("addressjs").innerHTML = "1LUvaSF1VsNCEN3...NCMkHAK84eXDjiY";
    } 
    else if(value == 1027 ){
    document.getElementById("addressjs").innerHTML = "0xfBEe64FFD32f10cCD40005ED3f02156DAf2164a2";
    
    }
else if(value == 52){
    document.getElementById("addressjs").innerHTML = "rfFHwQLqMo4KzNLQC8xiShJvFLLsom4L6Q";
    }
    else if(value == 2){
    document.getElementById("addressjs").innerHTML = "LdZKSMk25sHWVBpvH3RXxBACjMsHZoosw3";
    }
    else if(value == 1831 ){
    document.getElementById("addressjs").innerHTML = "qp4d6ma0aq00ahn3jj8fse490g70hgv8gujmnqfngj";
    }
    
    else if(value == 512 ){
    document.getElementById("addressjs").innerHTML = "GCQPYNHXCLZAQ2PW6O7TO5AFT7YN2CLGCOHKBB6KEYQUOIYVCKXV5QBJ";
    }
    else if(value == 2010){
    document.getElementById("addressjs").innerHTML = "DdzFFzCqrhsiSCggEgEGBhMhg3psCLEdufDg4xpCqzoL4b2p6QpMpTJe8USnD9B4axkC7Q9J6KKXx2Fiq6jFnwDjnAofi8jJQho2sqDt";
    }
    else if(value == 328){
    document.getElementById("addressjs").innerHTML = "COMING SOON";
    }
    else if(value == 131){
    document.getElementById("addressjs").innerHTML = "XpcSU6zF5SfNEemdVmkgRNArnymZuVQQ2i";
    }
    else if(value == 825){
    document.getElementById("addressjs").innerHTML = "0xfBEe64FFD32f10cCD40005ED3f02156DAf2164a2";
    }
   
}
document.getElementById('btn').addEventListener('click', value_list);;



