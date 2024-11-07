function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                    <span className="text-xl font-semibold">Flowbite</span>
                </div>
                <div className="flex space-x-4">
                    <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
                    <a href="https://youtube.com" className="hover:text-gray-400">YouTube</a>
                    <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
                    <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
                </div>
            </div>
            <hr className="my-4 border-gray-600" />
            <div className="text-center">
                <p className="text-sm">&copy; 2023 Flowbite. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;