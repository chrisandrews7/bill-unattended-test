const path = '../../src/components/controls/table/Table.jsx';
jest.dontMock(path);

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('Table', () => {

	const Table = require(path);

  it('should exist', () => {
    const component = TestUtils.renderIntoDocument(
			<Table rows={[{}]} headings={[]} />
		);
		expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

  it('should render headings', () => {
    const component = TestUtils.renderIntoDocument(
			<Table rows={[{}]} headings={['Test Heading']} />
		);
		const element = TestUtils.findRenderedDOMComponentWithTag(component, 'th');
		expect(React.findDOMNode(element).textContent).toEqual('Test Heading');
  });

  it('should render a row', () => {
    const component = TestUtils.renderIntoDocument(
			<Table rows={[{name: 'Lorem'}]} headings={[]} />
		);
		const element = TestUtils.findRenderedDOMComponentWithTag(component, 'td');
		expect(React.findDOMNode(element).textContent).toEqual('Lorem');
  });

  it('should render a row with multiple columns', () => {
    const component = TestUtils.renderIntoDocument(
			<Table rows={[{name: 'Lorem', other: 'Ipsum'}]} headings={[]} />
		);
		const elements = TestUtils.scryRenderedDOMComponentsWithTag(component, 'td');
		expect(React.findDOMNode(elements[0]).textContent).toEqual('Lorem');
    expect(React.findDOMNode(elements[1]).textContent).toEqual('Ipsum');
  });

});
