import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native"

export default function App() {
  const [img, setImg] = useState(require("./src/biscoito.png"))
  const [textoFrase, setTextoFrase] = useState("")

  let frases = [
    "Siga os bons e aprenda com eles.",
    "O riso é a menor distancia entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
    "Acredito em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "O sucesso é treinável.",
    "Saúde, família e trabalho, não inverta a ordem.",
  ]

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase('" ' + frases[numeroAleatorio] + ' "')
    setImg(require("./src/biscoitoAberto.png"))
  }

  function reiniciarBiscoito() {
    setImg(require("./src/biscoito.png"))
    setTextoFrase("")
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.button} onPress={quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 15, borderColor: "#F48171" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: "#F48171" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273662",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#EAEEFF",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderColor: "#FFB862",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFB862",
  },
})
