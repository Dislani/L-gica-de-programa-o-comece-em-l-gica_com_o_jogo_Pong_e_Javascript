//Variaveis da bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diamentroBola = 30; 
let raio = diamentroBola / 2 ;

//Velocidade da bolinha 
let velocidadeXBolinha = 8;
let velocidadeYbolinha = 8;

//Variaveis raquete
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da minha  raquete 
let xRaquete = 5;
let yRaquete = 155;

//Variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 155;
let velocidadeYOponente;
let chanceDeErrar = 0;



//Variavel de Colisão entre a raquete e a bolinha
let colidiu = false


//Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0; 


//Variaveis de sons do jogo

let raquetada;
let ponto;
let trilha;

//Variavel para impedir que a bola fique presa
let bolaPresa;


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto =loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  
  mostrarBolinha(); 
  
  movimentaBolinha();
  
  verificaColisãoBorda();
  
  mostrarRaquete(xRaquete, yRaquete);
  
  movimentaRaquete();
  
  verificaColisaoRaquete(xRaquete, yRaquete);

  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);

  movimentaRaqueteOponente();
  
  verificaColisaoRaquete( xRaqueteOponente, yRaqueteOponente);
  
  incluiPlacar();
  
  marcaPonto();
  
  bolinhaNaoFicaPresa();
  
}
  
  function mostrarBolinha(){
      circle (xBolinha, yBolinha, diamentroBola);
  }
  
  
  function movimentaBolinha(){
    
    xBolinha = xBolinha + velocidadeXBolinha;
    yBolinha= yBolinha + velocidadeYbolinha;
  }
  
  
  function verificaColisãoBorda(){
    
     if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
   velocidadeXBolinha *= -1;
    
  }
 
  if (yBolinha + raio > height || 
      yBolinha - raio < 0) {
    velocidadeYbolinha *= -1
   } 
 }
  
  function mostrarRaquete(x, y){
    
      rect( x, y, raqueteComprimento, 
           raqueteAltura);
  }
  
  
  function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
      
    }
    
     if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
      
    }
  }
  
   function verificaColisaoRaquete(){
      
     if (xBolinha - raio  < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ){
     velocidadeXBolinha *= -1;
       raquetada.play();
   }
 }
  
  function verificaColisaoRaquete(x,y){
    
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

    if (colidiu){
      
           velocidadeXBolinha *= -1;
           raquetada.play();

     }
   }
  
  
  function movimentaRaqueteOponente(){
    
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30; 
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar();
  
  }

  function calculaChanceDeErrar(){
    
    function calculaChanceDeErrar(){
  if (pontosDoOponente > meusPontos + 1) {
    chanceDeErrar = random (-54, -50)}
  else {chanceDeErrar = 0}
}
  }

  function incluiPlacar(){
    textAlign (CENTER);
    textSize(16);
    stroke (255,228,225)

    fill(255,20,147);
    rect (150, 10, 40, 30);

    fill(255);
    text(meusPontos, 170,26);
    
    fill(199,21,133);
    rect (450, 10, 40, 30);
    fill(255);
    text(pontosDoOponente, 470, 26);
    
  }


  function marcaPonto(){
  
  if (xBolinha >585){
    meusPontos += 1
         ponto.play();
  }
    if (xBolinha < 15){
    pontosDoOponente += 1
          ponto.play();

  }
}

function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0 ){
    xBolinha = 23;
  }
  if ( xBolinha + raio > 600){
    xBolinha = 580
  }
}