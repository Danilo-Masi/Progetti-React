import React from 'react';
//Componenti
import { Row, Col } from './Layout';
import Stock from './Stock';

export default function ListaStock() {
  return (
    <Row height="h-4/6">
        <Col size="w-full" gap="gap-4" margin="mx-5" overflow="overflow-y-scroll" padding="pb-5">
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
          <Stock nome="Apple" simbolo="APPL"/>
        </Col>
    </Row>
  )
}
