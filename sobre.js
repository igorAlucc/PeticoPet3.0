function vermais() 
{
    let pontos = document.getElementById("pontos")
    let maistexto = document.getElementById("mais")
    let btvermais = document.getElementById("btvermais")
    let link = document.getElementById("btvermais")
    let imagem = document.getElementById("imgf")

if (pontos.style.display === "none") 
    {
        pontos.style.display="inline";
        maistexto.style.display="none";
        btvermais.innerHTML="Ver mais";
        link.style.marginLeft="0"
         imagem.style.marginTop="-6%"
    }
    else 
        {
            pontos.style.display= "none";
            maistexto.style.display= "inline";
            btvermais.innerHTML="Ver menos";
            link.style.marginLeft="-39%"
            imagem.style.marginTop="3%"
        }
    }