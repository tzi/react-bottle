import React from 'react';
import { Condition, Then, Else } from './Condition.component';
import renderer from 'react-test-renderer';

it('renders Then component', () => {
  const tree = renderer
    .create(
      <Condition if={true}>
        <Then>
          Then
        </Then>
        <Else if={true}>
          Else if
        </Else>
        <Else>
          Else
        </Else>
      </Condition>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Else component', () => {
  const tree = renderer
    .create(
      <Condition if={false}>
        <Then>
          Then
        </Then>
        <Else if={false}>
          Else if
        </Else>
        <Else>
          Else
        </Else>
      </Condition>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Else if component', () => {
  const tree = renderer
    .create(
      <Condition if={false}>
        <Then>
          Then
        </Then>
        <Else if={true}>
          Else if
        </Else>
        <Else>
          Else
        </Else>
      </Condition>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders via a render prop', () => {
  const tree = renderer
    .create(
      <Condition if={true}>
        <Then render={() => 'Then via render prop'}>
          This text would be override!
        </Then>
      </Condition>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
