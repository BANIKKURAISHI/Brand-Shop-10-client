

const Footer = () => {
    return (
          <div className=" text-white mx-auto my-10 rounded-b-lg bg-gradient-to-r from-blue-300  to-green-400 max-w-7xl">
          <footer className="footer  p-10 text-base-content grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          <nav className="flex flex-col">
          <header className="footer-title text-2xl mb-2">Which is given</header> 
          <a className="link link-hover mb-1 text-xl">Electronics</a>
          <a className="link link-hover mb-1 text-xl">Branding</a> 
          <a className="link link-hover mb-1 text-xl">Services</a> 
          <a className="link link-hover mb-1 text-xl">Technology</a> 
          <a className="link link-hover mb-1 text-xl">Export and Import</a>
          </nav> 
          <nav className="flex flex-col lg:ml-20">
          <header className="footer-title mb-2 text-2xl ">Some kinds of Electronics</header> 
          <a className="link link-hover mb-1 text-xl">Television</a>
          <a className="link link-hover mb-1 text-xl">Computer</a> 
          <a className="link link-hover mb-1 text-xl">Laptop</a> 
          <a className="link link-hover mb-1 text-xl">Mobile Phone</a> 
          <a className="link link-hover mb-1 text-xl">Home Applied</a>
          </nav> 
          <nav className="flex flex-col lg:ml-32">
          <header className="footer-title text-2xl items-center">Our Social Platform</header> 
          <div className="flex flex-row text-center my-4">
          <a href="https://twitter.com/" className=" mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a href="https://www.youtube.com/" className=" mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a href="https://www.facebook.com/login" className=" mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
          </nav>
          </footer>



           <footer className="footer footer-center  text-base-content lg:p-4">
           <aside className="flex flex-col md:flex-row">
           <h1>Copyright © 2023 - All right reserved by </h1>
            <img src="https://i.ibb.co/R26cnWP/on-dark-background.jpg" className="h-7 w-7 rounded-full ml-3 mr-3"  /> 
            <h1>AB Industries Ltd</h1>
           </aside>
           </footer>
           </div>
    );
};

export default Footer;