/* Javascript */

window.onload = function () {

    /* Abrir Menu mobile*/
    let btnMenu = document.getElementById("botao-menu");
    btnMenu.onclick = function () {
        menu.style.opacity= "1";    
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(0rem)";
    };
    /* Fechar Menu mobile*/
    let btnFechar = document.getElementById("btn-close");
    let menu = document.getElementById("menu-mobile");
    let corpo = document.getElementById("corpo");

    btnFechar.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };

    // Fechar o menu depois de ser clicado 
    menu.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };

     /* Fechar o menu se clicar fora dele */
     corpo.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };


        /* Abrir login*/
        let botaoLogin = document.getElementById("btn-login");
        botaoLogin.onclick = function () {
            login.style.display= "flex";    
        };
        /* Fechar login*/
        let  botaoFecharLogin = document.getElementById("btn-close-login");
        botaoFecharLogin.onclick = function () {
            login.style.display= "none";   
        };

        /* Abrir login Mobile*/
        let botaoLoginMobile = document.getElementById("btn-login-mobile");
        botaoLoginMobile.onclick = function () {
            login.style.display= "flex";    
        };
        /* Fechar login Mobile*/
        let  botaoFecharLoginMobile = document.getElementById("btn-close-login");
        botaoFecharLoginMobile.onclick = function () {
            login.style.display= "none";   
        };        
    

    // Função para ser executada quando ocorrer o evento scroll.
    const seta = document.getElementById('seta');

    function handleScroll() {
        
        // Obtém a posição vertical do scroll.
        const scrollTop = window.scrollY;

        // Botão de subir aparecer e desaparecer com scroll.
        if (scrollTop > 560) {
            seta.style.display = "block";
        } else {
            seta.style.display = "none";
        }
    }
    // Adiciona o ouvinte de evento 'scroll' ao objeto window.
    window.addEventListener('scroll', handleScroll);

    // Acordion 2
    const accordion = document.getElementsByClassName('title-coment');// Pega os 3 titulos h2
    
    for ( i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function(){ // fico ouvido caso seja clicado

            var pai = this.parentElement; // pego o pai
            var filho = pai.lastElementChild; // pego o ultimo filho do pai o irmão

            filho.classList.toggle('active');// adiciono a classe active para aparecer e desaparecer
        });
    }

    // Comentario 2
    let coments = document.getElementsByClassName("btn-enviar-comentario");
    
    for ( i = 0; i < accordion.length; i++) {
        coments[i].addEventListener('click', function(){
            var cmt = this;
            var pai = cmt.parentElement;
            var avo = pai.parentElement;
            var filhos = avo.children;

            var nome1; // irá recebe valor do input nome
            var coment1; // irá recebe valor do input tex-area

            for(filho of filhos){
                if(filho.name == 'nome'){
                    nome1=filho.value;                   
                }
                if(filho.name == 'text-area'){
                    coment1= filho.value;         
                }               
            }
          
            // Criar html e pegar div
            var bisavo = avo.parentElement;
            var alvo = bisavo.firstElementChild;
            //console.log(alvo);

            let div = document.createElement('div');
            div.classList.add("info-autor");
            div.innerHTML = `
            <img src="img/usuario.jpg" width="40" height="40" alt="foto usuario">
            <div id="coment-text">
                <h3>${nome1}</h3>
                <p>${coment1}</p>
            </div>`;

            // Adiciona no html
            alvo.appendChild(div);


            // limpa os campos do formulario
            for(filho of filhos){
                filho.value = "";
            }
             
        });
    }


// Formulário Login
    var botaologar = document.getElementById("btn-entrar");

    botaologar.addEventListener("click", (e) => {
        e.preventDefault();
        let usuario = document.querySelector("#usuario").value;
        let senha = document.querySelector("#senha").value;

        if(usuario == "" || senha ==""){
            alert("Preencha todos os campos");
        }else{
            
            alert("Usuario: "+usuario +" Logado com sucesso.");

            // Limpar inputs
            document.querySelector("#usuario").value="";
            document.querySelector("#senha").value="";

            }  
    });        

    

}