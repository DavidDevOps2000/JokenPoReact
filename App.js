import  React, {Component} from "react";
import{
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';



class inicio extends Component{


  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '',
                  escolhaCPU : '',
                  resultado : ''
                }

  }
  
  jokenPo(escolhaUsuario){
    var numRdn = Math.floor(Math.random() * 3);
    var cpuJoken =['pedra', 'papel', 'tesoura'];
    var resultado = '';//Só foi possivel fazer o acesso criando essas variaveis aqui
    var escolhaCPU = cpuJoken[numRdn];

  
  if((escolhaUsuario == 'pedra') && (escolhaCPU == 'tesoura')){
     resultado = "Vc venceu";

  }
  else if((escolhaUsuario == 'tesoura')&&(escolhaCPU == 'papel')){
     resultado = "Vc venceu";

  }
  else if((escolhaUsuario == 'papel')&&(escolhaCPU = 'pedra')){
     resultado = "Vc venceu";

  }
  else if (escolhaUsuario == escolhaCPU){
     resultado = "Empate";

  }
  else{
     resultado = "Vc Perdeu";
  }
  this.setState({escolhaUsuario : escolhaUsuario, escolhaCPU : escolhaCPU, resultado : resultado});

}

render(){
    return(
<View style={{flex:1}}>
    <Topo/>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
                <Button title="pedra" onPress={() => {  this.jokenPo('pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
                <Button title="papel" onPress={() => {  this.jokenPo('papel') }} />
          </View>
          <View style={styles.btnEscolha}>
                <Button title="tesoura" onPress={() => {  this.jokenPo('tesoura') }} />
          </View>
    </View>

    <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

         <Icone escolha={this.state.escolhaCPU} jogador='Computador'/>

         <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'/>
    </View>
</View>
    );
  }
}


class Icone extends Component{//Icones de Escolha
  render(){

    if(this.props.escolha =='pedra'){

      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}> {this.props.jogador}</Text>
          <Image source={require('./img/pedra.png')}/>
        </View>
      );

      }else if(this.props.escolha =='papel'){
        return(
          <View style={styles.icone}>
            <Text style={styles.txtJogador}> {this.props.jogador}</Text>
            <Image source={require('./img/papel.png')}/>
          </View>
        );
        }else if(this.props.escolha =='tesoura'){
          return(
            <View style={styles.icone}>
              <Text style={styles.txtJogador}> {this.props.jogador}</Text>
              <Image source={require('./img/tesoura.png')}/>
            </View>
          );
    }
    else{
      return false;
    }
  }
}


class Topo extends Component{
  render(){
    return(// Ao usar o Width:'100%' a largura da imagem se estenderá a toda largura disponiovel
      <View  style={{alignItems:'center'}}>
          <Image style={{ width:'100%'}} source={require('./img/jokenpo.png')}/>
    </View>
    );
  }
}

//Estilos
const styles = StyleSheet.create({
  btnEscolha:{
    width:90
  },
  painelAcoes:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  palco:{
    alignItems:'center',
    marginTop: 10
  },
  txtResultado:{
    fontSize:25,
    fontWeight:'bold',
    color:'red',
    height:60
  },
  icone:{
    alignItems:'center',
    marginBottom:20
  },
  txtJogador:{
    fontSize:18
  }
});

export default inicio;