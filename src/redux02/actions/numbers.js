// Action 构造函数
import * as constant from '../configs/actions'

export const incrementNum = () => ({
    type: constant.INCREMENT
});

export const decrementNum = () => ({
    type: constant.DECREMENT
});

export const clearNum = () => ({
    type: constant.CLEAR_NUM
});
