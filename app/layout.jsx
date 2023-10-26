// 'use client';
import Feed from "@components/feed";
import Nav from "@components/Nav";
import Profile from "@components/profile";

export const metadata = {
    'title':'ihavequestion',
    'description':'if you have any kind of question drop it here.'
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
       
          <div className='main'>
            <div className='' />
          </div>
  
          <main className='app'>
            <Nav />
            {children}
          </main>
        
      </body>
    </html>
  );
  
  export default RootLayout;
