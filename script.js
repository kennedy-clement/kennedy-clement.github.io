const map = new Map();
map.set("baby", false);
map.set("pet", false);
map.set("house", false);
map.set("s_baby", 180);
map.set("s_pet", 210);
map.set("s_house", 160);

const anim_starting_val = 2;

function reveal(element_id){
    // change panel size gradually, hide arrow, show arrow, show text
    console.log(element_id);
    if (map.get(element_id) === false){
        // open
        document.getElementById(element_id + "down").style.display = "none";
        document.getElementById(element_id + "up").style.visibility = "visible";

        document.getElementById(element_id + "text").style.display = "block";

        let id = null;
        clearInterval(id);

        let n = anim_starting_val;
        let offset = 100;

        id = setInterval(frame, 5)
        function frame(){
            n = n*1.15;
            if (map.get("s_" + element_id) < n || map.get(element_id) === false){
                document.getElementById(element_id).style.height = "auto";
                clearInterval(id)
            }
            else{
                document.getElementById(element_id).style.height = n + offset + "px";
            }
        }

        document.getElementById(element_id).style.height = "auto";

        map.set(element_id, true);
    }
    else{
        //close
        document.getElementById(element_id + "down").style.display = "inline-block";
        document.getElementById(element_id + "up").style.visibility = "hidden";

        document.getElementById(element_id + "text").style.display = "none";

        document.getElementById(element_id).style.height = "100px";

        map.set(element_id, false);
    }

}