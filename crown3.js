import React from 'react';
import {Image, View, Camera} from 'react-native';
const filter1=({
    face:{
        bounds:{
            size:{width:facewidth,height: faceheight},
        },
        LEFT_EYE,
        RIGHT_EYE,
        nOSE_BASE,
    },
})
const transformAngle=(
    angleRad=Math.atan((RIGHT_EYE.y-LEFT_EYE.y)/(RIGHT_EYE.x-LEFT_EYE.x))    
)=>(anglrRad*180)/Math.PI;
<Image>
    source={require("../assets/croen-pic1.png")}
    style={{
        width:filterwidth,
        height:filterheight,
        resizeMode:"contain",
        transform:[{rotate:'${transformingAngle()}deg'}]
    }}
</Image>,
<View style={StyleSheet.middleContainer}>
    <Camera></Camera>

</View>
