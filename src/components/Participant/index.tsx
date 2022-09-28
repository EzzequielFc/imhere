import { View, Text,TouchableOpacity } from "react-native"; 

import { styles } from "./styles";

export function Participant() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Ezequiel Francisco Campos</Text>

            <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        -
                    </Text>
            </TouchableOpacity>
                
        </View>
    )
}