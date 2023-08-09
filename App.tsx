import React from "react";
import { NativeBaseProvider, Box } from "native-base";

import Navigator from './routes/navigator';

export default function App() {
  return (
    <Navigator />
  );
}