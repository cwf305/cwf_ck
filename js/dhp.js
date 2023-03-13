function dh(dx, jl, hs) {
    clearInterval(dx.dsq)
    dx.dsq =  setInterval(function() {
        var setp = (jl - dx.offsetLeft) / 10
        setp =  setp > 0 ? Math.ceil(setp) : Math.floor(setp)
        if(dx.offsetLeft == jl) {
            clearInterval(dx.dsq)
            if(hs) {
                hs()
            }
        } 
        dx.style.left = dx.offsetLeft + setp + 'px'
        
    }, 10)
}