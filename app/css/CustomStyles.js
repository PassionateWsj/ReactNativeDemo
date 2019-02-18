/**
 * Created by caixiaowei on 17/10/25.
 */
import {
    StyleSheet,
    Platform,
    PixelRatio
} from 'react-native';

import ScreenUtil from '../utils/ScreenUtil';

export const CustomStyles = StyleSheet.create({
    myContainer: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },
    icon: {
        width: ScreenUtil.scaleSize(55),
        height: ScreenUtil.scaleSize(50),
        resizeMode: 'contain',
        ...Platform.select({
            ios: {
                marginTop: ScreenUtil.scaleSize(-10)
            },
            android:{
                marginTop: ScreenUtil.scaleSize(7)
            }
        })
    },
    separatorLine: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#DEDEDE',
    }
});
