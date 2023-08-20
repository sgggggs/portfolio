import { render } from '@testing-library/react';

describe('Atoms', () => {
	const asserts = (container: HTMLElement) => {
		expect(container).toBeAtoms();
		expect(container).not.toBeMolecules();
		expect(container).not.toBeOrganisms();
		expect(container).not.toBeTemplates();
	};
	test('<p>(role=none)', () => {
		const { container } = render(<p>test</p>);
		asserts(container);
	});
	test('<h1>(role=heading)', () => {
		const { container } = render(<h1>test</h1>);
		asserts(container);
	});
	test('<a>(role=link)', () => {
		const { container } = render(<a href="test">test</a>);
		asserts(container);
	});
	test('<button>(role=button)', () => {
		const { container } = render(<button>test</button>);
		asserts(container);
	});
	test('<input>(role=textbox)', () => {
		const { container } = render(<input type="text" />);
		asserts(container);
	});
	test('<textarea>(role=textbox)', () => {
		const { container } = render(<textarea />);
		asserts(container);
	});
	test('<div>(single role)', () => {
		const { container } = render(
			<div>
				{/* eslint-disable @next/next/no-img-element */}
				<img src="" alt="test" width={10} height={10} />
				<p>test</p>
			</div>,
		);
		asserts(container);
	});

	test('<label>(role=none)', () => {
		const { container } = render(
			<label>
				<input type="checkbox" id="check" />
				test
			</label>,
		);
		const { container: htmlFor } = render(
			<>
				<label htmlFor="check">test</label>
				<input type="checkbox" id="check" />
			</>,
		);
		asserts(container);
		asserts(htmlFor);
	});
	test('text(role=none)', () => {
		const { container } = render(
			<div>
				<p>test</p>
			</div>,
		);
		asserts(container);
	});
});

describe('Molecules', () => {
	const asserts = (container: HTMLElement) => {
		expect(container).not.toBeAtoms();
		expect(container).toBeMolecules();
		expect(container).not.toBeOrganisms();
		expect(container).not.toBeTemplates();
	};
	test('<form>(role=none)', () => {
		const { container } = render(
			<form>
				<h2>test</h2>
				<button>test</button>
			</form>,
		);
		asserts(container);
	});
	test('<div>(role=group)', () => {
		const { container } = render(
			<div role="group">
				<h2>test</h2>
			</div>,
		);
		asserts(container);
	});
	test('<article>(role=artilce)', () => {
		const { container } = render(
			<article>
				<h2>test</h2>
			</article>,
		);
		asserts(container);
	});
	test('<ul>(role=list)', () => {
		const { container } = render(
			<ul>
				<li></li>
			</ul>,
		);
		asserts(container);
	});
	test('<ol>(role=list)', () => {
		const { container } = render(
			<ol>
				<li></li>
			</ol>,
		);
		asserts(container);
	});
	test('<dl>(role=term)', () => {
		const { container } = render(
			<dl>
				<dt></dt>
				<dd></dd>
			</dl>,
		);
		asserts(container);
	});
	test('<ul>(role=tablist)', () => {
		const { container } = render(
			<ul role="tablist">
				<li role="tab"></li>
			</ul>,
		);
		asserts(container);
	});
	test('<div>(role=tabpanel)', () => {
		const { container } = render(
			<div role="tabpanel">
				<h2>test</h2>
			</div>,
		);
		asserts(container);
	});
	test('<table>(role=table)', () => {
		const { container } = render(
			<table>
				<thead>
					<tr />
				</thead>
				<tbody>
					<tr />
				</tbody>
			</table>,
		);
		asserts(container);
	});
	test('<select>(role=combobox)', () => {
		const { container } = render(
			<select>
				<option value={0}>A</option>
				<option value={1}>B</option>
			</select>,
		);
		asserts(container);
	});
	test('<section>(multiple roles)', () => {
		const { container } = render(
			<section>
				<h2 id="test">test</h2>
				<button>test</button>
			</section>,
		);
		asserts(container);
	});
});

describe('Organisms', () => {
	const asserts = (container: HTMLElement) => {
		expect(container).not.toBeAtoms();
		expect(container).not.toBeMolecules();
		expect(container).toBeOrganisms();
		expect(container).not.toBeTemplates();
	};
	test('<aside>(role=complementary)', () => {
		const { container } = render(
			<aside>
				<h2>test</h2>
				<button>test</button>
			</aside>,
		);
		asserts(container);
	});
	test('<form>(role=form)', () => {
		const { container } = render(
			<form aria-labelledby="test">
				<h2 id="test">test</h2>
				<button>test</button>
			</form>,
		);
		asserts(container);
	});
	test('<form>(role=search)', () => {
		const { container } = render(
			<form role="search">
				<h2>test</h2>
				<button>test</button>
			</form>,
		);
		asserts(container);
	});
	test('<nav>(role=navigation)', () => {
		const { container } = render(
			<nav>
				<h2>test</h2>
				<button>test</button>
			</nav>,
		);
		asserts(container);
	});
	test('<section>(role=region)', () => {
		const { container } = render(
			<section aria-labelledby="test">
				<h2 id="test">test</h2>
				<button>test</button>
			</section>,
		);
		asserts(container);
	});
	test('<div>(role=alertdialog)', () => {
		const { container } = render(
			<div
				role="alertdialog"
				aria-labelledby="alertdialogLabel"
				aria-describedby="alertdialogDescription"
			>
				<h2 id="alertdialogLabel">test</h2>
				<p id="alertdialogDescription">test</p>
				<button>test</button>
			</div>,
		);
		asserts(container);
	});
	test('<div>(role=dialog)', () => {
		const { container } = render(
			<div role="dialog" aria-labelledby="dialogLabel">
				<h2 id="dialogLabel">test</h2>
				<button>test</button>
			</div>,
		);
		asserts(container);
	});
});

describe('Organisms or Molecules', () => {
	const asserts = (container: HTMLElement) => {
		expect(container).not.toBeAtoms();
		expect(container).toBeMolecules();
		expect(container).toBeOrganisms();
		expect(container).not.toBeTemplates();
	};
	test('<header>(role=banner)', () => {
		const { container } = render(
			<header>
				<h2>test</h2>
				<button>test</button>
			</header>,
		);
		asserts(container);
	});
	test('<footer>(role=contentinfo)', () => {
		const { container } = render(
			<footer>
				<h2>test</h2>
				<button>test</button>
			</footer>,
		);
		asserts(container);
	});
});

describe('Template', () => {
	test('<main>(role=main)', () => {
		const { container } = render(
			<main>
				<h2>test</h2>
				<button>test</button>
			</main>,
		);
		expect(container).not.toBeAtoms();
		expect(container).not.toBeMolecules();
		expect(container).not.toBeOrganisms();
		expect(container).toBeTemplates();
	});
});
