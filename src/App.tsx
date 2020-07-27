import React, { useState } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Button, SHAPE } from "baseui/button";
import { Input } from "baseui/input";
import { Modal, ModalButton, SIZE } from "baseui/modal";
import { Grid, Cell } from "baseui/layout-grid";
import {
  Title,
  Description,
  ButtonsWrapper,
  DetailsWrapper,
  CarouselWrapper,
} from "./cardStyles";
import { Check, Delete } from "baseui/icon";
import CarouselResponsive from "./components/CarouselResponsive";

const engine = new Styletron();

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Button onClick={() => setIsOpen(true)}>Open Card Product</Button>

        <Modal
          onClose={closeModal}
          isOpen={isOpen}
          size={SIZE.auto}
          overrides={{
            Dialog: {
              style: {
                maxWidth: "1020px",
                maxHeight: '80vh',
                overflow: 'auto',
                WebkitScrollSnapType: "hidden",
              },
            },
          }}
        >
          <Grid overrides={{
            Grid:{
              style:{
                padding: '45px 0px'
              }
            }
          }}>
            <Cell span={[4, 4, 6]}>
              <CarouselWrapper>
                <CarouselResponsive />
              </CarouselWrapper>
            </Cell>
            <Cell span={[4, 4, 6]}>
              <DetailsWrapper>
                <Title>Nicasia Vineyards Red Blend Malbec</Title>

                <Input
                  endEnhancer=".00"
                  placeholder="Input with an end enhancer"
                />

                <Description>
                  Se perciben en este vino intensos y dulces sabores a ciruelas
                  y moras maduras aportados por el Malbec, junto a sutiles notas
                  especiadas conferidos por el Cabernet Sauvignon y el Petit
                  Verdot. El paso por roble incrementa aún más la complejidad de
                  este vino, otorgando ligeras notas de vanilla y café.
                </Description>

                <ButtonsWrapper>
                  <ModalButton
                    startEnhancer={() => <Check size={24} />}
                    shape={SHAPE.pill}
                  >
                    Aceptar
                  </ModalButton>
                  <ModalButton
                    startEnhancer={() => <Delete size={24} />}
                    shape={SHAPE.pill}
                  >
                    Cancelar
                  </ModalButton>
                </ButtonsWrapper>
              </DetailsWrapper>
            </Cell>
          </Grid>
        </Modal>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
