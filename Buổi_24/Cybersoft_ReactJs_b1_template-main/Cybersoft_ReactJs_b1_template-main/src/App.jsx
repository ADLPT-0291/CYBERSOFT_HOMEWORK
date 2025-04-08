import { Responsive_navbar } from "./Responsive_navbar";
import { Header } from "./Header";
import { PageContent } from "./PageContent";
import { Footer } from "./Footer";



function App() {
  
  return (
      <>
        {/* Các bạn để các component ở trong đây !! */}
          <div>
            <Responsive_navbar/>
            <Header/>
            <PageContent/>
            <Footer/>
            {/* Bootstrap core JS*/}
            {/* Core theme JS*/}
          </div>

      </>
  )
}

export default App

