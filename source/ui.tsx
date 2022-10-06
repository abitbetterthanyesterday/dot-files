import React from 'react';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import SelectInput from 'ink-select-input';
import {Text, Box, useApp} from 'ink';
import {MenuOption, menuOptions} from './constants';

function App() {
	const {exit} = useApp();

	const handleSelect = ({value}: {value: string}) => {
		switch (value) {
			case MenuOption.exit:
				exit();
				break;
			case MenuOption.zshrc:
				exit();
				break;
			default:
				throw new Error('This menu item has no handler. Verify that the menu selection handler has case for this menu item.');
		}
	};

	return (
		<>
			<Gradient name="morning">
				<BigText text="Dot-Files" font="slick"/>
			</Gradient>
			<Text italic>Another useless tool, brought to you by Alo @ A Bit Better Than Yesterday</Text>
			<Box padding={1}>
				<Text bold>Menu</Text>
			</Box>
			<SelectInput items={menuOptions} onSelect={handleSelect}/>
		</>
	);
}

module.exports = App;
export default App;
