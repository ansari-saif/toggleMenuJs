
   <button  onclick="myFunction('showDiv1')">Tab 1</button>
   <button  onclick="myFunction('showDiv2')">Tab 2</button>
   <button  onclick="myFunction('showDiv3')">Tab 3</button>
   <button  onclick="myFunction('showDiv4')">Tab 4</button>


<div id="showDiv1" class="mydiv">Content of Tab1</div>
<div id="showDiv2" class="mydiv" hidden>Content of Tab2</div>
<div id="showDiv3" class="mydiv" hidden>Content of Tab3</div>
<div id="showDiv4" class="mydiv" hidden>Content of Tab4</div>

<script>
    function myFunction(id) {
        var element1 = document.getElementById(id);
        var element2 = document.getElementsByClassName("mydiv");
        for (var i = 0; i < element2.length; i++) {
            element2[i].setAttribute("hidden", "hidden");
        }
        element1.removeAttribute("hidden");
    }
</script>
