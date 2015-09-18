const path = '../../src/components/controls/panel/Panel.jsx';
jest.dontMock(path);

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('Panel', () => {

	const Panel = require(path);

  it('should exist', () => {
    const component = TestUtils.renderIntoDocument(
			<Panel />
		);
		expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
  });

  it('should display children', () => {
    const component = TestUtils.renderIntoDocument(
			<Panel>Lorem ipsum</Panel>
		);
		const element = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-body');
		expect(React.findDOMNode(element).textContent).toEqual('Lorem ipsum');
  });

  it('should display a header', () => {
    const component = TestUtils.renderIntoDocument(
			<Panel title="Heading text">Lorem ipsum</Panel>
		);
		const element = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-heading');
		expect(React.findDOMNode(element).textContent).toEqual('Heading text');
  });

  it('should display a total in the footer', () => {
    const component = TestUtils.renderIntoDocument(
			<Panel title="Heading text" total={15}>Lorem ipsum</Panel>
		);
		const element = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-footer');
		expect(React.findDOMNode(element).textContent).toContain('15');
  });

  it('should display the formatted total in the footer', () => {
    const component = TestUtils.renderIntoDocument(
			<Panel title="Heading text" total={40}>Lorem ipsum</Panel>
		);
		const element = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-footer');
		expect(React.findDOMNode(element).textContent).toEqual('Total: £40.00');
  });

});
