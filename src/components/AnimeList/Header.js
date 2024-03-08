const Header = ({ title, linkHref, linkTitle }) => {
	return (
		<div>
			<h1 className="text-2xl font-bold">{title}</h1>
			<Link
				href={linkHref}
				className="text-xl md:text-xl text-md underline hover:text-indigo-500 transition-all"
			>
				{linkTitle}
			</Link>
		</div>
	);
};

export default Header;
