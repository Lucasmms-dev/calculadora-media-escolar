function calcular() {
                    let nome = 
                    (document.getElementById("nome").value)
                    let n1 = 
                    Number(document.getElementById("not1").value);
                    let n2 = 
                    Number(document.getElementById("not2").value);
                   
                    let media = (n1 + n2 ) / 2 
                    media = media.toFixed(1)
                    let resultado = document.getElementById("resultado");
                    if (media >= 7 ) {
                        resultado.innerHTML = `<p> <strong>NOME:</strong>  ${nome} </p> 
                        <p> <strong> MÉDIA: </strong> ${media} </p>
                        <P> <strong> APROVADO😁 </strong> </P>`;
                        
                    
                        } else {
                      resultado.innerHTML = `<p> <strong>NOME:</strong>  ${nome} </p>
                      <p> <strong> MÉDIA: </strong> ${media} </p>
                      <P> <strong> REPROVADO😞 </strong> </P>`;
                    }
                }