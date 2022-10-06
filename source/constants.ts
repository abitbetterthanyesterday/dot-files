export enum MenuOption {
	zshrc = 'zshrc',
	exit = 'exit'
}

type MenuOptions = Array<{label: string; value: MenuOption}>;

export const menuOptions: MenuOptions = [
	{label: 'Install Zshrc', value: MenuOption.zshrc},
	{label: 'Exit', value: MenuOption.exit}
];
