<script> 
    function gfg(imgs) { 
        var expandImg = document.getElementById("expand"); 
        var imgText = document.getElementById("geeks"); 
        expandImg.src = imgs.src; 
        imgText.innerHTML = imgs.alt; 
        expandImg.parentElement.style.display = "block"; 
    } 
</script> 