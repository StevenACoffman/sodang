import React from "react";
import {ThemeProvider} from "styled-components";
import ReactDOM from "react-dom";
const ThemeProvider = styled.ThemeProvider;
import styled from "styled-components";

const mildGrayBorder = "#ECECEC";

const Container = styled.div `
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    background-color: ${ ({
  theme}) => (theme.bg)};
    background-image: ${ ({
    theme}) => {
        if (theme.bgImageUrl) {
            return ` url("${theme.bgImageUrl}")`;
        }
        return "none";
    }};
    background-position: bottom center;
    background-size: cover;
    filter: ${ ({
      theme}) => {
        if (theme.key === "red") {
            return "brightness(0.75)";
        }
        return "initial";
    }}
  }
`;

const ThemeSelector = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SelectLabel = styled.label `
  color: ${ ({
        theme}) => (theme.fg)};
`;

const StyledSelect = styled.select `
  fontSize: inherit;
  border-color: ${mildGrayBorder};

  &:hover {
    border-color: initial;
  }
`;

const GuessForm = (props) => {
    const placeholder = "The Twilight Zone";
    const {guessIsCorrect, handleTyping, value} = props;
    return (
        <Form>
            <StyledLabel htmlFor="guess">Guess t<BBSpan>H</BBSpan>e TV show ope<BBSpan>N</BBSpan>ing
                <BBSpan>Cr</BBSpan>edits that insp<BBSpan>Ir</BBSpan>ed this t<BBSpan>He</BBSpan>me</StyledLabel>
            <StyledInput correct={guessIsCorrect} id="guess" onChange={handleTyping} placeholder={placeholder} type="text" value={value}/>
            <Correct>
                {guessIsCorrect
                  ? "Correct! 🎉"
                  : ""}
            </Correct>
        </Form>
    );
};

const Form = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const StyledLabel = styled.label `
  color: ${ ({
          theme}) => (theme.mainText || theme.fg)};
  display: block;
  font-family: ${ ({
            theme}) => (theme.fontFamily)};
  font-size: ${ ({
              theme}) => (theme.fontSize)};
  font-variant: ${ ({
                theme}) => {
      if (theme.key === "red") {
          return "small-caps";
      }
      return "initial";
  }};
  font-weight: ${ ({
                  theme}) => (theme.fontWeight)};
  @media ( max-height: 200px ) {
    font-size: 16px;
    font-weight: bold;
  }
  text-align: center;
  text-shadow: ${ ({
                    theme}) => {
      if (theme.key === "red") {
          return ` 0 0 10 px $ {
                      theme.fg
                    }
                    `;
      } else if (theme.key === "green") {
          return "2px 2px 0 black";
      }
      return "initial";
  }};
  width: 100%;
  &::first-line {
    text-decoration: ${ ({
                      theme}) => {
        if (theme.key === "red") {
            return "overline";
        }
        return "initial";
    }};
  }
`;

const BBSpan = styled.span `
  color: ${ ({
                        theme}) => (theme.accent || theme.mainText || theme.fg)};
  text-transform: ${ ({
                          theme}) => {
      if (theme.key === "green") {
          return "none";
      }
      return "lowercase";
  }};
`;

const StyledInput = styled.input `
  border-color: ${ ({
                            correct}) => (correct ? "cyan" : " $ {mildGrayBorder}")};
  border-style: solid;
  border-width: 5px;
  box-sizing: border-box;
  font-size: inherit;
  padding: 5px 10px;
  margin: 10px 0;
  width: 75%;
`;

const Correct = styled.p `
  align-self: flex-end;
  color: ${ ({
                              theme}) => (theme.fg)};
  padding-right: 12.5%;
`;

const ImageCredit = styled.p `
  color: ${ ({
                                theme}) => (theme.fg)};
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const FlickrLink = styled.a `
  color: ${ ({
                                  theme}) => (theme.fg)};
  &:visited {
    color: #ECECEC;
  }
`;

class App extends React.Component {
    static defaultProps = {
        answers: {
            default: "",
            red: "stranger things",
            green: "breaking bad"
        },
        themes: {
            default: {
                key: "default",
                bg: "white",
                fg: "black",
                fontSize: "32px"
            },
            red: {
                key: "red",
                bg: "black",
                bgImageCredit: {
                    name: "Arati Kumar-Rao",
                    href: "https://www.flickr.com/photos/aratikumarrao/9238444761/in/faves-134718242@N08/",
                    license: "CC BY-NC-SA 2.0"
                },
                bgImageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195212/redwoods.jpg",
                fg: "#DE0C06",
                fontFamily: "serif",
                fontSize: "48px",
                fontWeight: "bold",
                mainText: "#032134",
                textDecoration: "overline"
            },
            green: {
                key: "green",
                bg: "#8E6F5B",
                bgImageCredit: {
                    name: "Don Barrett",
                    href: "https://www.flickr.com/photos/donbrr/15069308197/in/faves-134718242@N08/",
                    license: "CC BY-NC-ND 2.0"
                },
                bgImageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195212/nevada_desert.jpg",
                fg: "white",
                fontFamily: "sans-serif",
                fontSize: "40px",
                fontWeight: "bold",
                accent: "#427F5A"
            }
        }
    };

    constructor() {
        super();

        this.state = {
            correct: false,
            guess: "",
            theme: "default"
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }

    handleSelect(e) {
        this.setState({correct: false, guess: "", theme: e.target.value});
    }

    handleTyping(e) {
        this.setState({
            correct: this.isGuessCorrect(e.target.value, this.props.answers[this.state.theme]),
            guess: e.target.value
        });
    }

    isGuessCorrect(guess, answer) {
        if (answer === "") {
            return true;
        }
        return guess.toLowerCase() === answer;
    }

    render() {
        const theme = this.props.themes[this.state.theme];
        return (
            <ThemeProvider theme={theme}>
                <Container id="container">
                    <ThemeSelector>
                        <SelectLabel htmlFor="theme">Pick a theme:&nbsp;</SelectLabel>
                        <StyledSelect id="theme" onChange={this.handleSelect} value={this.state.theme}>
                            <option value="green">Mystery green</option>
                            <option value="red">Mystery red</option>
                            <option value="default">Default (no theme)</option>
                        </StyledSelect>
                    </ThemeSelector>
                    <GuessForm guessIsCorrect={this.state.correct} handleTyping={this.handleTyping} value={this.state.guess}/> {(this.state.theme !== "default") && (
                    <ImageCredit>
                                                Photo
                        <span>{theme.bgImageCredit.license}</span>
                                                by&nbsp;
                        <FlickrLink href={theme.bgImageCredit.href} target="_blank">
                            {theme.bgImageCredit.name}
                        </FlickrLink>
                    </ImageCredit>
                                            )}
                </Container>
            </ThemeProvider>
        );
    }
                                  }

ReactDOM.render(
    <App/>, document.getElementById("app"));
