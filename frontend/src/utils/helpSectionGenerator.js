import Fragment from 'react';

import { storeHelpSection } from '../redux/actions/form';

export function prepareHelpSection(props) {
    const { helpMapping, rangeMapping, symbolMapping } = props;
    const helpSection = [];

    let helpData = {};
    for (let group in helpMapping) {
        const expression = helpMapping[group];
        helpData[group] = {};
        if (expression instanceof Object) {
            for (let subgroup in expression) {
                helpData[group][subgroup] = iterateWord(expression[subgroup]);
            }
        } else {
            const word = expression;
            helpData[group] = iterateWord(word);
        }
    }

    let groupSummary = [];
    let counter = 0;
    for (let group in helpData) {
        for (let word in helpData[group]) {
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
                    <>
                        {word.match(/Username/g) &&
                            <p key={group+word+counter}>
                                <strong>Username:</strong>{generateEmailGroup(arr, word, rangeMapping, symbolMapping)}
                            </p>
                        }
                        {word.match(/Domain/g) &&
                            <p key={group+word+counter}>
                                <strong>Domain:</strong>{generateEmailGroup(arr, word, rangeMapping, symbolMapping)}
                            </p>
                        }
                        {word.match(/Suffix/g) &&
                            <p key={group+word+counter}>
                                <strong>Suffix:</strong>{generateEmailGroup(arr, word, rangeMapping, symbolMapping)}
                            </p>
                        }
                    </>
                );
                counter++;
            } else {
                const stored = groupSummary.length;
                const final = Object.keys(helpData[group]).length;
                groupSummary.push(
                    <>
                        {word.match(/Letters/g) &&
                            <p key={group+word+counter}>
                                <strong>Alphabetic characters:</strong>{generateLetters(arr)}
                            </p>
                        }
                        {word.match(/Digits/g) &&
                            <p key={group+word+counter}>
                                <strong>Digits:</strong>{generateDigits(arr)}
                            </p>
                        }
                        {word.match(/Others/g) &&
                            <p key={group+word+counter}>
                                <strong>Others:</strong>{generateOthers(arr, symbolMapping)}
                            </p>
                        }
                        {stored === final &&
                            <p key={group+word+counter}>
                                <strong>Range limit:</strong>{generateRange(group, rangeMapping)}
                            </p>
                        }
                    </>
                );
                counter++;
            }
        }
        helpSection.push(
            <div key={group} className='helpRow'>
                <strong className='rowLabel'>{group}</strong>
                <div className='rowContent'>
                    { groupSummary }
                </div>
            </div>
        );
        groupSummary = [];
    }

    storeHelpSection(helpSection);
}

function iterateWord(word) {
    const grouping = {};

    for (let i = 0; i < word.length; i++) {
        const char = word.charAt(i);
        if (!isRegularRange(word, i)) {
            if (isLatinLetter(char)) {
                if (grouping.Letters === undefined) {
                    grouping.Letters = [];
                }
                if (!grouping.Letters.includes(char)) {
                    grouping.Letters.push(char);
                }
            } else if (isDigit(char)) {
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

function isRegularRange(word, i) {
    const prev = word.charAt(i - 1);
    const current = word.charAt(i);
    const next = word.charAt(i + 1);

    return (prev !== '' && isHyphen(current) && next !== '') ? true : false;
}

function isLatinLetter(str) {
  return str.match(/[a-zA-Z]/i);
}

function isDigit(str) {
  return str.match(/[0-9]/i);
}

function isHyphen(str) {
  return str.match(/[-]/i);
}

function generateEmailGroup(arr, word, rangeMapping, symbolMapping) {
    let summary = '';

    if (arr.hasOwnProperty('Letters')) {
        summary += generateLetters(arr.Letters) + ' ';
    }
    if (arr.hasOwnProperty('Digits')) {
        summary += generateDigits(arr.Digits) + ' ';
    }
    if (arr.hasOwnProperty('Others')) {
        summary += generateOthers(arr.Others, symbolMapping) + ' ';
    }
    summary += generateRange(word, rangeMapping);

    return summary;
}

function generateLetters(arr) {
    let summary = '';
    arr.sort();
    arr.reverse();

    if (arr.length === 4) {
        for (let i = 0, j = 1, k = arr.length - 1; j < arr.length; i+=2, j+=2) {
            summary += arr[i] + ' to ' + arr[j] + (j < k ? ', ' : '.');
        }
    } else {
        for (let i = 0, j = arr.length / 2 - 1, k = arr.length / 2; j < arr.length; i+=k, j+=k) {
            summary += arr[i] + ' to ' + arr[j] + (j < k ? ', ' : '.');
        }
    }

    return summary;
}

function generateDigits(arr) {
    let summary = '';

    if (arr.length === 2) {
        summary += arr[0] + ' to ' + arr[1] + '.';
    } else {
        summary += arr[0] + ' to ' + arr[arr.length - 1] + '.';
    }

    return summary;
}

function generateOthers(arr, symbolMapping) {
    let summary = '';
    arr.sort();
    arr.reverse();

    for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
        summary += matchSymbol(arr[i], symbolMapping) + (i < j ? ', ' : '.');
    }

    return summary;
}

function generateRange(group, rangeMapping) {
    return 'Between ' + rangeMapping[group][0] + ' and ' + rangeMapping[group][1] + '.';
}

function matchSymbol(char, symbolMapping) {
    const key = '' + char;

    return symbolMapping.hasOwnProperty(key) ? symbolMapping[key] : key;
}
