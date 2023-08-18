module.exports = {
	prompt: ({ inquirer, args }) => {
		const questions = [
			{
				type: 'select',
				name: 'category',
				message: 'Which Atomic Design category?',
				choices: ['Atoms', 'Molecules', 'Organisms', 'Templates'],
			},
			{
				type: 'input',
				name: 'component_name',
				message: 'What is the name of component?',
			},
			{
				type: 'confirm',
				name: 'have_style',
				message: 'Does it have a style?',
			},
			{
				type: 'confirm',
				name: 'have_props',
				message: 'Does it have props?',
			},
		];
		return inquirer.prompt(questions).then((answers) => {
			const { category, component_name, have_props } = answers;
			const path = `${category.toLowerCase()}/${component_name}`;
			const abs_path = `src/components/${path}`;
			const type_annotate = have_props ? 'FC<Props>' : 'FC';
			const props = have_props ? '({  })' : '()';
			const tag = args.tag ? args.tag : 'div';
			return { ...answers, path, abs_path, type_annotate, props, tag };
		});
	},
};
