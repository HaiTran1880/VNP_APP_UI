import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
   ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions
} from 'react-native';
import image from '../assets/image';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const SEVERS=[
    {
        svname:'Automatic',
        image:image.icon_automatic,
    },
    {
        svname:'New York, NY',
        image:image.icon_united_states,
    },
    {
        svname:'London',
        image:image.icon_london,
    },
    {
        svname:'Moscow',
        image:image.icon_moscow,
    },
    {
        svname:'Sweden',
        image:image.icon_sweden,
    },
    {
        svname:'Melbrourne',
        image:image.icon_australia,
    },
    {
        svname:'New Delhi',
        image:image.icon_india,
    },
    {
        svname:'Singapore',
        image:image.icon_singapore,
    }

]
const ModalSever = (props) => {
    return (
           <Modal 
           transparent={true}
           animationType='slide'
           visible={props.isOpen}
           >
               <View style={{width:'100%', height:'60%', alignItems:'center',backgroundColor:'#FFF', position:'absolute', bottom:0}}>
                <View style={{padding:20}}>
                    <Text>Pick your Sever</Text>
                </View>
                <ScrollView style={{width:'100%', paddingHorizontal:30}}>
                    {SEVERS.map((item,index)=>{
                       return(
                        <TouchableOpacity onPress={()=>props.onClose(index)}
                        style={{marginTop:30, flexDirection:'row', justifyContent:'space-between',  width:'100%'}}>
                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <Image source={item.image}/>
                        <Text style={{marginLeft:20, fontSize:16}}>{item.svname}</Text>
                        </View>
                        {props.isSelect ==index ? <View style={{width:30, height:30,borderRadius:50, backgroundColor:'#0094FC'}}/>:
                        <View style={{width:30, height:30,borderRadius:50,borderWidth:0.5, borderColor:'gray'}}/>}
                    </TouchableOpacity>
                       )
                    })}
                </ScrollView>
               </View>
           </Modal>

    )
}
const VNPView = ({ navigation }) => {
    const [connected, setConnect] = useState(false);
    const [isOpenModal, setIsOpenModal]= useState(false);
    const [selected, setSelected] = useState(0);
    const openModal=()=>{
        setIsOpenModal(true);
    }
    const closeModal=(index)=>{
        setIsOpenModal(false);
        setSelected(index);
    }
    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.contain}>
                {connected ?
                    <View>
                        <View style={styles.statusConnect}>
                            <View style={{ flexDirection: 'row', width: 85, height: 15, alignItems: 'flex-end' }}>
                                <Text style={{ color: '#8B959A', fontSize: 13, marginRight: 5.5 }}>Disonnected</Text>
                                <View style={{ backgroundColor: '#8B959A', width: 8, height: 8, borderRadius: 10 }} />
                            </View>
                        </View>
                        <Image style={{ marginVertical: 30 }}
                            source={image.img_disconnect}
                        />
                        <TouchableOpacity onPress={() => setConnect(false)}
                            style={styles.btnConnect}>
                            <Text style={{ color: '#FFF', fontSize: 12 }}>CONNECT NOW</Text>
                        </TouchableOpacity>
                    </View> :
                    <View>
                        <View style={styles.statusConnect}>
                            <View style={{ flexDirection: 'row', width: 85, height: 15, alignItems: 'flex-end' }}>
                                <Text style={{ color: '#8B959A', fontSize: 13, marginRight: 5.5 }}>Connected</Text>
                                <View style={{ backgroundColor: '#5ED40A', width: 8, height: 8, borderRadius: 10 }} />
                            </View>
                        </View>
                        <Image style={{ marginVertical: 30 }}
                            source={image.img_connected}
                        />
                        <TouchableOpacity onPress={() => setConnect(true)}
                            style={styles.btnDisConnect}>
                            <Text style={{ color: '#000', fontSize: 12 }}>DISCONNECT</Text>
                        </TouchableOpacity>
                    </View>}
            </View>
            <TouchableOpacity onPress={openModal}
                style={styles.bottom}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ marginRight: 20 }}
                        source={SEVERS[selected].image} />
                    <Text style={{ fontSize: 16 }}>{SEVERS[selected].svname}</Text>
                    <Image style={{marginLeft:10}} 
                    source={image.icon_down_more} />
                </View>
            </TouchableOpacity>
            <ModalSever isOpen={isOpenModal} onClose={closeModal} isSelect={selected}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contain: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 1,
        borderTopWidth: 0.5,
        borderTopColor: 'gray'
    },
    btnConnect: {
        borderRadius: 20,
        paddingLeft: 48,
        paddingTop: 12,
        paddingRight: 45,
        paddingBottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0094FC',
        shadowColor: "#000",
    },
    btnDisConnect: {
        borderRadius: 20,
        paddingLeft: 48,
        paddingTop: 12,
        paddingRight: 45,
        paddingBottom: 14,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#5B5B5B'
    },
    statusConnect: {
        borderRadius: 20,
        paddingLeft: 22.5,
        paddingTop: 8,
        paddingRight: 22,
        paddingBottom: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFDFD',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    }
});
export default VNPView;
