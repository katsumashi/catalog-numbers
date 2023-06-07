var coll = document.getElementsByClassName("collapsible");
var aib = document.getElementById("albumnumbersubmit");
var tib = document.getElementById("tracknumbersubmit");
var songyes = document.getElementById("songyes");
var songno = document.getElementById("songno");
var i;
var values = [];

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }   
    });
}

// Sets the values[] array. These values are used to generate the code.
function setValues(elementt, index) {
    //console.log(elementt);
    //console.log(document.getElementById(elementt).value);
    values[index] = document.getElementById(elementt).value;
    //console.log(values[index]);
}

function showhide(btn, element, type) {
    if (type == "toplevel") {
        layer1List = ["calbum-disp", "csingle-disp", "cfilm-disp", "cvg-disp", "clive-disp", "ctour-disp"];

        // this is reference to the a tag you clicked on
        //console.log(btn.id);
        //console.log(element);

        // hide all the other settings pages
        for (var i = 0; i < layer1List.length; i++) {
            if (element != layer1List[i]) {
                document.getElementById(layer1List[i]).style.display = "none";
            }
        }
        // open the selected page
        document.getElementById(element).style.display = "block";
    }
    
    if (type == "basic" || !type) {
        if (document.getElementById(element).style.display == "none") {
            document.getElementById(element).style.display = "block";
        }
    }

    return false;
}

function generateCode() {
    var codestring = "K";

    if (document.getElementById("calbum-disp").style.display == "block") {
        codestring += "A";
        if (values[0] <= 9) {
            codestring += "0";
        }
        codestring += values[0];
        if (values[1]) {
            codestring += "-"
            if (values[1] <= 9) {
                codestring += "0";
            }
            codestring += values[1];
            if (values[2]) {
                codestring += "-P"
                codestring += values[2];
            }
        }
    }

    document.getElementById("albumcode").innerHTML = codestring;
    return codestring;
}

showhide("", "", "number");