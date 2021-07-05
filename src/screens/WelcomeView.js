import React, {useRef} from 'react';
import {
    Animated, 
    Text, 
    View, 
    StyleSheet, 
    Image, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions,
    useWindowDimensions,
    Platform
 } from 'react-native';
import image from '../assets/image';
const backgrounds=[
    {
        img:image.logo_welcom,
        title:'Secured, forever.',
        discription:
        `Curabitur lobortis id lorem id bibendum. Ut
        id consectetur magna. Quisque volutpat 
        augue enim, pulvinar lobortis.`
    },
    {
        img:image.logo_welcom,
        title:'Secured, forever.',
        discription:
        `Curabitur lobortis id lorem id bibendum. Ut
        id consectetur magna. Quisque volutpat 
        augue enim, pulvinar lobortis.`
    },
    {
        img:image.logo_welcom,
        title:'Secured, forever.',
        discription:
        `Curabitur lobortis id lorem id bibendum. Ut 
        id consectetur magna. Quisque volutpat 
        augue enim, pulvinar lobortis.`
    }
]
const RenderDots=({scrollX})=>{
    const {width}=useWindowDimensions();
    return(
        <View style={{flexDirection:'row'}}>
           {backgrounds.map((item,index)=>{
                   const inputRange =[(index-1) * width,index * width, (index+1) * width];
                   const dotWidth= scrollX.interpolate({
                       inputRange,
                       outputRange:[10,15,10],
                       extrapolate:'clamp',   
                   })
                   const opacity=scrollX.interpolate({
                       inputRange,
                       outputRange:[0.3,1,0.3],
                       extrapolate:'clamp',
                   })
                   return(
                    <Animated.View
                    style={{
                        borderRadius:8,
                        width:dotWidth,
                        height:8,
                        marginLeft:5,
                        opacity:opacity,
                        backgroundColor:'gray',
                    }}
                    />
                   )
           })
           }
        </View>
    )
}
const WelcomView = ({ navigation }) => {
    const scrollX= useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
           <View style={styles.containScrollView}>
           <Animated.ScrollView 
           horizontal={true} 
           showsHorizontalScrollIndicator={false}
           pagingEnabled
           scrollEnabled
           decelerationRate={0}
           scrollEventThrottle={16}
           onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
           snapToAlignment='center'
           >
               {backgrounds.map(item=>
               <View style={{justifyContent:'space-between'}}>
                   <Image style={styles.img}
                   resizeMode='contain'
                   source={item.img}/>
                   <View>
                   <Text style={styles.title}>{item.title}</Text>
                   <Text style={styles.decription}>{item.discription}</Text>
                   </View>
               </View>
               )}
               
            </Animated.ScrollView>
           </View>
           
            <View style={styles.containDots}>
                <RenderDots scrollX={scrollX}/>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('VNP')}
            style={styles.btn}>
                <Text style={styles.textBtn}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },btn:{
        paddingVertical:12,
        paddingHorizontal:50,
        borderRadius:20,
        backgroundColor:'#0094FC',
    },
    containScrollView:{
        width:'80%', 
        height:'70%', 
        justifyContent:'center', 
        alignItems:'center'
    },
    img:{
        width:Dimensions.get('window').width*8/10, 
        height:'80%',
    },
    title:{
        fontSize:20, 
        marginBottom:17, 
        textAlign:'center', 
        fontWeight:'600'
    },
    decription:{
        fontSize:12, 
        color:'gray', 
        textAlign:'center'
    },
    containDots:{
        flexDirection:'row', 
        marginBottom:40, 
        marginTop:27
    },
    textBtn:{
        color:'#FFF', 
        fontSize:12 
    }
});
export default WelcomView;
