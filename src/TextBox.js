import React, { Component, Fragment } from 'react';
import TextBlob from './TextBlob';

export default class TextBox extends Component {
  mergeToAndFromTexts() {
    const toTexts = this.props.toTexts.map(text =>
      this.addDirectionToText('to', text)
    );
    const fromTexts = this.props.fromTexts.map(text =>
      this.addDirectionToText('from', text)
    );
    return this.combineAndSortTexts(toTexts, fromTexts);
  }
  addDirectionToText(direction, text) {
    return Object.assign({ direction }, text);
  }
  combineAndSortTexts(toTexts, fromTexts) {
    return toTexts.concat(fromTexts).sort(this.sortByTime);
  }
  sortByTime(text1, text2) {
    return text1.time - text2.time;
  }
  limitToPage(texts) {
    return texts.slice(
      (this.props.page - 1) * this.props.textsPerPage,
      (this.props.page - 1) * this.props.textsPerPage + this.props.textsPerPage
    );
  }

  render() {
    const mergedTexts = this.mergeToAndFromTexts();
    const textsOnThisPage = this.limitToPage(mergedTexts);
    return (
      <Fragment>
        {textsOnThisPage.map(text => {
          return <TextBlob key={text.time} text={text} />;
        })}
      </Fragment>
    );
  }
}
