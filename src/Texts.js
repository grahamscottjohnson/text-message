import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TextBox from './TextBox';
import PageChanger from './PageChanger';

export default class Texts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toTexts: [],
      fromTexts: [],
      page: this.props.page || 1,
    };

    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

  async componentDidMount() {
    try {
      const [toTexts, fromTexts] = await this.fetchToAndFromTexts();
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

  async fetchToAndFromTexts() {
    //proxy is established in package.json
    return await Promise.all([
      this.fetchTexts('/api/texts/to'),
      this.fetchTexts('/api/texts/from'),
    ]);
  }

  async fetchTexts(url) {
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

  calculateNumberOfPages() {
    return Math.ceil(
      (this.state.toTexts.length + this.state.fromTexts.length) /
        (this.props.textsPerPage || 10)
    );
  }

  render() {
    const page = this.state.page;
    return (
      <Fragment>
        {this.state.errorMessage && (
          <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
        )}
        <TextBox
          toTexts={this.state.toTexts}
          fromTexts={this.state.fromTexts}
          page={page}
          textsPerPage={this.props.textsPerPage || 10}
        />
        <PageChanger
          page={page}
          numberOfPages={this.calculateNumberOfPages()}
          incrementPage={this.incrementPage}
          decrementPage={this.decrementPage}
        />
      </Fragment>
    );
  }
}
