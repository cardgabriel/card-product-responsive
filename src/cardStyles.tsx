import { styled } from "baseui";

export const Title = styled("h1", {
  fontSize: "1.2em",
  letterSpacing: "1px",
  color: "#05944F",
  marginBottom:'30px'
});

export const Description = styled("p", {
  letterSpacing: "1px",
  lineHeight: "1.6em",
  textAlign: "justify",
  paddingBottom: '30px',
  marginBottom: "auto",
  
});

export const ButtonsWrapper = styled("div", {
  marginTop: "auto",
  display: 'inline-flex',
  justifyContent: 'center'
});

export const CarouselWrapper= styled ('div',{
  margin: '20px 0px'
})
export const DetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: 'column',
  height: 'calc(100% - 40px)',
  margin: '20px 0px'
});
