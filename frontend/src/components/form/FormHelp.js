import React, { Component, Fragment } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Heading from '../common/Heading';

import {
    storeHelpSection
} from '../../redux/actions/form';

class FormHelp extends Component {
    constructor(props) {
        super(props);

        this.prepareHelpSection = this.prepareHelpSection.bind(this);
        this.iterateWord = this.iterateWord.bind(this);
        this.isRegularRange = this.isRegularRange.bind(this);
        this.isLatinLetter = this.isLatinLetter.bind(this);
        this.isDigit = this.isDigit.bind(this);
        this.isHyphen = this.isHyphen.bind(this);
        this.generateEmailGroup = this.generateEmailGroup.bind(this);
        this.generateLetters = this.generateLetters.bind(this);
        this.generateDigits = this.generateDigits.bind(this);
        this.generateOthers = this.generateOthers.bind(this);
        this.generateRange = this.generateRange.bind(this);
        this.matchSymbol = this.matchSymbol.bind(this);

        this.prepareHelpSection();
    }

    prepareHelpSection() {
        const { helpMapping, rangeMapping } = this.props;
        const helpSection = [];

        let helpData = {};
        for (var group in helpMapping) {
            const expression = helpMapping[group];
            helpData[group] = {};
            if (expression instanceof Object) {
                for (var subgroup in expression) {
                    helpData[group][subgroup] = this.iterateWord(expression[subgroup]);
                }
            } else {
                const word = expression;
                helpData[group] = this.iterateWord(word);
            }
        }

        let groupSummary = [];
        for (var group in helpData) {
            for (var word in helpData[group]) {
                let arr = helpData[group][word];
                if (group === 'E-mail') {
                    if (groupSummary.length === 0) {
                        groupSummary.push(
                            <div key={'ex'}>
                                <p>e.g. username + AT + domain + DOT + suffix</p>
                            </div>
                        );
                    }
                    groupSummary.push(
                        <Fragment key={group+word}>
                            {word.match(/Username/g) &&
                                <p>
                                    <strong>Username:</strong>{this.generateEmailGroup(arr, word, rangeMapping)}
                                </p>
                            }
                            {word.match(/Domain/g) &&
                                <p>
                                    <strong>Domain:</strong>{this.generateEmailGroup(arr, word, rangeMapping)}
                                </p>
                            }
                            {word.match(/Suffix/g) &&
                                <p>
                                    <strong>Suffix:</strong>{this.generateEmailGroup(arr, word, rangeMapping)}
                                </p>
                            }
                        </Fragment>
                    );
                } else {
                    const stored = groupSummary.length;
                    const target = Object.keys(helpData[group]).length - 1;
                    groupSummary.push(
                        <Fragment key={group+word}>
                            {word.match(/Letters/g) &&
                                <p>
                                    <strong>Alphabetic characters:</strong>{this.generateLetters(arr)}
                                </p>
                            }
                            {word.match(/Digits/g) &&
                                <p>
                                    <strong>Digits:</strong>{this.generateDigits(arr)}
                                </p>
                            }
                            {word.match(/Others/g) &&
                                <p>
                                    <strong>Others:</strong>{this.generateOthers(arr)}
                                </p>
                            }
                            {stored === target &&
                                <p>
                                    <strong>Range limit:</strong>{this.generateRange(group, rangeMapping)}
                                </p>
                            }
                        </Fragment>
                    );
                }
            }
            helpSection.push(
                <div key={group}>
                    <strong>{group}</strong>
                    <div >
                        { groupSummary }
                    </div>
                </div>
            );
            groupSummary = [];
        }

        this.props.actions.storeHelpSection(helpSection);
    }

    iterateWord(word) {
        const grouping = {};

        for (var i = 0; i < word.length; i++) {
            const char = word.charAt(i);
            if (!this.isRegularRange(word, i)) {
                if (this.isLatinLetter(char)) {
                    if (grouping.Letters === undefined) {
                        grouping.Letters = [];
                    }
                    if (!grouping.Letters.includes(char)) {
                        grouping.Letters.push(char);
                    }
                } else if (this.isDigit(char)) {
                    if (grouping.Digits === undefined) {
                        grouping.Digits = [];
                    }
                    if (!grouping.Digits.includes(char)) {
                        grouping.Digits.push(char);
                    }
                } else {
                    if (grouping.Others === undefined) {
                        grouping.Others = [];
                    }
                    if (!grouping.Others.includes(char)) {
                        grouping.Others.push(char);
                    }
                }
            }
        }

        return grouping;
    }

    isRegularRange(word, i) {
        const prev = word.charAt(i - 1);
        const current = word.charAt(i);
        const next = word.charAt(i + 1);

        return (prev !== '' && this.isHyphen(current) && next !== '') ? true : false;
    }

    isLatinLetter(str) {
      return str.match(/[a-zA-Z]/i);
    }

    isDigit(str) {
      return str.match(/[0-9]/i);
    }

    isHyphen(str) {
      return str.match(/[\-]/i);
    }

    generateEmailGroup(arr, word, mapping) {
        let summary = '';

        if (arr.hasOwnProperty('Letters')) {
            summary += this.generateLetters(arr.Letters) + ' ';
        }
        if (arr.hasOwnProperty('Digits')) {
            summary += this.generateDigits(arr.Digits) + ' ';
        }
        if (arr.hasOwnProperty('Others')) {
            summary += this.generateOthers(arr.Others) + ' ';
        }
        summary += this.generateRange(word, mapping);

        return summary;
    }

    generateLetters(arr) {
        let summary = '';
        arr.sort();
        arr.reverse();

        if (arr.length === 4) {
            for (var i = 0, j = 1, k = arr.length - 1; j < arr.length; i+=2, j+=2) {
                summary += arr[i] + ' to ' + arr[j] + (j < k ? ', ' : '.');
            }
        } else {
            for (var i = 0, j = arr.length / 2 - 1, k = arr.length / 2; j < arr.length; i+=k, j+=k) {
                summary += arr[i] + ' to ' + arr[j] + (j < k ? ', ' : '.');
            }
        }

        return summary;
    }

    generateDigits(arr) {
        let summary = '';

        if (arr.length === 2) {
            summary += arr[0] + ' to ' + arr[1] + '.';
        } else {
            summary += arr[0] + ' to ' + arr[arr.length - 1] + '.';
        }

        return summary;
    }

    generateOthers(arr) {
        let summary = '';
        arr.sort();
        arr.reverse();

        for (var i = 0, j = arr.length - 1; i < arr.length; i++) {
            summary += this.matchSymbol(arr[i]) + (i < j ? ', ' : '.');
        }

        return summary;
    }

    generateRange(group, mapping) {
        return 'Between ' + mapping[group][0] + ' and ' + mapping[group][1] + '.';
    }

    matchSymbol(char) {
        const { symbolMapping } = this.props;
        const key = '' + char;

        return symbolMapping.hasOwnProperty(key) ? symbolMapping[key] : key;
    }

    render() {
        const { helpSection, level, label } = this.props;

        return (
            <section className={'helpSection'}>
                <header>
                    <Heading hidden={false} level={level} label={label} />
                </header>
                { helpSection }
            </section>
        );
    }
}

const mapStateToProps = state => ({
    helpMapping: state.helpComponent.helpMapping,
    rangeMapping: state.helpComponent.rangeMapping,
    symbolMapping: state.helpComponent.symbolMapping,
    helpSection: state.helpComponent.helpSection,
    level: state.helpComponent.level,
    label: state.helpComponent.label
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        storeHelpSection
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FormHelp));
