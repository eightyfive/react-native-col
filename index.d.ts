import {View} from "react-native";

export const Row: {
    TL: typeof View,
    T: typeof View,
    TR: typeof View,
    L: typeof View,
    C: typeof View,
    R: typeof View,
    BL: typeof View,
    B: typeof View,
    BR: typeof View,
    LRT: typeof View,
    LR: typeof View,
    LRB: typeof View,
    RLT: typeof View,
    RL: typeof View,
    RLB: typeof View
} & typeof View;

export const Col: {
    TL: typeof View,
    T: typeof View,
    TR: typeof View,
    L: typeof View,
    C: typeof View,
    R: typeof View,
    BL: typeof View,
    B: typeof View,
    BR: typeof View,
    TBL: typeof View,
    TB: typeof View,
    TBR: typeof View,
    BTL: typeof View,
    BT: typeof View,
    BTR: typeof View
} & typeof View;

export default Col;
