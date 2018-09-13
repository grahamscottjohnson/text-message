import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TextBox from './TextBox';
import PageChanger from './PageChanger';

class Texts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toTexts: getTestToTexts(),
      fromTexts: getTestFromTexts(),
      page: this.props.page || 1,
    };

    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

  async componentDidMount() {
    try {
      const [toTexts, fromTexts] = await Promise.all([
        this.fetchToTexts(),
        this.fetchFromTexts(),
      ]);
      this.setState({
        toTexts,
        fromTexts,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        errorMessage: 'Failed to load texts from server',
      });
    }
  }

  async fetchToTexts() {
    return await this.fetchTextsFrom(
      'https://gv-text-api.herokuapp.com/api/texts/to'
    );
  }
  async fetchFromTexts() {
    return await this.fetchTextsFrom(
      'https://gv-text-api.herokuapp.com/api/texts/from'
    );
  }

  async fetchTextsFrom(url) {
    const response = await axios.get(url);
    return response.data.texts;
  }

  incrementPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }
  decrementPage() {
    this.setState({
      page: this.state.page - 1,
    });
  }

  render() {
    const page = this.state.page;
    const textsPerPage = this.props.textsPerPage || 10;
    return (
      <Fragment>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        <TextBox
          toTexts={this.state.toTexts}
          fromTexts={this.state.fromTexts}
          page={page}
          textsPerPage={textsPerPage}
        />
        <PageChanger />
      </Fragment>
    );
  }
}

export default Texts;

function getTestToTexts() {
  return [
    {
      text:
        "You probably haven't heard of them hashtag keytar blog tote bag wire-rimmed glasses.",
      time: 1536337089050,
    },
    {
      text: 'Tumblr noise-rock schlitz Vice tofu xoxo.',
      time: 1536337087050,
    },
    {
      text: 'Selvage craft beer denim vegan.',
      time: 1536337085050,
    },
    {
      text: 'Brooklyn salvia wire-rimmed glasses plaid gastropub occupy.',
      time: 1536337082050,
    },
    {
      text: 'Food truck flannel pickled quinoa.',
      time: 1536337080050,
    },
    {
      text: 'Truffaut chic pour-over cold-pressed.',
      time: 1536337078050,
    },
    {
      text: 'Wes Anderson flannel Vice.',
      time: 1536337077050,
    },
    {
      text: 'Pinterest fixie axe sustainable meggings aesthetic.',
      time: 1536337076050,
    },
    {
      text: 'Truffaut neutra godard williamsburg.',
      time: 1536337075050,
    },
    {
      text: 'Sustainable cold-pressed VHS mumblecore moon disrupt mustache.',
      time: 1536337074050,
    },
    {
      text: 'Pour-over craft beer street art keffiyeh brunch pork belly Etsy.',
      time: 1536337073050,
    },
    {
      text: 'Wayfarers irony.',
      time: 1536337072050,
    },
    {
      text: "San Francisco tilde raw denim 90's tattoo cray meditation.",
      time: 1536337071050,
    },
    {
      text: 'Flexitarian cleanse San Francisco.',
      time: 1536337070050,
    },
    {
      text: 'Fixie ennui freegan taxidermy life cred.',
      time: 1536337059050,
    },
    {
      text: 'Authentic brunch.',
      time: 1536337058050,
    },
    {
      text: 'Etsy Echo Park banjo flexitarian 8-bit.',
      time: 1536337057050,
    },
    {
      text: 'Swag roof party mustache.',
      time: 1536337056050,
    },
    {
      text: 'Umami tumblr keytar beard tattoo biodiesel bicycle.',
      time: 1536337050050,
    },
    {
      text: 'Toms irony vim cold-pressed organic.',
      time: 1536337049050,
    },
  ];
}

function getTestFromTexts() {
  return [
    {
      text: 'Kale chips Blue Bottle.',
      time: 1536338000000,
    },
    {
      text: 'Wayfarers 8-bit.',
      time: 1536337080000,
    },
    {
      text: 'Bahn mi cronut Etsy meggings.',
      time: 1536337070000,
    },
    {
      text: 'Keytar Pinterest.',
      time: 1536337059000,
    },
    {
      text: 'Trust fund stumptown vegan kitsch direct trade next level.',
      time: 1536337058000,
    },
    {
      text: 'Scenester literally authentic cred semiotics next level Brooklyn.',
      time: 1536337057000,
    },
    {
      text: 'Locavore pug denim.',
      time: 1536337056000,
    },
    {
      text: 'Taxidermy seitan seitan cray authentic laserdisc.',
      time: 1536337050000,
    },
    {
      text: 'Deep v life.',
      time: 1536337049000,
    },
    {
      text: 'Cray denim stumptown xoxo cred tattooed tumblr.',
      time: 1536337046000,
    },
    {
      text: 'Plaid Helvetica chia taxidermy actually Echo Park.',
      time: 1536337045000,
    },
    {
      text: 'Cray fashion roof party +1 denim wire-rimmed glasses.',
      time: 1536337044000,
    },
    {
      text: 'Butcher american apparel gluten-free PBR direct trade actually.',
      time: 1536337043000,
    },
    {
      text: 'Toms 8-bit plaid Echo Park butcher godard williamsburg bicycle.',
      time: 1536337042000,
    },
    {
      text: 'Austin food truck Portland chic wolf 8-bit indie.',
      time: 1536337041000,
    },
    {
      text: 'Actually iphone lomo marfa tousled pork belly.',
      time: 1536337040000,
    },
    {
      text: 'Actually quinoa PBR.',
      time: 1536337039000,
    },
    {
      text: 'Ennui food truck disrupt Etsy.',
      time: 1536337038000,
    },
    {
      text: 'Gastropub gluten-free kitsch Etsy cardigan.',
      time: 1536337037000,
    },
    {
      text: 'Craft beer cronut Pinterest life chia.',
      time: 1536337036000,
    },
  ];
}
