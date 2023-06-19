import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
      <div className="container items-center flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
            <span className="self-center text-2xl font-semibold">Sport<span id='text-orange'>ner</span></span>
          </a>
        </div>
        <div id='footer-right' className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">

          <div className="space-y-3">
            <h3 id='text-orange' className="tracki uppercase dark:text-gray-50">Company</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 id='text-orange' className="uppercase dark:text-gray-50">Développeurs</h3>
            <ul className="space-y-1">
              <li>
                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/maxime-gillot-100581261/">Maxime Gillot</a>
              </li>
              <li>
                <a target='_blank' rel="noopener noreferrer " href="https://www.linkedin.com/in/julien-dast-36b619261/">Julien Dast</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div id='text-orange' className="uppercase dark:text-gray-50">Réseaux Sociaux</div>
            <div className="flex justify-center space-x-3">
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                <i id='icons' class="fa-brands fa-square-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id='text-orange' className="py-6 text-sm text-center dark:text-gray-400">© 2023 Sportner - Tous droits réservés.</div>
    </footer>
  );
};

export default Footer;