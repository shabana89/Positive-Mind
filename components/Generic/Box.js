import { StyleSheet, View, Text } from "react-native";
import React from "react";
‍import styled from "@emotion/native";
‍import { viewProps } from "../../utils/system.js";
‍import { useTheme } from "emotion-theming";
const StyledBox = styled.View(viewProps);

functionmapShadowToStyle(key, theme) {
  ‍const _obj = theme.shadows[key];
  ‍if (!_obj) return {};
  ‍return _obj;
  ‍}
  export const Box = React.forwardRef((props, ref) => {
  ‍const { shadow, style, children, ...rest } = props;
  ‍const theme = useTheme();
  ‍const _shadow = shadow && mapShadowToStyle(shadow, theme);
  ‍return (
  ‍
    <styledbox ref="{ref}" {...rest}="" style="{[style," {="" ..._shadow="" }]}=""></styledbox>
  ‍
      {children}
  ‍
    
  ‍
    );
  ‍});
  
  Box.displayName = "Box";

// export default function PMBox({ task }) {
//   return (
//     <View>
//       <Text>{task}</Text>
//     </View>
//   );
// }
