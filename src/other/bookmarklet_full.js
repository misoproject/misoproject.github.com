// JOIN MY LINES then update the actual bookmarklet url
var theDiv=document.createElement("div"),key=null,worksheet=0;
theDiv.id="miso.dataset.bookmarklet";
if (/key=([A-Za-z0-9]+)[&|#]:?/.test(location.href)){key = /key=([A-Za-z0-9]+)[&|#]:?/.exec(location.href)[1];}
if (/gid=([0-9]+)/.test(location.href)){worksheet = /gid=([0-9]+)/.exec(location.href)[1];}
theLogo=document.createElement("img"); theLogo.src="http://misoproject.com/images/logo.png";
theBr=document.createElement("br");
theDiv.appendChild(theLogo);
theDiv.appendChild(theBr);
theDiv.appendChild(document.createTextNode("Use the following code to access this spreadsheet! (Note it must be published.)"));
var text="var ds = new Miso.Dataset({\n"+
"  key : \"" + key + "\",\n" +
"  worksheet : \"" + worksheet + "\",\n" +
"  importer: Miso.Importers.GoogleSpreadsheet,\n"+
"  parser : Miso.Parsers.GoogleSpreadsheet\n"+
"});\n"+
"ds.fetch({\n"+
"  success : function() {\n"+
"    // your success callback here!\n"+
"  },\n"+
"  error : function() {\n"+
"    // your error callback here!\n"+
"  }\n"+
"});";
var thePre=document.createElement("pre");
thePre.appendChild(document.createTextNode(text));
theDiv.appendChild(thePre);
theDiv.style.position="absolute";theDiv.style.left="10px";theDiv.style.top="10px";theDiv.style["z-index"]=1000;
theDiv.style["background-color"]="white";
theDiv.style.padding="20px";
theDiv.style.border="solid 2px black"; 
var theClose=document.createElement("a");
theClose.href="#";
theClose.appendChild(document.createTextNode("Close"));
theClose.onclick=function() { document.body.removeChild(document.getElementById("miso.dataset.bookmarklet")); };
theDiv.appendChild(theClose);
document.body.appendChild(theDiv); 
void(0);